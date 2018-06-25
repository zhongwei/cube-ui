<template lang="pug">
  #app.container.is-fluid.is-marginless
    #nav: .tabs.is-centered.is-boxed.is-medium
      Tabs
    router-view
</template>

<script>

import Tabs from '@/components/Tabs.vue'

export default {
  name: 'home',

  components: {
    Tabs,
  },

  data() {
    return {

    }
  },

  methods: {

  },
}
</script>

<style lang="scss">
#app {
  text-align: center;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
