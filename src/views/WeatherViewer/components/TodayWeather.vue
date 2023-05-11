<template>
  <div>
    <span class="title">Today's weather</span>

    <div v-if="loading" class="loading">
      <i class="fa-solid fa-spinner fa-spin-pulse fa-5x"></i>
    </div>

    <div v-else class="container-card">
      <div class="card" v-for="data in dataList" :key="data.dt">
        <span>{{ formatDate(data.dt_txt, "h:mm a") }}</span>
        <img
          height="40px"
          :src="`http://openweathermap.org/img/w/${data.weather[0].icon}.png`"
          alt="Weather Icon"
        />
        <span>{{ data.main.temp }}º</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { format } from "date-fns";
import { mapState } from "vuex";

export default {
  name: "TodayWeather",
  props: ["query"],

  components: {},

  data() {
    return {
      lat: 0,
      lon: 0,

      loading: true,

      dataList: [],
    };
  },

  computed: {
    ...mapState(["APIKey"]),
  },

  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      return format(date, "ha").toLocaleLowerCase();
    },
  },

  async created() {
    try {
      const geoRes = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${this.query.name}&appid=${this.APIKey}`
      );

      this.lat = geoRes.data[0].lat;
      this.lon = geoRes.data[0].lon;

      const hourlyRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${this.lat}&lon=${this.lon}&units=metric&cnt=7&appid=${this.APIKey}`
      );
      this.dataList = hourlyRes.data.list;
      this.loading = false;
    } catch (err) {
      console.error(err.message);
    }
  },
};
</script>

<style scoped>
.title {
  display: block;
  color: #fff;
  margin: 20px 0;
}

.container-card {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 30px;
}
.card {
  flex: 1 100px;
  width: 80px;
  height: 130px;
  border-radius: 4px;
  background: #0000003f;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
}
</style>
