<template>
  <div>
    <div class="left">
      <div class="left-content">

        <div class="normalize">
          <div class="m-b-30">
            <div class="medium-heading">
              Edit profile
            </div>
          </div>

          <div class="edit-profile-block">
            <div class="main-info m-b-30">
              <div class="avatar" style="background: url(default_avatar.png);">
                <div class="change-avatar">
                  <div class="inner-change-avatar">
                    <span>Change <br> photo</span>
                  </div>
                </div>  <!-- CHANGE AVATAR -->
              </div>
              <div class="user-info">
                <div class="username m-b-15">
                  <div class="regular-text">
                    Username BIO
                    <i :class="['fa', 'fa-pencil', {'text-orange': userBio}]" @click="areaFocus"></i>
                  </div>
                </div>
                <div class="user-bio">
                  <textarea :class="['text-content', 'user-edit-textarea', {'area-full': userBio}]" :readonly="!userBio" :autofocus="userBio" ref="textarea">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit cumque veniam in eos placeat autem tenetur facilis libero, adipisci, qui ullam quia repellat id dolor ipsa, voluptates quisquam, excepturi blanditiis illo. Voluptates libero commodi alias neque a unde omnis laboriosam ducimus fugiat minus nobis quaerat doloribus laborum sit, non praesentium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit cumque veniam in eos placeat autem tenetur facilis libero, adipisci, qui ullam quia repellat id dolor ipsa, voluptates quisquam, excepturi blanditiis illo. Voluptates libero commodi alias neque a unde omnis laboriosam ducimus fugiat minus nobis quaerat doloribus laborum sit, non praesentium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit cumque veniam in eos placeat autem tenetur facilis libero, adipisci, qui ullam quia repellat id dolor ipsa, voluptates quisquam, excepturi blanditiis illo. Voluptates libero commodi alias neque a unde omnis laboriosam ducimus fugiat minus nobis quaerat doloribus laborum sit, non praesentium.</textarea>
                </div>
              </div>
            </div>  <!-- MAIN INFO -->

            <div class="additional-info presale-form">
              <div class="row align-items-end">
                <div class="col-6">
                  <div class="input-block">
                    <label for="position" class="input-label">
                      Position
                    </label>
                    <div class="form-input">
                      <input type="text" id="position" value="SEO">
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-block">
                    <label for="email" class="input-label">
                      Email
                    </label>
                    <div class="form-input">
                      <input type="text" id="email" value="acryingnazgul@gmail.com" readonly>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-block">
                    <label for="first-name" class="input-label">
                      First name
                    </label>
                    <div class="form-input">
                      <input type="text" id="first-name" value="Firstname">
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-block">
                    <label for="last-name" class="input-label">
                      Last name
                    </label>
                    <div class="form-input">
                      <input type="text" id="last-name" value="Lastname">
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-block">
                    <label for="Phone" class="input-label">
                      Phone
                    </label>
                    <div class="form-input">
                      <input type="text" id="Phone" value="+380962151471">
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-block">
                    <button class="btn black-bordered-btn">
                      Verify phone number
                    </button>
                  </div>
                </div>
                <div class="col-12 m-b-15">
                  <div class="input-block">
                    <label for="address" class="input-label">
                      Address
                    </label>
                    <div class="form-input">
                      <input type="text" id="address" value="Tortuga, Unknown Pirate Ship">
                    </div>
                  </div>
                </div>

                <div class="col-6">
                  <div class="input-block">
                    <button class="blue-bordered-btn lin-btn full-width">
                      <i class="fa fa-linkedin"></i>
                      LinkedIn Profile
                    </button>
                  </div>
                </div>

                <div class="col-6">
                  <div class="input-block">
                    <button class="btn btn-black">
                      Save changes
                    </button>
                  </div>
                </div>

              </div>
            </div>  <!-- ADDITIONAL INFO -->
          </div>  <!-- EDIT PROFILE BLOCK -->
        </div>

      </div>  <!-- LEFT CONTENT BLOCK -->
    </div>  <!-- LEFT -->
    <div class="right">
      <div class="right-content">
        <div class="navigation-block">
          <div class="right-menu">
            <div class="menu-link-block">
              <a href="#" class="orange-underline-link">Backed</a>
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
    components: {

    },
    data: () => ({
      userBio: false,
    }),
    mounted(){
      
    },
    methods: {
      areaFocus() {
        this.userBio = !this.userBio

        if (this.userBio) {
          this.$refs.textarea.focus()
          this.$refs.textarea.style.height = this.$refs.textarea.scrollHeight + 'px'
        }else{
          this.$refs.textarea.blur()
          this.$refs.textarea.removeAttribute('style')
        }
      },
    }
  }

</script>
