import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    userInfo: null
  },
  mutations: {
    setUser(state, token) {
      state.user = token
    }
  },
  actions: {
    actionSetUser({commit}, user) {
      commit('setUser', user)
    }
  },
  modules: {
    cart
  }
})
