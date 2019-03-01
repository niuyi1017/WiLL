<template>
  <div class="card-moment">
    <div class="header">
      <div class="left">
        <div class="pic">
          <img src="../../common/image/t3.jpg" alt="" srcset="">
        </div>
        <div class="title-time">
          <div class="title">{{momentData.userName}}</div>
          <span class="time">{{momentData.postAt}}</span>
        </div>
      </div>
      <div class="right">
        <div class="button" v-show="!momentData.isFriend">+ Follow</div>
      </div>
        
    </div>
    <div class="content-wrapper">
      <div class="text">{{momentData.content.text}}
      </div>
      <div class="pic-group-wrapper" v-show="momentData.content.picList.length">
        <div class="pic-group" v-for="(pics, index) in momentData.content.picList" :key="index">
          <div class="pic" v-for="(pic,index) in pics" :key="index">
            <img src="../../common/image/7.jpg" alt="" srcset="" v-show="pic.imgUrl">
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="left">
        <div class="item">
          <i class="iconfont icon-eye"></i>
          <span class="num">{{momentData.readNum}}</span>
        </div>
        <div class="item">
          <i class="iconfont icon-comment"></i>
          <span class="num">{{momentData.commentNum}}</span>
        </div>
      </div>
      <div class="right">
        <div class="item">
          <i class="iconfont icon-like"></i>
          <span class="num">{{momentData.likeNum}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Tab',
  props: {
    momentData:{
      type: Object,
      default(){
        return {}
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "~@/common/stylus/variable.styl"
.card-moment
  border-radius .2rem
  background #fff
  width 96%
  margin-left 2%
  overflow hidden
  margin-top .1rem
  margin-bottom .1rem
  .header
    height 1.2rem
    display flex
    justify-content space-between
    padding 0 .2rem
    .left
      display flex
      .pic
        height .85rem
        width .85rem
        border-radius .5rem
        background #333
        margin-top .15rem
        overflow hidden
        margin-right .2rem
        img 
          width 100%
      .title-time
        height 1rem
        margin-top .1rem
        display flex
        flex-direction column
        justify-content space-evenly
        .title
          font-weight 600
        .time
          color $cl-subColor
    .right
      width 2rem
      height 1.2rem
      // line-height 1.2rem
      display flex
      justify-content flex-end
      align-items center
      .button
        padding 0 .25rem
        border-radius .25rem
        height .5rem
        line-height .5rem
        border 0.02rem solid $cl-yellow
        color $cl-yellow
  .content-wrapper
    padding .2rem .4rem
    // background #ccc
    .text
      font-size .32rem
      line-height .4rem
      max-height 1.6rem
      overflow hidden
      margin-bottom .2rem
    .pic-group
      display flex
      justify-content space-evenly
      // flex-wrap wrap
      max-height 9rem
      .pic
        width 100%
        border-radius .1rem
        overflow hidden
        margin .05rem
        img 
          width 100%
  .footer
    display flex
    font-size .30rem
    height .8rem
    padding 0 .4rem
    justify-content space-between
    
    .left
      display flex
      height .8rem
      line-height .8rem
      
      .item
        margin-right .4rem
        .iconfont
          font-size .34rem
    .right
      height .8rem
      line-height .8rem
      .iconfont
          font-size .34rem



</style>
