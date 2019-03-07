<template>
  <div class="search" >
    <h1 class="title">Search</h1>
    <div class="search-box">
      <span class="iconfont-wrapper"><i class="iconfont icon-search"></i></span>
      <input class="input" type="text">
      <span class="iconfont-wrapper icon-close"><i class="iconfont icon-close-circle-fill"></i></span>
    </div>
    <div class="scroll-wrapper">
      <div class="recommend-box">
        <div class="hot"></div>
        <div class="history"></div>
      </div>
      <div class="result-box">

      </div>
    </div>
   
  </div>
</template>
<script>
export default {
  name: 'Search',
  components: {
  }
}
</script>
<style lang="stylus" scoped>
@import "~@/common/stylus/variable.styl"
.search
  position fixed
  top 0
  bottom 0
  right 0
  left 0
  background #fff
  .title
    height 1.5rem
    line-height 1.5rem
    color $cl-yellow
    padding-left .5rem
    font-size .78rem
  .search-box
    width 90%
    background #ffffff
    margin-left 5%
    height .8rem
    line-height .8rem
    display flex
    align-items center
    border-radius .2rem
    box-shadow 0 0.2rem 1rem #eee
    margin-bottom .6rem
    .iconfont-wrapper
      height .8rem
      line-height .8rem
      width .8rem
      text-align center
      display flex
      justify-content center
      .iconfont
        color $cl-subColor
        font-size .36rem
    .input
      height .7rem
      line-height .7rem
      width 100%
      border none
      outline none
  .scroll-wrapper
    position fixed
    top 2.6rem
    bottom .2rem
    width 100%
    background #cccccc
</style>
