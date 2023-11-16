<template>
  <div
    class="container d-sm-flex justify-content-center align-items-center mt-5"
  >
    <div class="col-sm-6">
      <ProductItem
        v-for="(product, index) in products"
        :key="index"
        :Nombre="product.Nombre"
        :Denominacion="product.Denominacion"
        :Precio="product.Precio"
        :Foto="product.Foto"
      >
      </ProductItem>
    </div>
  </div>
</template>
<script>
import ProductItem from "./ProductItem.vue";
   

export default {
  name: "ProductList",
  data() {
    return {
      products : []
      // products: [
      //   {
      //     Foto: "/images/default-product-image.png",
      //     Nombre: "Producto1",
      //     Denominacion: "Aretes con argolla plateada ...",
      //     Precio: "10",
      //   },
      //   {
      //     Foto: "favicon.ico",
      //     Nombre: "Producto2",
      //     Denominacion: "Lorem ipsum ...",
      //     Precio: "10",
      //   },
      //   {
      //     Foto: "favicon.ico",
      //     Nombre: "Producto3",
      //     Denominacion: "Lorem ipsum ...",
      //     Precio: "10",
      //   },
      //   {
      //     Foto: "favicon.ico",
      //     Nombre: "Producto4",
      //     Denominacion: "Lorem ipsum ...",
      //     Precio: "10",
      //   },
      // ],
    };
  },
  created(){
    this.getProducts();
  },
  methods:{
    async getProducts(){
      const res = await fetch('http://beassistant-001-site1.etempurl.com/api/Productos?idEmpresa=11');
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
