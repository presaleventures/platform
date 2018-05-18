<template>
  <div>
    <div class="left">
      <div class="left-content">

        <div class="normalize">

          <submit-project-steps></submit-project-steps>

          <div v-if="step == 2">  <!-- INFO STEP FIRST PART -->                     <!-- ШАГ ИНФО ЧАСТЬ ПЕРВАЯ -->
            <div class="heading-holder m-b-45">
              <h3 class="medium-heading">
                Project Information
              </h3>
            </div>  <!-- HEADING HOLDER -->

            <div>
              <form class="presale-form">
                <div class="row">
                  <div class="col-6">
                    <div class="input-block">
                      <label for="project-title" class="input-label">
                        Project Title*
                      </label>
                      <div class="form-input">
                        <input type="text" id="project-title">
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="input-block">
                      <label for="project-email" class="input-label">
                        Project Email*
                      </label>
                      <div class="form-input">
                        <input type="email" id="project-email">
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="input-block">
                      <label for="project-description" class="input-label">
                        Project Description*
                      </label>
                      <div class="form-input">
                        <input type="text" id="project-description">
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="input-block">
                      <label for="youtube-url" class="input-label">
                        Youtube URL*
                      </label>
                      <div class="form-input">
                        <input type="text" id="youtube-url">
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="input-block">
                      <label for="website-url" class="input-label">
                        Website URL*
                      </label>
                      <div class="form-input">
                        <input type="text" id="website-url">
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="input-block">
                      <label for="whitepaper-url" class="input-label">
                        White Paper URL*
                      </label>
                      <div class="form-input">
                        <input type="text" id="whitepaper-url">
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="input-block">
                      <label for="project-image" class="input-label label-trigger">
                         Project Image*
                         <span class="choose-file">Choose file</span>
                      </label>
                      <div class="form-input">
                        <input type="text" id="project-image" readonly>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="input-block" style="margin-top: 20px;">
                      <button class="btn btn-black">
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </form>  <!-- PRESALE FORM -->
            </div>
          </div>  <!-- INFO STEP FIRST PART -->                             <!-- ШАГ ИНФО ЧАСТЬ ПЕРВАЯ КОНЕЦ-->

          <div v-if="step == 2.5"> <!-- INFO STEP SECOND PART -->                              <!-- ШАГ ИНФО ЧАСТЬ ВТОРАЯ -->
            <div class="heading-holder m-b-45">
              <h3 class="medium-heading">
                Project Information
              </h3>
            </div>  <!-- HEADING HOLDER -->

            <form class="presale-form">
              <div class="row">
                <div class="col-6">
                  <div class="input-block">
                    <label for="start-time" class="input-label">
                      Pre-ICO Start Time*
                    </label>
                    <div class="form-input">
                      <input type="text" id="start-time">
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-block">
                    <label for="end-time" class="input-label">
                      Pre-ICO End Time*
                    </label>
                    <div class="form-input">
                      <input type="email" id="end-time">
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-block">
                    <label for="start-time-2" class="input-label">
                      ICO Start Time*
                    </label>
                    <div class="form-input">
                      <input type="text" id="start-time-2">
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-block">
                    <label for="end-time-2" class="input-label">
                      ICO End Time*
                    </label>
                    <div class="form-input">
                      <input type="text" id="end-time-2">
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-block">
                    <label for="category" class="input-label">
                      Category
                    </label>
                    <div class="form-input">
                      <select id="category" class="presale-select">
                        <option value="category">Category</option>
                        <option value="category">Category</option>
                        <option value="category">Category</option>
                        <option value="category">Category</option>
                        <option value="category">Category</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-block">
                    <label for="country" class="input-label">
                      Country
                    </label>
                    <div class="form-input">
                      <select id="country" class="presale-select">
                        <option value="country">Country</option>
                        <option value="country">Country</option>
                        <option value="country">Country</option>
                        <option value="country">Country</option>
                        <option value="country">Country</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-block" style="margin-top: 20px;">
                    <button class="bordered-btn full-width">
                      Back
                    </button>
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-block" style="margin-top: 20px;">
                    <button class="btn btn-black">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </form>  <!-- PRESALE FORM -->
          </div>  <!-- INFO STEP SECOND PART -->                              <!-- ШАГ ИНФО ЧАСТЬ ВТОРАЯ КОНЕЦ-->

          <div v-if="step == 3">                                              <!-- ШАГ 3 КОМАНДА НАЧАЛО-->                         
            <div class="heading-holder m-b-30">
              <h3 class="medium-heading">
                Project Contacts
              </h3>
            </div>  <!-- HEADING HOLDER -->

            <div class="add-team-member-form">
              <div class="form-heading m-b-30">
                <div class="heading-16">
                  Team members
                </div>

                <div style="margin-left: 115px;">
                  <button class="small-black-btn">
                    <i class="fa fa-plus"></i>
                    <span>Add members</span>
                  </button>
                </div>
              </div>

              <form class="presale-form">
                <div class="row">
                  <div class="col-6">
                    <div class="input-block">
                      <label for="member-name" class="input-label">
                        Full Name*
                      </label>
                      <div class="form-input">
                        <input type="text" id="member-name">
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="input-block">
                      <label for="member-position" class="input-label">
                        Position*
                      </label>
                      <div class="form-input">
                        <input type="email" id="member-position">
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="input-block">
                      <label for="member-bio" class="input-label">
                        Biography*
                      </label>
                      <div class="form-input">
                        <input type="text" id="member-bio">
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="input-block">
                      <label for="member-linked-url" class="input-label">
                        LinkedIn URL*
                      </label>
                      <div class="form-input">
                        <input type="text" id="member-linked-url">
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="input-block">
                      <label for="project-image" class="input-label label-trigger">
                         Member Image*
                         <span class="choose-file">Choose file</span>
                      </label>
                      <div class="form-input">
                        <input type="text" id="member-image" readonly>
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="input-block" style="margin-top: 20px;">
                      <button class="bordered-btn full-width">
                        Back
                      </button>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="input-block" style="margin-top: 20px;">
                      <button class="btn btn-black">
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </form>  <!-- PRESALE FORM -->
            </div>  <!-- ADD TEAM MEMBER FORM -->
          </div>  <!-- STEP 3 TEAM -->                                        <!-- ШАГ 3 КОМАНДА КОНЕЦ-->

          <div v-if="step == 4">                                              <!-- ШАГ 4 НАЧАЛО -->
            <div class="heading-holder m-b-45">
              <h3 class="medium-heading">
                Tokenomics
              </h3>
            </div>  <!-- HEADING HOLDER -->

            <form class="presale-form">
              <div class="row">
                <div class="col-6">
                  <div class="input-block">
                    <label for="token-name" class="input-label">
                      Token Name*
                    </label>
                    <div class="form-input">
                      <input type="text" id="token-name">
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-block">
                    <label for="token-price" class="input-label">
                      ICO Token Price (USD)*
                    </label>
                    <div class="form-input">
                      <input type="email" id="token-price">
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-block">
                    <label for="token-amount" class="input-label">
                      Total Token Amount*
                    </label>
                    <div class="form-input">
                      <input type="text" id="token-amount">
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-block">
                    <label for="pre-token-amount" class="input-label">
                      Pre-ICO Token Amount*
                    </label>
                    <div class="form-input">
                      <input type="text" id="pre-token-amount">
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-block">
                    <label for="category" class="input-label">
                      Pre-ICO Discount*
                    </label>
                    <div class="form-input">
                      <select id="category" class="presale-select">
                        <option value="category">10%</option>
                        <option value="category">20%</option>
                        <option value="category">30%</option>
                        <option value="category">40%</option>
                        <option value="category">50%</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="col-6 align-self-end">
                  <div class="input-block">
                    <label class="input-label">
                      Project Attractiveness
                    </label>
                    <div class="form-input" style="margin-top: 24px;">
                      <orange-progress-no-gradient/>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-block" style="margin-top: 20px;">
                    <button class="bordered-btn full-width">
                      Back
                    </button>
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-block" style="margin-top: 20px;">
                    <button class="btn btn-black">
                      Submit for Review
                    </button>
                  </div>
                </div>
              </div>
            </form>  <!-- PRESALE FORM -->
          </div>  <!-- STEP 4 -->                                             <!-- ШАГ 4 КОНЕЦ -->
  
        </div>  <!-- NORMALIZE -->

      </div>  <!-- LEFT CONTENT BLOCK -->
    </div>  <!-- LEFT -->
    <div class="right" style="align-items: flex-start;">
      <div class="right-content">
        
        <div v-if="step != 3">
          <div class="right-top-holder">
            <h3 class="medium-heading">
              Presale Campaigns
            </h3>
          </div>

          <div class="text-content m-b-15">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero earum qui excepturi voluptas necessitatibus hic maiores voluptate placeat. Neque sit in similique atque deserunt ad ducimus iure delectus ex blanditiis minima officia doloribus repellendus.
          </div>

          <div class="m-b-15">
            <campaign-shard/>
          </div>

          <div class="white-box-30 m-b-15">
            <div class="row">
              <div class="col-12">
                <div class="heading-21 m-b-30">
                  Pre-ICO
                </div>
              </div>

              <div class="col-6">
                <div class="m-b-15">
                  <div class="gray-subheading">
                    Starts In
                  </div>
                  <div class="heading-18">
                    5 April 2018, 14:12 UTC
                  </div>
                </div>

                <div>
                  <div class="gray-subheading">
                    Pre-ICO Toke Amount
                  </div>
                  <div class="heading-18">
                    200000
                  </div>
                </div>
              </div>

              <div class="col-6">
                <div class="m-b-15">
                  <div class="gray-subheading">
                    Ends In
                  </div>
                  <div class="heading-18">
                    9 April 2018, 16:12 UTC
                  </div>
                </div>

                <div>
                  <div class="gray-subheading">
                    Pre-ICO Toke Amount
                  </div>
                  <div class="heading-18">
                    20%
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="white-box-30">

            <div class="row">
              <div class="col-12">
                <div class="heading-21 m-b-30">
                  ICO
                </div>
              </div>

              <div class="col-6">
                <div class="m-b-15">
                  <div class="gray-subheading">
                    Starts In
                  </div>
                  <div class="heading-18">
                    5 April 2018, 14:12 UTC
                  </div>
                </div>
              </div>

              <div class="col-6">
                <div class="m-b-15">
                  <div class="gray-subheading">
                    Ends In
                  </div>
                  <div class="heading-18">
                    9 April 2018, 16:12 UTC
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        <div v-else>
          <div class="right-top-holder">
            <h3 class="medium-heading">
            Team Members
            </h3>
          </div>

          <div class="text-content m-b-30">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero earum qui excepturi voluptas necessitatibus hic maiores voluptate placeat. Neque sit in similique atque deserunt ad ducimus iure delectus ex blanditiis minima officia doloribus repellendus.
          </div>

          <team-member-shard/>
          <team-member-shard/>
          <team-member-shard/>
          <team-member-shard/>
          <team-member-shard/>
          <team-member-shard/>
          <team-member-shard/>
          <team-member-shard/>
          <team-member-shard/>
          <team-member-shard/>
        </div>

      </div>  <!-- RIGHT CONTENT BLOCK -->
    </div>  <!-- RIGHT -->
  </div>

</template>

<script>

  import SubmitProjectSteps from '~/components/SubmitProjectSteps'

  export default {
    components: {
      SubmitProjectSteps
    },
    data: () => ({
      step: 4
    }),

    mounted(){
      
    },

    methods: {

    }
  }

</script>
