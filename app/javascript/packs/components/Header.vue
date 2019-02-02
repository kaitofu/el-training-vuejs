<template lang="pug">
div
    v-toolbar(color='orange darken-4', dark='', fixed='', app='')
      v-toolbar-title El-Training
      v-spacer
      v-toolbar-side-icon(@click.stop='drawer = !drawer')

    v-navigation-drawer(fixed='', v-model='drawer', right='', app='')
      v-list(dense='')
        v-list-tile(@click='')
          v-list-tile-action
            v-icon home
          v-list-tile-content
            v-list-tile-title Home
        v-list-tile(@click='')
          v-list-tile-action
            v-icon contact_mail
          v-list-tile-content
            v-list-tile-title Contact
    //- v-content
    //-   v-container(fluid='', fill-height='')
    //-     v-layout(justify-center='', align-center='', row wrap)
    //-       //- v-flex(text-xps-center='')
</template>

<script>
export default {
  data: function () {
    return {
      drawer: false
    }
  },
  props: {
    source: String
  }
}
</script>

<style scoped>
</style>
