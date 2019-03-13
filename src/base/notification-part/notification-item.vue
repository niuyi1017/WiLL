<template>
  <div class="item">
    <div class="pic">
      <img :src="notification.avatar" alt="" srcset="" v-show="!notification.isSystemMsg">
      <i class="iconfont icon-bell" v-show="notification.isSystemMsg"></i>
    </div>
    <div class="content">
        <div class="text"><span class="username">{{notification.username}}</span> {{notification.message}}</div>
    </div>
    <div class="article-pic" v-if="!notification.isFollow">
      <img :src="notification.articlePic" alt="" srcset="">
    </div>
    <div class="follow" v-else>
      + Follow
    </div>
    <div class="time">{{notification.postTime}}</div>
  </div>
</template>
<script>
export default {
  name: 'NotificationItem',
  props: {
    notification: {
      type: Object,
      default() {
        return {
              isRead: false,
              isSystemMsg: false,
              isFollow: false,
              isFriends: false,
              avatar: '',
              username: '一只小小白',
              message: '赞了你的文章',
              postTime: '17 mins ago',
              articlePic: ''
        }
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "~@/common/stylus/variable.styl"
.item
  height 1.8rem
  background #ffffff
  margin-left 1rem
  position relative
  border-radius .15rem 0 0 .15rem
  box-shadow 0 .05rem .15rem #ccc
  margin-bottom .25rem
  .pic
    height .8rem
    width .8rem
    display flex
    justify-content center
    align-items center
    position absolute
    top.4rem
    left -0.4rem
    background $cl-yellow
    box-shadow 0 0 .15rem #aaa
    border-radius .4rem
    overflow hidden
    .iconfont
      font-size .48rem
      color #fff
    img
      width 100%
  .content
    margin-left .8rem
    margin-right 1.6rem
    height 1rem
    padding .2rem 0 0 0
    display flex
    flex-direction column
    justify-content center
    .text
      line-height .36rem
      .username 
        font-weight 600
  .article-pic
    height 1rem
    width 1rem
    position absolute
    top .4rem
    right 0.4rem
    border-radius .1rem
    box-shadow 0 0 .1rem #aaa
    overflow hidden
    img
      width 100%
  .follow 
    height .45rem
    line-height .5rem
    width 1.2rem
    text-align center
    padding 0.025rem .25rem
    position absolute
    top .65rem
    right 0.4rem
    border-radius .25rem
    // border .02rem solid $cl-yellow
    background $cl-yellow
    color #fff
.time
  margin-left .8rem
  height .6rem
  // line-height .6rem
</style>
