<template>
    
  <div>
    <div class="left">
      <div class="left-content">
        <submit-project-steps v-if="submitProject" step="register"></submit-project-steps>
        <div class="normalize">
          <div class="heading-holder m-b-45">
            <h3 class="medium-heading">
              Your Personal information
            </h3>
            <span class="gray-subheading">Already existing member?</span>
            <nuxt-link to="/login" class="link">Log In</nuxt-link>
          </div>  <!-- HEADING HOLDER -->

          <div>
            <form class="presale-form"
                  @submit.prevent="register"
                  @keydown="form.onKeydown($event)">
              <div class="row">
                <div class="col-6">
                  <div class="input-block">
                    <label for="full-name" class="input-label">
                      Full name*
                    </label>
                    <div class="form-input">
                      <input type="text"
                             id="full-name"
                             v-model="form.name"
                             :class="{ 'is-invalid': form.errors.has('name') }">
                      <has-error :form="form" field="name"/>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-block">
                    <label for="email" class="input-label">
                      Email*
                    </label>
                    <div class="form-input">
                      <input type="email"
                             id="email"
                             v-model="form.email"
                             :class="{ 'is-invalid': form.errors.has('email') }">
                      <has-error :form="form" field="email"/>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-block">
                    <label for="pass" class="input-label">
                      Password*
                    </label>
                    <div class="form-input">
                      <input id="pass"
                             type="password"
                             v-model="form.password"
                             :class="{ 'is-invalid': form.errors.has('password') }">
                      <has-error :form="form" field="password"/>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-block">
                    <label for="confirm_pass" class="input-label">
                      Confirm password*
                    </label>
                    <div class="form-input">
                      <input id="confirm_pass"
                             type="password"
                             v-model="form.password_confirmation"
                             :class="{ 'is-invalid': form.errors.has('password_confirmation') }">
                      <has-error :form="form" field="password_confirmation"/>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-block">
                    <div id="captcha" class="g-recaptcha" style="margin-left: -18px;"></div>
                    <has-error :form="form" field="recaptcha"/>
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-block" style="margin-top: 20px;">
                    <button class="btn btn-black" type="submit">
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </form> <!-- PRESALE FORM -->
          </div>

          <div class="or-divider">
            <div>or</div>
          </div>

          <div class="linked-in-button">
            <login-with-linkedin text="Register with LinkedIn"/>
          </div>
        </div>

      </div>  <!-- LEFT CONTENT BLOCK -->
    </div>  <!-- LEFT -->
    
    <div class="right">
      <div class="right-content">
        <div class="right-top-holder">
          <h3 class="medium-heading">
            Presale Campaigns
          </h3>
        </div>

        <campaign-shard/>
        <campaign-shard/>
        <campaign-shard/>
        <campaign-shard/>
        <campaign-shard/>
        <campaign-shard/>
      </div>  <!-- RIGHT CONTENT BLOCK -->
    </div>  <!-- RIGHT -->
  </div>
    
</template>

<script>

  import Form from 'vform'
  import SubmitProjectSteps from '~/components/SubmitProjectSteps'

  export default {
    components: { SubmitProjectSteps },
    middleware:['guest'],
    head : {
      title: 'Registration'
    },

    data: () => ({
      submitProject: false,
      form: new Form({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        recaptcha: ''
      })
    }),

    created(){
      if(this.$route.params.type === 'project') {
        this.submitProject = true
      }
    },

    mounted(){
      if(process.client){
        setTimeout(this.recaptchaRender, 1000)
      }
    },

    methods: {
      async register () {
        this.resetRecaptcha()
        // Register the user.
        const { data } = await this.form.post('/register')

        // Login new user
        this.$store.dispatch('auth/saveToken', {
          token: data.token,
          remember: this.remember
        })
        // Fetch the user.
        await this.$store.dispatch('auth/fetchUser')

        // Redirect home.
        this.$router.push({ name: 'activation' })
      },

      recaptchaRender () {
        grecaptcha.render('captcha', {
          sitekey : process.env.recaptchaPublicKey,
          callback: this.recaptchaVerifyCallback
        });
      },
      resetRecaptcha(){
        grecaptcha.reset()
      },
      recaptchaVerifyCallback(data){
        this.form.recaptcha = data;
      }
    }

  }

</script>
