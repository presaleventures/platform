<template>
  <div>
    <div class="left">
      <div class="left-content">

        <div class="normalize">
          <div class="heading-holder m-b-45">
            <h3 class="medium-heading">
              Choose your username
            </h3>
            <span class="gray-subheading">This username will be used as a nickname.</span>
          </div>  <!-- HEADING HOLDER -->

          <div>
            <form
            <form class="presale-form"
                  @submit.prevent="setName"
                  @keydown="form.onKeydown($event)">
              <div class="row">
                <div class="col-12">
                  <div class="input-block">
                    <label for="name" class="input-label">
                      Username*
                    </label>
                    <div class="form-input">
                      <input id="name" type="text" v-model="form.name" :class="{ 'is-invalid': form.errors.has('name') }">
                      <has-error :form="form" field="name"/>
                    </div>
                  </div>
                </div>

                <div class="col-12">
                  <div class="m-b-30 m-t-30">
                    <div class="gray-subheading">Look at your profile link here:</div>
                    <div class="link-username">
                      {{baseUrl}}/profile/{{form.name}}
                    </div>
                  </div>
                </div>

                <div class="col-12">
                  <div class="input-block" style="margin-top: 20px;">
                    <button class="btn btn-black">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>  <!-- PRESALE FORM -->
          </div>
        </div>

      </div>  <!-- LEFT CONTENT BLOCK -->
    </div>  <!-- LEFT -->
    <div class="right" style="align-items: flex-start;">
      <div class="right-content">
        <div class="navigation-block">
          <div class="right-menu">
            <div class="menu-link-block">
              <a href="#" class="orange-underline-link">Backed</a>
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

  import Form from 'vform'

  export default {
    middleware:['auth'],
    head: {
      title:'Create username'
    },
    data() {
      return {
        form: new Form({
          name: ''
        })
      }
    },
    computed: {
      baseUrl() {
        return process.env.baseUrl
      }
    },

    methods: {
      setName() {
        this.form.post('profile/edit_username')
          .then(({data}) => {
            if (data.data) {
              this.$store.dispatch('auth/updateUser', { user: data.data })
            }
            this.$toast.success('Successfully')
            this.$router.push({ name: 'home' })
          })
      }
    }
  }

</script>
