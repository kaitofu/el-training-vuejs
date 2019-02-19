<template lang="pug">
div
  v-toolbar(color='#1B9FC6', dark='', fixed='', app='')
    v-toolbar-title El-Training
    v-spacer
    router-link(to="/").header-link Home 
    router-link(to="/login").header-link  Login
    router-link(to="/about").header-link  About
    v-btn(outline color='indigo lighten-5' v-if="this.$store.getters.loggedIn" @click="logout()") logout
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
.header-link {
  color:white; 
  font-size: 16px; 
  font-weight: 500; 
  letter-spacing: .02em;
  padding: 0 10px 0 10px; 
}
</style>
