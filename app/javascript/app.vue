<template lang="pug">
#app
  link(href="https://unpkg.com/vue-snotify@3.0.4/styles/material.css" rel="stylesheet")
  vue-snotify
  v-app#inspire
    Header
    v-content
      router-view
    Footer
</template>

<script>
import Header from './packs/components/Header.vue'
import Index from './packs/components/Index.vue'
import Footer from './packs/components/Footer.vue'

export default {
  components: {
    Header,
    Index,
    Footer
  }
}
</script>

<style lang='scss' scoped>
@import "~vue-snotify/styles/material";

p {
  font-size: 2em;
  text-align: center;
}
.theme--light.application {
  background-color: white;
}
</style>
