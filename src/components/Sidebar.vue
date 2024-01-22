		<template>
			<aside class='is-expanded'>
				<div class="logo">
					<img :src="logoURL" alt="Vue" /> 
				</div>
<!-- 				
				<div class="menu-expand-button">
					<button class="menu-toggle" @click="ToggleMenu">
						<span class="material-icons"><font-awesome-icon :icon="['fas', 'circle-chevron-right']" /></span>
					</button>
				</div> -->
				<div class="menu">
					<div class="navbar-toggler-wrapper" >
						<a class="navbar-toggler material-icons" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
							<span class="material-icons"><font-awesome-icon :icon="['fas', 'ellipsis-vertical']" /></span>
							<span class="text"></span>
						</a>
					</div>
				<div class="collapse navbar-collapse show" id="collapsibleNavbar">
				<div>					
					<router-link :to="{ name: 'Home'}" class="button">
						<span class="material-icons"><font-awesome-icon :icon="['fas', 'table-cells']" /></span>
						<span class="text">Dashboard</span>
					</router-link>	
					<router-link :to="{ name: 'Contacts'}" class="button">
						<span class="material-icons"><font-awesome-icon :icon="['fas', 'user-group']" /></span>
						<span class="text">Contacts</span>
					</router-link>	
					<div class="material-icons button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar2">
						<span class="material-icons"><font-awesome-icon :icon="['fas', 'house']" /></span>
						<span class="text">Management</span><span class="material-icons collapse-submenu-arrow"><font-awesome-icon :icon="['fas', 'angle-down']" /></span>
					</div>	
				<div class="collapse navbar-collapse" id="collapsibleNavbar2">
					<router-link :to="{name:'Products'}" class="button submenu-item">
						<span class="material-icons ml-4"><font-awesome-icon :icon="['fas', 'boxes-stacked']" /></span>
						<span class="text">Products</span>
					</router-link>
					<router-link :to="{ name: 'Sales'}" class="button submenu-item">
						<span class="material-icons"><font-awesome-icon :icon="['fas', 'hand-holding-dollar']" /></span>
						<span class="text">Sales</span>
					</router-link>
					<router-link :to="{ name: 'Orders'}" class="button submenu-item">
						<span class="material-icons"><font-awesome-icon :icon="['fas', 'cart-arrow-down']" /></span>
						<span class="text">Orders</span>
					</router-link>
					<router-link :to="{ name: 'Inventory'}" class="button submenu-item">
						<span class="material-icons"><font-awesome-icon :icon="['fas', 'clipboard-list']" /></span>
						<span class="text">Inventory</span>
					</router-link>
					<router-link :to="{ name: 'Stock'}" class="button submenu-item">
						<span class="material-icons"><font-awesome-icon :icon="['fas', 'warehouse']" /></span>
						<span class="text">Stock</span>
					</router-link>
				</div>
				<div class="material-icons button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar3">
						<span class="material-icons"><font-awesome-icon :icon="['fas', 'money-bill-transfer']" /></span>
						<span class="text">Finances</span><span class="material-icons collapse-submenu-arrow"><font-awesome-icon :icon="['fas', 'angle-down']" /></span>
					</div>	
				<div class="collapse navbar-collapse" id="collapsibleNavbar3">
					<router-link :to="{ name: 'Invoices'}" class="button submenu-item">
						<span class="material-icons"><font-awesome-icon :icon="['fas', 'file-invoice-dollar']" /></span>
						<span class="text">Invoices</span>
					</router-link>	
					<router-link :to="{ name: 'Expenses'}" class="button submenu-item">
						<span class="material-icons"><font-awesome-icon :icon="['fas', 'dollar-sign']" /></span>
						<span class="text">Expenses</span>
					</router-link>	
					<router-link :to="{ name: 'Debts'}" class="button submenu-item">
						<span class="material-icons"><font-awesome-icon :icon="['fas', 'coins']" /></span>
						<span class="text">Debts</span>
					</router-link>
					<router-link :to="{ name: 'Balance'}" class="button submenu-item">
						<span class="material-icons"><font-awesome-icon :icon="['fas', 'balance-scale']" /></span>
						<span class="text">Balance</span>
					</router-link>		
				</div>		
					<router-link :to="{name:'ProductionProcesses'}" class="button">
						<span class="material-icons"><font-awesome-icon :icon="['fas', 'timeline']" /></span>
						<span class="text">Workflow</span>
					</router-link>					
					<router-link :to="{name:'Quote'}" class="button">
						<span class="material-icons"><font-awesome-icon :icon="['fas', 'calculator']" /></span>
						<span class="text">Quote</span>
					</router-link>
				</div>
				</div>
				
				</div>
		<div class=""></div>
			</aside>
		</template>

		<script setup>
		import { ref } from 'vue'
		import router from '../router';
		/* import font awesome icon component */
		import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

		import logoURL from "../assets/images/iconBEA.png"

		// const is_expanded = ref(localStorage.getItem("is_expanded") === "true")
		
		// const ToggleMenu = () => {
		// 	is_expanded.value = !is_expanded.value
		// 	localStorage.setItem("is_expanded", is_expanded.value)
		// }

		</script>

		<style lang="scss" scoped>
		aside {
			@media (max-width: 768px) {
				// position: absolute;
				// z-index: 99;
				min-height: auto;
				min-width: 100vw;	
				justify-content: space-between;
				
				.menu-expand-button{
				display:none;
				}
				.navbar-toggler-wrapper{
					display: flex;
					justify-content: end;
					margin-top: -4rem;
					margin-right: 2rem;
				}
		}

			@media (min-width: 768px) {

			.navbar-toggler-wrapper{
				margin-right: 9rem;
				margin-left: 1.3rem;
			}
			.menu-expand-button{
				display: flex;
				justify-content: flex-end;
				margin-bottom: 1rem;

				position: relative;
				top: 0;
				transition: 0.2s ease-in-out;

				.menu-toggle {
					transition: 0.2s ease-in-out;
					.material-icons {
						font-size: 1rem;
						color: var(--light);
						transition: 0.2s ease-out;
					}
					
					&:hover {
						.material-icons {
							color: var(--theme-green_6);
							transform: translateX(0.5rem);
						}
					}
				}
			
			}
			&.not-expanded{
				.menu-expand-button {
					left: -1.5rem;
				}
			}
		}
			display: flex;
			flex-direction: column;

			background-color: var(--dark);
			color: var(--light);

			width: calc(5rem + 32px);
			overflow: hidden;
			min-height: 100vh;
			padding: 1rem 1rem 0;

			transition: 0.2s ease-in-out;

			.flex {
				flex: 1 1 0%;
			}

			.logo {
				margin-bottom: 1rem;

				img {
					width: 3.5rem;
				}
			}

			

			h3, .button .text {
				opacity: 0;
				transition: opacity 0.3s ease-in-out;
			}

			h3 {
				color: var(--grey);
				font-size: 0.875rem;
				margin-bottom: 0.5rem;
				text-transform: uppercase;
			}

			.menu {
				margin: 0 -1rem;
				display: flex;
				flex-direction: column;

				.button {
					display: flex;
					align-items: center;
					text-decoration: none;

					transition: 0.2s ease-in-out;
					padding: 0.5rem 1rem;

					.material-icons {
						font-size: 1rem;
						color: var(--light);
						transition: 0.2s ease-in-out;
					}

					.collapse-submenu-arrow {
						margin-left: 1rem;
						margin-top: 0.2rem;
						}
					.text {
						color: var(--light);
						transition: 0.2s ease-in-out;
					}

					&:hover {
						background-color: var(--theme-green);

						.material-icons, .text {
							// color: var(--theme-green-7);
						}
					}

					&.router-link-exact-active {
						background-color: var(--theme-green);
						border-right: 5px solid var(--theme-green-7);

						.material-icons, .text {
							color: var(--theme-secondary-color);
						}
					}
					
				}
			}

			.footer {
				opacity: 0;
				transition: opacity 0.3s ease-in-out;

				p {
					font-size: 0.875rem;
					color: var(--grey);
				}
			}
			
			&.is-expanded {
				width: var(--sidebar-width);


				h3, .button .text {
					opacity: 1;
				}

				.button {
					.material-icons {
						margin-right: 1rem;
					}
				}

				.footer {
					opacity: 0;
				}

			}
			.navbar-toggler{
					font-size: 2rem;
					margin-bottom: 1rem;

				}

			.submenu-item{
				padding-left: 2rem !important;
			}

		}
		</style>