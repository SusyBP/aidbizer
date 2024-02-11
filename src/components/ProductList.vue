<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-start align-items-center flex-row">
      <div class="">
        <ProductItem v-for="(product, index) in products" :key="index" :id="index.toString()" :Nombre="product.Nombre"
          :Denominacion="product.Denominacion" :Precio="product.Precio" :Foto="product.Foto">
        </ProductItem>
      </div>
    </div>
  </div>
</template>
<script>
import ProductItem from "./ProductItem.vue";
const API_URI = "http://beassistant-001-site1.etempurl.com/api"

export default {
  name: "ProductList",
  props: {
    idEmpresa: Number
  },
  data() {
    return {
      products: [],
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    async getProducts() {
      const res = await fetch(API_URI + '/Productos?idEmpresa=' + this.idEmpresa.toString());
      const data = await res.json();
      this.products = data;
      console.log(data)
    }
  },
  components: {
    ProductItem,
  },
};
</script>
<style scoped></style>
