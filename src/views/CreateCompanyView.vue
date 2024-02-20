<template>
    <div class="login-page">
        <div class="card p-5 mt-5">
            <h1 class="mb-5 text-center text-theme">Register my Company</h1>
            <form class="form-group">
                <div class="form-group">
                    <label for="user-email" class="text-uppercase">Company Name</label>
                    <input id="user-email" :class="{ 'form-text-input form-control': true, 'invalid-entry': !errors.validCompanyName }"
                        type="text" v-model="company_name"  @change="onNameChanged()" autocomplete="company_name">
                </div>
                <div class="form-group">
                    <label for="user-email" class="text-uppercase">Email</label>
                    <input id="user-email" :class="{ 'form-text-input form-control': true, 'invalid-entry': !errors.validEmail }"
                        type="text" v-model="email"  @change="onEmailChanged()" autocomplete="email">
                </div>
                <div class="form-group">
                        <label for="user-phone">Phone Number</label>
                        <input id="user-phone" :class="{ 'form-control': true, 'invalid-entry': !errors.validPhone }"
                            type="text" v-model="cellphone" autocomplete="" @change="onPhoneChange()">
                    </div>
                    <div class="form-group">
                        <label for="user-street-address">Street Address</label>
                        <input id="user-street-address" class="form-control" v-model="streetAddress1"
                            autocomplete="street-address">
                    </div>
                    <div class="d-flex justif-content-between">
                        <div class="form-group">
                            <label for="user-street-address2">Apt.</label>
                            <input id="user-street-address2" class="form-control" v-model="streetAddress2"
                                autocomplete="street-address2" @change="onAptChange()">
                        </div>
                        <span class="space"></span>
                        <div class="form-group">
                            <label for="user-city">City</label>
                            <input id="user-city" class="form-control" v-model="city" autocomplete="city">
                        </div>
                        <span class="space"></span>
                        <div class="form-group">
                            <label for="zip">Zip</label>
                            <input id="zip" :class="{ 'form-control': true, 'invalid-entry': !errors.validZip }"
                                v-model="zip" autocomplete="zip" @change="onZipChanged()">
                        </div>
                    </div>
                    <div class="d-flex justify-content-between">
                        <div class="form-group">
                            <label for="user-county">County</label>
                            <input id="user-county" class="form-control" v-model="county" autocomplete="county">
                        </div>
                        <span class="space"></span>
                        <div class="form-group">
                            <label for="user-state">State</label>
                            <input id="user-state" class="form-control" v-model="state" autocomplete="state">
                        </div>
                        <span class="space"></span>
                        <div class="form-group">
                            <label for="user-country">Country</label>
                            <input id="user-country" class="form-control" v-model="country" autocomplete="country">
                        </div>
                    </div>
                <button class="btn btn-lg bg-theme text-light mt-2 form-control"  @click.prevent="registerCompany">Register
                </button>
            </form>
        </div>
    </div>
</template> 

<script>

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from '../router';
import axios from 'axios';
import { sha256 } from 'js-sha256';
const API_URI = "https://localhost:44363/SignIn";
// const API_URI = "http://beassistant-001-site1.etempurl.com/SignIn";

export default {
    name: "CreateCompanyView",
    components: {
        FontAwesomeIcon,
    },
    data() {
        return {
            email: "",
            company_name: "",           
            cellphone: "",
            streetAddress1: "",
            streetAddress2: "",
            city: "",
            zip: "",
            county: "",
            state: "",
            country: 0,

            errors: {
                validPhone: true,
                validZip: true,
                validEmail: true,
                validCompanyName: true,
                responseError: false
            }
        }
    },
    methods: {
        async registerCompany() {
            fetch(API_URI, {
                method: 'POST',
                mode: 'cors',
                headers: new Headers({
                    'Content-Type': 'application/json', // <-- Specifying the Content-Type

                }),
                body: "email=" + this.email + "&password=" + sha256(this.password) // <-- Post parameters
            })
                .then((response) => response.text())
                .then((responseText) => {
                    console.log(responseText);
                    switch (responseText) {
                        case '0'://wrong password
                            console.log("Error: Wrong password")
                            break;
                        case '1'://user exit
                            localStorage.setItem("loggedin", JSON.stringify(true))
                            localStorage.setItem("username", JSON.stringify(this.email))
                            router.push({name: 'Home'})
                            break;
                        default:
                        //does not exit
                            break;
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
            
        },

        isValidEmail(email) {
            const regExp = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            return email.match(regExp) != null;
        },
        isValidPhone() {
            const regExp = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
            return this.cellphone.match(regExp) != null || this.cellphone == "";
        },
        isValidZipcode() {
            const regExp = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
            return this.zip.match(regExp) != null || this.zip == "";
        },
        isInterger() {
            const regExp = /^[0-9]{1,5}$/;
            return this.streetAddress2.match(regExp) != null || this.streetAddress2 == "";
        },

        onEmailChanged() {
            this.errors.validEmail = this.isValidEmail(this.email)
        },
        onNameChanged(){
            this.errors.validCompanyName = true
        },
        onZipChanged(e) {
            this.errors.validZip = this.isValidZipcode()
        },

        onAptChange() {
            console.log(this.isInterger(this.streetAddress2))
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
    background-color:var(--theme-green) !important; 
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