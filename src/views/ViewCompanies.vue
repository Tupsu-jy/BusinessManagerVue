<template>
  <div>
    <NavBar></NavBar>
    <Companies v-bind:search="search"></Companies>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Companies from "@/components/CompaniesList";
export default {
  name: "ViewCompanies",
  components: {
    NavBar,
    Companies,
  },
  /**
   * Tells us whether we came here via "Search" or "View All" button.
   */
  props: {
    search: Boolean,
  },
};
</script>