<template>
  <div @click="toggleSaveLocation" class="save-location">{{ isRepeated ? "Remove saved location" : "Save location" }}</div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "NextdaysWeather",
  props: ["query"],

  data() {
    return {
      isRepeated: false,
    }
  },

  computed: {
    ...mapState(["savedLocations"]),
  },

  methods: {
    toggleSaveLocation() {
      this.$store.commit("toggleNewLocation", this.query);
      this.isRepeated = !this.isRepeated;
    },
  },

  created() {
    console.log("this.savedLocations: " + JSON.stringify(this.savedLocations))
    this.isRepeated = this.savedLocations?.some((el) => el.name === this.query.name);
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
