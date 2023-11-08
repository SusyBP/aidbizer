<template>
  <NavBar></NavBar>
  <ProductList></ProductList>
  <!-- <DashboardView></DashboardView> -->
</template>

<script>

import NavBar from "./components/NavBar.vue";
import ProductList from "./components/ProductList.vue";
import DashboardView from './components/DashboardView.vue';

export default {
  name: "App",
  components: {
    NavBar,
    ProductList,
    DashboardView,
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>
