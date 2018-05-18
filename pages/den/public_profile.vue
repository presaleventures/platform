<template>
  <div>
    <div class="left">
      <div class="left-content">

        <div class="normalize">
          <div class="m-b-30">
            <div class="medium-heading">
              Public profile
            </div>
          </div>

          <div class="m-b-30">
            <div class="public-profile">
              
              <div class="main-info">
                <div class="avatar-holder">
                  <div class="avatar" style="background: url('/JackSparrowProfile.jpg');"></div>
                </div>  <!-- AVATAR HOLDER-->

                <div class="username regular-text m-b-15">
                  Jack Sparrow
                </div>

                <div class="user-bio text-content m-b-30">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, neque ipsam minima dolores odit eum, reiciendis voluptatem, laudantium, in dicta similique ut excepturi consequuntur sit suscipit facere ea repudiandae labore soluta culpa adipisci voluptatum explicabo incidunt id? Quae temporibus fugiat nesciunt inventore deserunt. Ex nam aperiam amet asperiores dicta, ad. Dignissimos error libero quidem ipsum iste omnis possimus dolorum quisquam! Exercitationem nobis rem tempora provident quod minima assumenda hic quo alias labore sapiente amet beatae quaerat officia quisquam fugiat libero debitis quos tenetur, iusto repudiandae autem ullam vitae? Omnis tenetur rerum facilis ad voluptate voluptatibus mollitia, magnam cum consequatur. Odit!
                </div>

                <div class="row">
                  <div class="col-6">

                    <div>
                      <div class="regular-text m-b-10">
                        Position
                      </div>
                      <div class="text-content m-b-15">
                        SEO
                      </div>
                    </div>

                    <div>
                      <div class="regular-text m-b-10">
                        First name
                      </div>
                      <div class="text-content m-b-15">
                        Denis Golubev
                      </div>
                    </div>

                    <div>
                      <a href="#" class="linked-in-link">
                        <i class="fa fa-linkedin"></i>
                        LinkedIn Profile
                      </a>
                    </div>

                  </div>  <!-- COL 6 -->

                  <div class="col-6">

                    <div>
                      <div class="regular-text m-b-10">
                        Email
                      </div>
                      <div class="text-content m-b-15">
                        morgoth@gmail.com
                      </div>
                    </div>

                    <div>
                      <div class="regular-text m-b-10">
                        Last name
                      </div>
                      <div class="text-content m-b-15">
                        Denchik Blagodarochka
                      </div>
                    </div>

                  </div>  <!-- COL 6 -->
                </div>  <!-- ROW -->

              </div>  <!-- MAIN INFO -->

            </div>  <!-- PUBLIC PROFILE -->
          </div>
        </div>  <!-- NORMALIZE -->

      </div>  <!-- LEFT CONTENT BLOCK -->
    </div>  <!-- LEFT -->
    <div class="right" style="align-items: flex-start;">
      <div class="right-content">

        <div class="navigation-block">
          <div class="right-menu">
            <div class="menu-link-block">
              <a href="#" class="orange-underline-link">My ICO's</a>
            </div>
            <div class="menu-link-block">
              <a href="#" class="orange-underline-link">Ratings</a>
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
      title:'Public Profile'
    },
  }

</script>
