<template lang="pug">
div
  v-toolbar(color='orange darken-4', dark='', fixed='', app='')
    v-toolbar-title El-Training
    v-spacer
    router-link(to="/") Home 
    router-link(to="/login") Login
    router-link(to="/admin") Admin
    v-btn(v-if="this.$store.getters.loggedIn" @click="logout()") logout
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: {
    source: String
  },
  methods: {
    logout() {
    this.$store.dispatch('SetLogOut')
    this.$store.dispatch('SetAuthToken', '')
    this.$router.push('/login')
    this.$snotify.warning('ログアウトしました。');
    }
  }
}
</script>

<style scoped>
</style>
