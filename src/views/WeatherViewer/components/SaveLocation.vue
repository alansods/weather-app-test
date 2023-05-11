<template>
  <div @click="toggleSaveLocation" class="save-location">{{ isRepeated ? "Save location" : "Remove saved location" }}</div>
</template>

<script>
export default {
  name: "NextdaysWeather",
  props: ["query", "savedLocations"],

  data() {
    return {
      isRepeated: false,
    }
  },

  methods: {
    toggleSaveLocation() {
      this.$store.commit("addNewLocation", this.query);
      this.isRepeated = !this.isRepeated;
    },
  },

  created() {
    this.isRepeated = this.savedLocations.some((el) => el.name === this.query.name);
  }
};
</script>

<style scoped>
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
</style>
