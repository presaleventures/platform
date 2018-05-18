<template>
  <button v-if="linkedinAuth" @click="login" type="button" class="bordered-btn info full-width" >
    <i class="fa fa-linkedin"></i>
    Join LinkedIn
  </button>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'JoinLinkedin',
    computed: {
      ...mapGetters({
        user: 'auth/user'
      }),
      linkedinAuth: () => process.env.linkedinAuth,
      url: () => `${process.env.apiUrl}/oauth/linkedin/join`
    },

    mounted () {
      window.addEventListener('message', this.onMessage, false)
    },

    beforeDestroy () {
      window.removeEventListener('message', this.onMessage)
    },

    methods: {
      async login () {
        const url = await this.$store.dispatch('auth/fetchOauthJoinUrl', {
          provider: 'linkedin'
        })

        openWindow(url, this.$t('login'))
      },

      /**
       * @param {MessageEvent} e
       */
      onMessage (e) {
        if (e.origin !== process.env.apiUrl) {
          return
        }

        if (!e.data.success) {
          if (e.data.message) {
            this.$toast.error(e.data.message)
            return
          }
          this.$toast.error('Error')
          return
        }

        this.$store.dispatch('auth/fetchUser')
        this.$toast.success('Joined')
      }
    }
  }

  /**
   * @param  {Object} options
   * @return {Window}
   */
  function openWindow (url, title, options = {}) {
    if (typeof url === 'object') {
      options = url
      url = ''
    }

    options = { url, title, width: 600, height: 720, ...options }

    const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screen.left
    const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screen.top
    const width = window.innerWidth || document.documentElement.clientWidth || window.screen.width
    const height = window.innerHeight || document.documentElement.clientHeight || window.screen.height

    options.left = ((width / 2) - (options.width / 2)) + dualScreenLeft
    options.top = ((height / 2) - (options.height / 2)) + dualScreenTop

    const optionsStr = Object.keys(options).reduce((acc, key) => {
      acc.push(`${key}=${options[key]}`)
      return acc
    }, []).join(',')

    const newWindow = window.open(url, title, optionsStr)

    if (window.focus) {
      newWindow.focus()
    }

    return newWindow
  }
</script>