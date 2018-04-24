import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import state from './state'
import getters from './gettres'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const logger = createLogger({
  collapsed: true,
})

let pluginsList = [ ]

if (debug) {
  pluginsList.push(logger)
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  strict: debug,
  plugins: pluginsList,
})

export default store
