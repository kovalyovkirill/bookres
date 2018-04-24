export const BOOK_STATUSES = {
  MARKET: 1,
  CART: 2,
}

export default {
  getAllBooks: state => state.booksList,
  getCartBooks: (state, getters) => getters.getAllBooks.filter(book => book.status === BOOK_STATUSES.CART),
  getCartCount: (state, getters) => getters.getCartBooks.length,
  getCartCheckedList: state => state.checkedList,
  getBooksPending: state => state.isBooksPending,
}
