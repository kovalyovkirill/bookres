<template>
  <div class="contentWrapper">
    <CartList/>
    <CartForm/>
  </div>
</template>

<script>
import CartList from '@/components/cart/list/CartList.vue'
import CartForm from '@/components/cart/form/CartForm.vue'

export default {
  components: {
    CartList,
    CartForm,
  },
}
</script>
