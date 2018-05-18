import axios from 'axios'

const state = () => ({
  project: null,
  road_map: []
})

const getters = {
  project: state => state.project,
  road_map: state => state.road_map
}

const mutations = {
  UPDATE_PROJECT (state, project) {
    state.project = project
  },
  RESET_PROJECT (state) {
    state.project = null
    state.road_map = []
  },
  UPDATE_PROJECT_ROAD_MAP (state, roadMap) {
    state.road_map = roadMap
  }
}

const actions = {
  fetchProject ({ commit }, projectName) {
    return axios.get('/project_name/' + projectName)
      .then((response) => {
        commit('UPDATE_PROJECT', response.data.data)
      })
      .catch((error) => {
        console.log(error)
        commit('RESET_PROJECT')
      })
  },

  fetchProjectRoadMap ({ commit }, projectName) {
    return axios.get('/project_name/' + projectName + '/road_map')
      .then((response) => {
        commit('UPDATE_PROJECT_ROAD_MAP', response.data.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
