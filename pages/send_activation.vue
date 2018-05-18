<template>
    
  <div>
    <div class="left">
      <div class="left-content">

        <div class="normalize">
          <div v-if="!errorPage" class="heading-holder m-b-45">
            <h3 class="medium-heading">
              Thank you! A verification link has been sent to your email account.
            </h3>
            <span class="gray-subheading">Please click on the link that has just been sent to your email account to verify your email and continue the registration process. <br> <br> Have not received link?</span>
            <span @click="send()" class="link">Send again</span>
          </div>  <!-- HEADING HOLDER -->

          <div v-if="errorPage" class="heading-holder m-b-45">
            <h3 class="medium-heading">
              Error
            </h3>
            <p class="gray-subheading text-alert">{{errorMessage}}</p>
            <span @click="send()" class="link">Send again</span>
          </div>  <!-- HEADING HOLDER -->
        </div>

      </div>  <!-- LEFT CONTENT BLOCK -->
    </div>  <!-- LEFT -->
    <div class="right" style="align-items: flex-start;">
      <div class="right-content">
        <div class="navigation-block">
          <div class="right-menu">
            <div class="menu-link-block">
              <a href="#" class="orange-underline-link">Baked</a>
            </div>
            <div class="menu-link-block">
              <a href="#" class="orange-underline-link">Bookmark</a>
            </div>
            <div class="menu-link-block">
              <a href="#" class="orange-underline-link">My ICO's</a>
            </div>
          </div>
        </div>
      </div>  <!-- RIGHT CONTENT BLOCK -->
    </div>  <!-- RIGHT -->
  </div>
    
</template>

<script>
  import axios from 'axios'

  export default {
    head: {
      title:'Email confirmation'
    },

    data () {
      return {
        errorPage: false,
        errorMessage: ''
      }
    },

    created () {
      const user = this.$store.getters['auth/user']
      if (user && user.email_confirmed) {
        this.$router.push({ name: 'home' })
        return
      }

      if (process.client && this.$route.params.activation_code) {
        this.confirm()
      }
    },

    methods: {
      confirm () {
        axios.post('/confirm', {
          'activation_code': this.$route.params.activation_code
        })
          .then((result) => {
            if (result.data.success) {
              if (result.data.user) {
                this.$store.dispatch('auth/updateUser', { user: result.data.user })
              }
              this.$toast.success('Successfully activated')
              this.$router.push({ name: 'home' })
            } else {
              this.errorPage = true
              this.errorMessage = result.data.message
              this.$toast.error(result.data.message)
            }
          })
          .catch(error => {
            if (error.response.status === 422) {
              let error_list = error.response.data.errors;
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
      },

      send () {
        axios.post('/send_confirm', {
          'activation_code': this.$route.params.activation_code
        })
          .then((res) => {
            this.$toast.success('Message send')
            this.$router.push({ name: 'activation' })
          })
          .catch(error => {
            if (error.response.status === 422) {
              let error_list = error.response.data.errors;
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
