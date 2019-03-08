<template>
  <div class="post" @click="close">
    <div class="top">
      <div class="pic">
        <img src="../../common/image/post.jpg" alt="" srcset="">
      </div>
      <div class="desc">
        <h1>WiLL，青春不迷茫</h1>
      </div>
    </div>
    <div class="menu">
      <div class="item">
        <div class="icon-wrapper"><i class="iconfont icon-dashboard"></i></div>
        <span class="menu-name">同学圈</span>
      </div>
      <div class="item">
        <div class="icon-wrapper"><i class="iconfont icon-container"></i></div>
        <span class="menu-name">长文</span>
      </div>
      <div class="item">
        <div class="icon-wrapper"><i class="iconfont icon-question-circle"></i></div>
        <span class="menu-name">提问</span>
      </div>
      <div class="item">
        <div class="icon-wrapper"><i class="iconfont icon-close-circle"></i></div>
        <span class="menu-name"></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  nama: 'Post',
  methods: {
    close(){
      this.$emit('closePost')
    }
  },
}
</script>
<style lang="stylus" scoped>
@import "~@/common/stylus/variable.styl"
.post
  overflow: hidden
  position fixed
  top 0
  bottom 0
  left 0
  right 0
  background: linear-gradient(45deg,#fcd9df,#cfe0f8);
  overflow: hidden
  opacity .95
  z-index 100
  .top
    width 80%
    height 50%
    margin-left 10%
    .pic
      width 90%
      margin-left 5%
      overflow hidden
      height 75%
      box-shadow 0 .3rem 1rem $cl-pink
      margin-top 1.2rem
      border-radius .15rem
      img 
         width 100%
    .desc
      height 1.5rem
      line-height 1.5rem
      margin-top .2rem
      text-align center
      font-size .56rem
      color #fff
      h1
        font-weight 900
  .menu
    position relative
    height 50%
    width 60%
    margin-left 20%
    left 0
    right 0
    .item
      height 1.6rem
      width 1.6rem
      &:nth-child(1)
        position absolute
        bottom 3.4rem
        left -0.4rem
      &:nth-child(2)
        position absolute
        bottom 4.8rem
        left 50%
        margin-left -0.8rem
      &:nth-child(3)
        position absolute
        bottom 3.4rem
        right -0.4rem
      &:nth-child(4)
        position absolute
        bottom 1.4rem
        left 50%
        margin-left -0.8rem
        .icon-wrapper
          box-shadow 0 0 1rem #aaa
          .iconfont
            color $cl-orange
      .icon-wrapper
        height 1.4rem
        width 1.4rem
        margin-left 0.1rem
        border-radius 50%
        background #fff
        display flex
        justify-content center
        align-items center
        color $cl-yellow
        box-shadow 0 .3rem 1rem #fff
        .iconfont
          font-size .78rem
      .menu-name
        display inline-block
        height .2rem
        width 1.6rem
        margin-top .2rem
        text-align center
        color $cl-yellow
        font-weight 700
        font-size .36rem
</style>
