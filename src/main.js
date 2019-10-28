// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Video from 'video.js'
import 'video.js/dist/video-js.css'
import Vuex from 'vuex'
import axios from 'axios'
import vueaxios from 'vue-axios'


Vue.use(Vuex,axios,vueaxios)
Vue.prototype.$video = Video

Vue.config.productionTip = false
const store=new Vuex.Store({
  state:{
    videoList:[]
  },
  getters:{
    getVideos:state=>{
      return state.videoList;
    }
  },
  mutations:{
    setVideoList(state,data){
      state.videoList=data;
    }
  },
  actions:{
    getVideoList(context){
      //axios的之前还不能有一个this,很烦
        axios.get('http://localhost:7110/api/videos').then(response=>{
          console.log(response.data)
          context.commit('setVideoList',response.data)
        })
    }
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,store,
  components: { App },
  template: '<App/>'
})

