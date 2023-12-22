                <template>
                    <div class="container-fluid">
                        <div class="mt-2 mb-2 header row">
                            <div class="col-md-6 search-bar">
                                <form class="d-flex">
                                    <input class="form-control me-2" type="text" placeholder="Search">
                                    <button class="btn btn-theme text-light" type="button"><span><font-awesome-icon :icon="['fas', 'magnifying-glass']"/></span></button>
                                </form>
                            </div>
                            <div class="col-md-6 logged-user-info">
                                <span class="logged-user-name">John Due</span>
                                <span class="logged-user-avatar"><font-awesome-icon :icon="['fas', 'circle-user']"/></span>
                            </div>        
                        </div>
                        <div class="main">
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
                .logged-user-name{
                    margin-right: .5rem;
                    float: right;
                    padding-top: .25rem;
                }
                .logged-user-avatar{
                    font-size: 1.5rem;
                    float: right;
                    margin-right: .5rem;
                }
               
                .summary-item{
                    margin-bottom: 1rem;
                }
                .container-fluid{
                    background-color: #efefef;
                    padding-bottom: 3rem;
                }

                /* .grid-container{
                display: grid;
                grid-template-columns: auto; */
                /* grid-template-rows: auto auto auto; */
                /* gap: 15px;
                padding: 1rem;
                background-color: #efefef;
                padding-bottom: 3rem;
                } */

                @media (min-width: 576px) {

                /* .grid-container{
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                grid-template-rows: 1fr 2fr 2fr;
                /* grid-template-rows: 33% 33% auto; */
                /* gap: 15px;
                padding: 1rem;
                background-color: #efefef;
                padding-bottom: 3rem; */
                /* }  */
                /* .header{
                    grid-column-start: 1;
                    grid-column-end: 5;
                    /* display: flex; */
                    /* justify-content: end; 
                } */
                /* .summary-item1 {
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

                .chart1{
                    grid-column-start: 1;
                    grid-column-end: 2;
                }
                .chart2{
                    grid-column-start: 2;
                    grid-column-end: 3;
                }
                .chart3{
                    grid-column-start: 3;
                    grid-column-end: 5;
                }
                .chart4{
                    grid-column-start: 1;
                    grid-column-end: 2;
                }
                .chart5{
                    
                    grid-column-start: 2;
                    grid-column-end: 3;
                }
                .chart6{
                    grid-column-start: 3;
                    grid-column-end: 5;
                } */
                }

                </style>
