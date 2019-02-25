<template>
  <div id="app">
    <keep-alive>
      <router-view>
      </router-view>
    </keep-alive>
    <TabBar/>
  </div>
</template>

<script>

import TabBar from './components/tabBar/tabBar'
export default {
  name: 'app',
  components: {
   TabBar
  }
}
</script>

<style lang="stylus" scoped>
@import "~@/common/stylus/variable";

</style>
