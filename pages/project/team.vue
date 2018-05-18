<template>
    <!-- TEAM BLOCK-->

    <div>
        <div class="m-b-15 add-heading">
            <div class="medium-heading">
                Team
            </div>
            <div>
                <button class="btn btn-black" v-if="isOwner" @click="openForm">
                    <span>Add member</span>
                </button>
            </div>
        </div>

        <div>

            <transition
                    enter-active-class="animated rollIn"
                    leave-active-class="animated rollOut"
            >

                <div class="form-toggle" v-if="isOwner" v-show="formOpen">
                    <div class="white-box-15">

                        <form class="presale-form add-member-form"
                              @submit.prevent="saveForm"
                              @keydown="form.onKeydown($event)">

                            <div class="row">

                                <div class="col-6">
                                    <div class="input-block">
                                        <label for="username-first" class="input-label">First name</label>
                                        <input type="text" id="username-first" placeholder="Member first name"
                                               v-model="form.first_name">
                                        <has-error :form="form" field="first_name"/>
                                    </div>
                                </div>

                                <div class="col-6">
                                    <div class="input-block">
                                        <label for="username-last" class="input-label">Last name</label>
                                        <input type="text" id="username-last" placeholder="Member last name"
                                               v-model="form.last_name">
                                        <has-error :form="form" field="last_name"/>
                                    </div>
                                </div>

                                <div class="col-6">
                                    <div class="input-block">
                                        <label for="position" class="input-label">Position</label>
                                        <input type="text" id="position" placeholder="Member position"
                                               v-model="form.position">
                                        <has-error :form="form" field="position"/>
                                    </div>
                                </div>

                                <div class="col-6">
                                    <div class="input-block">
                                        <label for="profile" class="input-label">LinkedIn Profile</label>
                                        <input type="text" id="profile" placeholder="Member LinkedIn Profile"
                                               v-model="form.linkedin_url">
                                        <has-error :form="form" field="linkedin_url"/>
                                    </div>
                                </div>

                                <div class="col-12">
                                    <div class="input-block">
                                        <label class="input-label">Biography</label>
                                        <div class="transparent-textarea-holder">
                                            <textarea class="transparent-textarea full-width"
                                                      placeholder="Member short biography.."
                                                      v-model="form.biography"></textarea>
                                        </div>   <!-- TRANSPARENT TEXTAREA HOLDER -->
                                        <has-error :form="form" field="biography"/>
                                    </div>
                                </div>

                                <div class="col-12">
                                    <div class="buttons">
                                        <div>
                                            <button class="bordered-btn full-width" type="button"
                                                    @click="openForm">
                                                <span>Cancel</span>
                                            </button>
                                        </div>

                                        <div>
                                            <button class="btn btn-black full-width">
                                                <span>Add</span>
                                            </button>
                                        </div>
                                    </div>  <!-- BUTTONS -->
                                </div>

                            </div>  <!-- ROW -->

                        </form> <!-- PRESALE FORM ADD MEMBER FORM-->

                    </div>   <!-- WHITE BOX -->
                </div>  <!-- FORM TOGGLE -->
            </transition>

            <div v-for="member in membersList" :key="member.id">
                <team-member-shard
                        :member="member"
                        :isOwner="isOwner"
                        v-on:deleteMemeber="deleteMemeber($event)" />
            </div>

        </div>

    </div>

    <!-- TEAM BLOCK -->
</template>

<script>
  import Form from 'vform'
  import axios from 'axios'

  export default {
    name: 'team',

    head: {
      title: 'Project team'
    },

    data: () => ({
      step: 1,
      formOpen: false,
      form: new Form({
        first_name: null,
        last_name: null,
        position: null,
        linkedin_url: null,
        biography: null
      })
    }),

    asyncData ({ route }) {
      return axios.get('project/' + route.params.project_name + '/team')
        .then((response) => {
          if (response.data.success) {
            return {
              projectId: response.data.data.project_id,
              isOwner: response.data.data.is_owner,
              membersList: response.data.data.list
            }
          }
          return {
            projectId: null,
            isOwner: false,
            membersList: []
          }
        })
    },

    methods: {
      openForm () {
        this.formOpen = !this.formOpen
      },

      getList () {
        axios.get('project/' + this.$route.params.project_name + '/team')
          .then((response) => {
            if (!response.data.success) {
              if (response.data.message) {
                this.$toast.error(response.data.message)
              } else {
                this.$toast.error('Error')
              }
              return
            }

            this.projectId = response.data.data.project_id
            this.isOwner = response.data.data.is_owner
            this.membersList = response.data.data.list
          })
      },

      saveForm () {
        this.form.post('project/' + this.projectId + '/team/add')
          .then((response) => {
            if (!response.data.success) {
              if (response.data.message) {
                this.$toast.error(response.data.message)
              } else {
                this.$toast.error('Error')
              }
              return
            }

            this.getList()
            this.form.reset()
            this.openForm()
          })
      },

      deleteMemeber (id) {
        this.membersList = this.membersList.filter(member => member.id !== id)
      }
    }

  }
</script>

<style scoped>

</style>