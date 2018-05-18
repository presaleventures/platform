<template>
  <div class="main-layout">

    <div class="main-navigation-layout">
      <main-menu />
    </div>  <!-- MAIN NAVIGATION LAYOUT -->

    <div class="nuxt-content">
      <nuxt />
    </div>  <!-- NUXT CONTENT -->

    <div class="main-footer-layout">
      <main-footer />
    </div>  <!-- MAIN FOOTER LAYOUT -->

  </div>
</template>

<script>
  import MainMenu from '~/components/MainMenu'
  import MainFooter from '~/components/MainFooter'

  export default {
    components: {
      MainMenu,
      MainFooter,
    }
  }

</script>

<style lang="sass">
  @import "../assets/sass/theme/main"
</style>