<template>
  <nav class="navbar">
    <router-link class="navbar" :to="{ name: 'navBar' }">
      <h2>Business Manager</h2>
    </router-link>
  </nav>
</template>
<script>
export default {
  name: "TopBar",
};
</script>