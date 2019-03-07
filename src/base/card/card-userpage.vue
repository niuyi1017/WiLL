<template>
  <div class="cardUserPage">
    <div class="wrapper">
    <div class="line"></div>
    <div class="header">
      <div class="mode">{{contentType}}</div>
      <div class="postTime">1 min ago</div>
    </div>
     
     <div class="title">{{title}}</div>
     <div class="content">
       <div class="pic">
         <img src="../../common/image/b2.jpg" alt="">
       </div>
       <div class="text text-title-desc" v-if="content.title">
         <h3>{{this.content.title}}</h3>
         <p>{{content.desc}}</p>
       </div>
       <div class="text text-desc" v-else>
         <p>{{content.desc}}</p>
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
    },
    isSelf: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    momentMode() {
      return  this.isSelf ? `我${momentModeStr[this.content.momentMode]}` : `Ta${momentModeStr[this.content.momentMode]}`
    },
    contentType() {
      return contentTypeStr[this.content.contentType]
    },
    title() {
      return  this.content.momentMode == 0 ? `${this.momentMode}新的${this.contentType}：`: `${this.momentMode}${this.contentType}`
    }
  },
}
</script>
<style lang="stylus" scoped>
@import "~@/common/stylus/variable.styl"
@import "~@/common/stylus/mixins.styl"
.cardUserPage
  .wrapper
    width 94%
    margin-left 3%
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
      padding 0 .4rem 0 .25rem
      margin-top .15rem
      display flex
      justify-content space-between
      .mode
        width 1.5rem
        text-align center
        color $cl-blue
      .postTime
        color $cl-subColor
    .title
      height .6rem
      line-height .6rem
      font-size .36rem
      // font-weight 600
      padding 0 .2rem
      ellipsis()
    .content
      margin-top .15rem
      margin-bottom .15rem
      height 1.8rem
      display flex
      justify-content space-between
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
        display flex
        flex-direction column
        justify-content space-evenly
      .text-title-desc
        height 1.8rem
        display flex
        flex-direction column
        justify-content space-evenly
        h3
          display flex
          align-items center
          height .6rem
          line-height .4rem
          font-size .36rem
          font-weight 600
        p
          display flex
          align-items center
          font-size .32rem
          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp:1;
          -webkit-box-orient: vertical;
          color $cl-subColor 
      .text-desc
        p
          display flex
          align-items center
          font-size .32rem
          display: -webkit-box;
          line-height .4rem
          overflow: hidden;
          -webkit-line-clamp:3;
          -webkit-box-orient: vertical;
          color $cl-subColor 
</style>
