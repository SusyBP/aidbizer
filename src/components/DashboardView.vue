<template>
    <div class="grid-container">
        <div class="summary-item1">
           <SummaryCard amount="10000" icon="fa fa-money icon my-1" title='Income'></SummaryCard>
        </div>
        <div class="summary-item2">
            <SummaryCard amount="10000" icon="user" title='Income'></SummaryCard>
        </div>
        <div class="summary-item3">
            <SummaryCard amount="10000" icon="user" title='Income'></SummaryCard>
        </div>
        <div class="summary-item4">
            <SummaryCard amount="10000" icon="user" title='Income'></SummaryCard>
        </div> 
    </div>
</template>
<script>

import SummaryCard from './SummaryCard.vue';

export default {
  name: "DashboardView",
  components: {
    SummaryCard
  },
  data() {
    return {};
  },
};

</script>
<style scoped>

.grid-container{
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 15px;
  padding: 1rem;
}
.summary-item1 {
    grid-column-start: 1;
    grid-column-end: 2;
}
.summary-item2 {
    grid-column-start: 2;
    grid-column-end: 3;
}
.summary-item3 {
    grid-column-start: 3;
    grid-column-end: 4;
}
.summary-item4 {
    grid-column-start: 4;
    grid-column-end: 5;
}
</style>
