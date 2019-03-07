<template>
  <div class="col-title">
    <div class="foryou ">
     <div class="title">{{title}}</div>
     <i class="iconfont" :class="icon"></i>
    </div>
    <div class="divider"></div>
  </div>
</template>
<script>
export default {
  name: 'ColTitle',
  props: {
    title: {
      type: String,
      default() {
        return "为你推荐 For You"
      }
    },
    icon: {
      type: String,
      default() {
        return 'icon-shujuwajue'
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "~@/common/stylus/variable.styl"
.col-title
  background $cl-bg2
  .foryou
    height .65rem
    line-height .65rem
    margin-top .15rem
    padding 0 .4rem
    display flex
    justify-content space-between
    font-size .32rem
    font-weight 700
  .divider
    width 90%
    margin-left 5%
    height 0.02rem
    background $cl-divider
</style>