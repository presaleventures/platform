<template>
  <div>
    <div class="left">
      <div class="left-content">

        <div class="normalize">

          <submit-project-steps :step="nowStep"></submit-project-steps>

          <div class="test" v-if="nowStep == 'information'">  <!-- INFO STEP FIRST PART -->
            <!-- ШАГ ИНФО ЧАСТЬ ПЕРВАЯ -->
            <div class="heading-holder m-b-45">
              <h3 class="medium-heading">
                Project Information
              </h3>
            </div>  <!-- HEADING HOLDER -->

            <div>
              <form class="presale-form">
                <div class="row align-items-end">
                  <div class="col-6">
                    <div class="input-block">
                      <label for="project-title" class="input-label">
                        Project Title*
                      </label>
                      <div class="form-input">
                        <input type="text"
                               id="project-title"
                               v-model="form.display_name"
                               :class="{ 'is-invalid': form.errors.has('display_name') }">
                        <has-error :form="form" field="display_name"/>
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="input-block">
                      <label for="project-email" class="input-label">
                        Project Email*
                      </label>
                      <div class="form-input">
                        <input type="email"
                               id="project-email"
                               v-model="form.email"
                               :class="{ 'is-invalid': form.errors.has('email') }">
                        <has-error :form="form" field="email"/>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="input-block">
                      <label for="project-description" class="input-label">
                        Project Description*
                      </label>
                      <div class="form-input">
                        <input type="text"
                               id="project-description"
                               v-model="form.description"
                               :class="{ 'is-invalid': form.errors.has('description') }">
                        <has-error :form="form" field="description"/>
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="input-block">
                      <label for="youtube-url" class="input-label">
                        Youtube URL
                      </label>
                      <div class="form-input">
                        <input type="text"
                               id="youtube-url"
                               v-model="form.youtube_url"
                               :class="{ 'is-invalid': form.errors.has('youtube_url') }">
                        <has-error :form="form" field="youtube_url"/>
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="input-block">
                      <label for="website-url" class="input-label">
                        Website URL*
                      </label>
                      <div class="form-input">
                        <input type="text"
                               id="website-url"
                               v-model="form.website_url"
                               :class="{ 'is-invalid': form.errors.has('website_url') }">
                        <has-error :form="form" field="website_url"/>
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="input-block">
                      <label for="whitepaper-url" class="input-label">
                        White Paper URL*
                      </label>
                      <div class="form-input">
                        <input type="text"
                               id="whitepaper-url"
                               v-model="form.white_paper_url"
                               :class="{ 'is-invalid': form.errors.has('white_paper_url') }">
                        <has-error :form="form" field="white_paper_url"/>
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="input-block">
                      <button class="bordered-btn full-width" @click.prevent.self="uploadProjectImageModal = true">
                        Project image*
                      </button>
                      <has-error :form="form" field="project_image"/>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="input-block" style="margin-top: 20px;">
                      <button class="btn btn-black" @click.prevent.self="changeStep('details')">
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </form>  <!-- PRESALE FORM -->
            </div>
          </div>  <!-- INFO STEP FIRST PART -->                             <!-- ШАГ ИНФО ЧАСТЬ ПЕРВАЯ КОНЕЦ-->

          <div v-if="nowStep == 'details'"> <!-- INFO STEP SECOND PART -->
            <!-- ШАГ ИНФО ЧАСТЬ ВТОРАЯ -->
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
                      Pre-ICO Start Date*
                    </label>
                    <div class="form-input">
                      <datepicker v-model="form.pre_ico_start"
                                  :disabledDates="disabledDates"
                                  :class="{ 'is-invalid': form.errors.has('pre_ico_start') }"></datepicker>
                      <has-error :form="form" field="pre_ico_start"/>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-block">
                    <label for="end-time" class="input-label">
                      Pre-ICO End Date*
                    </label>
                    <div class="form-input">
                      <datepicker v-model="form.pre_ico_end"
                                  :disabledDates="disabledDates"
                                  :class="{ 'is-invalid': form.errors.has('pre_ico_end') }"></datepicker>
                      <has-error :form="form" field="pre_ico_end"/>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-block">
                    <label for="start-time-2" class="input-label">
                      ICO Start Date*
                    </label>
                    <div class="form-input">
                      <datepicker v-model="form.ico_start"
                                  :disabledDates="disabledDates"
                                  :class="{ 'is-invalid': form.errors.has('ico_start') }"></datepicker>
                      <has-error :form="form" field="ico_start"/>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-block">
                    <label for="end-time-2" class="input-label">
                      ICO End Date*
                    </label>
                    <div class="form-input">
                      <datepicker v-model="form.ico_end"
                                  :class="{ 'is-invalid': form.errors.has('ico_end') }"
                                  :disabledDates="disabledDates"></datepicker>
                      <has-error :form="form" field="ico_end"/>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-block">
                    <label for="category" class="input-label">
                      Category
                    </label>
                    <div class="form-input">
                      <v-select :options="category_list"
                                maxHeight="200px"
                                v-model="form.category"
                                label="display_name"
                                :class="{ 'is-invalid': form.errors.has('project_category_id') }">
                      </v-select>
                      <has-error :form="form" field="project_category_id"/>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-block">
                    <label for="country" class="input-label">
                      Country
                    </label>
                    <div class="form-input">
                      <v-select :options="country_list"
                                maxHeight="200px"
                                v-model="form.country"
                                label="name"
                                :class="{ 'is-invalid': form.errors.has('country_id') }">
                        <template slot="option" slot-scope="option">
                          <div class="flex-row-start-center-nowrap">
                            <img :src="'/images/flags/'+option.flag" alt="">
                            <span class="country-option-name">{{ option.name }}</span>
                          </div>
                        </template>
                      </v-select>
                      <has-error :form="form" field="country_id"/>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-block" style="margin-top: 20px;">
                    <button class="bordered-btn full-width" @click.prevent.self="changeBackStep('information')">
                      Back
                    </button>
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-block" style="margin-top: 20px;">
                    <button class="btn btn-black" @click.prevent.self="changeStep('tokenomics')">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </form>  <!-- PRESALE FORM -->
          </div>  <!-- INFO STEP SECOND PART -->                              <!-- ШАГ ИНФО ЧАСТЬ ВТОРАЯ КОНЕЦ-->

          <div v-if="nowStep == 'tokenomics'">                                              <!-- ШАГ 4 НАЧАЛО -->
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
                      <input type="text"
                             id="token-name"
                             v-model="form.token_name"
                             :class="{ 'is-invalid': form.errors.has('token_name') }">
                      <has-error :form="form" field="token_name"/>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-block">
                    <label for="token-price" class="input-label">
                      ICO Token Price (ENT)*
                    </label>
                    <div class="form-input">
                      <input type="test"
                             id="token-price"
                             v-model="form.ico_token_price"
                             :class="{ 'is-invalid': form.errors.has('ico_token_price') }">
                      <has-error :form="form" field="ico_token_price"/>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-block">
                    <label for="token-amount" class="input-label">
                      Total Token Amount*
                    </label>
                    <div class="form-input">
                      <input type="text"
                             id="token-amount"
                             v-model="form.total_token_amount"
                             :class="{ 'is-invalid': form.errors.has('total_token_amount') }">
                      <has-error :form="form" field="total_token_amount"/>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-block">
                    <label for="pre-token-amount" class="input-label">
                      Pre-ICO Token Amount*
                    </label>
                    <div class="form-input">
                      <input type="text"
                             id="pre-token-amount"
                             v-model="form.pre_ico_token_amount"
                             :class="{ 'is-invalid': form.errors.has('pre_ico_token_amount') }">
                      <has-error :form="form" field="pre_ico_token_amount"/>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-block">
                    <label for="category" class="input-label">
                      Pre-ICO Discount*
                    </label>
                    <div class="form-input">
                      <vue-slider ref="slider"
                                  :min="10"
                                  :max="90"
                                  v-model="form.pre_ico_discount">
                      </vue-slider>
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
                    <button class="bordered-btn full-width" @click.prevent.self="changeBackStep('details')">
                      Back
                    </button>
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-block" style="margin-top: 20px;">
                    <button class="btn btn-black" @click.prevent.self="submitProject()">
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
    <div class="right" style="background: url(shadow.png) #f4f6f8; align-items: flex-start;">
      <div class="right-content">

        <div>
          <div class="right-top-holder">
            <h3 class="medium-heading">
              Presale Campaigns
            </h3>
          </div>

          <div class="text-content m-b-15">
            {{ form.description }}
          </div>

          <div class="m-b-15">
            <campaign-shard :project="form"/>
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
                    {{ form.pre_ico_start | moment("MMMM Do YYYY")}}
                  </div>
                </div>

                <div>
                  <div class="gray-subheading">
                    Pre-ICO Token Amount
                  </div>
                  <div class="heading-18">
                    {{ form.pre_ico_token_amount }}
                  </div>
                </div>
              </div>

              <div class="col-6">
                <div class="m-b-15">
                  <div class="gray-subheading">
                    Ends In
                  </div>
                  <div class="heading-18">
                    {{ form.pre_ico_end | moment("MMMM Do YYYY")}}
                  </div>
                </div>

                <div>
                  <div class="gray-subheading">
                    Pre-ICO Token Discount
                  </div>
                  <div class="heading-18">
                    {{ form.pre_ico_discount }}%
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
                    {{ form.ico_start | moment("MMMM Do YYYY")}}
                  </div>
                </div>
              </div>

              <div class="col-6">
                <div class="m-b-15">
                  <div class="gray-subheading">
                    Ends In
                  </div>
                  <div class="heading-18">
                    {{ form.ico_end | moment("MMMM Do YYYY")}}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>  <!-- RIGHT CONTENT BLOCK -->
    </div>  <!-- RIGHT -->
    <!-- Image cropper -->
    <my-upload field="avatar"
               @crop-success="cropSuccess"
               :withCredentials="true"
               v-model="uploadProjectImageModal"
               langType="en"
               :noCircle="true"
               :width="555"
               :height="245"></my-upload>
    <!-- /Image cropper -->
  </div>

</template>

<script>

  import SubmitProjectSteps from '~/components/SubmitProjectSteps'
  import Form from 'vform'
  import axios from 'axios'

  import {mapGetters} from 'vuex'

  function getCategoryList () {
    return axios.get('/category')
  }

  function getCountryList() {
    return axios.get('/country')
  }

  export default {
    components: {
      SubmitProjectSteps
    },
    data: () => ({
      nowStep: 'information',
      uploadProjectImageModal: false,
      disabledDates: {
        to: new Date()
      },
      form: new Form({
        name: null,
        display_name: null,
        email: null,
        description: null,
        youtube_url: null,
        website_url: null,
        white_paper_url: null,
        project_image: null,
        token_name: null,
        ico_token_price: 0,
        pre_ico_token_amount: 0,
        total_token_amount: 0,
        pre_ico_token_price: 0,
        pre_ico_discount: 65,
        pre_ico_start: null,
        pre_ico_end: null,
        ico_start: null,
        ico_end: null,
        project_category_id: null,
        country_id: null,
        rating: {
          total: 0
        },
        category: null,
        country: null,
        image_url_small: null,
      }),
    }),

    asyncData () {
      let data = {
        country_list: [],
        category_list: []
      }

      return axios.all([
        getCategoryList(),
        getCountryList()
      ])
        .then(axios.spread((category_list, country_list) => {
          data.category_list = category_list.data.data
          data.country_list = country_list.data.data
          return data
        }))
        .catch((err) => {
          return data
        })
    },

    created () {
      if (!this.user) {
        this.$router.push('/register/project')
        return
      }
    },

    watch: {
      category () {
        if (this.form.category) {
          this.form.project_category_id = this.form.category.id
        } else {
          this.form.project_category_id = null
        }
      },
      country () {
        if (this.form.country) {
          this.form.country_id = this.form.country.id
        } else {
          this.form.country_id = null
        }
      }
    },

    computed: {
      ...mapGetters({
        user: 'auth/user'
      })
    },

    methods: {
      changeStep (stepName) {
        if (this.form.country) {
          this.form.country_id = this.form.country.id
        } else {
          this.form.country_id = null
        }
        if (this.form.category) {
          this.form.project_category_id = this.form.category.id
        } else {
          this.form.project_category_id = null
        }

        this.preSubmitDateFormatter()

        this.form.post('/project/step/' + stepName)
          .then((response) => {
            this.nowStep = stepName
          })
      },

      changeBackStep (stepName) {
        this.nowStep = stepName
      },

      preSubmitDateFormatter () {
        let dateFormat = 'YYYY-MM-DD'
        this.form.pre_ico_start = this.$moment(this.form.pre_ico_start).format(dateFormat) + ' 00:00:00'
        this.form.pre_ico_end = this.$moment(this.form.pre_ico_end).format(dateFormat) + ' 00:00:00'
        this.form.ico_start = this.$moment(this.form.ico_start).format(dateFormat) + ' 00:00:00'
        this.form.ico_end = this.$moment(this.form.ico_end).format(dateFormat) + ' 00:00:00'
      },

      submitProject () {

        this.preSubmitDateFormatter()

        this.form.post('/project')
          .then((response) => {
            this.$router.push('/profile/' + this.user.name + '/my_ico')
          })
      },

      cropSuccess(imgDataUrl, field) {
        this.form.image_url_small = imgDataUrl
        this.form.project_image = imgDataUrl
      }
    }
  }

</script>

