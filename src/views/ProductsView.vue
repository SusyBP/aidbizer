<template>
    <Layout>
        <template #main>
            <div class="view-title-box">
                <h4 class="view-title">Products</h4>
                <span class="view-title-total">{{totalProducts}} products in total</span>
            </div>
            <ProductList :userinfo="userinfo" @totalProducts="showTotalProducts"></ProductList>
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
    },
    data() {
        return{
            totalProducts: 0
        }
    },
    computed: {
            idEmpresa() {
            // const withoutSquareBraces = this.userinfo.replace('/\[|\]/g', '')
            // const json = JSON.parse(withoutSquareBraces)
            // return json[0].idEmpresa
            return this.userinfo[0].idEmpresa
        }, 
    },
    
    methods: {
        showTotalProducts(value){
            this.totalProducts = value
        }
    }
}
</script>
