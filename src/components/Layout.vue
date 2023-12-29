<template>    
    <!-- <div class="sidebar"-->
        <!--slot name="sidebar"></slot> -->
        <!-- <Sidebar></Sidebar> -->
    <!--/div> -->
    <div class="main">
        <slot name="main"></slot>
    </div>
</template>
<script>
// import Sidebar from './Sidebar.vue';
export default{
    components:{
        // Sidebar
    }
}
</script>