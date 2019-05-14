<template>
  <div class="comment-wrapper">
    <div class="wrapper" v-if="comments.length">
      <div class="comment-content" v-for="(item, index) in comments" :key="index"> 
        <div class="content">
          <div class="head">
            <div class="pic">
              <img :src="item.avatar" alt="" srcset="">
            </div>
            <div class="username">
              <h3>{{item.username}}</h3>
              <span class="time">{{item.postAt}}</span>  
            </div>
            <div class="icon-group">
              <div class="item">
                <i class="iconfont icon-icon_community_line"></i>
                <span class="num">{{item.reply_num}}</span>
              </div>
              <div class="item">
                <i class="iconfont icon-like"></i>
                <span class="num">{{item.like_num}}</span>
              </div>
            </div>
          </div>
          <div class="body">
            <p>{{item.content}}</p>
            <div class="reply" v-for="(reply, innerIndex) in item.replys" :key="innerIndex">
              <div class="head">
                <div class="pic">
                  <img :src="reply.from_avatar" alt="" srcset="">
                </div>
                <div class="username">
                  {{reply.from_username}} <span class="to"> 回复 </span> {{reply.to_username}}
                </div>
              </div>
              <div class="reply-body">
                <p>{{reply.content}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="no-content" v-else>
      暂无评论，快来发表抢占头条吧~
    </div>
    <div class="edit-bar">
      <div class="left item">
        <i class="iconfont icon-edit-square"></i>
      </div>
      <div class="middle">
        <textarea rows="1" placeholder="发表评论"></textarea>
      </div>
      <div class="right item">
        <i class="iconfont icon-feiji"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Comment',
  props:{
    comments: {
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "~@/common/stylus/variable.styl"
.comment-wrapper
  .wrapper
    &:last-child
        padding-bottom 1rem
  .no-content
    height: 1rem
    width 100%
    line-height 1rem
    text-align center
    margin-bottom 2rem
  .comment-content
    background #fff
    margin-top .02rem
    .content
      .head
        height 1rem
        display flex
        align-items center
        .pic
          height 0.8rem
          width 0.8rem
          overflow hidden
          border-radius 50%
          box-shadow 0 .1rem .3rem #ccc
          margin-left .2rem
          img
            height 100%
            width 100%
        .username
          flex-grow 1
          margin 0 .2rem
          h3
            line-height .4rem
          .time
            color #aaa
          .to
            color #000
        .icon-group
          width 2.5rem
          display flex
          justify-content space-evenly
          .iconfont
            margin-right .05rem
      .body
        margin-left 1rem
        line-height .4rem
        font-size .28rem
        padding-bottom .2rem
        p
          padding-bottom .2rem
      .reply
        background $cl-bg2
        border-radius .15rem
        margin-right .2rem
        margin-bottom .1rem
        .reply-body
          padding 0 .2rem
  .edit-bar
    position fixed
    bottom 0
    background $cl-bg2
    height 1rem
    width 100%
    z-index 2
    display flex
    .item
      width 1rem
      display flex
      align-items center
      justify-content center
      .iconfont 
        font-size .54rem
    .left
      .iconfont
        color #aaa
    .right
      .iconfont
        color $cl-yellow
        font-weight 500
        font-size .68rem
        text-shadow 0 0 .5rem $cl-yellow
    .middle
      flex-grow 1
      min-height 1rem
      line-height 1rem
      textarea 
        width 100%
        font-size .32rem
        background $cl-bg2
        // border-bottom .02rem


</style>
