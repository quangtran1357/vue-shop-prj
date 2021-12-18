<template>
  <div class="populer-products papular-block">
    <h4 class="title">popular products</h4>
    <p class="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus
      maximus vehicula. Sed feugiat, tellus vel tristique posuere, diam
    </p>
    <div class="content">
      <div class="search">
        <input type="text" v-model="searchTitle">
        <button type="button" @click="getProducts">SEARCH</button>
      </div>
      
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
      <b-pagination
      v-model="currentPage"
      :total-rows="total"
      :per-page="limit"
      first-text="First"
      prev-text="Prev"
      next-text="Next"
      last-text="Last"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
import PopulerProductItem from "./PopulerProductItem.vue";
import ProductService from '@/services/product-service.js'

export default {
  components: { PopulerProductItem },
  name: "PopulerProducts",
  data() {
    return {
      searchTitle: '',
      populerProducts: [],
      currentPage: 1,
      total: 0,
      limit: 2
    };
  },
  watch: {
    async currentPage() {
      await this.getProducts();
    }
  },
  methods: {
    async getProducts() {
      const resProducts = await ProductService.products(this.limit, this.currentPage, this.searchTitle);
      console.log(resProducts);
      if (resProducts.code === 200) {
        this.populerProducts = resProducts.data;
        this.currentPage = resProducts.meta.current_page
        this.total = resProducts.meta.total
      }
    }
  },
  async created() {
    await this.getProducts();
  }
};
</script>

<style scoped src="@/assets/css/components/home/populer-products.css"></style>
