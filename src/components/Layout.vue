<template>
    <div class="container-fluid">
        <div class="header">
            <!-- <slot name="header"> -->
            <Header></Header>
            <!-- </slot> -->
        </div>
        <div class="main">
            <slot name="main"></slot>
        </div>
    </div>
</template>

<script setup>
import Header from './Header.vue'
</script>
<style scoped>
.container-fluid {
    background-color: #efefef;
    padding-bottom: 3rem;
}
</style>