<template>
  <div class="container">
    <i class="fa fa-solid fa-magnifying-glass"></i>
    <input type="text" placeholder="Search for a city..." />
    <span>|</span>
    <i class="fa fa-solid fa-location-crosshairs"></i>
  </div>
</template>

<script>

export default {
  name: "SearchForm",
  components: {  },
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

input::placeholder, i {
  color: #ccc;
}


</style>
