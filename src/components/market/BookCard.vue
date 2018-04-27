<template>
  <div class="bookItem">
    <div class="bookItemWr bookCard">
      <img :src="thumbnailUrl" alt="">
      <div>Цена: <PriceFormat :value="price" /></div>
      <div>Название: {{ name }}</div>
      <div>Авторы: {{ authorsList }}</div>
      <button :class="{ cart: !isMarket }" @click="handleClick">
        <span v-if="isMarket">Добавить в корзину</span>
        <span v-else>В корзине</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { BOOK_STATUSES } from '@/store/gettres'

export default {
  props: {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    authors: { type: Array, required: true },
    thumbnailUrl: { type: String, required: true },
    price: { type: Number, required: true },
    status: { type: Number, required: true },
  },
  computed: {
    authorsList () {
      const { authors } = this
      if (authors.length === 1) return authors[0]
      return this.authors.join(', ')
    },
    isMarket () { return this.status === BOOK_STATUSES.MARKET },
  },
  methods: {
    ...mapActions([ 'addToCart' ]),
    handleClick () {
      console.log(this.id)//eslint-disable-line
      if (!this.isMarket) return
      this.addToCart({ id: this.id })
    },
  },
}
</script>

<style src="./market.css" lang="postcss" scoped></style>
