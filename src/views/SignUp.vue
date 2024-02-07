<template>
    <div class="signup-page">
        <div class="card p-4 my-5 mx-4">
            <Message v-show="errors.length < 0" :message="Message" :category="Success"></Message>
            <h1 class="mb-4 text-theme">Sign Up</h1>
            <form class="row">
                <div class="col-sm-6">
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
                                autocomplete="street-address2" @change="onAptChange">
                        </div>
                        <span class="space"></span>
                        <div class="form-group">
                            <label for="user-city">City</label>
                            <input id="user-city" class="form-control" v-model="city" autocomplete="city">
                        </div>
                        <span class="space"></span>
                        <div class="form-group">
                            <label for="zip">Zip</label>
                            <input id="zip" :class="{ 'form-control': true, 'invalid-entry': !errors.validZip }" v-model="zip"
                                autocomplete="zip" @change="onZipChange()">
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
                </div>
                <div class="col-sm-6">
                    <div class="form-group">
                        <label for="user-password">Full Name</label>
                        <input id="user-fullname" class="form-control" v-model="fullname" autocomplete="fullname">
                    </div>
                    <div class="form-group">
                        <label for="user-email">Email</label>
                        <input id="user-email" v-model="email"
                            :class="{ 'form-control': true, 'invalid-entry': !errors.validEmail }" type="text" autocomplete=""
                            @change="onEmailChange()">
                    </div>
                    <div class="form-group">
                        <label for="user-password">Password</label>
                        <input id="user-password" class="form-control" type="password" v-model="password"
                            autocomplete="current-password">
                    </div>
                    <div class="form-group">
                        <label for="user-password-confirmation">Password Confirmation</label>
                        <input id="user-password-confirmation" class="form-control" type="password"
                            v-model="password_confirmation" autocomplete="user-password-confirmation">
                    </div>
                    <button class="btn btn-lg bg-theme text-light form-control mt-2" @click.prevent="signup">Sign Up</button>
                </div>
            </form>
        </div>
    </div>
</template> 

<script>

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Message from '../components/Message.vue'
import router from '../router';

export default {
    components: {
        FontAwesomeIcon,
        Message,
    },
    data() {
        return {
            fullname: "",
            password: "",
            password_confirmation: "",
            email: "",
            cellphone: "",
            streetAddress1: "",
            streetAddress2: "",
            city: "",
            zip: "",
            county: "",
            state: "",
            country: "",

            errors: {
                validPhone: true,
                validZip: true,
                validEmail: true,
            }
        }
    },
    methods: {
        signup() {

            router.push({ name: "SignIn" })
        },

        isValidEmail() {
            const regExp = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            return this.email.match(regExp) != null;
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

        onEmailChange() {
            this.errors.validEmail = this.isValidEmail()
        },
        onPhoneChange(e) {
            this.errors.validPhone = this.isValidPhone()
        },
        onZipChange(e) {
            this.errors.validZip = this.isValidZipcode()
        },

        onAptChange() {
            console.log(this.isInterger(this.streetAddress2))
        }
    },
    computed: {

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
    color: var(--theme-primary-color);
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

.form-group{
    /* margin-bottom: .1rem !important; */
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

svg {
    color: var(--theme-green);
    margin-right: 1rem;
}

.form-text-input {
    padding: .6rem .5rem;
}

.form-text-input:focus {
    border-color: rbg(12, 95, 95, 0.18) !important;
    box-shadow: 0 0 0 0.25rem #6fbfbf59 !important;
}

.form-text-input:focus-visible {
    border-color: var(--theme-green-6) !important;
    ;
    /* box-shadow: 0 0 0 0.25rem var(--theme-green-6) !important; */
}

@media (min-width:900px) {
    /* .card {padding: 5rem !important;
        margin-left: 8rem !important;
        margin-right: 8rem !important} */
}

#zip,
#user-street-address2,
#user-city {
    /* max-width: 6rem !important;
    min-width: 3rem !important;*/
} 

#user-country,
#user-state {
    max-width: 9rem !important;
    min-width: 3rem !important;
}


@media (max-width:400px) {
    .form-block {
        flex-direction: column !important;
    }

    #zip,
    #user-street-address2,
    #user-city {
        max-width: 100% !important;
    }

    #user-country,
    #user-state {
        max-width: 100% !important;
    }
}</style>