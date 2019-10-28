<template>
  <div id="videolist">
  <h1>Videos</h1>
  <div>
    <button @click="handleGetInfo">gteInfo</button>
  <ul v-for="(item,index) in videos">
    <li>
      <router-link :to="'video/'+item.fileName">{{item.name}}</router-link>
    </li>
  </ul>


  </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {

      }
    },
    computed: {
      videos: function (){

        return this.$store.getters.getVideos
      }
    },
    methods:{
      handleGetInfo(){
        console.log('正在请求handleGetInfo')
        this.$store.dispatch('getVideoList')
      }
    }
  }
</script>
<style scoped>


</style>
