<template>
  <div class="moment-datail-wrapper">
    <m-header title="同学圈详情"/>
    <div class="card-moment-wrapper">
      <card-moment :momentData="momentData"/>
    </div>
    <comment 
            @postComment="handlePostComment" 
            :comments="momentData.comments"
            @postReply="handlePostReply"
            />
  </div>
</template>
<script>
import MHeader from '@/base/header/header'
import Comment from '@/base/comment/comment'
import CardMoment from '@/base/card/card-moment'
import { getMomentDetail } from '@/api/playground'
import { postComment, postReply } from '@/api/comment'
import {momentMode,contentType} from '@/common/js/config'
import { mapGetters, mapMutations} from 'vuex';
export default {
  name: 'momentDetail',
  components: {
    MHeader,
    CardMoment,
    Comment
  },
  props: {
    moment_id: {
      type: String
    }
  },
  data() {
    return {
      momentData:{
        type:Object,
        default(){
          return {}
        }
      },
      
    }
  },
  computed: {
    ...mapGetters(['uid','avatar','username'])
  },
  methods: {
    _getMomentDetail(){
       getMomentDetail(this.moment_id).then((res) => {
          if(res.code==0&&res.data){
            this.momentData = res.data
          }
        })
    },
    handlePostComment(isreply,commentContent){
      if(!isreply){
        let imgUrl = this.momentData.picUrls[0]?this.momentData.picUrls[0]:''
        let desc = commentContent
        let moment_id = this.momentData._id
        let comment = {
          author: this.uid,
          content: commentContent,
          replyType: 0,
          moment_id
        }
        let recentlyMoment = {
              momentMode:momentMode.comment,
              contentType: contentType.moment,
              postTime: new Date(),
              imgUrl,
              desc
            }
        let notification = {
          from: this.uid,
          message: "评论了你的同学圈",
          postTime: new Date(),
          articlePic: imgUrl,
          isFollow: false
        }
        postComment(comment,recentlyMoment,notification).then((res) => {
            if(res.code==0&&res.data){
              this.momentData.comments = res.data.comments
              this.pushRecentlyMoments(recentlyMoment)
            }
          })
      }else{
        this.handlePostReply(commentContent)
      }
    },
    handlePostReply({to,content,comment_id}){
      let imgUrl = this.momentData.picUrls[0]?this.momentData.picUrls[0]:''
      let desc = content
      let reply = {
        to:to,
        from:{
          uid: this.uid,
          avatar: this.avatar,
          username:this.username
        },
        content,
        comment_id,
      }
      let recentlyMoment = {
            momentMode:momentMode.reply,
            contentType: contentType.comment,
            postTime: new Date(),
            imgUrl,
            desc
          }
      let notification = {
        from: this.uid,
        message: "回复了你的评论",
        postTime: new Date(),
        articlePic: imgUrl,
        isFollow: false
      }
      postReply(reply,recentlyMoment,notification).then((res) => {
          if(res.code==0&&res.data){
            let comment_id = res.data.comment_id
            let comments = this.momentData.comments
            for(let i = 0;i<comments.length;i++){
              if(comments[i]._id == comment_id){
                comments[i].replys = res.data.replys
              }
            }
            this.pushRecentlyMoments(recentlyMoment)
          }
        })
    },
    ...mapMutations({
      pushRecentlyMoments:'PUSH_RECENTLY_MOMENTS'
    })
  },
  activated() {
    this._getMomentDetail()
  }
}
</script>
<style lang="stylus" scoped>
@import "~@/common/stylus/variable.styl"
.moment-datail-wrapper
  .card-moment-wrapper
    margin-top 1.15rem
</style>