<template>
  <ul class="the-cart dropdown-menu">
    <li v-for="item in items" :key="item.id">
      <div class="media-left">
        <div class="cart-img">
          <a href="#">
            <img
              class="media-object img-responsive"
              :src="item.image"
              :alt="item.title"
            />
          </a>
        </div>
        <a @click="actionDeleteItem(item.id)">X</a>
      </div>
      <div class="media-body">
        <h6 class="media-heading">{{item.title}}</h6>
        <span class="price">{{item.amount}} USD</span> <span class="qty">QTY: {{item.qty}}</span>
      </div>
    </li>
    <li>
      <h5 class="text-center">SUBTOTAL: {{totalPrice}} USD</h5>
    </li>
    <li class="margin-0">
      <div class="row">
        <div class="col-xs-6">
          <a href="shopping-cart.html" class="btn">VIEW CART</a>
        </div>
        <div class="col-xs-6">
          <a href="checkout.html" class="btn">CHECK OUT</a>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
export default {
  name: "TheCart",
  computed: {
    ...mapState('cart', [
      'items'
    ]),
    ...mapGetters('cart', [
      'totalPrice'
    ])
  },
  methods: {
    ...mapActions('cart', [
      'actionInitItems',
      'actionDeleteItem'
    ])
  },
  mounted() {
    this.actionInitItems();
  }
};
</script>

<style scoped src="@/assets/css/components/common/the-cart.css"></style>
