<template>
    <div class="">
      Edit
    </div>
  </template>
  <script>
  import { onMounted } from 'vue';
  export default {
    name: "EditProduct",
    components: {},
    props: {
      id: String,
      Nombre: String,
      Denominacion: String,
      Descripcion: String,
      Precio: Number,
      Foto: String,//base64
    },
    data() {
      return {};
    },
    computed: {
      computedImg() {
        return this.Foto && this.Foto != "0x00" ? 'data:image/png;base64,'.concat(this.Foto) : "images/default-product-image.png"
      },
      strimedName() {
        return (this.Nombre.length > 15)?this.Nombre.substring(0, 15):this.Nombre
      },
      strimedDenominacion() {
        return (this.Denominacion.length > 15)?this.Denominacion.substring(0, 15):this.Denominacion
      },
    },
    methods:{
    //   onClick(){
    //     console.log('c')
    //   }
    }
  };
  </script>
  <style scoped>
  :root {
    --bea-green: #1f615a;
  }
  
  
  @media (min-width: 200px) and (max-width: 300px) {}
  
  @media (min-width: 430px) and (max-width: 576px) {}
  
  @media (min-width: 576px) and (max-width: 768px) {}
  
  .product-img {
    padding: 0;
    width: 11rem;
    height: 8rem;
    /* max-width: 150px; */
    /* border: 2px solid #bdbec0; */
  }
  
  .product-card {
    border-left: 10px solid #1f615a;
    background-color: white;
  }
  
  .card-deck {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: center;
  }
  
  .card {
    flex: 1 0 auto;
    --bs-card-border-color: none;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }
  
  .card-header{
    padding: 0;
  
  }
  .card-body{
    height: 5rem;
  }
  
  .shadow-box {
    /* box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset; */
    /* box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px; */
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
  
  .product-name {
    /* max-width: 6rem; */
  }
  
  .product-price {
    color: #1f615a;
    font-weight: bold;
    font-size: 1.2rem;
    /* margin-top: 0.5rem; */
  }
  </style>
  