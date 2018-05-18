<template>
  <div class="navigation-block">
    <div class="right-menu">
      <div class="menu-link-block">
        <nuxt-link :to="'/profile/'+user.name+'/baked'" class="orange-underline-link">Backed</nuxt-link>
      </div>
      <div class="menu-link-block">
        <nuxt-link :to="'/profile/'+user.name+'/bookmark'" class="orange-underline-link">Bookmark</nuxt-link>
      </div>
      <div class="menu-link-block">
        <nuxt-link :to="'/profile/'+user.name+'/my_ico'" class="orange-underline-link">My ICO's</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>

  import { mapGetters } from 'vuex'

  export default {
    name: "profile-right-menu",
    computed: mapGetters({
      user: 'auth/user'
    }),
  }
</script>

<style scoped>

</style>