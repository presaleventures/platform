<template>
  <div>
    <div class="left">
      <div class="left-content">

        <div class="normalize">
          
          <div class="m-b-60">
            <div class="submit-stage-cirles">

              <div class="step">
                <div class="step-icon">
                  <i class="icon-user"></i>
                </div>
                <div class="step-name">
                  ID Document
                </div>
              </div>  <!-- STEP -->

              <div class="step">
                <div class="step-icon">
                  <i class="icon-list"></i>
                </div>
                <div class="step-name">
                  Utility Bill
                </div>
              </div>  <!-- STEP -->

              <div class="step">
                <div class="step-icon">
                  <i class="icon-organization"></i>
                </div>
                <div class="step-name passed">
                  Selfie with ID
                </div>
              </div>  <!-- STEP -->

            </div>  <!-- SUBMIT STAGE CIRCLES -->
          </div>

          <!-- FIRST STEP ПЕРВЫЙ ШАГ-->

          <div v-if="step = 1">
            <div class="medium-heading">
              KYC Validation
            </div>  <!-- MEDIUM HEADING -->

            <div class="kyc-step-content">
              <div class="kyc-step-image text-center m-t-30 m-b-30">
                <img src="/usercard.png" style="max-height: 300px;">
              </div>  <!-- KYC STEP IMAGE -->

              <div class="m-b-30">
                <div class="trigger-file-block">

                <!-- INPUT TO TRIGGER -->
                  <input type="file" style="display: none;">
                <!-- INPUT TO TRIGGER -->

                  <div class="relative-underline">
                    <div class="text">
                      Upload your ID document
                    </div>

                    <div class="trigger-button">
                      Choose file
                    </div>  <!-- TRIGGER BUTTON -->
                  </div>  <!-- RELATIVE UNDERLINE -->

                </div>  <!-- TRIGGER FILE BLOCK -->
              </div>

              <div class="buttons">
                <div class="row">
                  <div class="col-6">
                    <button class="bordered-btn full-width">
                      Back
                    </button>
                  </div>
                  <div class="col-6">
                    <button class="btn btn-black">
                      Next
                    </button>
                  </div>
                </div>
              </div>  <!-- BUTTONS -->
            </div>  <!-- STEP CONTENT -->
          </div>

          <!-- FIRST STEP ПЕРВЫЙ ШАГ КОНЕЦ-->

        </div>  <!-- NORMALIZE -->

      </div>  <!-- LEFT CONTENT BLOCK -->
    </div>  <!-- LEFT -->
    <div class="right" style="align-items: flex-start;">
      <div class="right-content">

        <div class="navigation-block">
          <div class="right-menu">
            <div class="menu-link-block">
              <a href="#" class="orange-underline-link">Baked</a>
            </div>
            <div class="menu-link-block">
              <a href="#" class="orange-underline-link">Bookmark</a>
            </div>
            <div class="menu-link-block">
              <a href="#" class="orange-underline-link">My ICO's</a>
            </div>
          </div>
        </div>

        <campaign-shard/>
        <campaign-shard/>
        <campaign-shard/>
        <campaign-shard/>
        <campaign-shard/>
        <campaign-shard/>
        <campaign-shard/>
        <campaign-shard/>
        <campaign-shard/>
        <campaign-shard/>

      </div>  <!-- RIGHT CONTENT BLOCK -->
    </div>  <!-- RIGHT -->
  </div>

</template>

<script>

  export default {
    head: {
      title:'Profile KYC'
    },
    data: () => ({
      step: 1,
    }),
  }

</script>
