<template lang="pug">
  .container
    .card
      .card-header
        p.card-header-title {{ currentVideo.sn }} . {{ currentVideo.no }} -  {{ currentVideo.name }}
    .box
      article.media
        .media-left
          figure.image
            img(:src="currentVideo.cover")
        .media-content
          .content
            p
              strong 封面{{ currentVideo.tags }} - {{ currentVideo.actors }}
              br
              | {{ currentVideo.desc }}
    template(v-for="episode in currentVideo.episodeList")
      .box
        article.media
          .media-left
            figure.image
              video(:src="episode.videoURL",  controls="controls",  preload="auto")
          .media-content
            .content
              p: strong {{ episode.desc }}

</template>

<script>
import AlbumTags from './AlbumTags.vue'
import Actors from './Actors.vue'

export default {
  name: 'videoAlbum',
  components: {
    AlbumTags,
    Actors,
  },
  data() {
    const videoId = parseInt(this.$route.params.id, 10) - 1
    // eslint-disable-next-line
    const currentVideo = VideoList[videoId]
    return { currentVideo }
  },
}
</script>
