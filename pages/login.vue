<template>
  <div>
    <div class="left">
      <div class="left-content">

        <div class="normalize">
          <div class="heading-holder m-b-45">
            <h3 class="medium-heading">
              Log in
            </h3>
            <span class="gray-subheading">Do not have an account?</span>
            <nuxt-link to="/register" class="link">Register</nuxt-link>
          </div>  <!-- HEADING HOLDER -->

          <div>
            <form class="presale-form"
                  @submit.prevent="login"
                  @keydown="form.onKeydown($event)">
              <div class="row">
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
                    <div id="captcha" class="g-recaptcha" style="margin-left: -18px;"></div>
                    <has-error :form="form" field="recaptcha"/>
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-block" style="margin-top: 20px;">
                    <button class="btn btn-black" type="submit">
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </form>  <!-- PRESALE FORM -->
          </div>

          <div class="or-divider">
            <div>or</div>
          </div>

          <div class="linked-in-button m-b-45">
            <login-with-linkedin text="Login with LinkedIn"/>
          </div>

          <div>
            <span class="m-r-15">Forgot password?</span>
            <nuxt-link to="/password/reset" class="link">Click here</nuxt-link>
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

  export default {
    middleware:['guest'],
    head() {
      title:'Login'
    },

    data: () => ({
      form: new Form({
        email: '',
        password: '',
        recaptcha: ''
      })
    }),
    mounted(){
      if(process.client){
        setTimeout(this.recaptchaRender, 1000)
      }
    },

    methods: {

      async login () {
        this.resetRecaptcha()
        // Submit the form.
        const { data } = await this.form.post('/login')
        // Save the token.
        this.$store.dispatch('auth/saveToken', {
          token: data.token,
          remember: this.remember
        })
        // Fetch the user.
        await this.$store.dispatch('auth/fetchUser')
        // Redirect home.
        this.$router.push({ name: 'home' })
      },

      recaptchaRender(){
        grecaptcha.render('captcha', {
          'sitekey' : process.env.recaptchaPublicKey,
          'callback': this.recaptchaVerifyCallback
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
