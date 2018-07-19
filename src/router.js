import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Video from './views/video/Index.vue'
import VideoDetail from './views/video/VideoDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/video',
      name: 'video',
      component: Video,
    },
    {
      path: '/video/:id',
      name: 'videoDetail',
      component: VideoDetail,
    },
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
})
