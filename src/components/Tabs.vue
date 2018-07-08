<template lang="pug">
  .tabs.is-centered.is-boxed.is-medium
    ul
      li(v-for="(tab,index) in tabs"
        :class="{'is-active': index == num}"
        @click="selectedTab(index)")
        router-link(:to="tab.url")
          span.icon.is-small: i.fas(:class="tab.icon", aria-hidden='true')
          span {{tab.name}}
</template>

<script>

export default {
  name: 'Tabs',

  components: {
  },

  data() {
    return {
      tabs: [
        { name: 'Home', icon: 'fa-home', url: '/' },
        { name: 'Pictures', icon: 'fa-image', url: '/pic' },
        { name: 'Music', icon: 'fa-music', url: '/music' },
        { name: 'Videos', icon: 'fa-film', url: '/video' },
        { name: 'Documents', icon: 'fa-file-alt', url: '/doc' },
      ],
      num: 0,
    }
  },

  methods: {
    selectedTab(index) {
      this.num = index
    },
  },
}
</script>

<style scoped lang="scss">
.tabs {
  margin-bottom: 0;
}
</style>
