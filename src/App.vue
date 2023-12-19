<template>
<!-- <NavBar></NavBar> -->
 <Sidebar></Sidebar>
 <router-view></router-view>
 <!-- <FooterItem></FooterItem> -->
</template>

<script>

// import NavBar from "./components/NavBar.vue";
import ProductList from "./components/ProductList.vue";
import DashboardView from "./components/DashboardView.vue";
import FooterItem from "./components/FooterItem.vue";
import Sidebar  from "./components/Sidebar.vue";
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUsers, faMoneyBill, faChartLine, faPercentage, faHandHoldingDollar, faCircleChevronRight, faBoxesStacked, faHouse, faDollarSign, faUserGroup, faBars } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUsers)
library.add(faMoneyBill)
library.add(faChartLine)
library.add(faPercentage)
library.add(faHandHoldingDollar)
library.add(faCircleChevronRight)
library.add(faBoxesStacked)
library.add(faHouse)
library.add(faDollarSign)
library.add(faUserGroup)
library.add(faBars)

export default {
  name: "App",
  components: {
    Sidebar,
    ProductList,
    DashboardView,
    FontAwesomeIcon,
    FooterItem,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
:root {
	--primary: #4ade80;
	--primary-alt: #22c55e;
	--grey: #64748b;
	--dark: #1e293b;
	--dark-alt: #334155;
	--light: #f1f5f9;
	--sidebar-width: 300px;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Fira sans', sans-serif;
}

body {
	background: var(--light);
}

button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}

.app {
	display: flex;
		// flex: 1 1;
		// padding: 2rem;

		@media (max-width: 1024px) {
			// padding-left: 3rem;
			flex-direction: column;
		}
}
</style>
