<template>
  <div>
    <div class="left">
      <div class="left-content">

        <div class="normalize">

        </div>

      </div>  <!-- LEFT CONTENT BLOCK -->
    </div>  <!-- LEFT -->
    <div class="right">
      <div class="right-content">
        <div class="right-top-holder">
          <div class="heading-checkboxes">
          	<div class="medium-heading">
          		Featured campaigns
          	</div>
          	<div class="checkboxes">
          	  <div class="checkbox-holder">
          	  	<input type="checkbox" id="live">
          	  	<label for="live">Live</label>
          	  </div>
          	  <div class="checkbox-holder">
          	  	<input type="checkbox" id="presale">
          	  	<label for="presale">Presale</label>
          	  </div>
          	</div>	<!-- CHECKBOXES -->
          </div>  <!-- HEADING WITH CHECKBOXES -->
        </div>
      </div>  <!-- RIGHT CONTENT BLOCK -->
    </div>  <!-- RIGHT -->
  </div>

</template>

<script>

  export default {
    head: {
      title:'Home'
    },
  }

</script>
