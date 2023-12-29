                <template>
                <div class="dashboard">
                    <div class="summary-cards row">
                        <div class="col-xs col-sm-6 col-md-3">
                        <SummaryCard amount="10000" :icon="['fas' ,'hand-holding-dollar']" title='Total Income'></SummaryCard>
                        </div>
                        <div class="col-xs col-sm-6 col-md-3 ">
                            <SummaryCard amount="10000" :icon="['fas' ,'users']" title='New Clients'></SummaryCard>
                        </div>
                        <div class="col-xs col-sm-6 col-md-3 ">
                            <SummaryCard amount="10000" :icon="['fas' ,'percentage']" title='Weekly Sales'></SummaryCard>
                        </div>
                        <div class="col-xs col-sm-6 col-md-3 ">
                            <SummaryCard amount="10000" :icon="['fas', 'money-bill']" title='Expenses'></SummaryCard>
                        </div>
                    </div>
                    <div class="stats">
                    <div class="row">
                        <div class="col-sm-6 col-md-4">
                            <ChartItem Image="images/douhgnutchart_placeholder.svg" Alt="Chart"></ChartItem>
                        </div> 
                        <div class="col-sm-6 col-md-4 ">
                            <ChartItem Image="images/barchart_placeholder.svg" Alt="Chart"></ChartItem>
                        </div>
                        <div class="col-sm-6 col-md-4 ">
                            <ChartItem Image="images/linechart_placeholder.svg" Alt="Chart"></ChartItem>
                        </div>
                        <div class="col-sm-6 col-md-4 ">
                            <ChartItem Image="images/douhgnutchart_placeholder.svg" Alt="Chart"></ChartItem>
                        </div>
                        <div class="col-sm-6 col-md-4 ">
                            <ChartItem Image="images/barchart_placeholder.svg" Alt="Chart"></ChartItem>
                        </div>
                        <div class="col-sm-6 col-md-4 ">
                            <ChartItem Image="images/linechart_placeholder.svg" Alt="Chart"></ChartItem>
                        </div>
                    </div>
                    </div>
                    </div>
                </template>
                <script>

                /* import font awesome icon component */
                import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
                // import { faCalculator } from '@fortawesome/free-solid-svg-icons'
                import SummaryCard from './SummaryCard.vue';
                import ChartItem from './ChartItem.vue';

                export default {
                name: "DashboardView",
                components: {
                    FontAwesomeIcon,
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
                [class^='col']{
                    padding-left: .5rem;
                    padding-right: .5rem;
                }
             
               
                .summary-item{
                    margin-bottom: 1rem;
                }
                

            </style>
