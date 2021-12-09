<template>
  <div class="populer-product-item item-name mb-4">
      <img class="item-img" :src="image">
      <a class="populer-product-item__name">{{name}}</a>
      <p class="populer-product-item__des">{{des}}</p>
      <p class="populer-product-item__amount price">${{amount}}</p>
  </div>
</template>

<script>
export default {
    name: 'PopulerProductItem',
    props: {
        image: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        },
        des: {
            type: String,
            default: ''
        },
        amount: {
            type: Number,
            default: 0
        }
    }
}
</script>

<style>

</style>
