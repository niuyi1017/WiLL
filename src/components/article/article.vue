<template>
  <div class="article-wrapper">
    <m-header :title="title"/>
    <div class="author-card">
      <div class="left">
        <div class="pic">
          <img src="../../common/image/t1.jpg" alt="" srcset="">
        </div>
        <div class="author">
          <div class="username">一只小小白</div>
          <div class="time">31 mins ago </div>
        </div>
      </div>
      <div class="right">
        <div class="follow">+ Follow</div>
      </div>
    </div>
    <div class="headline">
      <h1 class="article-title">在距海最近的大学读书是什么样的体验在距海最近的大学读书是</h1>
      <div class="meta">
        <div class="time">31 mins ago</div>
        <div class="name">一只小小白</div>
      </div>
    </div>
  </div>
</template>
<script>
import MHeader from '@/base/header/header'
export default {
  name: 'Article',
  components: {
    MHeader
  },
  data() {
    return {
      title: '文章正文',
      showAbs: true
    }
  },
}
</script>
<style lang="stylus" scoped>
@import "~@/common/stylus/variable.styl"
.article-wrapper
  padding-top 1rem
  .author-card
    height 1.4rem
    background #ffffff
    display flex
    justify-content space-between
    align-items center
    padding 0 .4rem
    // box-shadow 0 .2rem .3rem #ccc
    .left
      display flex
      .pic
        height 1rem
        width 1rem
        border-radius 50%
        overflow hidden
        box-shadow 0 .1rem .3rem #ccc
        margin-right .3rem
        img 
          height 100%
          width 100%
      .author
        display flex
        flex-direction column
        justify-content center
        align-items flex-start
        .username
          font-weight 600
          height .5rem
          line-height .5rem
        .time
          color #aaa
    .right
      .follow
        padding .08rem .25rem
        border 0.02rem solid $cl-yellow
        border-radius 0.25rem
        color $cl-yellow
  .headline
    height 2rem
    margin-top .08rem
    background #fff
    padding 0 .4rem
    display flex
    flex-direction column
    justify-content space-evenly
    .article-title
      line-height 0.6rem
      font-size .44rem
    .meta
      display flex
      justify-content flex-start
      align-items center
      .time
        margin-right .4rem
        color #cccccc
      .name
        color $cl-blue


</style>