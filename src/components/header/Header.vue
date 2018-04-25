<template>
<header class="mainHead">
  <span class="logo"/>
  <span>Bookres</span>
  <nav>
    <router-link to="/market">Каталог</router-link>
    <router-link to="/cart">Корзина</router-link>
  </nav>
  <div class="cartCount">{{ cartCount }}</div>
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
