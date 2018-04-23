import Vue from 'vue'
import Router from 'vue-router'

import Market from '@/components/market/Market.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/market',
      component: Market,
    },
    {
      path: '*',
      redirect: '/market',
    },
  ],
})
