<template>
	<div class="login-page">
		<div class="card p-5 mt-5">
			<h1 class="mb-5 text-center text-theme">Associate</h1>
			<form class="form-group">
				<div class="form-group">
					<label for="user-email" class="text-uppercase">Email</label>
					<input id="user-email" :class="{ 'form-text-input form-control': true, 'invalid-entry': !erros.validEmail }"
						type="text" v-model="email" @change="onEmailChanged" autocomplete="username">
				</div>

				<button class="btn btn-lg bg-theme text-light mt-2 form-control" @click.prevent="submit">Submit Request
				</button>

				<div class="form-group mt-3 d-flex flex-wrap justify-content-between">
					<span class="text-theme">Are you the owner?</span>
					<span class="space"></span>
					<router-link :to="{ name: 'SignUp' }" class="register-link">Register my Company</router-link>
				</div>
				<div class="policies form-group mt-3 d-flex flex-wrap justify-content-between">
					<a href="#" class="terms-of-use">Terms of Use</a>
					<span class="mb-1"><svg xmlns="http://www.w3.org/2000/svg" height="5px" width="5px" fill="#0c5f5f"
							viewBox="0 0 512 512">
							<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
						</svg></span>
					<a href="#" class="privacy-policy">Privacy Policy</a>
				</div>
			</form>
		</div>
	</div>
</template> 

<script>

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from '../router';
import axios from 'axios';
import { sha256 } from 'js-sha256';
const API_URI = "https://localhost:44363/";
// const API_URI = "http://beassistant-001-site1.etempurl.com/";

export default {
	name: "AssociateToCompany",
	components: {
		FontAwesomeIcon,
	},
	data() {
		return {
			email: "",
			password: "",
			errors: {
				validEmail: true,
			}
		}
	},
	methods: {
		async submit(){
			var requests = getUserRequests();

		},
		async getUserRequests() {
			fetch(API_URI, {
				method: 'POST',
				mode: 'cors',
				headers: new Headers({
					'Content-Type': 'application/json'

				}),
				body: "email=" + this.email
			})
				.then((response) => response.text())
				.then((responseText) => {
					console.log(responseText);
					
				})
				.catch((error) => {
					console.log(error);
				});

		},

		isValidEmail(email) {
			const regExp = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
			return email.match(regExp) != null;
		},
		onEmailChanged() {
			this.validEmail = this.isValidEmail(this.email)
		},
	}
}
</script>

<style scoped>
.bg-theme {
	background-color: var(--theme-green);
}

.theme-green-5 {
	background-color: var(--theme-green-5);
}

.bg-gold-6 {
	background-color: var(--gold-yellow_6);
}

.text-theme {
	color: var(--theme-green);
}

.card label,
h4 {
	color: var(--theme-green);
}

.login-page {
	display: flex;
	justify-content: center;
	align-items: center;
}

.login-page a {
	text-decoration: none;
	color: var(--theme-green);
}

.space {
	margin-right: .5rem;
}

button {
	background-color: var(--theme-green) !important;
}

.register-link {
	text-decoration: underline !important;
}

input {
	background-color: white !important;
	border: 1px solid var(--theme-green);
	border-radius: 10px;
}

.form-group input {
	/* position: relative; */
	margin-bottom: .5rem;

}

.external-login-brands {
	text-align: center;
	margin-top: 2rem;
	margin-bottom: 3rem;
}

.external-login-brands {
	text-align: center;
	margin-top: 2rem;
	margin-bottom: 3rem;
}

svg {
	color: var(--theme-green);
	margin-right: .5rem;
	margin-left: .5rem;
}

.form-text-input {
	padding: .5rem;
}

.form-text-input:focus {
	border-color: rbg(12, 95, 95, 0.18) !important;
	box-shadow: 0 0 0 0.25rem var(--theme-green-6) !important;
}

.form-text-input:focus-visible {
	border-color: var(--theme-green-6) !important;
	box-shadow: 0 0 0 0.25rem var(--theme-green-6) !important;
}



.form-text-input {
	padding: .5rem;
}

.form-text-input:focus {
	border-color: rbg(12, 95, 95, 0.18) !important;
	box-shadow: 0 0 0 0.25rem var(--theme-green-6) !important;
}

.form-text-input:focus-visible {
	border-color: var(--theme-green-6) !important;
	;
	/* box-shadow: 0 0 0 0.25rem var(--theme-green-6) !important; */
}

button .form-control:focus {
	background-color: var(--theme-green) !important;
}
</style>        