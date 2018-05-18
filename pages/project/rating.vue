<template>
  <div>
  	<div class="m-b-15 add-heading">
      <div class="medium-heading">
        Rating
      </div>
      <div>
        <button class="btn btn-black" @click="formOpen = !formOpen">
          <span>Add review</span>
        </button>
      </div>
    </div>

    <transition
      name="fade"
    >

      <div class="m-b-15 add-rating-form" v-if="formOpen">
        <div class="row">

          <div class="col-6">
            <div class="input-block m-b-15">
              <div class="input-label heading-16 m-b-30">
                Team*
              </div>
              <div class="form-input">
                  <vue-slider :min="1"
                              :max="10"
                              v-model="value"
                              ref="slider1"
                  >
                  </vue-slider>
              </div>
            </div>
          </div>

          <div class="col-6">
            <div class="input-block m-b-15">
              <div class="input-label heading-16 m-b-30">
                Vision*
              </div>
              <div class="form-input">
                  <vue-slider :min="1"
                              :max="10"
                              v-model="value"
                              ref="slider2"
                  >
                  </vue-slider>
              </div>
            </div>
          </div>

          <div class="col-6">
            <div class="input-block m-b-15">
              <div class="input-label heading-16 m-b-30">
                Product*
              </div>
              <div class="form-input">
                  <vue-slider :min="1"
                              :max="10"
                              v-model="value"
                              ref="slider3"
                  >
                  </vue-slider>
              </div>
            </div>
          </div>

          <div class="col-6">
            <div class="input-block m-b-15">
              <div class="input-label heading-16 m-b-30">
                Token utility*
              </div>
              <div class="form-input">
                  <vue-slider :min="1"
                              :max="10"
                              v-model="value"
                              ref="slider4"
                  >
                  </vue-slider>
              </div>
            </div>
          </div>

          <div class="col-12">
            <div class="m-b-15">
              <div class="m-b-15">
                <div class="heading-16">
                  Project review
                </div>
              </div>
              <div>
                <textarea rows="5" class="rating-textarea" placeholder="Project review.."></textarea>
              </div>
            </div>
          </div>

          <div class="col-6">
            <div>
              <button class="bordered-btn full-width">Cancel</button>
            </div>
          </div>

          <div class="col-6">
            <div>
              <button class="btn btn-black">Save</button>
            </div>
          </div>

        </div>  <!-- ROW -->
      </div>  <!-- ADD RATING FORM -->

    </transition>

  	<div>
  		<rating-shard/>
  		<rating-shard/>
  		<rating-shard/>
  		<rating-shard/>
  		<rating-shard/>
  		<rating-shard/>
  		<rating-shard/>
  	</div>
    
  </div>
</template>

<script>
  export default {
    name: "rating",
    data: () => ({
      formOpen: false,
      value: 1,
    }),
    watch: {
      formOpen(val) {
        if (val) {
          this.$nextTick(() => {
            this.$refs.slider1.refresh()
            this.$refs.slider2.refresh()
            this.$refs.slider3.refresh()
            this.$refs.slider4.refresh()
          })
        }
      },
    },
    methods: {
      
    },
  }
</script>

<style scoped>

</style>