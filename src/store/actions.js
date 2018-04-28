import { BOOK_STATUSES } from '@/store/gettres'
import books from './books'

function getBooksFake () {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(books)
    }, 800)
  })
}

function sendPurchaseFake (resultData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Object.keys(resultData).length === 0) {
        reject(new Error('Нет данных для отправки'))
      } else {
        resolve({ message: 'Спасибо за оформление заказа!' })
      }
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
  removeFromCheckedList ({ commit }, { id }) {
    commit('removeFromCheckedList', { id })
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
  async sendPurchase ({ commit, getters }, formData) {
    const purchaseIdsList = getters.getCartCheckedList
    const cartList = getters.getCartBooks
    const cartData = purchaseIdsList.reduce((result, id) => {
      let { count } = cartList.find(book => book.id === id)
      result.push({ id, count })
      return result
    }, [])
    const purchaseData = { ...formData, cartData }
    console.log(purchaseData)//eslint-disable-line
    commit('sendPurchaseRequest')

    try {
      const { message } = await sendPurchaseFake(purchaseData)
      commit('sendPurchaseSuccess')
      commit('setPurchaseResult', { message })
    } catch (error) {
      console.log(error)//eslint-disable-line
      commit('sendPurchaseFailure')
      commit('setPurchaseResult', { message: error.message })
    }
  },
}
