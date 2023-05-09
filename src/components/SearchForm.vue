<template>
  <div>
    <div class="container">
      <i class="fa fa-solid fa-magnifying-glass"></i>
      <input
        v-model="city"
        @keyup.enter="handleGetWeather"
        type="text"
        placeholder="Search for a city..."
      />
      <span>|</span>
      <button @click="handleGetWeather">
        <i class="fa fa-solid fa-location-crosshairs"></i>
      </button>
    </div>
    <span v-if="emptyMessage" class="error-message">Type a city name.</span>
    <span v-if="errorMessage" class="error-message">City not found.</span>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "SearchForm",
  components: {},

  data() {
    return {
      city: "",
      errorMessage: false,
      emptyMessage: false,
      dataWeather: "",
    };
  },

  computed: {
    ...mapState(["APIKey"]),
  },

  methods: {
    async handleGetWeather() {
      if (this.city) {
        this.emptyMessage = false
        this.errorMessage = false
        try {
          const res = await axios.get(
            `http://api.openweathermap.org/geo/1.0/direct?q=${this.city}&limit=5&appid=${this.APIKey}`
          );

          this.dataWeather = res.data;

          console.log("this.dataWeather: " + JSON.stringify(this.dataWeather));
        } catch (error) {
          this.errorMessage = true;
          console.error("Error: " + error);
        }
      } else {
        this.emptyMessage = true;
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 10px;
  width: 100%;
  background: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  user-select: none;
  margin-bottom: 10px;
}

.container span {
  color: #ccc;
}

input {
  width: 100%;
  padding: 15px 10px;
  border: none;
  outline: none;
}

input::placeholder,
i {
  color: #ccc;
}

button {
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
}

.error-message {
  color: rgb(255, 145, 0);
  font-size: .9rem;
}
</style>
