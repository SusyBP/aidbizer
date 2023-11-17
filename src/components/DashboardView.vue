<template>
    <div class="grid-container">
        <div class="summary-item1">
           <SummaryCard amount="10000" :icon="['fas' ,'hand-holding-dollar']" title='Total Income'></SummaryCard>
        </div>
        <div class="summary-item2">
            <SummaryCard amount="10000" :icon="['fas' ,'users']" title='New Clients'></SummaryCard>
        </div>
        <div class="summary-item3">
            <SummaryCard amount="10000" :icon="['fas' ,'percentage']" title='Weekly Sales Rate'></SummaryCard>
        </div>
        <div class="summary-item4">
            <SummaryCard amount="10000" :icon="['fas', 'money-bill']" title='Total Expenses'></SummaryCard>
        </div> 
        <div class="chart1">
            <ChartItem Image="images/douhgnutchart_placeholder.svg" Alt="Chart"></ChartItem>
        </div>
        <div class="chart2">
            <ChartItem Image="images/barchart_placeholder.svg" Alt="Chart"></ChartItem>
        </div>
        <div class="chart3">
            <ChartItem Image="images/linechart_placeholder.svg" Alt="Chart"></ChartItem>
        </div>
        <div class="chart4">
            <ChartItem Image="images/douhgnutchart_placeholder.svg" Alt="Chart"></ChartItem>
        </div>
        <div class="chart5">
            <ChartItem Image="images/barchart_placeholder.svg" Alt="Chart"></ChartItem>
        </div>
        <div class="chart6">
            <ChartItem Image="images/linechart_placeholder.svg" Alt="Chart"></ChartItem>
        </div>
    </div>
</template>
<script>

import SummaryCard from './SummaryCard.vue';
import ChartItem from './ChartItem.vue';

export default {
  name: "DashboardView",
  components: {
    ChartItem,
    SummaryCard
  },
  data() 
    {
    return {};
  },
};

</script>
<style scoped>

.grid-container{
  display: grid;
  grid-template-columns: auto;
  /* grid-template-rows: auto auto auto; */
  gap: 15px;
  padding: 1rem;
  background-color: #efefef;
  padding-bottom: 3rem;
}

@media (min-width: 576px) {
.grid-container{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 2fr 2fr;
  /* grid-template-rows: 33% 33% auto; */
  gap: 15px;
  padding: 1rem;
  background-color: #efefef;
  padding-bottom: 3rem;
}
.summary-item1 {
    grid-column-start: 1;
    grid-column-end: 2;
    /* grid-row-start: 1;
    grid-row-end: 2; */
}
.summary-item2 {
    grid-column-start: 2;
    grid-column-end: 3;
    /* grid-row-start: 2;
    grid-row-end: 3; */
}
.summary-item3 {
    grid-column-start: 3;
    grid-column-end: 4;
}
.summary-item4 {
    grid-column-start: 4;
    grid-column-end: 5;
}

.chart1{
    /* grid-row-start: 2; */
    grid-column-start: 1;
    grid-column-end: 2;
}
.chart2{
    /* grid-row-start: 2; */
    grid-column-start: 2;
    grid-column-end: 3;
}
.chart3{
    /* grid-row-start: 2; */
    grid-column-start: 3;
    grid-column-end: 5;
}
.chart4{
    /* grid-row-start: 3; */
    /* grid-row-end: 5; */
    grid-column-start: 1;
    grid-column-end: 2;
}
.chart5{
    /* grid-row-start: 3; */
    grid-column-start: 2;
    grid-column-end: 3;
}
.chart6{
    /* grid-row-start: 3; */
    grid-column-start: 3;
    grid-column-end: 5;
}
}

</style>
