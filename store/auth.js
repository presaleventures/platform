import axios from 'axios'
import Cookies from 'js-cookie'

// state
export const state = () => ({
  user: null,
  token: null,
  avatar_nocache: 0
})

// getters
export const getters = {
  user: state => state.user,
  token: state => state.token,
  check: state => state.user !== null,
  avatar (state) {
    if (state.user && state.user.photo_url) {
      return state.user.photo_url + '?nocache=' + state.avatar_nocache
    }
    return '/default_avatar.png'
  }
}

// mutations
export const mutations = {
  SET_TOKEN (state, token) {
    state.token = token
  },

  FETCH_USER_SUCCESS (state, user) {
    state.user = user
  },

  FETCH_USER_FAILURE (state) {
    state.token = null
  },

  LOGOUT (state) {
    state.user = null
    state.token = null
  },

  UPDATE_USER (state, { user }) {
    state.user = user
  },

  NOCACHE_INCREMENT (state) {
    state.avatar_nocache = state.avatar_nocache + 1
  }
}

// actions
export const actions = {
  saveToken ({ commit, dispatch }, { token, remember }) {
    commit('SET_TOKEN', token)

    Cookies.set('token', token, { expires: remember ? 365 : null })
  },

  async fetchUser ({ commit }) {
    try {
      const { data } = await axios.get('/profile')

      commit('FETCH_USER_SUCCESS', data)
    } catch (e) {
      Cookies.remove('token')

      commit('FETCH_USER_FAILURE')
    }
  },

  updateUser ({ commit }, payload) {
    commit('UPDATE_USER', payload)
  },

  async logout ({ commit }) {
    try {
      await axios.post('/logout')
    } catch (e) { }

    Cookies.remove('token')

    commit('LOGOUT')
  },

  async fetchOauthUrl (ctx, { provider }) {
    const { data } = await axios.post(`/oauth/${provider}`)

    return data.url
  },

  async fetchOauthJoinUrl (ctx, { provider }) {
    const { data } = await axios.post(`/oauth/${provider}/join`)

    return data.url
  }
}
