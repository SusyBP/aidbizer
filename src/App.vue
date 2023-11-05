<template>
  <NavBar></NavBar>
  <ProductList></ProductList>
</template>

<script>

import NavBar from "./components/NavBar.vue";
import ProductList from "./components/ProductList.vue";

export default {
  name: "App",
  components: {
    NavBar,
    ProductList,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
