<template>
  <div class="home">
    <div v-if="loading" class="loading">
      <i class="fa-solid fa-spinner fa-spin-pulse fa-5x"></i>
    </div>

    <div v-else class="container-current-weather">
      <div>
        <div class="primary-text">
          {{ dataCurrentWeather.name }}, {{ dataCurrentWeather.sys.country }}
        </div>

        <div class="secondary-text">{{ formatedDate }}</div>
      </div>

      <div class="weather-icon">
        <!-- <i class="fa-sharp fa-solid fa-sun fa-3x"></i> -->
        <img height="60px" :src="`http://openweathermap.org/img/w/${dataCurrentWeather.weather[0].icon}.png`" alt="Weather Icon" />
        <span>{{ dataCurrentWeather.main.temp }} º C</span>
      </div>
    </div>

    <SearchForm />
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
              // Aqui você pode manipular os dados recebidos da API
              this.dataCurrentWeather = data;
              console.log("data: " + JSON.stringify(data))
              this.loading = false;
            })
            .catch((error) => {
              // Lidar com erros, se houver algum
              console.error("Erro ao obter previsão do tempo:", error);
            });
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  height: 100vh;
}

.primary-text {
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
}

.secondary-text {
  color: #fff;
  font-weight: 300;
  margin-top: 5px;
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
.loading {
  color: #fff;
  text-align: center;
  margin-bottom: 10px;
}

.container-current-weather {
  display: flex;
  justify-content: space-between;
  color: #fff;
}
</style>
