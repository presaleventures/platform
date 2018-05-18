<template>

  <div>
    <div class="left">
      <div class="left-content">

        <div class="normalize">
          <div class="heading-holder m-b-45">
            <div class="black-heading">
              Pre-ICO Funding Marketplace
            </div>
          </div>  <!-- HEADING HOLDER -->
          
          <div class="full-shard-info">
            <div class="shard-description">
              <div class="medium-heading">
                Hot offer
              </div>
              <div class="hot-offer">
                <img src="/hot_offer.png">
              </div>
              <div class="gray-subheading">
                Ends in
              </div>
              <div class="regular-text">
                12 days 14:23:16
              </div>
            </div>

            <div class="full-shard-buttons">
              <button class="btn btn-black">
                Buy Tokens
              </button>
            </div>
          </div>  <!-- FULL SHARD INFO -->

        </div>  <!-- NORMALIZE -->

      </div>  <!-- LEFT CONTENT BLOCK -->
    </div>  <!-- LEFT -->
    <div class="right" style="align-items: flex-start;">
      <div class="right-content">

        <div class="navigation-block">
          <div class="right-menu">
            <div class="menu-link-block">
              <a href="#" class="orange-underline-link">Overview</a>
            </div>
            <div class="menu-link-block">
              <a href="#" class="orange-underline-link">Team</a>
            </div>
            <div class="menu-link-block">
              <a href="#" class="orange-underline-link">Rating</a>
            </div>
            <div class="menu-link-block">
              <a href="#" class="orange-underline-link">Roadmap</a>
            </div>
            <div class="menu-link-block">
              <a href="#" class="orange-underline-link">Whitepaper</a>
            </div>
          </div>
        </div>

        <!-- TEAM BLOCK-->
        
        <div style="display: none;"> 
          <div class="m-b-15 add-heading">
            <div class="medium-heading">
              Team
            </div>
            <div>
              <button class="btn btn-black" @click="openForm">
                <span>Add member</span>
              </button>
            </div>
          </div>

          <div>

            <transition 
              enter-active-class="animated rollIn"
              leave-active-class="animated rollOut"
            >

              <div class="form-toggle" v-show="formOpen">
                <div class="white-box-15">

                  <form class="presale-form add-member-form">

                    <div class="row">

                      <div class="col-6">
                        <div class="input-block">
                          <label for="username-first" class="input-label">Full name</label> 
                          <input type="text" id="username-first" placeholder="Member first name">
                        </div>
                      </div>

                      <div class="col-6">
                        <div class="input-block">
                          <label for="username-last" class="input-label">Last name</label> 
                          <input type="text" id="username-last" placeholder="Member last name">
                        </div>
                      </div>

                      <div class="col-6">
                        <div class="input-block">
                          <label for="position" class="input-label">Position</label>
                          <input type="text" id="position" placeholder="Member position">
                        </div>
                      </div>

                      <div class="col-6">
                        <div class="input-block">
                          <label for="profile" class="input-label">LinkedIn Profile</label>
                          <input type="text" id="profile" placeholder="Member LinkedIn Profile">
                        </div>
                      </div>
                      
                      <div class="col-12">
                        <div class="input-block">
                          <label class="input-label">Biography</label>
                          <div class="transparent-textarea-holder">
                            <textarea class="transparent-textarea full-width" placeholder="Member short biography.."></textarea>
                          </div>  <!-- TRANSPARENT TEXTAREA HOLDER -->
                        </div>
                      </div>

                      <div class="col-12">
                        <div class="buttons">
                          <div>
                            <button class="bordered-btn full-width">
                              <span>Cancel</span>
                            </button>
                          </div>

                          <div>
                            <button class="btn btn-black full-width">
                              <span>Add</span>
                            </button>
                          </div>
                        </div>  <!-- BUTTONS -->
                      </div>

                    </div>  <!-- ROW -->
              
                  </form> <!-- PRESALE FORM ADD MEMBER FORM-->

                </div>   <!-- WHITE BOX -->
              </div>  <!-- FORM TOGGLE -->
            </transition>
            
            <div>
              <rating-shard/>
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

          </div>

        </div>

        <!-- TEAM BLOCK -->

        <!-- ROADMAP BLOCK -->

        <div>
          <div class="m-b-15 add-heading">
            <div class="medium-heading">
              Roadmap
            </div>
            <div>
              <button class="btn btn-black" @click="openFormRoadmap">
                <span>Add roadmap</span>
              </button>
            </div>
          </div>

          <transition
            enter-active-class="animated fadeInRight"
            leave-active-class="animated fadeOutRight"
          >
            <div class="add-roadmap-form" v-if="formOpenRoadmap">

              <form class="presale-form">
                <div class="add-date">
                  <div class="inputs">
                    <input type="text" placeholder="Q7">
                    <input type="text" placeholder="2018">
                  </div>
                </div>  <!-- ADD DATE -->

                <div class="add-content">
                  <textarea class="transparent-textarea roadmap-textarea full-width" placeholder="Description.."></textarea>

                  <div class="buttons">
                    <div class="row">
                      <div class="col-6">
                        <button class="bordered-btn full-width">Cancel</button>
                      </div>
                      <div class="col-6">
                        <button class="btn btn-black">Save</button>
                      </div>
                    </div>
                  </div>  <!-- BUTTONS -->
                </div>  <!-- ADD CONTENT -->

              </form>

            </div>  <!-- ADD ROADMAP FORM -->
          </transition>

          <div class="roadmap">

            <roadmap-shard/>
            <roadmap-shard/>
            <roadmap-shard/>
            <roadmap-shard/>
            <roadmap-shard/>
            <roadmap-shard/>
            <roadmap-shard/>
            <roadmap-shard/>
            <roadmap-shard/>
            <roadmap-shard/>
            <roadmap-shard/>

          </div>  <!-- ROADMAP -->

        </div>

        <!-- ROADMAP BLOCK -->

      </div>  <!-- RIGHT CONTENT BLOCK -->
    </div>  <!-- RIGHT -->
  </div>

</template>

<script>

  export default {
    head: {
      title:'Edit ICO'
    },
    data: () => ({
      formOpen: false,
      formOpenRoadmap: false,
    }),
    methods: {
      openForm () {
        this.formOpen = !this.formOpen
      },
      openFormRoadmap () {
        this.formOpenRoadmap = !this.formOpenRoadmap
      },
    },
  }

</script>
