<template>
  <nuxt-link tag="div" :to="'/presale/' + project.name" class="campaign-shard">
    <div class="cs-left" :style="'background: url(' + project.image_url_small + ');'">
      <div class="flex-row-between-center m-b-5">
        <div class="white-badge">
          Discount {{ project.pre_ico_discount }}%
        </div>
        <div class="icons">
          <button class="icon-btn">
            <i class="fa fa-star"></i>
          </button>
          <button class="icon-btn">
            <i class="fa fa-share-alt"></i>
          </button>
        </div>  <!-- ICONS -->
      </div>

      <!-- BACKED BLOCK -->

      <div class="white-orange-block backed-block" v-if="backed">
        <div>
          <div class="gray-subheading">
            Backed date
          </div>
          <div class="date">
            15.04.2018
          </div>
        </div>
        <div>
          <div class="gray-subheading">
            Backed date
          </div>
          <div class="date">
            15.04.2018
          </div>
        </div>
        <div style="margin: 0 -10px;">
          <button class="btn btn-black">Refund</button>
        </div>
      </div>  <!-- WHITE ORANGE BLOCK BACKED BLOCK-->

      <!-- BACKED BLOCK END -->

    </div>  <!-- CS LEFT -->
    <div class="cs-right">
      <div class="medium-heading">
        {{ project.display_name }}
      </div>
      <div class="m-b-5">
        at <span class="orange-text-small" v-if="project.category">{{ project.category.display_name }}</span>
      </div>
      <div class="m-b-5">
        <div class="campaign-rating">
          <span class="regular-text">Rating</span>
          <span class="big-orange-text">0/10</span>
        </div>
      </div>
      <div class="m-b-5">
        <div class="campaign-ends-in">
          <div class="regular-text">
            <no-ssr>
              <countdown :end="project.pre_ico_end"></countdown>
            </no-ssr>
          </div>
          <span class="gray-subheading">Ends in</span>
        </div>
      </div>
      <div>
        <div class="campaign-progress">
          <div class="backers m-b-5">Backers 0</div>
          <orange-progress percent="0"/>
          <div class="flex-row-between-center m-t-5">
            <span class="regular-text">0 ENT</span>
            <span class="regular-text">{{ preCap }} ENT</span>
          </div>
          <div class="flex-row-between-center">
            <span class="small-gray-text">Raised</span>
            <span class="small-gray-text">Pre Cap</span>
          </div>
        </div>
      </div>
    </div>  <!-- CS RIGHT -->
  </nuxt-link>  <!-- CAMPAIGN SHARD -->
</template>

<script>
  export default {
    name: "campaign-shard",
    data: () => ({
      backed: false
    }),
    props: {
      project: {
        type: Object,
        default: function () {
          return {
            name: null,
            display_name: 'Test',
            email: null,
            description: null,
            youtube_url: null,
            website_url: null,
            white_paper_url: null,
            image_url_small: null,
            token_name: null,
            ico_token_price: 0,
            pre_ico_token_amount: 0,
            total_token_amount: 0,
            pre_ico_discount: 0,
            pre_ico_start: null,
            pre_ico_end: null,
            ico_start: null,
            ico_end: null,
            project_category_id: null,
            country_id: null
          }
        }
      },
    },
    computed: {
      preCap() {
        return Math.round(this.project.ico_token_price * ((100 - this.project.pre_ico_discount) / 100) * this.project.pre_ico_token_amount)
      }
    },
    methods: {
        
    }
  }
</script>
