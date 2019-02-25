<template>
  <div class="search-box">
    <div class="search-wrapper " >
      <input type="text" class="search-input" :placeholder="placeholder">
      <span class="icon-wrapper"><i class="iconfont icon-search"></i></span>
    </div>
    <div class="tool-wrapper">
      <i class="iconfont icon-gongjuxiang"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SearchBox',
  data() {
    return {
      placeholder: '搜索大学、专业、学长学姐...'
    }
  },
}
</script>
<style lang="stylus" scoped>
@import "~@/common/stylus/variable.styl"
.search-box
  height 1.2rem
  background #fff
  display flex
  .search-wrapper
    width 75%
    border 0.02rem solid #ddd !important
    // background #ccc
    display flex
    height .7rem
    margin-top .25rem
    margin-left 5%
    border-radius .5rem
    .search-input
      height  .7rem
      width 85%
      margin-left 5%
      font-size .24rem
      color #666
    .icon-wrapper
      height .7rem
      width 15%
      display flex
      justify-content center
      align-items center
      .iconfont
        color #ddd
        font-size .38rem
  .tool-wrapper
    height 1.2rem
    width 25%
    display flex
    justify-content center
    align-items center
    color $cl-yellow
    .iconfont
      font-size .78rem
      
</style>
