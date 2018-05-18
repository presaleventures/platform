<template>

  <div>

    <div class="team-member-shard">
  
      <div class="avatar">
        <div class="rounded-avatar"
             :style="'background: url(' + (member.unapproved_data ? member.unapproved_data.avatar : member.avatar) + ');'">
          <div class="edit-avatar" v-if="isOwner">
            <span @click="toggleUploadAvatar()">Edit</span>
          </div>  <!-- EDIT AVATAR -->
        </div>
      </div>  <!-- AVATAR -->
      <div class="shard-content">
        <div class="flex-row-start-center-nowrap heading-18 m-b-5">
            <span v-if="member.unapproved_data">
                 {{member.unapproved_data.first_name}} {{member.unapproved_data.last_name}}
            </span>
            <span v-else>
                {{member.first_name}} {{member.last_name}}
            </span>

          <a class="username-linkedin" target="_blank"
             :href="member.unapproved_data ? member.unapproved_data.linkedin_url : member.linkedin_url">
            <i class="fa fa-linkedin-square"></i>
          </a>

          <span class="text-orange user-pending-string" v-if="!member.approved || member.unapproved_data">Pending</span>
          <!--TODO: Переверстать -->
          <span class="text-orange user-pending-string" v-if="member.delete_request"
                style="color: red;">Deleted</span>
          <!--TODO: Переверстать -->

        </div>
        <div class="gray-subheading m-b-10">
            <span v-if="member.unapproved_data">
                {{member.unapproved_data.position}}
            </span>
            <span v-else>
                {{member.position}}
            </span>
        </div>
        <div class="text-content">
            <span v-if="member.unapproved_data">
                {{member.unapproved_data.biography}}
            </span>
            <span v-else>
                {{member.biography}}
            </span>
        </div>
      </div>  <!-- SHARD CONTENT -->

      <div class="edit-buttons" v-if="isOwner">
        <button v-if="!member.delete_request" @click="openForm">
          <i class="fa fa-pencil"></i>
        </button>

        <button @click="deleteMemeber">
          <i v-if="!member.unapproved_data && !member.delete_request" class="fa fa-close"></i>
          <i v-if="member.unapproved_data || member.delete_request" class="fa fa-undo"></i>
        </button>
      </div>  <!-- EDIT BUTTONS -->

    </div>

    <div class="team-member-form">
      <transition 
        enter-active-class="animated fadeInDown"
        leave-active-class="animated fadeOutUp"
      >
      
        <div class="form-toggle" v-show="formOpen">
          <div class="white-box-15">

            <form class="presale-form add-member-form"
                  @submit.prevent="saveForm"
                  @keydown="form.onKeydown($event)"
                  v-if="isOwner">

              <div class="row">

                <div class="col-12" style="display: none;">
                  <div class="avatar-block">
                    <div class="create-avatar">
                      <div class="avatar" :style="'background: url(' + member.member_image + ');'">
                        <div class="inner-change-avatar">
                          <span @click="toggleUploadAvatar()">Change <br> photo</span>
                        </div>
                      </div>
                    </div> <!-- CREATE AVATAR -->
                  </div>  <!-- AVATAR BLOCK -->
                </div>

                <div class="col-6">
                  <div class="input-block">
                    <label for="username-first" class="input-label">First name</label>
                    <input type="text" id="username-first" placeholder="Member first name" v-model="form.first_name">
                    <has-error :form="form" field="first_name"/>
                  </div>
                </div>

                <div class="col-6">
                  <div class="input-block">
                    <label for="username-last" class="input-label">Last name</label> 
                    <input type="text" id="username-last" placeholder="Member last name" v-model="form.last_name">
                    <has-error :form="form" field="last_name"/>
                  </div>
                </div>

                <div class="col-6">
                  <div class="input-block">
                    <label for="position" class="input-label">Position</label>
                    <input type="text" id="position" placeholder="Member position" v-model="form.position">
                    <has-error :form="form" field="position"/>
                  </div>
                </div>

                <div class="col-6">
                  <div class="input-block">
                    <label for="profile" class="input-label">LinkedIn Profile</label>
                    <input type="text" id="profile" placeholder="Member LinkedIn Profile" v-model="form.linkedin_url">
                    <has-error :form="form" field="linkedin_url"/>
                  </div>
                </div>
                
                <div class="col-12">
                  <div class="input-block">
                    <label class="input-label">Biography</label>
                    <div class="transparent-textarea-holder">
                      <textarea class="transparent-textarea full-width" placeholder="Member short biography.."
                                v-model="form.biography"></textarea>
                      <has-error :form="form" field="biography"/>
                    </div>  <!-- TRANSPARENT TEXTAREA HOLDER -->
                  </div>
                </div>

                <div class="col-12">
                  <div class="buttons">
                    <div>
                      <button class="bordered-btn full-width" type="button" @click="openForm">
                        <span>Cancel</span>
                      </button>
                    </div>

                    <div>
                      <button class="btn btn-black full-width">
                        <span>Save</span>
                      </button>
                    </div>
                  </div>  <!-- BUTTONS -->
                </div>

              </div>  <!-- ROW -->
        
            </form> <!-- PRESALE FORM ADD MEMBER FORM-->

          </div>   <!-- WHITE BOX -->
        </div>  <!-- FORM TOGGLE -->
      </transition>
    </div>  <!-- TEAM MEMBER FORM -->

    <!-- Image cropper -->
    <my-upload field="avatar"
               @crop-success="cropSuccess"
               :withCredentials="true"
               v-model="uploadAvatarModal"
               langType="en"
               :noSquare="true"
               :width="150"
               :height="150"></my-upload>
    <!-- /Image cropper -->

  </div>

</template>

<script>
  import Form from 'vform'
  import axios from 'axios'
  import swal from 'sweetalert2'

  export default {
    name: 'team-member-shard',

    props: ['member', 'isOwner'],

    data: () => ({
      formOpen: false,
      uploadAvatarModal: false,
      uploadAvatarImg: null,
      form: new Form({
        first_name: null,
        last_name: null,
        position: null,
        linkedin_url: null,
        biography: null
      })
    }),

    created () {
      this.form.first_name = this.member.first_name
      this.form.last_name = this.member.last_name
      this.form.position = this.member.position
      this.form.linkedin_url = this.member.linkedin_url
      this.form.biography = this.member.biography
    },

    methods: {
      openForm () {
        this.formOpen = !this.formOpen
      },

      saveForm () {
        this.form.post('project/' + this.member.project_id + '/team/' + this.member.id + '/edit')
          .then((response) => {
            if (!response.data.success) {
              if (response.data.message) {
                this.$toast.error(response.data.message)
              } else {
                this.$toast.error('Error')
              }
              return
            }

            this.member.first_name = this.form.first_name
            this.member.last_name = this.form.last_name
            this.member.position = this.form.position
            this.member.linkedin_url = this.form.linkedin_url
            this.member.biography = this.form.biography
            this.member.unapproved_data = response.data.data.unapproved_data
            this.openForm()
          })
      },

      deleteMemeber () {
        swal({
          title: 'Are you sure?',
          text: 'Are you sure?',
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#DD6B55',
          confirmButtonText: 'Yes, I am sure!',
          cancelButtonText: 'No, cancel it!'
        }).then((response) => {
          if (!response.value) {
            return
          }

          let memberId = this.member.id
          if (this.member.unapproved_data) {
            memberId = this.member.unapproved_data.id
          }
          axios.post('project/' + this.member.project_id + '/team/' + memberId + '/delete')
            .then((response) => {
              if (!response.data.success) {
                if (response.data.message) {
                  this.$toast.error(response.data.message)
                } else {
                  this.$toast.error('Error')
                }
                return
              }

              if (response.data.deleted) {
                if (response.data.data) {
                  this.member = response.data.data
                } else {
                  this.$emit('deleteMemeber', this.member.id)
                }
              } else {
                this.member.delete_request = response.data.data.delete_request
              }

              this.form.first_name =
                this.member.unapproved_data ? this.member.unapproved_data.first_name : this.member.first_name
              this.form.last_name =
                this.member.unapproved_data ? this.member.unapproved_data.last_name : this.member.last_name
              this.form.position =
                this.member.unapproved_data ? this.member.unapproved_data.position : this.member.position
              this.form.linkedin_url =
                this.member.unapproved_data ? this.member.unapproved_data.linkedin_url : this.member.linkedin_url
              this.form.biography =
                this.member.unapproved_data ? this.member.unapproved_data.biography : this.member.biography
            })
        })
      },

      toggleUploadAvatar () {
        this.uploadAvatarModal = !this.uploadAvatarModal
      },

      cropSuccess (imgDataUrl, field) {
        this.uploadAvatarImg = imgDataUrl
        axios.post('project/' + this.member.project_id + '/team/' + this.member.id + '/avatar', {
          avatar: this.uploadAvatarImg
        })
          .then((response) => {
            this.member.avatar = response.data.data.avatar
            this.member.unapproved_data = response.data.data.unapproved_data
          })
          .catch(error => {
            if (error.response.status === 422) {
              let error_list = error.response.data.errors
              for (let key in error_list) {
                this.$toast.error(error_list[key][0])
              }
            } else {
              if (typeof error.response.data.message !== "undefined" && error.response.data.message) {
                this.$toast.error(error.response.data.message)
              } else {
                this.$toast.error('Error code: ' + error.response.status)
              }
            }
          })
      }
    }
  }

</script>
