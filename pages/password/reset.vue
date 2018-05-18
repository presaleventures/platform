<template>

  <div>
    <div class="left">
      <div class="left-content">

        <div class="normalize">
          <div class="heading-holder m-b-45">
            <h3 class="medium-heading">
              Password reset
            </h3>
            <span class="gray-subheading">Fill the form below to reset your password or</span>
            <a href="#" class="link">Log in</a>
          </div>  <!-- HEADING HOLDER -->

          <div>
            <form class="presale-form"
                  @submit.prevent="reset"
                  @keydown="form.onKeydown($event)">
              <div class="row">
                <div class="col-6">
                  <div class="input-block">
                    <label for="password" class="input-label">
                      New password*
                    </label>
                    <div class="form-input">
                      <input id="password"
                             v-model="form.password"
                             type="password"
                             name="password"
                             :class="{ 'is-invalid': form.errors.has('password') }">
                      <has-error :form="form" field="password"/>
                    </div>
                  </div>
                </div>

                <div class="col-6">
                  <div class="input-block">
                    <label for="password_confirmation" class="input-label">
                      Confirm password*
                    </label>
                    <div class="form-input">
                      <input  id="password_confirmation"
                              v-model="form.password_confirmation"
                              type="password"
                              name="password_confirmation"
                             :class="{ 'is-invalid': form.errors.has('password_confirmation') }">
                      <has-error :form="form" field="password_confirmation"/>
                    </div>
                  </div>
                </div>

                <div class="col-6">

                </div>

                <div class="col-6">
                  <div class="input-block" style="margin-top: 20px;">
                    <button class="btn btn-black" type="submit">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form> <!-- PRESALE FORM -->
          </div>
        </div>

      </div>  <!-- LEFT CONTENT BLOCK -->
    </div>  <!-- LEFT -->
    <div class="right" style="align-items: flex-start;">
      <div class="right-content">

      </div>  <!-- RIGHT CONTENT BLOCK -->
    </div>  <!-- RIGHT -->
  </div>

</template>

<script>
  import Form from 'vform'
  export default {
    middleware:['guest'],
    head: {
      title: 'Reset password'
    },
    data: () => ({
      status: '',
      form: new Form({
        token: '',
        email: '',
        password: '',
        password_confirmation: ''
      })
    }),
    created() {
      this.form.email = this.$route.query.email
      this.form.token = this.$route.params.token
    },

    methods: {
      async reset() {
        const {data} = await this.form.post('/password/reset')
        this.$toast.success(data.status)
        this.$router.push('/login')
      }
    }
  }
</script>

<style scoped>

</style>