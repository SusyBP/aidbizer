<template>
    <div class="login-page">
        <div class="card p-5 m-4 bg-theme">
            <h4>Login</h4>
            <form class="form-group">
                <div class="form-group">
                    <label for="user-email">User/Email</label>
                    <input id="user-email" class="form-control" type="text" v-model="username"
                        autocomplete="johndue@domail.com">
                </div>
                <div class="form-group">
                    <label for="user-password">Password</label>
                    <input id="user-password" class="form-control" type="password" v-model="password"
                        autocomplete="current-password">
                </div>

                <button class="btn text-light form-control mt-3" @click.prevent="login">Sign In</button>

                <!-- <div class="external-login form-group mt-3">
                    <div class="text-light">Login with another account</div>
                    <div class="external-login-brands">
                        <a href="#">Google -</a>
                        <a href="#"> Facebook -</a>
                        <a href="#"> X</a>
                    </div>
                </div> -->

                <div class="form-group mt-3 d-flex flex-wrap justify-content-between">
                    <span class="text-light">Don't have an account?</span>
                    <span class="space"></span>
                    <a class="register-link">Sign up</a>
                </div>

                <div class="policies form-group mt-3 d-flex flex-wrap justify-content-between">
                    <a href="#" class="terms-of-use">Terms of Use</a>
                    <!-- <span class="mb-1">.</span> -->
                    <a href="#" class="privacy-policy">Privacy Policy</a>
                </div>
            </form>
        </div>
    </div>
</template> 

<script>

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from '../router';

export default {
    name: "LoginView",
    components: {
        FontAwesomeIcon,
    },
    data() {
        return {
            username: "",
            password: "",
        }
    },
    methods: {
        login() {
            // this.$emit("login")
            localStorage.setItem("loggedin", JSON.stringify(true))
            router.push({ name: "Home" })
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

.card label,
h4 {
    color: white;
}

.login-page {
    display: flex;
    justify-content: center;
    align-items: center;
}

.login-page a {
    text-decoration: none;
    color: var(--gold-yellow_6);
}

.space {
    margin-right: .5rem;
}

button{
    background-color:var(--gold-yellow_6) !important;
}
</style>