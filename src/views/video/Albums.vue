<template lang="pug">
  div
    template(v-for="videoAlbum in VideoList")
      .card
        .card-header
          p.card-header-title {{ videoAlbum.sn }} . {{ videoAlbum.no }} -  {{ videoAlbum.name }}
        .card-header
          p.card-header-title: AlbumTags(:tags="videoAlbum.tags")
        .card-header
          p.card-header-title: Actors(:actors="videoAlbum.actors")
        .card-image: figure: img(:src="videoAlbum.cover")
        .card-content: content  {{ videoAlbum.desc }}
        .card-footer: Actors(:actors="videoAlbum.actors")
</template>

<script>
import AlbumTags from './AlbumTags.vue'
import Actors from './Actors.vue'

export default {
  name: 'videoAlbums',
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
