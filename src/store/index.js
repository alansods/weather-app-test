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
      console.log("payload.name: " + payload.name);

      if (state.savedLocations.length > 0) {

        console.log("payload: " + JSON.stringify(payload));

        const isRepeated = state.savedLocations.some((el) => el.name === payload.name);

        console.log("isRepeated: " + JSON.stringify(isRepeated));

        if (isRepeated) {
          alert("This city is already saved")
        } else {
          state.savedLocations.push(payload);
        }
      } else {
        state.savedLocations.push(payload);
      }

      /* if (!isRepeated) {
        state.savedLocations.push(payload);
      } else {
        console.log(payload);
        alert("This city is already saved")
      } */
    },
  },
  actions: {},
  modules: {},
});
