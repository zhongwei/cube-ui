<template lang="pug">
  #app.container.is-fluid.is-marginless
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
  padding: 5px;
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
