<template>
  <div class="product-detail" v-if="product">
      <h1>{{product.title}}</h1>
      <div>
            <img :src="product.imageUrl">
      </div>
  </div>
</template>

<script>
import ProductService from '@/services/product-service.js'
export default {
    name: "ProductDetail",
    data() {
        return {
            product: null
        }
    },
    async created() {
        const id = this.$route.params.id
        const res = await ProductService.productDetail(id)
        console.log(res);
        if (res.code === 200) {
            this.product = res.data;
        }
    }
}
</script>

<style>

</style>