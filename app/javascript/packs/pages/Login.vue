<template lang="pug">
div
  v-container(align-content-center)
    v-layout(justify-center='', align-center='', row)
      v-flex(xs12='', md5='')
        span.headline El-Training-Vue.js ログイン
    v-layout(justify-center='', align-center='', row)
      v-flex(xs12='', md5='')
        v-text-field(v-model='login_input.email', label='メールアドレス' browser-autocomplete placeholder='test_user_a@example.com')
    v-layout(justify-center='', align-center='', row)
      v-flex(xs12='', md5='')
        v-text-field(v-model='login_input.password',
                    label='パスワード', 
                    :append-icon="visibility ? 'visibility_off' : 'visibility'", 
                    :type="visibility ? 'text' : 'password'", 
                    @click:append="visibility = !visibility")
    v-layout(justify-center='', align-center='', row)
      v-btn(@click='login()' outline color='#FF9505') login

  v-container
    v-layout
      v-flex(xs12='', md6='')
        v-alert(
              v-model="alert"
              dismissible
              type="error") ログインに失敗しました。
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
        this.$store.dispatch('SetLoginUserId', response.data.id)
        this.$router.push('/')
      },(error) => {
        console.log(error)
        this.alert = true
      })
    }
  }
}
</script>

<style>
.container {
  background: white;
}
</style>