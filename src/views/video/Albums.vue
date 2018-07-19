<template lang="pug">
  div
    template(v-for="videoAlbum in VideoList" v-if="videoAlbum.sn % 2 === collectionType")
      .card
        .card-header
          p.card-header-title {{ videoAlbum.sn }} . {{ videoAlbum.no }} -  {{ videoAlbum.name }}
        .card-header
          p.card-header-title: AlbumTags(:tags="videoAlbum.tags")
          p.card-header-title: Actors(:actors="videoAlbum.actors")
        .card-content: content  {{ videoAlbum.desc }}
        .card-image: figure: router-link(tag="a" :to="'video/' +  videoAlbum.sn")
          img(:src="videoAlbum.cover")
</template>

<script>
import AlbumTags from './AlbumTags.vue'
import Actors from './Actors.vue'

export default {
  name: 'albums',
  props: {
    collectionType: Number,
  },
  components: {
    AlbumTags,
    Actors,
  },
  data() {
    // eslint-disable-next-line
    return { VideoList }
  },
}
</script>
