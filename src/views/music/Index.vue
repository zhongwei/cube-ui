<template lang="pug">
  div
    Tags
    .columns.is-variable.is-1
      .column
        Albums(:collectionType="1")
      .column
        Albums(:collectionType="0")
</template>

<script>
import Tags from '@/components/Tags.vue'
import Albums from './Albums.vue'

export default {
  name: 'videos',
  components: {
    Tags,
    Albums,
  },
}
</script>
