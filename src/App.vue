<template>
  <div id="app">
    <transition mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "SearchForm",
  components: {},

  data() {
    return {};
  },

  computed: {},

  methods: {},

  created() {
    const dataLocalStorage = JSON.parse(
      localStorage.getItem("LOCAL_SAVED_LOCATIONS")
    );

    console.log("dataLocalStorage: " + dataLocalStorage);

    if (dataLocalStorage) {
      this.$store.commit("getLocalStorageData", dataLocalStorage);
    }
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
}

body {
  background: linear-gradient(#2b32b2, #1487cb);
  width: 100%;
  min-height: 100vh;
  font-size: 16px;
  color: #333;
}

i {
  user-select: none;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 800px;
  margin: 0 auto;
}

@media (max-width: 960px) {
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    widows: 100%;
    margin: 0 15px;
  }
}

.location-name {
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
}

.day-name {
  color: #fff;
  font-weight: 300;
  margin-top: 5px;
}

.v-enter,
.v-leave-to {
  transform: translate3d(0, -20px, 0);
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}

.loading {
  color: #fff;
  text-align: center;
  margin-bottom: 10px;
}


</style>
