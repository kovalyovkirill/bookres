<template>
  <div>
    <h1>Supermarket</h1>
    <h2 v-if="isBooksPending">Загружаем книги...</h2>
    <div v-else class="booksWrapper">
      {{ booksList }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      isBooksPending: 'getBooksPending',
      booksList: 'getAllBooks',
    }),
  },
}
</script>

<style src="./market.css" lang="postcss" scoped></style>
