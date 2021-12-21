<template>
    <div class="populer-product-item item-name mb-4">
        <router-link :to="`/${slug}`">
        <img class="item-img" :src="image">
        <a class="populer-product-item__name">{{name}}</a>
        <p class="populer-product-item__des">{{des}}</p>
        <p class="populer-product-item__amount price">${{amount}}</p>
        </router-link>
        <a @click="actionAddItem({id, image, name, amount})" class="btn populer-product-item__button">Add Cart</a>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
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
    },
    methods: {
        ...mapActions('cart', [
            'actionAddItem'
        ])
    }
}
</script>

<style scoped src="@/assets/css/components/home/populer-product-item.css"></style>
