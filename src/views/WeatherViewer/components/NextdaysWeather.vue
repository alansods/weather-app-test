<template>
  <div>
    <span class="title">Next 3 days</span>

    <div class="container-card">
      <div class="card" v-for="data in dataList" :key="data.dt">
        <div>
          <div>{{ formatDateDay(data.dt_txt) }}</div>
          <div class="label">{{ formatDate(data.dt_txt) }}</div>
        </div>

        <img
          height="40px"
          :src="`http://openweathermap.org/img/w/${data.weather[0].icon}.png`"
          alt="Weather Icon"
        />

        <div>
          <div>{{ data.main.temp_min }}º</div>
          <div class="label">Low</div>
        </div>

        <div>
          <div>{{ data.main.temp_max }}º</div>
          <div class="label">High</div>
        </div>

        <div>
          <div>{{ data.pop }}%</div>
          <div class="label">Rain</div>
        </div>

        <div>
          <div>{{ data.wind.speed }}mph</div>
          <div class="label">Wind</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { format, parseISO } from 'date-fns';
import { mapState } from "vuex";

export default {
  name: "NextdaysWeather",
  props: ["query"],

  components: {},

  data() {
    return {
      lat: 0,
      lon: 0,

      dataList: [],
    };
  },

  computed: {
    ...mapState(["APIKey"]),
  },

  methods: {
    formatDateDay(dateString) {
      const date = parseISO(dateString);
      return format(date, 'eee');
    },

    formatDate(dateString) {
      const date = parseISO(dateString);
      return format(date, 'dd/MM');
    },
  },

  async created() {
    const geoRes = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${this.query.name}&appid=${this.APIKey}`
    );

    this.lat = geoRes.data[0].lat;
    this.lon = geoRes.data[0].lon;

    const hourlyRes = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${this.lat}&lon=${this.lon}&units=metric&cnt=3&appid=${this.APIKey}`
    );
    this.dataList = hourlyRes.data.list;

    console.log("data hourly: " + JSON.stringify(this.dataList));
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
  margin-bottom: 50px
}
.card {
  width: 100%;
  border-radius: 4px;
  background: #0000003f;
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 25px 0;
  text-align: center;
  margin-bottom: 5px;
}

.label {
  margin-top: 5px;
  font-size: 0.8rem;
  color: #ffffff70;
}
</style>
