<template>

  <div>
    <div class="left">
      <div class="left-content">

        <div class="normalize">
          <div class="heading-holder m-b-45">
            <h3 class="medium-heading">
              Password reset
            </h3>
            <span class="gray-subheading">Please enter your email to reset password or</span>
            <a href="#" class="link">Login</a>
          </div>  <!-- HEADING HOLDER -->

          <div>
            <form class="presale-form" @submit.prevent="send" @keydown="form.onKeydown($event)">
              <div class="row">
                <div class="col-12">
                  <div class="input-block">
                    <label for="email" class="input-label">
                      Email*
                    </label>
                    <div class="form-input">
                      <input id="email"
                             v-model="form.email"
                             type="email"
                             name="email"
                             :class="{ 'is-invalid': form.errors.has('email') }">
                      <has-error :form="form" field="email"/>
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
        </div>  <!-- NORMALIZE -->

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
    head:{
      title:'Password reset'
    },
    data: () => ({
      status: '',
      form: new Form({
        email: ''
      })
    }),
    methods: {
      async send () {
        const { data } = await this.form.post('/password/email')
        // this.status = data.status
        this.$toast.success(data.status)
        this.form.reset()
      }
    }
  }
</script>