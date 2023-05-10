import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    APIKey: "2868d3b861f24c62466eef380fe739eb",
    savedLocations: [],
  },
  mutations: {
    addNewLocation(state, payload) {
      if (state.savedLocations.length > 0) {
        const isRepeated = state.savedLocations.some((el) => el.name === payload.name);

        if (isRepeated) {
          alert("This city is already saved")
        } else {
          state.savedLocations.push(payload);
          localStorage.setItem("LOCAL_SAVED_LOCATIONS", JSON.stringify(state.savedLocations))
        }
      } else {
        state.savedLocations.push(payload);
        localStorage.setItem("LOCAL_SAVED_LOCATIONS", JSON.stringify(state.savedLocations))
      }
    },

    getLocalStorageData(state, payload) {
      state.savedLocations = payload
    }
  },
  actions: {},
  modules: {},
});
