<template>

  <div class="campaign-shard-full">

    <transition
        enter-active-class="animated fadeInDown"
        mode="out-in"
    >

      <div class="shard-video" v-if="project.youtube_url" :key="'video'">
        <div class="flex-row-between-center">
          <div class="white-badge">
            Discount {{ project.pre_ico_discount }}%
          </div>

          <div class="icons">

            <!-- <button class="icon-btn" @click="videoOpen">
              <i class="fa fa-picture-o"></i>
            </button> -->

            <button class="icon-btn">
              <i class="fa fa-share-alt"></i>
            </button>

            <button class="icon-btn">
              <i class="fa fa-star"></i>
            </button>

          </div>  <!-- ICONS -->
        </div>

        <div class="video-holder">
          <no-ssr>
            <plyr>
              <div class="plyr__video-embed">
                <iframe :src="project.youtube_url" allowfullscreen allowtransparency allow="autoplay"></iframe>
              </div>
            </plyr>
          </no-ssr>
        </div>  <!-- VIDEO HOLDER -->
      </div>  <!-- SHARD VIDEO -->

      <div v-else class="shard-background" :style="'background: url('+project.image_url_big+');'" :key="'picture'">
        <div class="flex-row-between-center">
          <div class="white-badge">
            Discount {{ project.pre_ico_discount }}%
          </div>

          <div class="icons">

            <button class="icon-btn">
              <i class="fa fa-share-alt"></i>
            </button>

            <button class="icon-btn">
              <i class="fa fa-star"></i>
            </button>

          </div>  <!-- ICONS -->
        </div>
      </div>  <!-- SHARD BACKGROUND -->

    </transition>

    <div class="shard-content">

      <div class="name-row">
        <div class="medium-heading">
          {{ project.display_name }}
        </div>
        <div class="campaign-rating">
          <span class="regular-text">Rating</span>
          <span class="big-orange-text">9.8/10</span>
        </div>
      </div>

      <div class="full-shard-category">
        at <span class="text-orange"><b>{{ project.category.display_name }}</b></span>
      </div>

      <div class="m-b-10">
        <orange-progress
            percent="50"
        />
      </div>

      <div class="backers">
        <div>
          <div class="regular-text">568 ETH</div>
          <div class="gray-subheading-small">Raised</div>
        </div>
        <div>
          <div class="regular-text">Backers 36</div>
        </div>
        <div>
          <div class="regular-text">{{ preCap }} ENT</div>
          <div class="gray-subheading-small" style="margin: 0; text-align: right;">Pre Cap</div>
        </div>
      </div>

    </div>  <!-- SHARD CONTENT -->
  </div>  <!-- CAMPAIGN SHARD FULL -->

</template>

<script>

  import { Plyr } from 'vue-plyr'

  export default {
    name: 'campaign-shard-full',
    components: {
      Plyr
    },
    props: ['project'],
    computed: {
      preCap() {
        return Math.round(this.project.ico_token_price * ((100 - this.project.pre_ico_discount) / 100) * this.project.pre_ico_token_amount)
      }
    },
  }

</script>
