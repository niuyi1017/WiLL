<template>
  <div class="item">
    <div class="pic">
      <img :src="notification.from.avatar" alt="" srcset="" v-show="!notification.isSystemMsg">
      <i class="iconfont icon-bell" v-show="notification.isSystemMsg"></i>
    </div>
    <div class="content">
        <div class="text"><span class="username">{{notification.from.username}}</span> {{notification.message}}</div>
    </div>
    <div class="article-pic" v-if="!notification.isFollow">
      <img :src="notification.articlePic" alt="" srcset="">
    </div>
    <div class="follow-wrapper" v-else>
      <div class="follow" v-if="isFollowed"> 已关注 </div>
      <div class="follow" @click="handleFollow" v-else>+ Follow</div>
    </div>
    <div class="time">{{postTime}}</div>
  </div>
</template>
<script>
import moment from 'moment'
import {mapGetters,mapActions} from 'vuex'
import { userFollow } from '@/api/user'
import {momentMode,contentType} from '@/common/js/config'
export default {
  name: 'NotificationItem',
  props: {
    notification: {
      type: Object,
      default() {
        return {
              avatar: '',
              username: '',
              message: '',
              postTime: '',
              articlePic: ''
        }
      }
    }
  },
  computed: {
    postTime(){
      return moment(this.notification.postTime).fromNow()
    },
    isFollowed(){
      return  this.following.includes(this.notification.from._id) 
    },
    ...mapGetters(['following','uid'])
  },
  methods: {
    handleFollow(){
      let from = this.uid
      let to = this.notification.from._id
      let avatar = this.notification.from.avatar
      let username = this.notification.from.username
      let recentlyMoment = {
            momentMode:momentMode.follow,
            contentType: contentType.user,
            postTime: new Date(),
            imgUrl: avatar,
            desc:username
          }
      let notification = {
        from,
        message: "关注了你",
        postTime: new Date(),
        articlePic:null,
        isFollow: true//通知类型是否为follow
      }
      userFollow(from, to, recentlyMoment,notification).then((res) => {
          if(res.code==0&&res.data){
            let following = res.data.following //此次当前用户关注的人
            const data = {
              following,
              recentlyMoment
            }
            this.setUserFollow(data)
          }
        })
    },
    ...mapActions(['setUserFollow'])
  },
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
      height 100%
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
      height 100%
  .follow-wrapper    
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
      border .02rem solid $cl-yellow
      color $cl-yellow
.time
  margin-left .8rem
  height .6rem
</style>
