<template>
  <div id="app">
    <Header />
    <main class="globalWrapper">
      <router-view/>
    </main>
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

<style src="./styles/global.scss" lang="postcss"></style>
