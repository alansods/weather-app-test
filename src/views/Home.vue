<template>
  <div class="home">
    <div @click="$router.push('/saved-locations')" class="save-location">
      Saved Cities
    </div>

    <div v-if="loading" class="loading">
      <i class="fa-solid fa-spinner fa-spin-pulse fa-5x"></i>
    </div>

    <div v-else class="container-current-weather">
      <div>
        <div class="location-name">
          {{ dataCurrentWeather.name }}, {{ dataCurrentWeather.sys.country }}
        </div>

        <div class="day-name">{{ formatedDate }}</div>
      </div>

      <div class="weather-icon">
        <!-- <i class="fa-sharp fa-solid fa-sun fa-3x"></i> -->
        <img
          height="60px"
          :src="`http://openweathermap.org/img/w/${dataCurrentWeather.weather[0].icon}.png`"
          alt="Weather Icon"
        />
        <span>{{ Math.round(dataCurrentWeather.main.temp) }}º</span>
      </div>
    </div>

    <SearchForm />
    <div v-if="geolocationMessage" class="geolocation-message">
      Give localization permissions and refresh the page, please!
    </div>
  </div>
</template>

<script>
import { format } from "date-fns";

import getWeather from "@/utils/getWeather";

import { mapState } from "vuex";
import SearchForm from "@/components/SearchForm.vue";

export default {
  name: "Home",
  components: {
    SearchForm,
  },
  data() {
    return {
      loading: true,
      geolocationMessage: false,

      currentLatitude: 0,
      currentLongitude: 0,

      dataCurrentWeather: {},
    };
  },
  computed: {
    ...mapState(["APIKey"]),

    formatedDate() {
      const dataAtual = new Date();
      const dataFormatada = format(dataAtual, "EEEE',' d MMMM yyyy");

      return dataFormatada;
    },
  },
  methods: {},

  created() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;

          console.log(
            `Latitude: ${this.latitude}, Longitude: ${this.longitude}`
          );

          getWeather(this.latitude, this.longitude)
            .then((data) => {
              this.dataCurrentWeather = data;
              console.log("data: " + JSON.stringify(data));
              this.loading = false;
              this.geolocationMessage = false;
            })
            .catch((error) => {
              console.error("Erro ao obter previsão do tempo:", error);
            });
        },
        (error) => {
          console.error(error);
          this.geolocationMessage = true;
        }
      );
    } else {
      this.geolocationMessage = true;
      console.error("Geolocation is not supported by this browser.");
    }
  },
};
</script>

<style scoped>
.home {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  height: 100vh;
}

.weather-icon {
  display: flex;
  align-items: center;
}

.weather-icon span {
  margin-left: 10px;
  font-size: 2rem;
  font-weight: bold;
}

.container-current-weather {
  display: flex;
  justify-content: space-between;
  color: #fff;
}

@media (max-width: 600px) {
  .container-current-weather {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    gap: 20px
  }
}

.save-location {
  position: absolute;
  top: 0;
  right: 0;
  background: orange;
  padding: 15px 15px;
  border-radius: 0 0 15px 15px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.8rem;
  cursor: pointer;
}

.save-location:hover {
  color: #fff;
}

.geolocation-message {
  color: orange;
  font-size: 1.5rem;
  text-align: center;
}
</style>
