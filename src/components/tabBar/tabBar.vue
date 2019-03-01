<template>
  <div class="tabBar">
    <router-link to="/will" class="tab-item" tag="div">
      <div class="icon"><i class="iconfont  icon-compass"></i></div>
      <div class="name">WiLL</div>
    </router-link>
    <router-link to="/playground" class="tab-item" tag="div">
      <div class="icon"><i class="iconfont  icon-fire"></i></div>
      <div class="name">操场</div>
    </router-link>
    <div class="tab-item" @click="handlePost">
      <div class="icon fabu"><i class="iconfont  icon-plus-circle"></i></div>
      <div class="name fabu-name">发布</div>
    </div>
     <router-link to="/message" class="tab-item" tag="div">
      <div class="icon"><i class="iconfont  icon-message"></i></div>
      <div class="name">小纸条</div>
   </router-link>
     <router-link to="/user" class="tab-item" tag="div">
      <div class="icon"><i class="iconfont  icon-user"></i></div>
      <div class="name">我的</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  methods: {
    handlePost() {
      this.$emit('post')
    }
  },
}
</script>
<style lang="stylus" scoped>
@import "~@/common/stylus/variable.styl"
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
  display flex
  justify-content space-around
  z-index 50
  .tab-item
    display flex
    flex-direction column
    justify-content center
    align-items center
    position relative
    width 100%
    &.router-link-active
      color $cl-yellow
    .name
      margin-top .15rem
      font-size .26rem
    .icon
      .iconfont
        font-size .55rem
    .fabu
      height 1.3rem
      width 1.3rem
      background #fff
      position absolute
      top -50%
      border-radius 50%
      display flex
      justify-content center
      align-items center
      margin-bottom .2rem
      box-shadow 0 0rem .5rem $cl-yellow
      background $cl-yellow
      .iconfont
        font-size .8rem
        color #FFF
    .fabu-name
      margin-top .65rem
  
</style>
