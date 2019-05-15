<template>
  <div class="moment-datail-wrapper">
    <m-header title="同学圈详情"/>
    <div class="card-moment-wrapper">
      <card-moment :momentData="momentData"/>
    </div>
    <comment @postComment="handlePostComment" :comments="momentData.comments"/>
  </div>
</template>
<script>
import MHeader from '@/base/header/header'
import Comment from '@/base/comment/comment'
import CardMoment from '@/base/card/card-moment'
import { getMomentDetail } from '@/api/playground'
import { postComment } from '@/api/comment'
import {momentMode,contentType} from '@/common/js/config'
import { mapGetters } from 'vuex';
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
    ...mapGetters(['uid'])
  },
  methods: {
    _getMomentDetail(){
       getMomentDetail(this.moment_id).then((res) => {
          if(res.code==0&&res.data){
            this.momentData = res.data
            
          }
        })
    },
    handlePostComment(commentContent){
      // let to = this.momentData.author._id
      let imgUrl = this.momentData.picUrls[0]?this.momentData.picUrls[0]:''
      let desc = this.momentData.content
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
      console.log(comment)  
      postComment(comment,recentlyMoment,notification).then((res) => {
          if(res.code==0&&res.data){
            console.log(res.data)
            
          }
        })
    }
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