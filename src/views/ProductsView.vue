<template>
    <Layout>
        <!-- <template #sidebar>
            <Sidebar></Sidebar>
        </template> -->
        <template #main>
            <ProductList></ProductList>
        </template>
    </Layout>
</template>
<script>
import Layout from '../components/Layout.vue';
// import Sidebar from '../components/Sidebar.vue';
import ProductList from '../components/ProductList.vue';
export default{
    name: 'ProductsView',
    components:{
    Layout,
    // Sidebar,
    ProductList
}
}
</script>
