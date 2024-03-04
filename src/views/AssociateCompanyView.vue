<template>
	<div class="association-page d-flex justify-content-center align-items-center">
		<div class="card p-5 mt-5">
			<Message :message="msgText" :class="msgCategory"></Message>
			<h1 class="mb-5 text-center text-theme">Associate</h1>
			<form class="form-group">
				<div class="form-group">
					<label for="user-email" class="text-uppercase">Email</label>
					<input id="user-email"
						:class="{ 'form-text-input form-control': true, 'invalid-entry': !errors.validEmail }" type="text"
						v-model="email" @change="onEmailChanged" autocomplete="username">
				</div>

				<button class="btn btn-lg bg-theme text-light mt-2 form-control" @click.prevent="submit">
					<span hidden id="spinner" class="spinner-border spinner-border-sm mr-1"></span>Submit Request
				</button>

				<div class="form-group mt-3 d-flex flex-wrap justify-content-between">
					<span class="text-theme">Are you the owner?</span>
					<span class="space"></span>
					<router-link :to="{ name: 'CreateCompany' }" class="register-link" @click="submit">Register my
						Company</router-link>
				</div>
				<div class="policies form-group mt-3 d-flex flex-wrap justify-content-between">
					<a href="#" class="terms-of-use">Terms of Use</a>
					<span class="mb-1"><svg xmlns="http://www.w3.org/2000/svg" height="5px" width="5px" fill="#0c5f5f"
							viewBox="0 0 512 512">
							<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
						</svg></span>
					<a href="#" class="help">Help</a>
				</div>
			</form>
		</div>

	</div>
</template> 

<script>

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from '../router';
import axios from 'axios';
import Message from '../components/Message.vue';
const API_URI = "https://localhost:44363/";
// const API_URI = "http://beassistant-001-site1.etempurl.com/";

export default {
	name: "AssociateToCompany",
	components: {
		FontAwesomeIcon,
		Message
	},
	data() {
		return {
			email: "",
			userId: "",
			errors: {
				validEmail: true,
			},
			msgText: "",
			msgCategory: ""

		}
	},
	mounted() {
		var storedUser = localStorage.getItem('user')

		if (storedUser != null || storedUser != "") {
			var user = JSON.parse(storedUser)
            if(user){
				 this.userId = user[0].Id;
            }
            else{
                router.push({name: 'SignIn'})
            }
			
			
		}
	},
	methods: {

		async submit() {
			var spinner = document.getElementById('spinner')
			spinner.removeAttribute('hidden')
			fetch(API_URI + "PostMakeCompanyAssociationRequest", {
				method: 'POST',
				mode: 'cors',
				headers: new Headers({
					'Content-Type': 'application/json'
				}),
				body: JSON.stringify({ IdSolicitante: this.userId, EmailEmpresa: this.email })

			})
				.then((response) => response.text())
				.then((responseText) => {
					var json = JSON.parse(responseText)
					console.log(json)
					if (json) {
						this.msgText = json.msg
						switch (json.status) {
							case 0:
								if (json.requestStatus == 'Enviado') {
									this.msgText += 'Sent'
									this.msgCategory = "alert alert-success"
								}
								else if (json.requestStatus == 'Recibido') {
									this.msgText += 'Received'
									this.msgCategory = "alert alert-success"
								}
								else if (json.requestStatus == 'Calcelado') {
									this.msgText += 'Canceled'
									this.msgCategory = "alert alert-danger"
								}
								else if (json.requestStatus == 'Aceptado') {
									this.msgText += 'Accepted'
									this.msgCategory = "alert alert-success"
								}
								break;
							case 1:
								this.msgCategory = "alert alert-success"
								break;
							case -1:
								this.msgCategory = "alert alert-danger"
								break;
							default:
								break;
						}

					}
					spinner.setAttribute('hidden', "")
					
				})
				.catch((error) => {
					this.msgText = error
					this.msgCategory = "alert alert-danger"
					spinner.setAttribute('hidden', '')
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

.association-page a {
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