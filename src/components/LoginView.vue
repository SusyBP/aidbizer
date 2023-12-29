<template>
    <div class="container">
    <div class="d-flex justify-content-center align-items-center">
        <div class="card p-5 m-5 bg-theme">
            <h4>Login</h4>
            <form class="form-group">
                <div class="form-group">
                    <label for="user-email">User/Email</label>
                    <input id="user-email" class="form-control" type="text" v-model="username" autocomplete="johndue@domail.com">
                </div>
                <div class="form-group">
                    <label for="user-password">Password</label>
                    <input id="user-password" class="form-control" type="password" v-model="password" autocomplete="current-password">
                </div>
                <button class="btn bg-gold-6 text-light form-control mt-3" @click.prevent="login">Enter</button>
                <!-- <p>{{ username }}</p>
                <p>{{ password }}</p> -->
            </form>
        </div>
    </div>
</div>
</template> 

<script>
import router from '../router';

export default {
    name: "LoginView",
    data(){
        return{
            username: "",        
            password: "",  
        }      
    },
    methods: {
        login(){
            // this.$emit("login")
            localStorage.setItem("loggedin", JSON.stringify(true))
            router.push({name: "Home"})
        },
       
        validEmail(email){
            const regExp = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            return email.match(regExp)!=null;
        }
    }
}
</script>

<style scoped>
.bg-theme {
    background-color: var(--theme-green);
}
.theme-green-5{
    background-color: var(--theme-green-5);
}

.bg-gold-6{
    background-color: var(--gold-yellow_6);
}

.text-theme{
    color : var(--theme-green);
}
 .card label, h4{
    color: white;
 }

</style>