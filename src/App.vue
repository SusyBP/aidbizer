<template>
<NavBar></NavBar>
 <router-view></router-view>
</template>

<script>

import NavBar from "./components/NavBar.vue";
import ProductList from "./components/ProductList.vue";
import DashboardView from "./components/DashboardView.vue";
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUsers, faMoneyBill, faChartLine, faPercentage, faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
// library.add(faUserSecret)
library.add(faUsers)
library.add(faMoneyBill)
library.add(faChartLine)
library.add(faPercentage)
library.add(faHandHoldingDollar)

export default {
  name: "App",
  components: {
    NavBar,
    ProductList,
    DashboardView,
    FontAwesomeIcon
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>
