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
                                    <div class="avatar" :style="'background: url('+avatar+');'"></div>
                                </div>  <!-- AVATAR HOLDER-->

                                <div class="username regular-text m-b-15">
                                    {{ user.name }}
                                </div>

                                <div class="user-bio text-content m-b-30">
                                    {{ user.biography }}
                                </div>

                                <div class="row">
                                    <div class="col-6">

                                        <div>
                                            <div class="regular-text m-b-10">
                                                Position
                                            </div>
                                            <div class="text-content m-b-15">
                                                {{ user.position }}
                                            </div>
                                        </div>

                                        <div>
                                            <div class="regular-text m-b-10">
                                                First name
                                            </div>
                                            <div class="text-content m-b-15">
                                                {{ user.first_name }}
                                            </div>
                                        </div>

                                        <div>
                                            <a :href="user.linkedin_url" target="_blank" class="linked-in-link">
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
                                                {{ user.email }}
                                            </div>
                                        </div>

                                        <div>
                                            <div class="regular-text m-b-10">
                                                Last name
                                            </div>
                                            <div class="text-content m-b-15">
                                                {{ user.last_name }}
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
        <div class="right" style="background: url(/shadow.png) #f4f6f8; align-items: flex-start;">
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
  import {mapGetters} from 'vuex'

  export default {
    middleware: ['auth'],

    name: 'info',

    head: {
      title: 'Public Profile'
    },

    computed: {
      ...mapGetters({
        user: 'auth/user',
        avatar: 'auth/avatar'
      })
    }

  }
</script>

<style scoped>

</style>