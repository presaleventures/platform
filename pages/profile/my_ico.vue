<template>

  <div>
    <campaign-shard v-for="item in projects"
                    :key="item.id"
                    :project="item"></campaign-shard>
  </div>

</template>

<script>

  import { mapGetters } from 'vuex'
  import axios from 'axios'

  function getUserProjects(user_id) {
    return axios.get('profile/' + user_id + '/user_project')
  }

  export default {
    middleware:['auth'],

    head: {
      title:"Profile My ICO's"
    },

    data () {
      return {}
    },

    asyncData({ store }){
      let user = store.getters['auth/user']
      let data = {
        projects: []
      }

      return axios.all([
        getUserProjects(user.id)
      ])
        .then(axios.spread((user_projects) => {
          data.projects = user_projects.data.data
          return data
        }))
        .catch((err) => {
          data.errors = err
          return data
        })

    }
  }

</script>
