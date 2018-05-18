<template>
    <div>
        <div class="left">
            <div class="left-content">
                <a :href="url">Go to an external link</a>
            </div>
        </div>
    </div>

</template>

<script>

  export default {

    name: 'out',

    head: {
      title: 'Go to an external link'
    },

    data: () => ({
      url: ''
    }),

    created () {
      this.url = this.$route.params.url
      if (!this.url.match(/^(http|https)/)) {
        this.url = 'http://' + this.url
      }
      if (process.client) {
        window.location.replace(this.url)

        // Throw a redirect error
        throw new Error('ERR_REDIRECT')
      }
    }

  }
</script>

<style scoped>

</style>