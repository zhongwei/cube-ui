<template lang="pug">
.tags
  span(v-for="tag in tags").tag.is-rounded {{ tag }}
</template>

<script>
export default {
  name: 'albumTags',
  props: {
    tags: {
      default: ['a', 'b'],
    },
  },
  data() {
    // eslint-disable-next-line
    // return {  albumTags: this.albumTags, }
    return {

    }
  },
}
</script>
