<template>
  <div class="tabBar">
    <div class="tab-item">
      <div class="icon"><i class="iconfont  icon-compass"></i></div>
      <div class="name">WiLL</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
}
</script>
<style lang="stylus" scoped>
@import "~@/assets/styles/variable.styl"
.border-top
    &:before
      border-color: $cl-red
    &:after
      border-color: $cl-red
.tabBar
  height 1.2rem
  position fixed
  bottom 0
  background #fff
  width 100%
</style>
