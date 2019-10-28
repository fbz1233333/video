<template>
  <button>
    {{msg}}
    {{$route.params.id}}
  </button>
</template>
<script>
  export default {
    data(){
      return{

        msg:'button'
      }
    }
  }
</script>
<style scoped>
</style>
