<template lang="pug">
#app
  v-app#inspire
    Header  
    Index
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
    },
  data: () => {
    return {
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
.theme--light.application {
  background-color: white;
}
</style>
