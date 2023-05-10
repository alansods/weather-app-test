<template>
  <div class="weather-viewer">
    <i @click="$router.push('/')" class="fa-solid fa-arrow-left-long fa-xl back-button"></i>

    <SaveLocation :query="query" />
    <CurrentWeather :query="query" />
    <TodayWeather :query="query" />
    <NextdaysWeather :query="query" />
  </div>
</template>

<script>
import CurrentWeather from "./components/CurrentWeather.vue";
import TodayWeather from "./components/TodayWeather.vue";
import NextdaysWeather from "./components/NextdaysWeather.vue";
import SaveLocation from "./components/SaveLocation.vue";

export default {
  name: "WeatherViewer",

  components: {
    CurrentWeather,
    TodayWeather,
    NextdaysWeather,
    SaveLocation,
  },

  data() {
    return {
      query: {},
    };
  },

  methods: {},

  created() {
    this.query = this.$route.query;
  },
};
</script>

<style scoped>
.weather-viewer {
  position: relative;
}

.back-button {
  cursor: pointer;
  color: #fff;
  margin: 30px 0;
}

.back-button:hover {
  color: #fd8e34;
}
</style>
