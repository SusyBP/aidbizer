<template>
	<!-- <Sidebar @logout="logout"></Sidebar-->
	<router-view></router-view>
	<!-- <MainComponent @render="render"></MainComponent> -->
</template>

<script setup>
import { ref } from "vue";
import MainComponent from "./components/MainComponent.vue";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {
	faUsers, faMoneyBill, faChartLine,
	faPercentage, faHandHoldingDollar, faCircleChevronRight,
	faBoxesStacked, faHouse, faDollarSign, faUserGroup,
	faBars, faCartArrowDown, faCalculator, faWarehouse,
	faBalanceScale, faClipboardList, faAngleDown,
	faTableCells, faMoneyBillTransfer, faCoins,
	faTimeline,
	faUser,
	faCircleUser,
	faMagnifyingGlass,
	faEllipsisVertical,
	faArrowRightFromBracket,
	faFileInvoiceDollar,
	faQuestionCircle,
	
	
} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUsers, faMoneyBill, faChartLine,
	faPercentage, faHandHoldingDollar, faCircleChevronRight,
	faBoxesStacked, faHouse, faDollarSign, faUserGroup,
	faBars, faCartArrowDown, faCalculator, faWarehouse,
	faBalanceScale, faClipboardList, faAngleDown,
	faTableCells, faMoneyBillTransfer, faCoins,
	faTimeline,
	faUser,
	faCircleUser,
	faMagnifyingGlass,
	faEllipsisVertical,
	faArrowRightFromBracket,
	faFileInvoiceDollar,
	faQuestionCircle,
	
	)

</script>

<style lang="scss">
:root {
	--theme-green: #0c5f5f;
	--theme-green-1: #1c6f6f;
	--theme-green-2: #2c7f7f;
	--theme-green-3: #3f8f8f;
	--theme-green-4: #4f9f9f;
	--theme-green-5: #5fafaf;
	--theme-green-6: #6fbfbf;
	--theme-green-7: #7fcfcf;

	--gold-yellow_1: #af6c0c;
	--gold-yellow_2: #bf7c1c;
	--gold-yellow_3: #cf8c2c;
	--gold-yellow_4: #df9c3c;
	--gold-yellow_5: #efac4c;
	--gold-yellow_6: #ffbc5c;

	--primary: #00ffe5; // #25cbbb;
	--primary-alt: #00ffe5; //#22c55e;
	--grey: #64748b;
	--dark: rgb(36, 63, 61); //#1e293b;
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
	border-radius: 10px !important;
	// background-color: var(--theme-green);
	// cursor: pointer;
	// appearance: none;
	// border: none;
	// outline: none;
	// background: none;
}
a:hover {
  color: var(--gold-yellow_6);
}

.btn-theme-green {
	background-color: var(--theme-green) !important;
}
.btn-theme-gold {
	background-color: var(--gold-yellow_6) !important;
	// color: white !important;
}
.app-main-content {
	display: flex;
	flex: 1 1;

	@media (max-width: 768px) {
		flex-direction: column;
	}

	.form-group {
		margin-bottom: 1rem;
	}
}
</style>
