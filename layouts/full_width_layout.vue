<template>
  <div class="full-layout">

    <main-menu/>

    <div class="full-layout-content">
      <nuxt/>
    </div> <!-- FULL LAYOUT CONTENT -->

    <main-footer/>

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