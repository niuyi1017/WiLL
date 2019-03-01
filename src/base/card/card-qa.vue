<template>
  <div class="card-qa">
    <div class="wrapper">
      <div class="header">
        <div class="tag">烟台大学</div>
        <div class="time">1分钟前</div>
      </div>
      <div class="question">物联网工程学单片机吗?</div>
      <div class="answer">
          谢邀，物联网工程专业大三狗一枚。
          单片机可以说是电子信息类专业的必修课了bulabulabula~
      </div>
      <div class="footer">
        <div class="author">
          <div class="pic"><img src="../../common/image/t2.jpg" alt=""></div>
          <div class="author-name">一只小小白</div>
        </div>
        <div class="icon-group">
          <div class="item">
            <div class="icon-wrapper">
              <i class="iconfont icon-caret-up-copy"></i>
              <i class="iconfont icon-caret-down-copy"></i>
            </div>
            <span class="num zan">2.4k</span>
          </div>
          <div class="item">
            <i class="iconfont icon-bulb icon-actived"></i>
            <span class="num">1.8k</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardQa',
  props: {
    
  }
}
</script>
<style lang="stylus" scoped>
@import "~@/common/stylus/variable.styl"
@import '~@/common/stylus/mixins.styl'
.card-qa
  .wrapper
    height 3.2rem
    background #fff
    margin-bottom .15rem
    .header
      height .6rem
      display flex
      padding-right .4rem
      justify-content space-between
      align-items center
      .tag
        background $cl-purple
        padding 0 .5rem
        height .5rem
        line-height .5rem
        letter-spacing .02rem
        color #fff
        border-radius 0 .25rem .25rem 0
      .time
        color $cl-subColor
    .question
      height .8rem
      line-height .8rem
      padding 0 .4rem 0 .4rem
      font-size .40rem
      font-weight 600
      ellipsis()
    .answer
      height 1.1rem
      line-height .52rem
      padding 0rem .4rem 
      margin-top -0.1rem
      margin-bottom 0.1rem
      overflow hidden
      color $cl-subColor
      display flex
      flex-direction column
      justify-content center
    .footer
      height .7rem
      display flex
      justify-content space-between
      padding-right .4rem 
      .author
        display flex
        padding-left .4rem
        .author-name
          height .6rem
          line-height .6rem
        .pic
          height .6rem
          width .6rem
          border-radius .35rem
          overflow hidden
          margin-right .2rem
          img
            width 100%
      .icon-group
        display flex
        justify-content center
        .item
          height .6rem
          line-height .6rem
          .icon-wrapper
            display inline-block
            position relative
            .iconfont
              position absolute
              top -0.4rem
              left -0.5rem
              font-size .48rem
              &:nth-child(1) 
                color $cl-yellow
          .iconfont
            font-size .42rem
            color $cl-divider
          .icon-actived
            color $cl-yellow
          .num
            position relative
            top -0.07rem
          .zan
            top 0rem
</style>
