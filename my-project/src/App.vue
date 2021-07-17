<template>
  <div id="app">
    <choose />
    <paging number="10"/>
    <transmission />
  </div>
</template>

<script>
import choose from './components/choose.vue'
import paging from './components/paging.vue'
import transmission from './components/transmission.vue'
export default {
  name: 'App',
  components: {
    choose,
    paging,
    transmission
  }
}
</script>

<style>
</style>
