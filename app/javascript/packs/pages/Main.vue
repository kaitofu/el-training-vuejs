<template lang="pug">
  Index
</template>

<script>
import Index from '../components/Index.vue'

export default {
  components: {
    Index,
  },
  data: () => {
    return {
      drawer: false
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

