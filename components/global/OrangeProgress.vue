<template>
  <div class="orange-progress">
    <div class="progress" :style="'width:' + this.percent + '%;'">
      <!-- FREE CONTENT PLACE HERE -->
    </div>
  </div>
</template>

<script>

	export default {
	  name: 'orange-progress',
    props: [
      'percent',
    ],
	  data () {
	  	return {

	  	}
	  },
	}

</script>
