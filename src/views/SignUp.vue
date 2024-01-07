<template>
    <div class="sigup-page">
        <div class="card p-4 my-5 mx-4">
            <h2 class="mb-4 text-theme">Sign Up</h2>
            <form class="row">
                <div class="col-sm-6">
                    <div class="form-group">
                        <label for="user-phone">Phone Number</label>
                        <input id="user-phone" class="form-control" type="text" v-model="cellphone" autocomplete="">
                    </div>
                    <div class="form-group">
                        <label for="user-street-address">Street Address</label>
                        <input id="user-street-address" class=" form-control" v-model="streetAddress1"
                            autocomplete="street-address">
                    </div>
                    <div class="d-flex">
                        <div class="form-group">
                            <label for="user-street-address2">Apt.</label>
                            <input id="user-street-address2" class="form-control" v-model="streetAddress2"
                                autocomplete="street-address2">
                        </div>
                        <span class="space"></span>
                        <div class="form-group">
                            <label for="zip">Zip</label>
                            <input id="zip" class="form-control" v-model="zip" autocomplete="zip">
                        </div>
                        <span class="space"></span>
                        <div class="form-group">
                            <label for="user-city">City</label>
                            <input id="user-city" class="form-control" v-model="city" autocomplete="city">
                        </div>
                    </div>
                    <div class="d-flex justify-content-between">
                        <div class="form-group">
                            <label for="user-city">State</label>
                            <input id="user-city" class="form-control" v-model="state" autocomplete="state">
                        </div>
                        <span class="space"></span>
                        <div class="form-group">
                            <label for="user-city">Country</label>
                            <input id="user-city" class="form-control" v-model="country" autocomplete="country">
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="form-group">
                        <label for="user-password">Full Name</label>
                        <input id="user-fullname" class="form-control" v-model="fullname" autocomplete="fullname">
                    </div>
                    <div class="form-group">
                        <label for="user-email">Email</label>
                        <input id="user-email" class="form-control" type="text" v-model="email"
                            autocomplete="johndue@domail.com">
                    </div>
                    <div class="form-group">
                        <label for="user-password">Password</label>
                        <input id="user-password" class="form-control" type="password" v-model="password"
                            autocomplete="current-password">
                    </div>
                    <button class="bg-theme text-light form-control" @click.prevent="signup">Sign Up</button>
                </div>
            </form>
        </div>
    </div>
</template> 

<script>

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from '../router';

export default {
    components: {
        FontAwesomeIcon,
    },
    data() {
        return {
            fullname: "",
            password: "",
            email: "",
            cellphone: "",
            streetAddress1: "",
            streetAddress2: "",
            city: "",
            zip: "",
            state: "",
            country: "",
        }
    },
    methods: {
        signup() {
            router.push({ name: "SignIn" })
        },

        validEmail(email) {
            const regExp = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            return email.match(regExp) != null;
        }
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


.signup-page {
    display: flex;
    justify-content: center;
    align-items: center;
}

.signup-page a {
    text-decoration: none;
    /* color: var(--gold-yellow_6); */
}

.space {
    margin-right: .5rem;
}

button {
    background-color: var(--theme-green) !important;
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
    /* background-color:var(--gold-yellow_6) !important; */
}

.register-link {
    text-decoration: underline !important;
}

input {
    background-color: white !important;
    border: 1px solid var(--theme-green);
    border-radius: 10px;
}

.form-group label {
    position: absolute;
    margin-top: -.7rem;
    margin-left: .8rem;
    background: #fff;
    padding: 0 .2rem;
    font-size: .95rem;
}

.form-group input {
    /* position: relative; */
    margin-bottom: 1.5rem;

}

.external-login-brands {
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 3rem;
}

svg {
    color: var(--theme-green);
    margin-right: 1rem;
}

.form-text-input {
    padding: .6rem .5rem;
}

.form-text-input:focus {
    border-color: rbg(12,95,95,0.18) !important;
    box-shadow: 0 0 0 0.25rem var(--theme-green-6) !important;
}

.form-text-input:focus-visible {
    border-color: var(--theme-green-6) !important;;
    /* box-shadow: 0 0 0 0.25rem var(--theme-green-6) !important; */
}

@media (min-width:900px) {
    .card {padding: 5rem !important;
        margin-left: 8rem !important;
        margin-right: 8rem !important}
}
</style>