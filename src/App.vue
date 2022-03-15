<template>
  <div class="App">
    <TopBar />
    <div class="card">
      <router-view />
    </div>
  </div>
</template>

<script>
import TopBar from "./components/TopBar.vue";

export default {
  name: "App",
  components: {
    TopBar,
  },
};
</script>

<style>
@import "../public/css/App.css";
</style>
