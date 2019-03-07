<template>
  <div class="userProfile">
    <s-header :title="title" 
              :hasMore="hasMore"
              :showBack="showBack"
              :showLeft="showLeft"
              :showRight="showRight"
              :showAbs="showAbs"/>
    <div class="pic-wrapper">
    </div>
    <div class="content">
      <div class="pic">
        <img src="../../common/image/t2.jpg" alt="" srcset="">
      </div>
      <div class="user-info">
        <div class="username">{{user.username}}</div>
        <div class="school">{{user.desc}}</div>
      </div>
      
      <div class="pad">
        <div class="totalNum">
          <div class="item">
            <div class="num">{{user.sum.following}}</div>
            <div class="name">关注</div>
          </div>
          <div class="item">
            <div class="num">{{user.sum.followers}}</div>
            <div class="name">粉丝</div>
          </div>
          <div class="item">
            <div class="num">{{user.sum.favorites}}</div>
            <div class="name">收藏</div>
          </div>
          <div class="item">
            <div class="num">{{user.sum.posts}}</div>
            <div class="name">发布</div>
          </div>
        </div>
        <div class="introduce">
          <h3 class="title">个人简介</h3>
          <p class="desc">{{user.intro}}</p>
        </div>
        <div class="tag">
          <h3 class="title">斜杠青年</h3>
          <div class="container">
            <div class="item" v-for="(item, index) in user.tags" :key="index">{{item}}</div>
          </div>
        </div>
        <div class="moment">
          <div class="title">最近动态</div>
          <div class="moment-list">
            <card-user-page v-for="(item, index) in user.recentlyMoments" 
                            :key="index" 
                            :content="item"
                            :isSelf="user.isSelf"/>
            <div class="allMoment">
              查看全部动态
            </div>

          </div>
        </div>
      </div>
    </div>
    <div class="footer" v-if="!user.isSelf">
      <div class="button" v-if="!user.isFriend">加关注</div>
      <div class="button" v-else>传小纸条</div>
    </div>
  </div>
</template>
<script>
import SHeader from '@/base/header/Sheader'
import CardUserPage from '@/base/card/card-userpage'
export default {
  name: 'UserProfile',
  components: {
    SHeader,
    CardUserPage
  },
  props: {
    user: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    title() {
      return this.user.username 
    },
    hasMore() {
      return this.user.isSelf ? "设置" : ""
    },
    showBack() {
      return !this.user.isSelf 
    },
    showLeft(){
      return !this.user.isSelf 
    },
    showRight(){
      return this.user.isSelf 
    },
    showAbs() {
      return !this.user.isSelf 
    }
  },
}
</script>
<style lang="stylus" scoped>
@import "~@/common/stylus/variable.styl"
.userProfile
  position relative
  .pic-wrapper
    height 5.5rem
    width 100%
    background url('../../common/image/b2.jpg') 
    filter: blur(.015rem); 
    position fixed
    background-size:100% 100%;
  .content
    height 5.5rem
    left 0
    right 0
    position absolute
    background-color rgba(0,0,0,.15)
    top 0
    .pic
      height 1.5rem
      width 1.5rem
      border-radius 50%
      overflow hidden
      position absolute
      bottom 2.5rem
      left 50%
      box-shadow $shadow
      margin-left -0.75rem
      img 
        width 100%
    .user-info
      width 100%
      position absolute
      bottom 1.5rem
      text-align center
      line-height .4rem
      color #fff
      font-weight 600
  .pad
    position absolute
    top 5.5rem
    // height 30rem
    width 100%
    background $cl-bg2
    margin-bottom 2rem
    .totalNum
      height 1.5rem
      width 90%
      background #fff
      position absolute
      transform translateY(-50%)
      margin-left 5%
      box-shadow 0 0.2rem .8rem #ddd
      border-radius .2rem
      display flex
      justify-content space-evenly
      align-items center
      .item
        text-align center
        .num
          font-size .48rem
          color $cl-blue
        .name
          color $cl-subColor
          margin-top .2rem
    .introduce
      height 1.5rem
      margin-top 1.1rem
      .title
        height .6rem
        line-height .6rem
        padding-left .2rem
        font-size .34rem
        font-weight 600
      .desc
        height 1.2rem
        padding 0 .4rem 
        display flex
        flex-direction column
        justify-content center
        color $cl-subColor
        line-height .4rem
        display: -webkit-box;
        overflow: hidden;
        -webkit-line-clamp:3;
        -webkit-box-orient: vertical;
    .tag
      margin-top .4rem
      max-height 3rem
      overflow hidden
      .title
        height .6rem
        line-height .6rem
        padding-left .2rem
        font-size .34rem
        font-weight 600
      .container
        max-height 1.9rem
        padding 0 .4rem
        display flex
        justify-content flex-start
        flex-wrap wrap
        margin-top .1rem
        .item
          height .45rem
          line-height .45rem
          padding 0 .35rem
          border-radius .225rem
          background #fff
          margin-right .25rem
          margin-bottom .2rem
          border .02rem solid $cl-yellow
          color $cl-subColor
    .moment
      margin-top .2rem
      .title
        height .6rem
        line-height .6rem
        padding-left .2rem
        font-size .34rem
        font-weight 600
      .moment-list
        .allMoment
          text-align center
          height .6rem
          line-height .6rem
          margin-top  .5rem
          box-shadow 0 0.1rem .8rem #ccc
          width 50%
          margin-left 25%
          background $cl-blue
          color #fff
          border-radius .25rem
  .footer
    position fixed
    bottom 0
    z-index 100
    height 1.2rem
    background rgba(255, 255, 255, 0.85)
    width 100%
    display flex
    justify-content center
    align-items center
    .button
      height .8rem
      line-height .8rem
      background $cl-yellow
      width 75%
      text-align center
      border-radius .2rem
      color #fff
  
</style>
