<template>
    <router-link :to="`/${slug}`">
        <div class="populer-product-item item-name mb-4">
            <img class="item-img" :src="image">
            <a class="populer-product-item__name">{{name}}</a>
            <p class="populer-product-item__des">{{des}}</p>
            <p class="populer-product-item__amount price">${{amount}}</p>
        </div>
    </router-link>
</template>

<script>
export default {
    name: 'PopulerProductItem',
    props: {
        id: {
            type: Number,
            default: 0
        },
        slug: {
            type: String,
            default: ''
        },
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
