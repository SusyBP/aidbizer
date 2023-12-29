<template>
    <Layout>
        <!-- <template #sidebar>
            <Sidebar></Sidebar>
        </template> -->
        <template #main>
			<main id="invetory-page">
				<h1>Invetory</h1>
				<p>This is the Invetory page</p>
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
