<template>
  <div class="cardUserPage">
    <div class="wrapper">
    <div class="line"></div>
    <div class="header">
      <div class="mode">发表了</div>
      <div class="postTime">1 min ago</div>
    </div>
     
     <div class="title">在距海最近的大学读书是</div>
     <div class="content">
       <div class="pic">
         <img src="../../common/image/b2.jpg" alt="">
       </div>
       <div class="text">
         <p>Lorem ipsum, dolor sit amet c officiis nulla accusantium neque at non nemo, unde mollitia eaque temporibus dicta possimus. Ab cum vero iste sapiente?</p>
       </div>
     </div>
    </div>
  </div>
</template>
<script>
import {momentModeStr,contentTypeStr} from '@/common/js/config'
export default {
  name: "CardUserPage",
  props: {
    content: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    momentMode() {
      return this.content.momentMode == 0 ? `${momentModeStr[this.content.momentMode]}新的` : momentModeStr[this.content.momentMode]
    },
    contentType() {
      return contentTypeStr[this.content.contentType]
    },
    title() {
      return this.content.title !== '' ? this.content.title : `${this.momentMode}${this.contentType}`
    }
  },

}
</script>
<style lang="stylus" scoped>
@import "~@/common/stylus/variable.styl"
.cardUserPage
  .wrapper
    width 94%
    margin-left 3%
    // overflow hidden
    position relative
    background #fff
    border-radius .2rem
    box-shadow 0 0.2rem 1rem #ddd
    margin-top .4rem
    padding-bottom .15rem
    
    .line
      height .15rem
      width 1.5rem
      background $cl-blue
      border-radius .0725rem
      position absolute
      left .25rem
      top -0.075rem
    .header
      height .6rem
      line-height .6rem
      padding 0 .4rem 0 .55rem
      margin-top .15rem
      // background #ccc
      display flex
      justify-content space-between
      .mode
        color $cl-blue
      .postTime
        color $cl-subColor
    .title
      height .6rem
      line-height .6rem
      font-size .36rem
      font-weight 600
      padding 0 .2rem
    .content
      margin-top .15rem
      margin-bottom .15rem
      
      height 1.8rem
      display flex
      justify-content space-between
      // width 100%
      padding 0 .2rem
      .pic
        height 1.8rem
        width 1.8rem
        margin-right .2rem
        flex none
        border-radius .25rem
        overflow hidden
        img 
          width 100%
          height 100%
      .text
        line-height .4rem
        display flex
        flex-direction column
        justify-content center
        overflow hidden
        // padding-right .2rem
        align-items center
        p
          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp:4;
          -webkit-box-orient: vertical;
          color $cl-subColor 
        

</style>
