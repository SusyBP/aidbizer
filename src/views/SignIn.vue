<template>
    <div class="login-page">
        <div class="card p-5 mt-5">
            <Message :message="msgText" :class="msgCategory"></Message>
            <h1 class="mb-5 text-center text-theme">Sign In</h1>
            <form class="form-group">
                <div class="form-group">
                    <label for="user-email" class="text-uppercase">Email</label>
                    <input id="user-email" :class="{ 'form-text-input form-control': true, 'invalid-entry': !validEmail }"
                        type="text" v-model="email" @change="onEmailChanged" autocomplete="username">
                </div>
                <div class="form-group">
                    <label for="user-password" class="text-uppercase">Password</label>
                    <input id="user-password" class="form-text-input form-control" type="password" v-model="password"
                        autocomplete="password">
                </div>

                <button class="btn btn-lg bg-theme text-light mt-2 form-control" @click.prevent="login"><span hidden
                        id="spinner" class="spinner-border spinner-border-sm mr-1"></span>Sign
                    In</button>

                <div class="form-group mt-3 d-flex flex-wrap justify-content-between">
                    <span class="text-theme">Not account yet?</span>
                    <span class="space"></span>
                    <router-link :to="{ name: 'SignUp' }" class="register-link">Sign up</router-link>
                </div>
                <div class="form-group mt-3 d-flex flex-wrap justify-content-center">  
                    <router-link :to="{ name: 'SignUp' }" class="register-link">Forgot Password?</router-link>
                </div>

                <div class="external-login form-group mt-3">
                    <!-- <div class="text-theme">Login with another account</div> -->
                    <div class="external-login-brands">
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="25px" width="25px" viewBox="0 0 488 512"
                                fill="#0c5f5f">
                                <path
                                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                            </svg></a>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" width="30px" viewBox="0 0 320 512"
                                fill="#0c5f5f">
                                <path
                                    d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                            </svg></a>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 448 512"
                                fill="#0c5f5f">
                                <path
                                    d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                            </svg></a>
                    </div>
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
const API_URI = "https://localhost:44363";
// const API_URI = "http://beassistant-001-site1.etempurl.com";
import Message from '../components/Message.vue';

export default {
    name: "SignIn",
    components: {
        FontAwesomeIcon,
        Message,
    },
    data() {
        return {
            email: "",
            password: "",
            validEmail: true,
            msgText: "",
            msgCategory: ""
        }
    },
    methods: {
        async login() {
            var spinner = document.getElementById('spinner')
            spinner.removeAttribute('hidden')
            fetch(API_URI + "/SignIn", {
                method: 'POST',
                mode: 'cors',
                headers: new Headers({
                    'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type

                }),
                body: "email=" + this.email + "&password=" + sha256(this.password) // <-- Post parameters
            })
                .then((response) => response.text())
                .then((responseText) => {
                    // console.log(responseText);
                    switch (responseText) {
                        case '0'://wrong password
                            this.msgText = "Wrong Password"
                            this.msgCategory = "alert alert-danger"
                            break;
                        case '-1'://does NOT exit
                            // const user = this.getUser(this.email);
                            this.msgText = "Invalid Credentials"
                            this.msgCategory = "alert alert-danger"
                            break;
                        default:
                            //does exit
                            localStorage.setItem("loggedin", JSON.stringify(true))
                          
                            // console.log(typeof(responseText))
                            localStorage.setItem("user", responseText)
                            router.push({ name: 'Home' })
                            break;
        }})
                .catch((error) => {
                    console.log(error);
                });
            spinner.setAttribute('hidden', "")

        },
        async getUser(email) {
            var user = null;
            var paramsUrl = "/api/Users?email=";
            fetch(API_URI + paramsUrl + email, {
                method: 'GET',
                mode: 'cors',
                headers: new Headers({
                    'Content-Type': 'application/json',
                }),
            })
                .then((response) => response.text())
                .then((responseText) => {
                    var user = JSON.parse(responseText);
                    localStorage.setItem("user", JSON.stringify(user))
                })
                .catch((error) => {
                    console.log(error);
                });

            return user;
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
    ;
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