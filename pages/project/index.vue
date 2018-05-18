<template>
  <div v-if="project">
    <div class="left">
      <div class="left-content">

        <div class="normalize">

          <div v-if="showApproveList" class="ico-apply-padded">

            <div class="m-b-15">
              <div class="medium-heading">
                Your submited project
              </div>
            </div>

            <div class="m-b-15">
              <div class="text-content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni reprehenderit ea laborum laudantium minus nesciunt.
                <a href="#" class="link link-underline">
                  Rating Methodology
                </a>
              </div>
            </div>

            <div class="apply-list m-b-30">

              <div class="apply-item">
                <div class="item-name">
                  <div class="regular-text">
                    Status
                  </div>
                </div>

                <div class="item-status">
                  <span class="success">
                    Verified
                    <i class="fa fa-check"></i>
                  </span>
                </div>
              </div>  <!-- APPLY ITEM -->

              <div class="apply-item">
                <div class="item-name">
                  <div class="regular-text">
                    KYC verification
                  </div>
                </div>

                <div class="item-status">
                  <span class="warning">
                    Pending
                    <i class="fa fa-clock-o"></i>
                  </span>
                </div>
              </div>  <!-- APPLY ITEM -->

              <div class="apply-item">
                <div class="item-name">
                  <div class="regular-text">
                    Team members
                  </div>
                </div>

                <div class="item-status">
                  <span class="warning">
                    Not added
                    <i class="fa fa-clock-o"></i>
                  </span>
                </div>
              </div>  <!-- APPLY ITEM -->

              <div class="apply-item">
                <div class="item-name">
                  <div class="regular-text">
                    Road Map
                  </div>
                </div>

                <div class="item-status">
                  <a href="#" class=" link-underline danger">
                    Not verified
                    <i class="fa fa-close"></i>
                  </a>
                </div>
              </div>  <!-- APPLY ITEM -->

            </div>  <!-- APPLY LIST -->

            <div class="flex-row-end-center">
              <span class="danger" style="margin-right: 15px;">
                *approve all items before
              </span>
              <button class="btn btn-darkgray auto-width">
                Apply
              </button>
            </div>

          </div>  <!-- ICO APPLY PADDED -->

          <div v-else>
            <div class="heading-holder m-b-45">
              <div class="black-heading">
                {{ project.display_name }}
              </div>
            </div>  <!-- HEADING HOLDER -->

            <div class="full-shard-info">
              <div class="shard-description">
                <div class="medium-heading">
                  Hot offer
                </div>
                <div class="hot-offer">
                  <img src="/hot_offer.png">
                </div>
                <div class="gray-subheading">
                  Ends in
                </div>
                <div class="regular-text">
                  <countdown :end="project.pre_ico_end"></countdown>
                </div>
              </div>

              <div class="full-shard-buttons" v-if="user">
                <button class="btn btn-black">
                  Buy Tokens
                </button>
              </div>
            </div>  <!-- FULL SHARD INFO -->

            <campaign-shard-full :project="project"/>
          </div>

        </div>  <!-- NORMALIZE -->

      </div>  <!-- LEFT CONTENT BLOCK -->
    </div>  <!-- LEFT -->
    <div class="right" style="align-items: flex-start;">
      <div class="right-content">

        <project-right-menu :project-name="project.name"></project-right-menu>

        <nuxt-child></nuxt-child>

      </div>  <!-- RIGHT CONTENT BLOCK -->
    </div>  <!-- RIGHT -->
  </div>

</template>

<script>
  import { mapGetters } from 'vuex'
  import axios from 'axios'

  function getProject(project_name) {
    return axios.get('/project/' + project_name)
  }

  export default {
    name: "index",
    fetch({store, params}) {
      return store.dispatch('pd/fetchProject', params.project_name)
    },

    computed: {
      ...mapGetters({
        user: 'auth/user',
        project: 'pd/project'
      }),
      showApproveList() {
        let showing = false
        if (this.project) {
          if (this.project.approved == false) { showing = true }
        }
        return showing
      }
    },

    mounted () {
      if(!this.project) this.$router.push('/404')
    },
  }
</script>

<style scoped>

</style>