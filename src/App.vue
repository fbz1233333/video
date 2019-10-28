<template>
  <div id="app">

    <!--    <img src="./assets/logo.png">-->
    <!--    <router-link to="/image" target="tar">-->
    <!--      跳转到image-->
    <!--    </router-link>-->
    <!--    <div id="tar"></div>-->
    <!--    <router-view/>-->
    <!--    表示导航栏-->
    <ul v-for="(item,index) in list_index">
      <li><a :href="item.url">{{item.text}}</a></li>
    </ul>
<!--    表示图片-->
    <img src="./assets/logo_index.png" height="100" width="1000">
    <ul>
      <router-link to="/sortedVideo"  >精选视频</router-link>
    </ul>

    <div class="container">
<!--      container-->
      <router-view/>
    </div>

  </div>
</template>

<script>

  export default {
    name: 'App',
    components:{

    },
    data(){
      return{
        list_index: [
          {
            text: '首页',
            url: 'http://www.baidu.com'
          },
          {
            text: '首页',
            url: '/'
          }
        ]

      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

</style>
