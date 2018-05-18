<template>
  <div class="error-404">

    <div class="text-center">
    	<div class="m-b-60">
    		<img src="/404.png">
    	</div>
	    <div class="big-black-heading m-b-30">
	    	Oops, something went wrong
	    </div>
	    <div>
	    	<div class="m-b-15">
	    		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nobis, eveniet assumenda repellendus. 
	    	</div>
	    	<div>
	    		<nuxt-link to="/" class="link">Homepage </nuxt-link>
	    		<span>or</span>
	    		<a @click="goBack()" class="link"> Previous page</a>
	    	</div>
	    </div>
    </div>

  </div>
</template>

<script>

  export default {
    layout: 'full_width_layout',
    head:{
      title:'Page not found'
    },
		methods: {
      goBack() {
        this.$router.go(-1)
			}
		}
  }

</script>

<style lang="sass">
  @import "../assets/sass/theme/main"
</style>