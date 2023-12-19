<template>
	<aside :class="`${is_expanded ? 'is-expanded' : ''}`">
		<div class="logo">
			<img :src="logoURL" alt="Vue" /> 
		</div>
		
		<!-- <div class="menu-toggle-wrap">
			<button class="menu-toggle" @click="ToggleMenu">
				<span class="material-icons"><font-awesome-icon :icon="['fas', 'circle-chevron-right']" /></span>
			</button>
		</div> -->
		<div class="menu mt-1">
			<button class="navbar-toggler material-icons" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
				<span class="material-icons"><font-awesome-icon :icon="['fas', 'bars']" /></span>
				<span class="text">  Menu</span>
    		</button>
	<div class="collapse navbar-collapse show" id="collapsibleNavbar">
		<div>	
				
			<router-link to="/bea-vue-vite" class="button">
				<span class="material-icons"><font-awesome-icon :icon="['fas', 'house']" /></span>
				<span class="text">Home</span>
			</router-link>
		
			<router-link to="/bea-vue-vite/products" class="button">
				<span class="material-icons"><font-awesome-icon :icon="['fas', 'boxes-stacked']" /></span>
				<span class="text">Products</span>
			</router-link>
			<router-link to="/bea-vue-vite/sales" class="button">
				<span class="material-icons"><font-awesome-icon :icon="['fas', 'hand-holding-dollar']" /></span>
				<span class="text">Sales</span>
			</router-link>
			<router-link to="/contact" class="button">
				<span class="material-icons"><font-awesome-icon :icon="['fas', 'user-group']" /></span>
				<span class="text">Contacts</span>
			</router-link>
			<router-link to="/settings" class="button">
				<span class="material-icons"><font-awesome-icon :icon="['fas', 'dollar-sign']" /></span>
				<span class="text">Expenses</span>
			</router-link>	
		
		</div>
		</div>
		
		</div>
<div class=""></div>
	</aside>
</template>

<script setup>
import { ref } from 'vue'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUser, faEye, faMoneyBill, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'
import logoURL from "../assets/images/iconBEA.png"

const is_expanded = ref(localStorage.getItem("is_expanded") === "true")

const ToggleMenu = () => {
	is_expanded.value = !is_expanded.value
	localStorage.setItem("is_expanded", is_expanded.value)
}
</script>

<style lang="scss" scoped>
aside {
	@media (max-width: 1024px) {
		// position: absolute;
		// z-index: 99;
		min-height: auto;
		flex-direction: row;
		min-width: 100vw;	
		justify-content: space-between;

	}
	@media (min-width: 1024px) {
	.navbar-toggler{
		 margin-left: -5rem;
		}
	}
	display: flex;
	flex-direction: column;

	background-color: var(--dark);
	color: var(--light);

	width: calc(3rem + 32px);
	overflow: hidden;
	min-height: 100vh;
	padding: 1rem;

	transition: 0.2s ease-in-out;

	.flex {
		flex: 1 1 0%;
	}

	.logo {
		margin-bottom: 1rem;

		img {
			width: 4rem;
		}
	}

	.menu-toggle-wrap {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 1rem;

		position: relative;
		top: 0;
		transition: 0.2s ease-in-out;

		.menu-toggle {
			transition: 0.2s ease-in-out;
			.material-icons {
				font-size: 2rem;
				color: var(--light);
				transition: 0.2s ease-out;
			}
			
			&:hover {
				.material-icons {
					color: var(--primary);
					transform: translateX(0.5rem);
				}
			}
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
				font-size: 2rem;
				color: var(--light);
				transition: 0.2s ease-in-out;
			}
			.text {
				color: var(--light);
				transition: 0.2s ease-in-out;
			}

			&:hover {
				background-color: var(--dark-alt);

				.material-icons, .text {
					color: var(--primary);
				}
			}

			&.router-link-exact-active {
				background-color: var(--dark-alt);
				border-right: 5px solid var(--primary);

				.material-icons, .text {
					color: var(--primary);
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

		.menu-toggle-wrap {
			top: -3rem;
			
			.menu-toggle {
				transform: rotate(-180deg);
			}
		}

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

	// @media (min-width: 600px) {
	// 	position: absolute;
	// 	z-index: 99;
	// }
	
	
	.navbar-toggler{
			font-size: 2rem;
    		margin-bottom: 1rem;

		}

}
</style>