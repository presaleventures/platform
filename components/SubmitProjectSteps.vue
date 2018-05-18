<template>
  <div class="submit-stage-cirles">
    <div class="step">
      <div class="step-icon">
        <i class="icon-user"></i>
      </div>
      <div class="step-name passed" v-if="step === 'register'">
        Registration
      </div>
      <div class="step-name" v-else>
        Registration
      </div>
    </div>  <!-- STEP -->
    <div class="step">
      <div class="step-icon">
        <i class="icon-list"></i>
      </div>
      <div class="step-name passed" v-if="step === 'information'">
        Info
      </div>
      <div class="step-name" v-else>
        Info
      </div>
    </div>  <!-- STEP -->
    <div class="step">
      <div class="step-icon">
        <i class="icon-organization"></i>
      </div>
      <div class="step-name passed" v-if="step === 'details'">
        Details
      </div>
      <div class="step-name" v-else>
        Details
      </div>
    </div>  <!-- STEP -->
    <div class="step">
      <div class="step-icon">
        <i class="icon-chart"></i>
      </div>
      <div class="step-name passed" v-if="step === 'tokenomics'">
        Tokenomics
      </div>
      <div class="step-name" v-else>
        Tokenomics
      </div>
    </div>  <!-- STEP -->
  </div>  <!-- SUBMIT STAGE CIRCLES -->
</template>

<script>
  export default {
    name: "submit-project-steps",
    props: ['step']
  }
</script>