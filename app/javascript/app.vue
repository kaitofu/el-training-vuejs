<template>
  <div id="app">
    <Header></Header>
  </div>
</template>


<script>
import Header from './packs/components/Header.vue'

export default {
    components: {
      Header
    },
  data: function () {
    return {
      message: "Hello"
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
