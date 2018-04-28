<template>
  <div class="formWr">
    <h2>Оформление заказа</h2>
    <form
      action=""
      method="post"
      @submit.prevent="handlePurchase"
      class="purchaseForm"
    >
      <div class="formField">
        <label for="userName">Имя: </label>
        <input :class="{ inputError: !!errorData.userName }" id="userName" type="text" v-model="userName" @blur="checkError">
        <div class="error top">{{ errorData.userName }}</div>
        <label for="phone">Телефон: </label>
        <input :class="{ inputError: !!errorData.phone }" id="phone" v-model="phone" type="text" @blur="checkError">
        <div class="error bottom">{{ errorData.phone }}</div>
      </div>
      <div class="formField">
        <label for="address">Адрес: </label>
        <input :class="{ inputError: !!errorData.address }" id="address" v-model="address" type="text" @blur="checkError">
        <div class="error top">{{ errorData.address }}</div>
        <label for="email">Email: </label>
        <input :class="{ inputError: !!errorData.email }" id="email" v-model="email" type="email" @blur="checkError" ref="email">
        <div class="error bottom">{{ errorData.email }}</div>
      </div>
      <div class="submitWr">
        <button :class="{ disabled: isFormInvalid }">Оформить заказ</button>
      </div>
    </form>
    <div class="resultMessage">

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      userName: '',
      address: '',
      phone: '',
      email: '',
      errorData: {
        userName: '',
        address: '',
        email: '',
        phone: '',
      },
    }
  },
  computed: {
    ...mapGetters({ totalPrice: 'getTotalPrice' }),
    userNameInvalid () { return this.userName.trim().length < 3 },
    addressInvalid () { return this.address.trim().length < 10 },
    emailInvalid () { return (this.email, (this.email.trim().length < 4 || !this.$refs.email.validity.valid)) },
    phoneInvalid () { return !/^((\+7|7|8)+([0-9]){10})$/gm.test(this.phone) },
    isFormInvalid () {
      return (
        this.totalPrice === 0 ||
        this.userNameInvalid ||
        this.addressInvalid ||
        this.emailInvalid ||
        this.phoneInvalid
      )
    },
  },
  methods: {
    handlePurchase () {
      if (this.isFormInvalid) return
      const { userName, address, email, phone } = this

      console.log(userName, address, email, phone)//eslint-disable-line
    },
    checkError (event) {
      const id = event.currentTarget.id
      let errorText = ''

      if (this[ `${id}Invalid` ]) {
        switch (id) {
          case 'email':
            errorText = 'Email должен быть вида username@mail.com'
            break
          case 'phone':
            errorText = 'Телефон должен быть вида 81234567890'
            break
          case 'address':
            errorText = 'Адрес должен быть более 10 букв'
            break
          case 'userName':
            errorText = 'Имя должно содержать не менее 3 буквы'
            break
        }
      }

      this.errorData[id] = errorText
    },
  },
}
</script>

<style src="@/components/cart/cart.css" lang="postcss" scoped></style>
