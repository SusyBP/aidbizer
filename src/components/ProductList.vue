<template>
  <div class="container mt-3">
    <div class="text-center text-theme"><span name="spinner" class="spinner-border spinner-border mr-1" v-show="loadingProducts"></span></div>
    <div class="cards-container">    
        <ProductItemCard @showEdit = "showEdit" v-for="(product, index) in products" :key="index" :id="index.toString()" :Nombre="product.Nombre"
          :Denominacion="product.Denominacion" :Precio="product.Precio" :Foto="product.Foto">
        </ProductItemCard>
    </div>    
  <EditProduct v-show="showEdit"></EditProduct>
  </div>
</template>
<script>
import ProductItemCard from "./ProductItemCard.vue";
const API_URI = "https://localhost:44363/api/Productos?idEmpresa=";
// const API_URI = "http://beassistant-001-site1.etempurl.com/api/Productos?idEmpresa=";
import EditProduct from './EditProduct.vue';

export default {
  name: "ProductList",
  props: {
    userinfo: String
  },
  data() {
    return {
      products: [],
      loadingProducts: false,
      showEdit: false,
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    async getProducts() {
      this.loadingProducts = true;
      const res = await fetch(API_URI + this.userinfo[0].IdEmpresa);
      const data = await res.json();
      this.products = data;
      this.$emit("totalProducts", this.products.length)
      this.loadingProducts = false;
      console.log(data)
    },
    showEdit(){
      this.showEdit = true      
      console.log('emit')
    }
  },
  components: {
    ProductItemCard,
    EditProduct
  },
};
</script>
<style scoped>
.cards-container{
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
}

</style>
