<template>
<div class="summary-card text-left">
    <i :class="icon"></i>
    <i class="fa-solid fa-chart-line"></i>
     <div class="summary-card-body">
     <p class="summary-card-title">{{ title }}</p>
       <h5 class="summary-card-text">{{ amount }}</h5>     
     </div>
   </div>    
</template>
<script>

export default{
    name: "SummaryCard",
    props:{
        title: {type: String},
        amount: {type: String},
        icon: {type: String}}
    ,
    data(){
        return{}
    },

}
</script>

<style scoped>
:root{
  --light-gray-1: #efefef;
  --light-gray-2: #c3c3c3;
}
/* [class^="col-"] {
  padding: .25rem;
} */
.summary-card {
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
}
.summary-card .icon{
  font-size: 1.5rem;
  color: #c3c3c3;
}
.summary-card-title, .summary-card-text, .chart-card-title  {
  margin-bottom: .4rem;
} 

.divider{
  border-bottom: 2px solid #c3c3c3;
  margin-bottom: 1rem;
}
</style>