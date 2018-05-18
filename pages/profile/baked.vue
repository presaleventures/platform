<template>
  <div>
    <campaign-shard/>
    <campaign-shard/>
    <campaign-shard/>
    <campaign-shard/>
    <campaign-shard/>
  </div>
</template>

<script>

  import { mapGetters } from 'vuex'

  export default {
    middleware:['auth'],
    head: {
      title:'Profile'
    },
    computed: {
      ...mapGetters({
        user: 'auth/user',
        avatar: 'auth/avatar'
      })
    }
  }

</script>
