<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'

export default {
  components: {
    Header,
  },
  name: 'App',
}
</script>

<style lang="postcss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  padding-top: 80px;
}
</style>
