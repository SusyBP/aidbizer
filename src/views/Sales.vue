<template>
    <Layout>
        <!-- <template #sidebar>
            <Sidebar></Sidebar>
        </template> -->
        <template #main>
			<main id="sales-page">
				<h1>Sales</h1>
				<p>This is the Sales page</p>
			</main>
        </template>
    </Layout>
</template>
<script>
import Layout from '../components/Layout.vue';
// import Sidebar from '../components/Sidebar.vue';
export default{
    components:{
    Layout,
    // Sidebar,    
}
}
</script>
