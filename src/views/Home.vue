<template>
  <div class="home">
    <SearchForm />
  </div>
</template>

<script>
import SearchForm from "../components/SearchForm.vue";

export default {
  name: "Home",
  components: {
    SearchForm,
  },
};
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
