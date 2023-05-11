import Vue from "vue";
import Vuex from "vuex";

import Toasted from 'vue-toasted';
import store from '@/store';
Vue.use(Toasted);

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
          const toastedDelete = store._vm.$root.$toasted;
          toastedDelete.error('City removed successfully!', {
            position: 'bottom-right',
            duration: 3000,
          });
          const newList = state.savedLocations.filter((el) => el.name !== payload.name)
          state.savedLocations = newList

          localStorage.setItem("LOCAL_SAVED_LOCATIONS", JSON.stringify(state.savedLocations))
        } else {
          state.savedLocations.push(payload);
          localStorage.setItem("LOCAL_SAVED_LOCATIONS", JSON.stringify(state.savedLocations))

          const toastedAdd = store._vm.$root.$toasted;
          toastedAdd.success('City saved successfully!', {
            position: 'bottom-right',
            duration: 3000,
          });
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
