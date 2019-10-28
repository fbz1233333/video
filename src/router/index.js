import Vue from 'vue'
import Router from 'vue-router'
// import VideoPage from '@/components/VideoPage'
import HelloWorld from '@/components/HelloWorld'
import vButton from '@/components/button'
import vImage from '@/components/image'
import vVideoInfo from '@/components/videos'
import videoPlayer from '@/components/videoPlayer'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
      // path: '/',
      // name: 'VideoPage',
      // component: VideoPage

    },
    {
      path: '/btn/:id',
      component: vButton
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/image',
      component: vImage,
      meta: {
        title: '图片'
      }
    },
    {
      path: '/sortedVideo',
      component: vVideoInfo
    },
    {
      path: '/video/:fileName',
      component: videoPlayer
    }
  ]
})
