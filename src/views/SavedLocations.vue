<template>
  <div class="saved-locations">
    <i @click="$router.push('/')" class="fa-solid fa-arrow-left-long fa-xl back-button"></i>

    <div class="title">Saved Cities</div>

    <div class="message" v-if="savedLocations.length === 0">
      There are 0 saved cities.
    </div>

    <div class="container-card" v-else>
      <div class="card" v-for="location in savedLocations" :key="location.dt" @click="$router.push({ path: `/city/${location.name}`, query: location })">
        <span>{{ location.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["savedLocations"]),
  },
  methods: {

  }
};
</script>

<style scoped>

.title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
}

.container-card {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.card {
  display: inline-block;
  width: 180px;
  padding: 10px 0;
  text-align: center;
  border-radius: 4px;
  background: #0000003f;
  color: #fff;
  cursor: pointer;
}

.card:hover {
  background: #00000081;
}

.back-button {
  cursor: pointer;
  color: #fff;
  margin: 30px 0;
}

.back-button:hover {
  color: #fd8e34;
}

.message {
  color: #ffffff65;
  margin-top: 30px;
}
</style>
