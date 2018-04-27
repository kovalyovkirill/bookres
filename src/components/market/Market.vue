<template>
  <div class="marketWrapper">
    <h2 v-if="isBooksPending">Загружаем книги...</h2>
    <div v-else class="contentWrapper">
      <div class="booksWrapper">
        <div class="booksGrid">
          <BookCard
            v-for="book in booksList"
            :key="book.id"
            :id="book.id"
            :name="book.title"
            :authors="book.authors"
            :price="book.price"
            :thumbnailUrl="book.thumbnail"
            :status="book.status"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BookCard from '@/components/market/BookCard.vue'

export default {
  components: {
    BookCard,
  },
  computed: {
    ...mapGetters({
      isBooksPending: 'getBooksPending',
      booksList: 'getAllBooks',
    }),
  },
}
</script>

<style src="./market.css" lang="postcss" scoped></style>
