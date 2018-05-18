<template>

  <div>
    <div class="left">
      <div class="left-content" style="overflow: hidden;">

        <div class="normalize">
          <transition
              :enter-active-class="animations.enter"
              :leave-active-class="animations.leave"

              mode="out-in"
          >

            <div v-if="showEdit" class="edit-profile" key="edit">
              <div class="m-b-30 add-heading add-heading-reverse">
                <div class="medium-heading">
                  Edit profile
                </div>
                <div>
                  <a class="link icon-left-link heading-16" @click="showEdit = false">
                    <i class="fa fa-chevron-left" style="margin-right: 5px;"></i>
                    <span>BACK</span>
                  </a>
                </div>
              </div>
              <div class="edit-profile-block">
                <div class="main-info m-b-30">
                  <div class="avatar" :style="'background: url('+avatar+');'">
                    <div class="change-avatar">
                      <div class="inner-change-avatar">
                        <span @click="toggleUploadAvatar()">Change <br> photo</span>
                      </div>
                    </div>  <!-- CHANGE AVATAR -->
                  </div>

                  <div class="user-info">
                    <div class="username m-b-15">
                      <div class="regular-text">
                        {{ user.name }} BIO
                        <i :class="['fa', 'fa-pencil', {'text-orange': userBio}]" @click="userBio = !userBio"></i>
                      </div>
                    </div>
                    <div class="user-bio">
                    <textarea :class="['text-content', 'user-edit-textarea', {'area-full': userBio}]"
                              :readonly="!userBio"
                              :autofocus="userBio"
                              v-model="form.biography"
                              ref="textarea"></textarea>
                    </div>
                    <has-error :form="form" field="biography"/>

                  </div>
                </div>  <!-- MAIN INFO -->

                <div class="additional-info presale-form">
                  <div class="row align-items-end">
                    <div class="col-6">
                      <div class="input-block">
                        <label for="position" class="input-label">
                          Position
                        </label>
                        <div class="form-input">
                          <input type="text"
                                 id="position"
                                 v-model="form.position"
                                 :class="{ 'is-invalid': form.errors.has('position') }">
                          <has-error :form="form" field="position"/>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="input-block">
                        <label for="email" class="input-label">
                          Email
                        </label>
                        <div class="form-input">
                          <input type="text" id="email" v-model="form.email" readonly>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="input-block">
                        <label for="first-name" class="input-label">
                          First name
                        </label>
                        <div class="form-input">
                          <input type="text"
                                 id="first-name"
                                 v-model="form.first_name"
                                 :class="{ 'is-invalid': form.errors.has('first_name') }">
                          <has-error :form="form" field="first_name"/>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="input-block">
                        <label for="last-name" class="input-label">
                          Last name
                        </label>
                        <div class="form-input">
                          <input type="text"
                                 id="last-name"
                                 v-model="form.last_name"
                                 :class="{ 'is-invalid': form.errors.has('last_name') }">
                          <has-error :form="form" field="last_name"/>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="input-block">
                        <label for="Phone" class="input-label">
                          Phone
                        </label>
                        <div class="form-input">
                          <input type="text"
                                 id="Phone"
                                 v-model="form.phone"
                                 :class="{ 'is-invalid': form.errors.has('phone') }">
                          <has-error :form="form" field="phone"/>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="input-block">
                        <button class="bordered-btn full-width" v-show="!verified_phone">
                          Verify phone number
                        </button>

                        <div class="relative-input" v-show="verified_phone">
                          <input type="text" style="padding-right: 75px;" placeholder="Your code..">
                          <button class="btn bordered-btn">
                            Send
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 m-b-15">
                      <div class="input-block">
                        <label for="address" class="input-label">
                          Address
                        </label>
                        <div class="form-input">
                          <input type="text"
                                 id="address"
                                 v-model="form.address"
                                 :class="{ 'is-invalid': form.errors.has('address') }">
                        </div>
                      </div>
                    </div>

                    <div class="col-6">
                      <div class="input-block">
                        <button class="bordered-btn info full-width" v-if="user.linkedin_joined">
                          <i class="fa fa-linkedin"></i>
                          LinkedIn Verify
                        </button>
                        <join-linkedin v-else></join-linkedin>
                      </div>
                    </div>

                    <div class="col-6">
                      <div class="input-block">
                        <button class="btn btn-black" @click="saveForm()">
                          Save changes
                        </button>
                      </div>
                    </div>

                  </div>
                </div>  <!-- ADDITIONAL INFO -->
              </div>  <!-- EDIT PROFILE BLOCK -->
            </div>

            <div v-else class="user" key="noedit">
              <div class="main-info m-b-30">
                <div class="avatar" :style="'background: url('+avatar+');'"></div>
                <div class="user-info full-width">

                  <div class=" m-b-15 add-heading">
                    <div class="black-heading">
                      {{ user.name }}
                    </div>
                    <div>
                      <a class="link icon-right-link heading-16" @click="showEdit = true">
                        <span>EDIT</span>
                        <i class="fa fa-chevron-right"></i>
                      </a>
                    </div>
                  </div>

                  <div class="text-content">
                    <div class="read-more-expand">
                      {{ user.biography }}
                    </div>
                  </div>
                </div>
              </div>  <!-- MAIN INFO -->

              <div class="user-balance medium-gray-border-box m-b-15">

                <div class="add-funds m-b-15">
                  <div class="big-gray-heading">
                    Balance
                  </div>
                  <div>
                    <button class="btn-big btn-gray">
                      Add funds
                    </button>
                  </div>
                </div>  <!-- ADD FUNDS -->

                <div class="widthdraw">
                  <div class="thin-heading">
                    {{ user.balance.toFixed(8) }}
                  </div>
                  <div>
                    <button class="btn-big btn-gray">
                      Widthdraw
                    </button>
                  </div>
                </div>  <!-- WIDTHDRAW -->

              </div>  <!-- USER BALANCE -->

              <div class="user-buttons m-b-15">
                <div>
                  <button class="bordered-btn">
                    <span>Become an expert</span>
                  </button>
                </div>
                <div>
                  <button class="bordered-btn danger">
                    <div class="btn-heading">Not verified</div>
                    <div class="btn-small-heading">KYC status</div>
                  </button>
                </div>
              </div>  <!-- USER BUTTONS -->

              <div class="user-baked medium-gray-border-box-sm text-center">
                <div class="thin-heading">15000$</div>
                <div class="dark-gray-heading">Backed</div>
              </div>  <!-- USER BAKED -->

            </div>  <!-- USER -->

          </transition>
        </div>  <!-- NORMALIZE -->

      </div>  <!-- LEFT CONTENT BLOCK -->
    </div>  <!-- LEFT -->
    <div class="right">
      <div class="right-content">
        <profile-right-menu></profile-right-menu>
        <nuxt-child></nuxt-child>
      </div>  <!-- RIGHT CONTENT BLOCK -->
    </div>  <!-- RIGHT -->

    <!-- Image cropper -->
    <my-upload field="avatar"
               @crop-success="cropSuccess"
               :withCredentials="true"
               v-model="uploadAvatarModal"
               langType="en"
               :noSquare="true"
               :width="125"
               :height="125"></my-upload>
    <!-- /Image cropper -->

  </div>

</template>

<script>

  import {mapGetters} from 'vuex'
  import Form from 'vform'
  import axios from 'axios'

  export default {
    middleware: ['auth'],
    head: {
      title: 'Profile'
    },
    data() {
      return {
        showEdit: false,
        nocache: 1,
        userBio: false,
        verified_phone: false,
        uploadAvatarModal: false,
        uploadAvatarImg: null,
        form: new Form({
          position: null,
          email: null,
          first_name: null,
          last_name: null,
          phone: null,
          address: null,
          biography: null
        }),

        animations: {
          enter: '',
          leave: ''
        },

      }
    },
    computed: {
      ...mapGetters({
        user: 'auth/user',
        avatar: 'auth/avatar'
      })
    },
    mounted() {
      // if (this.$route.params.user_name !== this.user.name) {
      //   this.$router.push('/profile/' + this.$route.params.user_name)
      // }
      this.form = new Form({
        position: this.user.position,
        email: this.user.email,
        first_name: this.user.first_name,
        last_name: this.user.last_name,
        phone: this.user.phone,
        address: this.user.address,
        biography: this.user.biography
      })
    },

    watch: {
      userBio() {
        if (this.userBio) {
          this.openBio()
        } else {
          this.closeBio()
        }
      },
      showEdit() {
        if (this.showEdit) {
          this.animations.enter = 'animated fadeInRight'
          this.animations.leave = 'animated fadeOutLeft'
        }
        else {
          this.animations.enter = 'animated fadeInLeft'
          this.animations.leave = 'animated fadeOutRight'
        }
      },
    },

    methods: {
      openBio() {
        this.$refs.textarea.focus()
        this.$refs.textarea.style.height = this.$refs.textarea.scrollHeight + 'px'
      },

      closeBio() {
        this.userBio = false;
        this.$refs.textarea.blur()
        this.$refs.textarea.removeAttribute('style')
      },

      saveForm() {
        this.form.post('/profile/' + this.user.id + '/edit')
          .then((response) => {
            this.userBio = false
            this.$store.commit('auth/FETCH_USER_SUCCESS', response.data.data)
            this.$toast.success('Profile change successfully')
          })
      },

      toggleUploadAvatar() {
        this.uploadAvatarModal = !this.uploadAvatarModal
      },

      cropSuccess(imgDataUrl, field) {
        this.uploadAvatarImg = imgDataUrl
        axios.post('/profile/' + this.user.id + '/edit_avatar', {
          avatar: this.uploadAvatarImg
        })
          .then((response) => {
            this.$store.commit('auth/UPDATE_USER', {user: response.data.data})
            this.$store.commit('auth/NOCACHE_INCREMENT')
          })
      },

    },

  }

</script>
