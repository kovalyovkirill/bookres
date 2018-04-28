<template>
  <tr @click.prevent="handleChange">
    <td>
      <input type="checkbox" v-model="isChecked">
    </td>
    <td class="bookInfo">
      <img :src="thumbnailUrl" :alt="name">
      <div>
        <span>{{ name }}</span>
        <span>{{ authorsList }}</span>
      </div>
      <div class="removeWr">
        <button class="removeButton" @click="handleRemove"/>
      </div>
    </td>
    <td class="count">
      <button @click.stop="handleIncrease">+</button>
      <span>{{ count }}</span>
      <button @click.stop="handleDecreace" :disabled="isDecreaceDisabled">-</button>
    </td>
    <td class="price"><PriceFormat :value="price"/></td>
  </tr>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

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
    ...mapGetters({ currentValue: 'getCartCheckedById' }),
    isChecked: {
      get () {
        return this.currentValue(this.id)
      },
      set () {
        this.handleChange()
      },
    },
    authorsList () {
      const { authors } = this
      if (authors.length === 1) return authors[0]
      return this.authors.join(', ')
    },
    isDecreaceDisabled () { return this.count === 1 },
  },
  methods: {
    ...mapActions([ 'removeFromCart', 'increaseCount', 'decreaseCount', 'removeFromCheckedList', 'addToCheckedList' ]),
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
    handleChange () {
      const payload = { id: this.id }

      if (this.isChecked) {
        this.removeFromCheckedList(payload)
      } else {
        this.addToCheckedList(payload)
      }
    },
  },
}
</script>

<style src="../cart.css" lang="postcss" scoped></style>
