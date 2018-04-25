<template>
  <table>
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
      <td rowspan="4">
        <div>Всего</div>
        <div>{{ totalPrice }}</div>
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
    ...mapGetters({ cartList: 'getCartBooks', totalPrice: 'getTotalPrice', checkList: 'getCartCheckedList' }),
  },
}
</script>

<style scoped>

</style>
