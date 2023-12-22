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
import { faUsers, faMoneyBill, faChartLine,
	 faPercentage, faHandHoldingDollar, faCircleChevronRight,
	  faBoxesStacked, faHouse, faDollarSign, faUserGroup,
	   faBars, faCartArrowDown, faCalculator, faWarehouse,
	    faBalanceScale, faClipboardList, faAngleDown,
		 faTableCells, faMoneyBillTransfer, faCoins,
		  faTimeline, 
      faUser,
      faCircleUser,
      faMagnifyingGlass,
      faEllipsisVertical} from '@fortawesome/free-solid-svg-icons'

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
library.add(faCartArrowDown)
library.add(faCalculator)
library.add(faWarehouse)
library.add(faBalanceScale)
library.add(faClipboardList)
library.add(faAngleDown)
library.add(faTableCells)
library.add(faMoneyBillTransfer)
library.add(faCoins)
library.add(faTimeline)
library.add(faUser)
library.add(faCircleUser)
library.add(faMagnifyingGlass)
library.add(faEllipsisVertical)

export default {
  name: "App",
  components: {
	// NavBar,
    Sidebar,
    ProductList,
    DashboardView,
	// Contacts,
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
	--theme-green: #0c5f5f;
	--primary:#00ffe5;// #25cbbb;
	--primary-alt: #00ffe5;//#22c55e;
	--grey: #64748b;
	--dark: rgb(36, 63, 61);//#1e293b;
	--dark-alt: #1f6f6f;//rgb(36, 63, 61);//#334155;
	--light: #f1f5f9;
	--sidebar-width: 300px;
	--gold-yellow_1: #af6c0c;
	--gold-yellow_2: #bf7c1c;
	--gold-yellow_3: #cf8c2c;
	--gold-yellow_4: #df9c3c;
	--gold-yellow_5: #efac4c;
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

.btn-theme{
	background-color: var(--theme-green) !important;
}

.app {
	display: flex;
		flex: 1 1;

		@media (max-width: 768px) {
			flex-direction: column;
		}
}
</style>
