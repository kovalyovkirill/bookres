<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Header from '@/components/header/Header.vue'

export default {
  components: {
    Header,
  },
  name: 'App',
  methods: {
    ...mapActions([ 'getBooks' ]),
  },
  created () {
    this.getBooks()
  },
}
</script>

<style lang="postcss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  padding-top: 80px;
}
</style>
