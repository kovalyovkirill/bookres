import { BOOK_STATUSES } from '@/store/gettres'
import books from './books'

function getBooksFake () {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(books)
    }, 800)
  })
}

export default {
  addToCart ({ commit }, { id }) {
    commit('updateBookStatus', { id, status: BOOK_STATUSES.CART })
    commit('addToCheckedList', { id })
  },
  removeFromCart ({ commit }, { id }) {
    commit('updateBookStatus', { id, status: BOOK_STATUSES.MARKET })
  },
  addToCheckedList ({ commit }, { id }) {
    commit('addToCheckedList', { id })
  },
  increaseCount ({ commit }, { id }) {
    commit('increaseCount', { id })
  },
  decreaseCount ({ commit }, { id }) {
    commit('decreaseCount', { id })
  },
  async getBooks ({ commit }) {
    commit('getBooksRequest')

    try {
      const { books } = await getBooksFake()

      commit('replaceBooks', { books })
      commit('getBooksSuccess')
    } catch (e) {
      commit('getBooksFailure')
    }
  },
}
