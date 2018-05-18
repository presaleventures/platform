<template>

  <div class="roadmap-shard">
    <!-- PENDING -->
    <div class="text-orange pending-block" v-if="last_version.delete_request && editor">Deleting</div>
    <div class="text-orange pending-block" v-else-if="!last_version.approved && editor">Pending</div>
    <!-- PENDING -->
    <div class="shard-date">
      <span class="quarter">Q{{ $moment(last_version.item_date).quarter() }}</span>
      <span class="date">{{ last_version.item_date | moment('YYYY') }}</span>
    </div>  <!-- SHARD DATE -->
    <div class="shard-content white-box-material">
      <div class="buttons" v-if="editor">
        <button @click="showForm = true" v-if="!showForm && !last_version.delete_request">
          <i class="fa fa-pencil"></i>
        </button>
        <button @click="showForm = false" v-if="showForm">
          <i class="fa fa-arrow-left"></i>
        </button>
        <button @click="saveForm" v-if="showForm">
          <i class="fa fa-check"></i>
        </button>
        <button @click="deleteItem" v-if="!showForm && !last_version.approved">
          <i class="fa fa-undo"></i>
        </button>
        <button @click="deleteItem" v-if="!showForm && last_version.approved && !last_version.delete_request">
          <i class="fa fa-close"></i>
        </button>
        <button @click="deleteItem" v-if="!showForm && last_version.approved && last_version.delete_request">
          <i class="fa fa-undo"></i>
        </button>
      </div>
      <transition
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
          mode="out-in"
      >
        <div v-if="showForm && editor" key="form">
          <form>
            <div class="edit-content">
              <textarea v-model="form.description"
                        class="transparent-textarea roadmap-textarea full-width"
                        :class="{ 'is-invalid': form.errors.has('description') }"
                        placeholder="Description.."></textarea>
              <has-error :form="form" field="description"/>
            </div>  <!-- EDIT CONTENT -->
          </form>
        </div>
        <div v-else key="content">
          {{ last_version.description }}
        </div>
      </transition>
    </div>  <!-- SHARD CONTENT -->
    <!-- DASHLINE -->
    <div class="dash"></div>
    <!-- DASHLINE -->
  </div>  <!-- ROADMAP SHARD -->

</template>
<script>
  import Form from 'vform'
  import axios from 'axios'
  import swal from 'sweetalert2'

  export default {
    name: 'roadmap-shard',
    data: () => ({
      showForm: false,
      description: null,
      form: new Form({
        description: null,
        item_date: null,
      })
    }),
    props: ['item', 'editor', 'project_name'],
    computed: {
      last_version() {
        if (this.item.unapproved_data) {
          return this.item.unapproved_data
        }
        return this.item
      }
    },
    watch: {
      showForm(val)
      {
        if (val) this.resetForm()
      }
    },
    methods: {

      saveForm() {
        this.areYouSure(this.saveFormRequest)
      },

      saveFormRequest() {
        return this.form.post('/project_name/' + this.project_name + '/road_map')
      },

      deleteItem() {
        this.areYouSure(this.deleteItemRequest)
      },

      deleteItemRequest() {
        return axios.post('/project_name/' + this.project_name + '/road_map/' + this.last_version.id + '/delete')
      },

      resetForm() {
        this.form = new Form({
          description: this.last_version.description,
          item_date: this.$moment(this.last_version.item_date).format('M-YYYY'),
        })
      },

      areYouSure(requestPromise) {
        swal({
          title: 'Are you sure?',
          type: 'question',
          showCancelButton: true,
          showLoaderOnConfirm: true,
          allowOutsideClick: false,
          preConfirm: () => {
            return requestPromise()
          },
        })
          .then((response) => {
            swal({
              title: `Saved`,
              type: 'success'
            })
            this.showForm = false
            // TODO переделать на обновление иходя из ответа
            this.$store.dispatch('pd/fetchProjectRoadMap', this.project_name)
          })
          .catch(error => {
            console.log(error)
            swal({
              title: `Error`,
              type: 'error'
            })
          })
      }
    },
  }
</script>