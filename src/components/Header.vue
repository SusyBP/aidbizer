<template>
    <div class="py-2 mb-2 header row shadow">
        <div class="col-md-6 search-bar">
            <form class="d-flex" @submit.prevent="submit">
                <input class="form-control me-2" type="text" placeholder="Search">
                <button class="btn btn-theme-green text-light" type="button"><span><font-awesome-icon
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
            <div class="logged-user-info">
                <div class="nav-link dropdown-toggle btn" data-bs-toggle="dropdown">
                    <span class="logged-user-name">{{ username }}</span>
                    <span class="logged-user-avatar"><font-awesome-icon :icon="['fas', 'circle-user']" /></span>
                </div>
                <ul class="dropdown-menu">
                    <li><button class="dropdown-item" @click="logout">Logout</button></li>
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
    props: {
        'userinfo': String
    },

    components: {
        FontAwesomeIcon
    },
    methods:
    {
        logout() {
            console.log("logging out")
            this.$emit("logout")
            localStorage.setItem('loggedin', JSON.stringify(false))
            localStorage.setItem('user', JSON.stringify({}))
            router.push({ name: "SignIn" })
        },
        submit() {
            console.log("search form submitted")
        },

    },
    mounted() {
        console.log("userinfo", this.userinfo)
        // var storedUser = localStorage.getItem('user')

        // if (storedUser != null || storedUser != "" ) {
        //     var user = JSON.parse(storedUser)[0]
        //     this.username = user.Nombre;
        //     console.log(user.IdEmpresa)
        // }
    },
    computed: {
        username() {
            // const withoutSquareBraces = this.userinfo.replace('/\[|\]/g', '')
            // const json = JSON.parse(withoutSquareBraces)
            // return json[0].Nombre
            return this.userinfo[0].Nombre
        },
    }
}
</script>
<style scoped>
.logged-user-info {
    display: flex;
    justify-content: end;
    padding-top: 0;
    padding-bottom: 0;
}

.logged-user-info btn:active {
    border: none;
}

.help-link {
    padding-top: .5rem;
}

.help-link a:hover {
    color: var(--theme-green);
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
    font-size: 1.2rem;
}

/* .logged-user-avatar:hover {
    color: var(--gold-yellow_6);
}
.logged-user-name:hover {
    color: var(--gold-yellow_6);
} */
/* .logged-user-info:active {
    border: none;
} */
.logged-user-info:hover {
    color: var(--theme-green);
}

.logged-user-info {
    color: var(--dark);
}

.logged-user-avatar {
    font-size: 1.5rem;
    margin-right: .5rem;
}

.user-support {
    display: flex;
    justify-content: space-between;
    color: gray;
}


@media (max-width: 768px) {
    .logged-user-info {
        /* padding-top: 0.5rem; */
    }

    .help-link {
        /* padding-top: 1rem; */
        padding-left: .3rem;
    }

    .user-support {
        margin-top: .5rem;
    }

}

.dropdown-item:active {
    color: var(--dark);
    background-color: white !important;
}
</style>
