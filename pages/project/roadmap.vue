<template>
  <!-- ROADMAP BLOCK -->

  <div>
    <div class="m-b-15 add-heading">
      <div class="medium-heading">
        Roadmap
      </div>
      <div v-if="isProjectOwner">
        <button class="btn btn-black" @click="formRoadmapShow = !formRoadmapShow">
          <span>Add roadmap</span>
        </button>
      </div>
    </div>

    <transition
        enter-active-class="animated fadeInRight"
        leave-active-class="animated fadeOutRight"
    >
      <div class="add-roadmap-form" v-if="formRoadmapShow">

          <form class="presale-form"
                @submit.prevent="addRoadmapItem"
                @keydown="form.onKeydown($event)">
            <div class="row">

              <div class="col-6">
                <div class="input-block">
                  <label for="quarter" class="input-label">
                    Quarter*
                  </label>
                  <div class="form-input">
                    <v-select :options="getQuarterOptions()"
                              v-model="form.quarter"
                              placeholder="Quarter"
                              :class="{ 'is-invalid': form.errors.has('item_date') }"></v-select>
                  </div>
                </div>
              </div>

              <div class="col-6">
                <div class="input-block">
                  <label for="year" class="input-label">
                    Year*
                  </label>
                  <div class="form-input">
                    <v-select 
                      placeholder="Year"
                      v-model="form.year"
                      :class="{ 'is-invalid': form.errors.has('item_date') }"
                      :options="getYearsOptions()"
                    >
                        
                    </v-select>
                  </div>
                </div>
              </div>

              <div class="col-12">
                <div class="input-block">
                  <label for="year" class="input-label">
                    Content*
                  </label>
                  <div>
                    <textarea rows="5"
                              v-model="form.description"
                              class="roadmap-textarea"
                              :class="{ 'is-invalid': form.errors.has('description') }"
                              placeholder="Roadmap content.."></textarea>
                    <has-error :form="form" field="description"/>
                  </div>
                </div>
              </div>

              <div class="col-6">
                <div>
                  <button class="bordered-btn full-width">Cancel</button>
                </div>
              </div>

              <div class="col-6">
                <div>
                  <button class="btn btn-black">Save</button>
                </div>
              </div>

            </div>
          </form>

      </div>  <!-- ADD ROADMAP FORM -->
    </transition>

    <div class="roadmap">

      <roadmap-shard
          v-for="item in road_map"
          :key="item.id"
          :editor="isProjectOwner"
          :project_name="project.name"
          :item="item"/>

    </div>  <!-- ROADMAP -->

  </div>

  <!-- ROADMAP BLOCK -->
</template>

<script>
  import axios from 'axios';
  import Form from 'vform'
  import { mapGetters } from 'vuex'
  import swal from 'sweetalert2'

  function getRoadmap(project_name) {
    return axios.get('/project_name/' + project_name + '/road_map')
  }

  export default {
    name: 'roadmap',
    data() {
      return {
        formRoadmapShow: false,
        form: new Form({
          quarter: null,
          year: null,
          description: null,
          item_date: null,
        })
      }
    },

    created() {
      if(process.client){
        console.log('client');
      }
    },

    computed: {
      ...mapGetters({
        user: 'auth/user',
        project: 'pd/project',
        road_map: 'pd/road_map'
      }),
      isProjectOwner() {
        return this.user && this.project && (this.project.user_id === this.user.id)
      }
    },

    fetch({ store, params }) {
      return store.dispatch('pd/fetchProjectRoadMap', params.project_name)
    },

    methods: {
      addRoadmapItem() {
        let month = this.form.quarter.value * 3 - 2;
        this.form.item_date = month + '-' + this.form.year.value
        this.areYouSure(this.addRequest)
      },

      addRequest() {
        return this.form.post('/project_name/'+ this.project.name +'/road_map')
      },

      areYouSure(requestPromise) {
        swal({
          title: 'Are you sure?',
          type: 'question',
          showCancelButton: true,
          showLoaderOnConfirm: true,
          preConfirm: () => {
            return requestPromise()
          },
          allowOutsideClick: false,
        })
          .then((response) => {
            swal({
              title: `Saved`,
              type: 'success'
            })
            this.formRoadmapShow = false
            this.resetForm()
            // TODO переделать на обновление иходя из ответа
            this.$store.dispatch('pd/fetchProjectRoadMap', this.project.name)
          })
          .catch(error => {
            console.log(error)
            swal({
              title: `Error`,
              type: 'error'
            })
          })
      },

      getQuarterOptions() {
        return [
          { label: 'Q1', value: 1 },
          { label: 'Q2', value: 2 },
          { label: 'Q3', value: 3 },
          { label: 'Q4', value: 4 },
        ]
      },

      getYearsOptions() {
        let opt = []
        let from = 2012
        let to = 2028
        for (let i = from; i < to; i++){
          opt.push({ label: i.toString(), value: i })
        }
        return opt
      },

      resetForm() {
        this.form = new Form({
          quarter: null,
          year: null,
          description: null,
          item_date: null,
        })
      }
    }
  }
</script>
