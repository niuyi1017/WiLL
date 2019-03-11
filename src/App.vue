<template>
  <div id="app">
    <keep-alive>
      <router-view>
      </router-view>
    </keep-alive>
  </div>
</template>

<script>
// import Post from './base/post/post'
// import {mapGetters} from 'vuex'
export default {
  name: 'app',
  components: {
  //  Post
  },
  methods: {
    handlePost() {
      this.setShowPost(false)
    },
    
  },
  
}
</script>

<style lang="stylus" scoped>
@import "~@/common/stylus/variable";

</style>
