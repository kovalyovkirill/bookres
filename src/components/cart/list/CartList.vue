<template>
  <div class="emptyMessage" v-if="cartCount === 0">
    В корзине пока пусто
  </div>
  <table class="cartList" v-else>
    <CartListHead/>
    <tbody>
      <CartListRow
        v-for="item in cartList"
        :key="item.id"
        :id="item.id"
        :name="item.title"
        :authors="item.authors"
        :price="item.price"
        :thumbnailUrl="item.thumbnail"
        :status="item.status"
        :count="item.count"
      />
    <tr>
      <td class="totalPrice" colspan="4">
        <div><PriceFormat :value="totalPrice"/></div>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import { mapGetters } from 'vuex'

import CartListHead from '@/components/cart/list/CartListHead.vue'
import CartListRow from '@/components/cart/list/CartListRow.vue'

export default {
  components: {
    CartListHead,
    CartListRow,
  },
  computed: {
    ...mapGetters({
      cartList: 'getCartBooks',
      totalPrice: 'getTotalPrice',
      checkList: 'getCartCheckedList',
      cartCount: 'getCartCount',
    }),
  },
}
</script>

<style src="@/components/cart/cart.css" lang="postcss" scoped></style>
