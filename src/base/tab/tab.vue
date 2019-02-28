<template>
  <div class="tab ">
    <div class="menu actived">问答</div>
    <div class="menu">同学圈</div>
  </div>
</template>
<script>
export default {
  name: 'Tab',
  props: {
    menu: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "~@/common/stylus/variable.styl"
.tab
  height .8rem
  border-bottom .02rem solid $cl-border
  background #ffffff
  display flex
  justify-content space-around
  align-items center
  .menu
    font-size .32rem
    padding 0 .15rem .15rem .15rem
    color $cl-subColor
  .actived
    color $cl-yellow
    font-weight 600px
    border-bottom .04rem solid $cl-yellow
</style>
