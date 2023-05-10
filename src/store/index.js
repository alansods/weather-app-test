import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    APIKey: "2868d3b861f24c62466eef380fe739eb",
    location: {}
  },
  mutations: {
    newLocation(state, payload) {
      state.location = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
