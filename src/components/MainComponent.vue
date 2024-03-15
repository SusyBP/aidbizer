<template>
    <div class="app-main-content">
        <Sidebar @logout="logout"></Sidebar>
        <router-view :userinfo="userinfo"></router-view>
    </div>
</template>

<script setup>

import { ref, defineEmits, defineProps, onMounted ,onUpdated, reactive} from 'vue'
import Sidebar from './Sidebar.vue';

var userinfo = reactive(JSON.parse(localStorage.getItem("user")))

onMounted(() => {
    // console.log((JSON.parse(localStorage.getItem("user")))[0].Nombre)
    userinfo = JSON.parse(localStorage.getItem("user"))
})

onUpdated(() => {
    // console.log((JSON.parse(localStorage.getItem("user")))[0].Nombre)
    userinfo = JSON.parse(localStorage.getItem("user"))
})

const isLoggedIn = ref(localStorage.getItem("loggedin") === "true")

const logout = () => {
    isLoggedIn.value = false;
    localStorage.setItem('loggedin', isLoggedIn.value);
    console.log("logginout ", 'isLogguedIn: ', isLoggedIn.value);
}
// const emit = defineEmits(["render"])


// const login = ()=>{
//     emit("render")
// forceRender()
// }

// const componentKey = ref(0)
// const forceRender = ()=>{
//     componentKey.value += 1;
// }
</script>
