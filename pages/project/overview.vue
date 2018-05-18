<template>
  <div v-if="project">
  	<div class="medium-heading m-b-15">
  		<span>
  			About project
  			<a href="https://www.marginless.io/" class="icon-external-link" target="_blank">
  				<img src="/external-link.png">
  			</a>
  		</span>
  	</div>

    <div class="text-content m-b-15">
      {{ project.description }}
    </div>

    <div class="overview-info m-b-15">
      <div class="row">

        <div class="col-6">
          <div>
            <div class="m-b-15">
              <div class="gray-subheading">
                Country
              </div>
              <div class="heading-18">
                {{ project.country.name }}
              </div>
            </div>

            <div class="m-b-15">
              <div class="gray-subheading">
                Token name
              </div>
              <div class="heading-18">
                {{ project.token_name }}
              </div>
            </div>

            <div>
              <div class="gray-subheading">
                Token price (ENT)
              </div>
              <div class="heading-18">
                {{ project.ico_token_price }}
              </div>
            </div>

          </div>
        </div>  <!-- COL 6 -->

        <div class="col-6">
          <div>

            <div class="m-b-15">
              <div class="gray-subheading">
                Email
              </div>
              <div class="heading-18">
                {{ project.email }}
              </div>
            </div>

            <div class="m-b-15">
              <div class="gray-subheading">
                Total token amount
              </div>
              <div class="heading-18">
                {{ project.total_token_amount }}
              </div>
            </div>

          </div>
        </div>  <!-- COL 6 -->

      </div>  <!-- ROW -->
    </div>  <!-- OVERVIEW INFO -->

    <div class="white-box-30 m-b-15">
      <div class="row">
        <div class="col-12">
          <div class="heading-21 m-b-30">
            Pre-ICO
          </div>
        </div>

        <div class="col-6">
          <div class="m-b-15">
            <div class="gray-subheading">
              Starts In
            </div>
            <div class="heading-18">
              {{ project.pre_ico_start | moment("DD MMMM YYYY, HH:mm")}} UTC
            </div>
          </div>

          <div>
            <div class="gray-subheading">
              Pre-ICO Token Amount
            </div>
            <div class="heading-18">
              {{ project.pre_ico_token_amount }}
            </div>
          </div>
        </div>

        <div class="col-6">
          <div class="m-b-15">
            <div class="gray-subheading">
              Ends In
            </div>
            <div class="heading-18">
              {{ project.pre_ico_end | moment("DD MMMM YYYY, HH:mm")}} UTC
            </div>
          </div>

          <div>
            <div class="gray-subheading">
              Pre-ICO Token Discount
            </div>
            <div class="heading-18">
              {{ project.pre_ico_discount }}%
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="white-box-30 m-b-15">
      <div class="row">
        <div class="col-12">
          <div class="heading-21 m-b-30">
            ICO
          </div>
        </div>

        <div class="col-6">
          <div class="m-b-15">
            <div class="gray-subheading">
              Starts In
            </div>
            <div class="heading-18">
              {{ project.ico_start | moment("DD MMMM YYYY, HH:mm")}} UTC
            </div>
          </div>
        </div>

        <div class="col-6">
          <div class="m-b-15">
            <div class="gray-subheading">
              Ends In
            </div>
            <div class="heading-18">
              {{ project.ico_end | moment("DD MMMM YYYY, HH:mm")}} UTC
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

  import { mapGetters } from 'vuex'
  import axios from 'axios'

  function getProject(project_name) {
    return axios.get('/project/' + project_name)
  }

  export default {
    name: "overview",
    data() {
      return {

      }
    },
    asyncData({ route }) {
      let data = {
        project: null
      }

      let project_name = route.params.project_name

      return axios.all([
        getProject(project_name)
      ])
        .then(axios.spread((project) => {
          data.project = project.data.data
          return data
        }))
        .catch(error => {
          console.log(error)
          return data
        })
    },

    created () {
      if(!this.project) this.$router.push('/404')
    },

    computed: {
      ...mapGetters({
        user: 'auth/user',
      })
    }
  }
</script>
