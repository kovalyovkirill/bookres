<template>
  <div>
    <h2>Оформление заказа</h2>
    <form
      action=""
      method="post"
      @submit.prevent="handlePurchase"
      class="purchaseForm"
    >
      <div class="formField">
        <label for="username">Имя: </label>
        <input id="username" type="text" v-model="username">
        <label for="phone">Телефон: </label>
        <input id="phone" v-model="phone" type="text">
      </div>
      <div class="formField">
        <label for="address">Адрес: </label>
        <input id="address" v-model="address" type="text">
        <label for="email">Email: </label>
        <input id="email" v-model="email" type="email">
      </div>
      <div class="formField">
        <button>Оформить заказ</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      address: '',
      phone: '',
      email: '',
    }
  },
  methods: {
    handlePurchase () {
      const { username, address, email, phone } = this

      console.log(username, address, email, phone)//eslint-disable-line
    },
  },
}
</script>

<style src="@/components/cart/cart.css" lang="postcss" scoped></style>
