export const BOOK_STATUSES = {
  MARKET: 1,
  CART: 2,
}

export default {
  getAllBooks: state => state.booksList,
  getCartBooks: (state, getters) => getters.getAllBooks.filter(book => book.status === BOOK_STATUSES.CART),
  getCartCount: (state, getters) => getters.getCartBooks.length,
  getCartCheckedList: state => state.checkedList,
  getCartCheckedById: (state, getters) => id => getters.getCartCheckedList.includes(id),
  getBooksPending: state => state.isBooksPending,
  getTotalPrice: (state, getters) => {
    const books = getters.getCartBooks

    if (!books || !Array.isArray(books) || !books.length) return 0

    return books.reduce((total, book) => {
      if (getters.getCartCheckedById(book.id)) {
        total += book.price * book.count
      }
      return total
    }, 0)
  },
}
