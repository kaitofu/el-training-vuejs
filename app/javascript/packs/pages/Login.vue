<template lang="pug">
div
  p login
  p login

  p login
  v-btn(@click='login') login
  v-btn(@click='logout') logout

  p {{ loggedIn }}
</template>

<script>
export default {    
  data() {
    return {
      loggedIn: false
    }
  },
  methods: {
    login() {
      // Auth.login();
      this.loggedIn = true
      console.log(this.$route)
      router.push(this.$route.query.redirect);
    },
    logout() {
      this.loggedIn = false 
    }  
  }
}
</script>

<style>

</style>