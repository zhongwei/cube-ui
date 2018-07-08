<template lang="pug">
.tags
  span(v-for="actor in actors").tag.is-rounded {{ actor }}
</template>

<script>
export default {
  name: 'actors',
  props: {
    actors: {
      default: ['a', 'b'],
    },
  },
  data() {
    // eslint-disable-next-line
    // return {  albumTags: this.albumTags, }
  },
}
</script>

