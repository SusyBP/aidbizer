<template>
    <Layout>
        <!-- <template #sidebar> -->
            <!-- <Sidebar></Sidebar> -->
        <!-- </template> -->
        <template #main>
            <DashboardView></DashboardView>
        </template>
    </Layout>
</template>
<script>
import Layout from '../components/Layout.vue';
// import Sidebar from '../components/Sidebar.vue';
import DashboardView from '../components/DashboardView.vue';
export default{
    components:{
        Layout,
        // Sidebar,
        DashboardView,
    }
}
</script>
