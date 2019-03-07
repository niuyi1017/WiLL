<template>
  <div id="app">
    <keep-alive>
      <router-view>
      </router-view>
    </keep-alive>
    <TabBar @post="handlePost"/>
    <post @closePost="handlePost" v-show="showPost"/>
  </div>
</template>

<script>

import TabBar from './components/tabBar/tabBar'
import Post from './base/post/post'
export default {
  name: 'app',
  data() {
    return {
      showPost: false
    }
  },
  components: {
   TabBar,
   Post
  },
  methods: {
    handlePost() {
      this.showPost = !this.showPost
    }
  }
  
}
</script>

<style lang="stylus" scoped>
@import "~@/common/stylus/variable";

</style>
