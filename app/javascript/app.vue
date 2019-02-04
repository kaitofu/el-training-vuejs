<template lang="pug">
#app
  v-app#inspire
    v-toolbar(color='orange darken-4', dark='', fixed='', app='')
      v-toolbar-title El-Training
      v-spacer
      router-link(to="/") Home 
      router-link(to="/login") Login
      router-link(to="/admin") Admin
      p {{ this.$store.getters.loggedIn }}
      v-btn(v-if="this.$store.getters.loggedIn" @click="logout()") logout
      //- v-toolbar-side-icon(@click.stop='drawer = !drawer')
    //- v-navigation-drawer(fixed='', v-model='drawer', right='', app='')
    //-   v-list(dense='')
    //-     v-list-tile(@click='')
    //-       v-list-tile-action
    //-         v-icon home
    //-       v-list-tile-content
    //-         v-list-tile-title Home
    //-     v-list-tile(@click='')
    //-       v-list-tile-action
    //-         v-icon contact_mail
    //-       v-list-tile-content
    //-         v-list-tile-title Contact
    router-view

    //- Index
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
      drawer: false
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('SetLogOut')
      this.$router.push('/login')
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
