<template>
    <div class="py-2 mb-2 header row shadow">
        <div class="col-md-6 search-bar">
            <form class="d-flex" @submit.prevent="submit">
                <input class="form-control me-2" type="text" placeholder="Search">
                <button class="btn btn-theme text-light" type="button"><span><font-awesome-icon
                            :icon="['fas', 'magnifying-glass']" /></span></button>
            </form>
        </div>
        <div class="col-md-6 user-support">
            <div class="help-link">
                <a href="#">
                    <span class="help-link-text">Help</span>
                    <span class="help-link-icon"><font-awesome-icon :icon="['fas', 'question-circle']" /></span>
                </a>
            </div>
            <div class="logged-user-info btn btn-secondary">
                <div class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                    <span class="logged-user-name">John Due</span>
                    <span class="logged-user-avatar"><font-awesome-icon :icon="['fas', 'circle-user']"/></span>
                </div>
                <ul class="dropdown-menu"> 
                    <li><button class="dropdown-item" @click="logout" >Logout</button></li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from "../router"
export default {
    name: "Header",
    components: {
        FontAwesomeIcon
    },
    methods:
    {
        logout(){
            console.log("logging out")
            this.$emit("logout")
            router.push({name: "Login"})        
        },
        submit(){
            console.log("search form submitted")
        }
    }
}
</script>
<style scoped>
.logged-user-info {
    display: flex;
    justify-content: end;
}

.help-link {
    padding-top: .5rem;
}

.help-link a {    
    text-decoration: none;
    color: gray;
}

.help-link-text {
    margin-right: .3rem;
}

.logged-user-name {
    margin-right: .5rem;
    margin-top: .5rem;
}

.logged-user-avatar {
    font-size: 1rem;
    margin-right: .5rem;
}

.user-support {
    display: flex;
    justify-content: space-between;
    color: gray;
}


@media (max-width: 768px) {
    .logged-user-info {
        padding-top: 0.5rem;
    }

    .help-link {
        padding-top: 1rem;
        padding-left: .3rem;
    }
}
</style>
