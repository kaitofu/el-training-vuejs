<template lang="pug">
div
  v-app#inspire 
    v-toolbar
      v-toolbar-side-icon
      v-toolbar-title Title
      v-spacer
      v-toolbar-items.hidden-sm-and-down
        v-btn 
        v-btn 
        v-btn 

    v-alert(
      :value="true"
      type="success"
    ) This is alert!
</template>
