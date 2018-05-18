<template>

  <div class="navigation-block">
    <nav class="main-menu">

      <div class="main-menu-left">
        <div class="menu-link-block">
          <nuxt-link to="/">
            <img src="/logo_p-01.png" class="logo-image" alt="Home">
          </nuxt-link>
        </div>
        <div class="menu-link-block">
          <nuxt-link v-if="user" to="/submit_project" class="orange-underline-link">Submit a project</nuxt-link>
          <nuxt-link v-else to="/register/project" class="orange-underline-link">Submit a project</nuxt-link>
        </div>
        <div class="menu-link-block">
          <nuxt-link to="/presale_token" class="orange-underline-link">Presale token</nuxt-link>
        </div>
        <div class="menu-link-block">
          <nuxt-link to="/about" class="orange-underline-link">About</nuxt-link>
        </div>
      </div>  <!-- MAIN MENU LEFT -->

      <!-- TEMPLATE FOR LOGGED USER -->

      <div class="main-menu-right" v-if="user">
        <div class="user-menu" @mouseenter="menuOpen = !menuOpen" @mouseleave="menuOpen = !menuOpen">
  				<p class="username">
  					{{ user.name }}
  				</p>
          <div class="user-avatar" :style="'background: url('+avatar+');'"></div>

          <transition name="fade">
            <div class="user-inner-menu" v-show="menuOpen">
              <div class="user-links-holder">
                <div>
                  <nuxt-link to="/profile" class="user-menu-link">Account</nuxt-link>
                </div>
                <div>
                  <a @click="logout" class="user-menu-link">Logout</a>
                </div>
              </div>
            </div>  <!-- USER INNER MENU -->
          </transition>
        </div>
      </div>  <!-- MAIN MENU RIGHT -->

      <!-- TEMPLATE FOR NOT KNOWN USER -->

      <div class="main-menu-right" v-else>
        <div class="menu-link-block">
          <nuxt-link to="/register" class="orange-underline-link">Register</nuxt-link>
        </div>
        <div class="menu-link-block">
          <nuxt-link to="/login" class="orange-underline-link">Login</nuxt-link>
        </div>
      </div>  <!-- MAIN MENU RIGHT -->

    </nav>  <!-- MAIN MENU -->
  </div>  <!-- NAVIGATION BLOCK -->

</template>

<script>
  import {mapGetters} from 'vuex'

  export default {

    data: () => ({
      appName: process.env.appName,
      menuOpen: false,
    }),
    computed: mapGetters({
      user: 'auth/user',
      avatar: 'auth/avatar'
    }),
    methods: {
      async logout() {
        // Log out the user.
        await this.$store.dispatch('auth/logout')
        // Redirect to login.
        this.$router.push({name: 'login'})
      },
    }
  }

</script>
