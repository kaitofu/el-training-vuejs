<template lang="pug">
div
  p login
  p login
  p login

  v-container
    v-layout
      v-flex(xs12='', md12='')
        v-text-field(v-model='login_input.email', label='メールアドレス')
      v-flex(xs12='', md12='')
        v-text-field(v-model='login_input.password',
                    label='パスワード', 
                    :append-icon="visibility ? 'visibility_off' : 'visibility'", 
                    :type="visibility ? 'text' : 'password'", 
                    @click:append="visibility = !visibility")

    v-btn(@click='login()') login

    v-btn(@click='test()') test

</template>

<script>
import axios from 'axios'

export default {    
  data() {
    return {
      login_input: {
        email: '',
        password: ''
      },
      // for password-field
      visibility: false
    }
  },
  methods: {
    login() {
      let login_input = this.login_input
      axios({
        method: 'post',
        url: '/login',
        headers: { 'Content-Type': 'application/json' },
        data: login_input
      })
      .then((response) => {
        console.log(response)
        this.$store.dispatch('SetLogIn')
        this.$store.dispatch('SetAuthToken', response.data.token)
        this.$router.push('/')
      },(error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style>

</style>