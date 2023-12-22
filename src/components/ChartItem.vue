<template>
    <div class="chart">
        <img class="img image-fluid" :src="Image" :alt="Alt">
    </div>
</template>
<script>
export default{
    name: 'ChartItem',
    props: {
    Image: String,
    Alt: String,
  },
}
</script>
<style scoped>
.img {
  width: 100%;
  max-width: 300px; 
  /* height: ; */
}

[class^='chart']{
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid #fff;
  border-radius: .5rem;
  padding: .5rem 1rem;
  margin-bottom: 1rem;
}
</style>

