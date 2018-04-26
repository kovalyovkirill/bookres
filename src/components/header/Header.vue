<template>
<header class="mainHead">
  <div class="logo"/>
  <span class="logoDescription">Bookres</span>
  <nav>
    <router-link to="/market">Каталог</router-link>
    <router-link to="/cart">Корзина</router-link>
  </nav>
  <router-link to="/cart" class="cartCount">
    <div>{{ cartCount }}</div>
  </router-link>
</header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({ cartCount: 'getCartCount' }),
  },
}
</script>

<style src="./header.css" lang="postcss" scoped></style>
