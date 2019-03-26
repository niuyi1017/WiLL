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
      <h1 class="article-title">在距海最近的大学读书是什么样的体验</h1>
      <div class="meta">
        <div class="time">31 mins ago</div>
        <div class="name">一只小小白</div>
      </div>
    </div>
    <div class="content">

    </div>
    <div class="comment-bar">
      <div class="left">
        <div class="item read">
          <span class="icon"><i class="iconfont icon-eye"></i></span>
          <div class="num">2645</div>
        </div>
        <div class="item comment">
          <span class="icon"><i class="iconfont icon-comment"></i></span>
          <div class="num">245</div>
        </div>
      </div>
      <div class="item like right">
        <span class="icon"><i class="iconfont icon-like"></i></span>
        <div class="num">2.5k</div>
      </div>
    </div>
    <comment :comments="comments"/>
  </div>
</template>
<script>
import MHeader from '@/base/header/header'
import Comment from '@/base/comment/comment'
import {getComments} from '@/api/comments'
export default {
  name: 'Article',
  components: {
    MHeader,
    Comment
  },
  data() {
    return {
      title: '文章正文',
      showAbs: true,
      comments: []
    }
  },
  methods: {
    _getComments(){
      getComments().then((res) => {
        if(res.code==0&&res.data){
          this.comments = res.data
        }
      })
    }
  },
  mounted() {
    this._getComments()
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
    height 1.8rem
    margin-top .08rem
    background #fff
    padding 0 .4rem
    display flex
    flex-direction column
    justify-content space-evenly
    .article-title
      line-height 0.55rem
      font-size .40rem
    .meta
      display flex
      justify-content flex-start
      align-items center
      .time
        margin-right .4rem
        color #cccccc
      .name
        color $cl-blue
  .content
    height 10rem
    background #fff
    margin-bottom 0.1rem
  .comment-bar
    height 1rem
    display flex
    align-items center
    justify-content space-between
    width 100%
    background #fff
    .left
      display flex
      margin-left .2rem
    .item
      display flex
      margin-right .2rem
      .iconfont
        font-size .36rem
      .num 
        margin-left .1rem
        margin-top .05rem
</style>