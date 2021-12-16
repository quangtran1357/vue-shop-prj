<template>
  <div class="product-detail-by-slug" v-if="product">
      <h1>{{product.title}}</h1>
      <div>
            <img :src="product.imageUrl">
      </div>
      <div class="product-sale on-sale" v-if="customFields && customFields.saleOff"> {{customFields.saleOff}}% <span>OFF</span> </div>
      <div class="list-image" v-if="customFields && customFields.images && customFields.images.length">
          <img v-for="(image, index) in customFields.images" 
          :key="index" 
          :src="require(`@/assets/images/products/${image}.jpeg`)">
      </div>
  </div>
</template>

<script>
import ProductService from '@/services/product-service.js'
export default {
    name: "ProductDetail",
    data() {
        return {
            product: null,
        }
    },
    computed: {
        customFields() {
            if (this.product) {
                return JSON.parse(this.product.custom_fields);
            }
            return null;
        }
    },
    async created() {
        const slug = this.$route.params.slug
        const res = await ProductService.productDetailBySlug(slug)
        console.log(res);
        if (res.code === 200) {
            this.product = res.data;
        }

        // const customFieldProduct = {
        //     images: ['image-product-1', 'image-product-2', 'image-product-3', 'image-product-4'],
        //     saleOff: 10,
        //     designer: 'ABC Q',
        //     brand: 'Viet Nam',
        //     colors: ['red', 'blue', 'yellow']
        // }
        // console.log(customFieldProduct)
        // const dataStringfy = JSON.stringify(customFieldProduct)
        // console.log(dataStringfy)
    }
}
</script>

<style scoped src='@/assets/css/components/product-detail-by-slug/index.css'>

</style>