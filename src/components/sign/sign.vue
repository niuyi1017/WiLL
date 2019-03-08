<template>
  <div class="sign">
    <div class="box">
      <div class="title">{{title}}</div>
      <div class="input-group">
        <div class="input-wrapper">
          <input type="text" class="username" placeholder="账号">
        </div>
        <div class="input-wrapper">
          <input type="password" class="password" placeholder="密码">
        </div>
        <div class="input-wrapper" v-show="!isSignIn">
          <input type="password" class="password" placeholder="确认密码">
        </div>
      </div>
      <div class="tip" v-show="isError"><span>账号或密码不正确</span></div>
      <div class="btn">
        <div class="circle">
          <i class="iconfont icon-feiji"></i>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="sign-up" v-show="isSignIn">注册</div>
      <div class="forgot" v-if="isSignIn">忘记密码</div>
      <div class="forgot" v-else>已有账号？去登录</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'sign',
  props: {
    isSignIn: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isError: false
    }
  },
  computed: {
    title() {
      return this.isSignIn ? "登录" : "注册"
    }
  },
}
</script>
<style lang="stylus" scoped>
@import "~@/common/stylus/variable.styl"
.sign
  position fixed
  top 0
  left 0 
  right 0
  bottom 0
  background #fff
  z-index 60
  display flex
  flex-direction column
  justify-content center
  align-items center
  .box
    width 80%
    height 0
    padding-bottom 100%
    // margin-bottom 2rem
    .title
      height 2rem
      line-height 2rem
      font-size .78rem
      color $cl-yellow
    .input-group
      // height 2rem
      line-height 1rem
      .input-wrapper
        height 1rem
        line-height 1rem
        padding-left .2rem
        border-bottom 0.02rem solid $cl-border
        input 
          border none
          outline none 
          width 90%
          height .4rem
          line-height 2rem
          margin-top .4rem
          font-size .32rem
          color $cl-subColor
    .tip
      width 100%
      height .6rem
      line-height .6rem
      margin-top .2rem
      text-align end
      color $cl-red
    .btn
      width 100%
      height 2rem
      margin-top 1rem
      display flex
      justify-content center
      align-items center
      .circle
        height 1.5rem
        width 1.5rem
        background $cl-yellow
        text-align center
        line-height 1.5rem
        border-radius 50%
        color #FFF
        box-shadow 0 0.25rem 1.5rem $cl-yellow
        .iconfont 
          font-size .88rem
  .footer
    line-height .4rem
    text-align center
    text-decoration underline
    color $cl-subColor
</style>
