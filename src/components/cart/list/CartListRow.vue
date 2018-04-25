<template>
  <tr>
    <td>
      <img :src="thumbnailUrl" :alt="name">
      <span>{{ name }}</span>
      <span>{{ authorsList }}</span>
      <button @click="handleRemove">Удалить</button>
    </td>
    <td>
      <button @click="handleIncrease">+</button>
      <span>{{ count }}</span>
      <button @click="handleDecreace" :disabled="isDecreaceDisabled">-</button>
    </td>
    <td><span>{{ price }}</span></td>
  </tr>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    authors: { type: Array, required: true },
    thumbnailUrl: { type: String, required: true },
    price: { type: Number, required: true },
    status: { type: Number, required: true },
    count: { type: Number, required: true },
  },
  computed: {
    authorsList () {
      const { authors } = this
      if (authors.length === 1) return authors[0]
      return this.authors.join(', ')
    },
    isDecreaceDisabled () { return this.count === 1 },
  },
  methods: {
    ...mapActions([ 'removeFromCart', 'increaseCount', 'decreaseCount' ]),
    handleRemove () {
      this.removeFromCart({ id: this.id })
    },
    handleIncrease () {
      this.increaseCount({ id: this.id })
    },
    handleDecreace () {
      if (this.count === 1) return
      this.decreaseCount({ id: this.id })
    },
  },
}
</script>

<style src="../cart.css" lang="postcss" scoped></style>
