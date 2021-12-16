<template>
  <div class="populer-products papular-block">
    <h4 class="title">popular products</h4>
    <p class="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus
      maximus vehicula. Sed feugiat, tellus vel tristique posuere, diam
    </p>
    <div class="content">
      <div class="row" v-if="populerProducts.length > 0">
        <div
          class="col-3"
          v-for="(item, index) in populerProducts"
          :key="index"
        >
          <populer-product-item
            :id="item.id"
            :slug="item.slug"
            :image="item.imageUrl"
            :name="item.title"
            :des="item.description"
            :amount="item.amount"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PopulerProductItem from "./PopulerProductItem.vue";
import STATIC_URL from "@/utils/constant";
import ProductService from '@/services/product-service.js'

export default {
  components: { PopulerProductItem },
  name: "PopulerProducts",
  data() {
    return {
      populerProducts: [],
      staticUrl: STATIC_URL,
    };
  },
  async created() {
    const resProducts = await ProductService.products();
    console.log(resProducts);
    if (resProducts.code === 200) {
      this.populerProducts = resProducts.data;
    }
  }
};
</script>

<style scoped src="@/assets/css/components/home/populer-products.css"></style>
