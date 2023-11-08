<template>
  <div class="m-3">
    <div class="grid-container product-card rounded shadow-box p-4 mb-4">
      <div class="grid-item-1">
        <img
          class="img-fluid product-img rounded"
          src="/images/default-product-image.png"
          alt="alt"
        />
      </div>
      <div class="grid-item-2 product-info d-flex flex-column">
        <h5 class="product-name">{{ Nombre }}</h5>
        <div class="product-category">{{ Denominacion }}</div>
        <div class="product-price">${{ Precio }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductItem",
  components: {},
  props: {
    Nombre: String,
    Denominacion: String,
    Descripcion: String,
    Precio: Number,
    Foto: String,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
:root {
  --bea-green: #1f615a;
}
.grid-container {
  display: grid;
  grid-template-columns: 50% auto;
  gap: 15px;
  padding: 1rem;
} 
grid-item-1{
    grid-column-start: 1;
    grid-column-end: 2;
}
grid-item-2{
    grid-column-start: 2;
    grid-column-end: 3;
}

@media (min-width: 200px) and (max-width: 300px){
  .grid-container {
    display: grid;
    grid-template-columns: auto;
    gap: 15px;
    padding: 1rem;
  } 
}

@media (min-width: 430px) and (max-width: 576px)  {
  .grid-container {
    display: grid;
    grid-template-columns: 25% auto;
    gap: 15px;
    padding: 1rem;
  } 

  grid-item-1{
    grid-column-start: 1;
    grid-column-end: 2;
  }

  grid-item-2{
      grid-column-start: 2;
      grid-column-end: 4;
  }
}

@media (min-width: 576px) and (max-width: 768px){
  .grid-container {
    display: grid;
    grid-template-columns: auto;
    gap: 15px;
    padding: 1rem;
  } 
}

@media (min-width: 1000px){
  .grid-container {
    display: grid;
    grid-template-columns: 25% auto;
    gap: 15px;
    padding: 1rem;
  } 
}

.product-img {
  width: 100%;
  max-width: 150px; 
  border: 2px solid #bdbec0;
}

.product-card {
  border-left: 10px solid #1f615a;
}
.shadow-box {
  /* box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset; */
  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px; */
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}
.product-price {
  color: #1f615a;
  font-weight: bold;
  font-size: 1.5rem;
  margin-top: 0.5rem;
}
</style>
