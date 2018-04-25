<template>
  <div class="contentWrapper">
    <div v-if="cartCount === 0">
      В корзине пока пусто
    </div>
    <template v-else>
      <CartList/>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import CartList from '@/components/cart/list/CartList.vue'

export default {
  components: {
    CartList,
  },
  computed: {
    ...mapGetters({ cartCount: 'getCartCount' }),
  },
}
</script>

<style scoped>

</style>
