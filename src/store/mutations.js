export default {
  updateBookStatus (state, { id, status }) {
    state.booksList = state.booksList.map(book => {
      if (book.id !== id) return book
      book = { ...book, status }
      return book
    })
  },
  addToCheckedList (state, { id }) {
    state.checkedList.push(id)
  },
  removeFromCheckedList (state, { id }) {
    state.checkedList = state.checkedList.filter(item => item !== id)
  },
  replaceBooks (state, { books }) {
    state.booksList = books
  },

  getBooksRequest (state) { state.isBooksPending = true },
  getBooksSuccess (state) { state.isBooksPending = false },
  getBooksFailure (state) { state.isBooksPending = false },

  increaseCount (state, { id }) {
    state.booksList = state.booksList.map(book => {
      if (book.id !== id) return book
      book = { ...book, count: book.count + 1 }
      return book
    })
  },
  decreaseCount (state, { id }) {
    state.booksList = state.booksList.map(book => {
      if (book.id !== id) return book
      book = { ...book, count: book.count - 1 }
      return book
    })
  },
}
