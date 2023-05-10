<template>
  <div>
    <div class="container">
      <i class="fa fa-solid fa-magnifying-glass fa-lg" :class="{ active: isInputFocused }"></i>
      <input
        v-model="city"
        @keyup.enter="handleGetWeather"
        @focus="isInputFocused = true"
        @blur="isInputFocused = false"
        type="text"
        placeholder="Search for a city..."
      />
      <span>|</span>
        <i @click="handleGetWeather" class="fa fa-solid fa-location-crosshairs fa-lg get-weather-icon"></i>
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

      isInputFocused: false
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
            `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.APIKey}`
          );

          this.$router.push({ path: `/city/${res.data.name}`, query: res.data })

        } catch (error) {
          this.errorMessage = true;
          console.error("Error: " + error);
        }
      } else {
        this.emptyMessage = true;
      }
    },

    handleButtonMouseDown(event) {
      event.stopPropagation();
    }
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

.container:focus-within {
  outline: #fd8e34 solid 3px;
}

.active {
  color: #fd8e34;
}

.get-weather-icon {
  color: #ccc;
  cursor: pointer;
}
.get-weather-icon:hover {
  color: #fd8e34;
}

.error-message {
  color: #fd8e34;
  font-size: .9rem;
}
</style>
