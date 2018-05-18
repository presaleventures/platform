<template>

  <div class="rating-shard">

    <div class="avatar">
      <div class="rounded-avatar" style="background: url('/JackSparrowProfile.jpg');"></div>
    </div>  <!-- AVATAR -->

    <div class="shard-content" style="width: 100%;">

      <div class="heading-18 m-b-10 flex-row-start-center">
        Jack Sparrow

        <a href="#" class="username-linkedin" target="_blank">
          <i class="fa fa-linkedin-square"></i>
        </a>

        <div class="total">
          <span style="margin-right: 10px;">Total</span> <span class="text-orange">9.8/10</span>
        </div>  <!-- TOTAL -->

      </div>

      <div class="gray-subheading m-b-15">
        Master pirate
      </div>

      <div class="shard-info">

        <div>
          <span class="gray-subheading-small m-r-5">
            Team
          </span>
          <span class="text-orange">
            9.9
          </span>
        </div>

        <div>
          <span class="gray-subheading-small m-r-5">
            Vision
          </span>
          <span class="text-orange">
            5.2
          </span>
        </div>

        <div>
          <span class="gray-subheading-small m-r-5">
            Product
          </span>
          <span class="text-orange">
            4.5
          </span>
        </div>

        <div>
          <span class="gray-subheading-small m-r-5">
            Token Utility
          </span>
          <span class="text-orange">
            8.9
          </span>
        </div>

        <div class="details-button">
          <nuxt-link to="/presale/morgoth/rating_details/1" class="btn btn-black">Details</nuxt-link>
        </div>  <!-- DETAILS BUTTON -->

      </div>  <!-- SHARD INFO -->

    </div>  <!-- SHARD CONTENT -->

  </div>  <!-- RATING SHARD -->

</template>
<script>
  export default {
    name: 'rating-shard',
    data: () => ({

    }),
    methods: {

    },
  }
</script>