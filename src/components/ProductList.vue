<template>
  <div class="container mt-5">
    <span name="spinner" class="spinner-border spinner-border-sm mr-1" hidden></span>
    <div class="d-flex flex-wrap">
      <!-- <div class=""> -->
        <ProductItemCard v-for="(product, index) in products" :key="index" :id="index.toString()" :Nombre="product.Nombre"
          :Denominacion="product.Denominacion" :Precio="product.Precio" :Foto="product.Foto">
        </ProductItemCard>
      <!-- </div> -->
    </div>
  </div>
</template>
<script>
import ProductItemCard from "./ProductItemCard.vue";
const API_URI = "https://localhost:44363/api/Productos?idEmpresa=";
// const API_URI = "http://beassistant-001-site1.etempurl.com/api/Productos?idEmpresa=";

export default {
  name: "ProductList",
  props: {
    userinfo: String
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
      // document.getElementByName('spinner').removeAttribute('hidden');
      const res = await fetch(API_URI + this.userinfo[0].IdEmpresa);
      const data = await res.json();
      this.products = data;
      console.log(data)
      // document.getElementByName('spinner').setAttribute('hidden','');
    }
  },
  components: {
    ProductItemCard,
  },
};
</script>
<style scoped></style>
