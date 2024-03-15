<template>
    <Layout>
        <template #main>
            <ProductList :userinfo="userinfo"></ProductList>
        </template>
    </Layout>
</template>
<script>
import Layout from '../components/Layout.vue';
import ProductList from '../components/ProductList.vue';
export default {
    name: 'ProductsView',
    components: {
        Layout,
        ProductList
    },
    props:{
        userinfo: String
    }
    ,
    computed: {
            idEmpresa() {
            // const withoutSquareBraces = this.userinfo.replace('/\[|\]/g', '')
            // const json = JSON.parse(withoutSquareBraces)
            // return json[0].idEmpresa
            return this.userinfo[0].idEmpresa
        }, 
    }
}
</script>
