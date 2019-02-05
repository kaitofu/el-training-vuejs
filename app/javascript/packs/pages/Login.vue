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
    v-layout(justify-center='', align-center='', row)
      v-btn(@click='login()' outline color='#FF9505') login
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
      visibility: false,

      // v-alert
      alert: false
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
        this.$snotify.success('ログインしました。');
      },(error) => {
        console.log(error)
        this.$snotify.error('ログインに失敗しました。');
      })
    }
  }
}
</script>

<style>

</style>