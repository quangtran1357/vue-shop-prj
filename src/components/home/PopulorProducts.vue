<template>
  <div class="populer-products papular-block">
    <h4 class="title">popular products</h4>
    <p class="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus
      maximus vehicula. Sed feugiat, tellus vel tristique posuere, diam
    </p>
    <div class="content">
      <div class="row">
        <div
          class="col-3"
          v-for="(item, index) in populerProducts"
          :key="index"
        >
          <populer-product-item
            :image="item.image"
            :name="item.name"
            :des="item.des"
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

export default {
  components: { PopulerProductItem },
  name: "PopulerProducts",
  data() {
    return {
      populerProducts: [
        {
          image: require("@/assets/images/home/product-1.jpg"),
          name: "product-1",
          des: "product-1 description",
          amount: 233,
        },
        {
          image: require("@/assets/images/home/product-1.jpg"),
          name: "product-2",
          des: "product-2 description",
          amount: 399,
        },
        {
          image: require("@/assets/images/home/product-1.jpg"),
          name: "product-3",
          des: "product-3 description",
          amount: 100,
        },
        {
          image: require("@/assets/images/home/product-1.jpg"),
          name: "product-4",
          des: "product-4 description",
          amount: 400,
        },
        {
          image: require("@/assets/images/home/product-1.jpg"),
          name: "product-1",
          des: "product-1 description",
          amount: 233,
        },
        {
          image: require("@/assets/images/home/product-1.jpg"),
          name: "product-2",
          des: "product-2 description",
          amount: 399,
        },
        {
          image: require("@/assets/images/home/product-1.jpg"),
          name: "product-3",
          des: "product-3 description",
          amount: 100,
        },
        {
          image: require("@/assets/images/home/product-1.jpg"),
          name: "product-4",
          des: "product-4 description",
          amount: 400,
        },
      ],
      staticUrl: STATIC_URL,
    };
  },
};
</script>

<style scoped src="@/assets/css/components/home/populer-products.css"></style>
