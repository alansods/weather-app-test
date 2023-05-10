<template>
  <div class="weather-viewer">
    <i @click="$router.push('/')" class="fa-solid fa-arrow-left-long fa-xl back-button"></i>
    <CurrentWeather :query="query" />
    <TodayWeather :query="query" />
    <NextdaysWeather :query="query" />
  </div>
</template>

<script>
import CurrentWeather from "./components/CurrentWeather.vue";
import TodayWeather from "./components/TodayWeather.vue";
import NextdaysWeather from "./components/NextdaysWeather.vue";

export default {
  name: "WeatherViewer",

  components: {
    CurrentWeather,
    TodayWeather,
    NextdaysWeather,
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
  margin-top: 20px;
}

.back-button {
  cursor: pointer;
  color: #fff;
  margin-bottom: 30px;
}

.back-button:hover {
  color: #fd8e34;
}
</style>
