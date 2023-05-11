<template>
  <div>
    <div class="location-container">
      <div class="location-name">{{ query.name }}, {{ query.sys.country }}</div>
      <div class="day-name">Wednesday, 10 May 2023</div>
    </div>

    <div class="container-weather">
      <div class="container-icon">
        <img
          height="150px"
          :src="`http://openweathermap.org/img/w/${query.weather[0].icon}.png`"
          alt="Weather Icon"
        />

        <div class="weather">
          <span class="weather-number">{{ Math.round(query.main.temp) }}º</span>
          <span class="weather-kind">{{ query.weather[0].main }}</span>
        </div>
      </div>

      <div class="outer-container-info">
        <div class="container-info">
          <div class="info">
            <span class="info-number">{{ query.main.temp_max }}º</span>
            <span class="info-name">High</span>
          </div>

          <div class="info">
            <span class="info-number">{{ query.wind.speed }}mph</span>
            <span class="info-name">Wind</span>
          </div>

          <div class="info">
            <span class="info-number">{{ query.main.humidity }}%</span>
            <span class="info-name">Humidity</span>
          </div>
        </div>

        <div class="container-info">
          <div class="info">
            <span class="info-number">{{ query.main.temp_min }}º</span>
            <span class="info-name">Low</span>
          </div>

          <div class="info">
            <span class="info-number">{{ query.main.pressure }}in</span>
            <span class="info-name">Pressure</span>
          </div>

          <div class="info">
            <span class="info-number">29.85%</span>
            <span class="info-name">Precipitation</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CurrentWeather",
  props: ["query"],
};
</script>

<style scoped>
.location-container {
  margin-bottom: 20px;
}

.container-weather {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
}

@media (max-width: 960px) {
  .container-weather {
    display: flex;
    flex-direction: column;

    font-size: 2rem;
    font-weight: bold;
    color: #fff;
  }
}

.weather {
  text-align: center;
  margin-left: 50px;
  padding-right: 30px;
  border-right: solid 1px #ffffff70;
}

.info {
  flex: 1;
}

.weather span,
.info span {
  display: block;
  min-width: 100px;
}

.container-icon {
  display: flex;
  align-items: center;
  gap: 50px;
  flex: 1;
}

.outer-container-info {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 25px;
  flex: 1;
}

.container-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
}

.info-number {
  font-size: 1.1rem;
  font-weight: 400;
  margin-bottom: 5px;
}

.info-name {
  font-size: 0.8rem;
  font-weight: 300;
  color: #ffffff70;
}

.weather-number {
  font-size: 3.5rem;
  font-weight: 400;
  margin-block: 10px;
}
.weather-kind {
  font-size: 1rem;
  font-weight: 300;
}
</style>
