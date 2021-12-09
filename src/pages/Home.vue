<template>
  <div class="home">
    <slider />
    <populor-products class="papular-block" />
  </div>
</template>

<script>
import PopulorProducts from '../components/home/PopulorProducts.vue'
import Slider from '../components/home/Slider.vue'
// @ is an alias to /src

export default {
  components: { Slider, PopulorProducts },
  name: 'Home'
}
</script>
