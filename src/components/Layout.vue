<template>
    <div class="container-fluid">
        <div class="header">
            <!-- <slot name="header"> -->
            <Header :userinfo="userinfo"></Header>
            <!-- </slot> -->
        </div>
        <div class="main">
            <slot name="main"></slot>
        </div>
    </div>
</template>

<script setup>
import Header from './Header.vue'
import { defineProps, onMounted, ref, reactive, onUpdated} from 'vue';


const props = defineProps({
    userinfo: { type: String, required: true },
})
// var userinfo = reactive(JSON.parse(localStorage.getItem("user"))) 

// onMounted(() => {
//     // console.log((JSON.parse(localStorage.getItem("user")))[0].Nombre)
//     userinfo = JSON.parse(localStorage.getItem("user"))
// })



</script>
<style scoped>
.container-fluid {
    background-color: #efefef;
    padding-bottom: 3rem;
}
</style>