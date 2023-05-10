<template>
  <div @click="handleSaveLocation" class="save-location">Save Location</div>
</template>

<script>
export default {
  name: "NextdaysWeather",
  props: ["query"],

  methods: {
    handleSaveLocation() {
      this.$store.commit("addNewLocation", this.query);
      this.$router.push("/saved-locations");
    },
  },
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
