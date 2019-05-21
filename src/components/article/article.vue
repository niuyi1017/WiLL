<template>
  <div class="article-wrapper" ref="wrapper">
    <m-header :title="title"/>
    <div class="author-card" v-if="article.author">
      <div class="left">
        <div class="pic" @click="handleUserClick">
          <img :src="article.author.avatar" alt="" srcset="">
        </div>
        <div class="author" >
          <div class="username">{{article.author.username}}</div>
          <div class="time">{{article.meta.createdAt}} </div>
        </div>
      </div>
      <div class="right">
        <div class="follow" @click="handleFollow" v-show="!this.isFollowing">+ Follow</div>
        <div class="follow" v-show="this.isFollowing">已关注</div>
      </div>
    </div>
    <div class="headline">
      <h1 class="article-title">{{article.title}}</h1>
      <div class="meta" v-if="article.meta">
        <div class="time">{{article.meta.createdAt}} </div>
        <div class="name">{{article.author.username}}</div>
      </div>
    </div>
    <div id="content-wrapper">
      <div class="content" v-html="article.content"></div>
    </div>
    <div class="comment-bar">
      <div class="left">
        <div class="item read">
          <span class="icon"><i class="iconfont icon-eye"></i></span>
          <div class="num">{{article.read_num}}</div>
        </div>
        <div class="item comment" v-if="article.comments">
          <span class="icon"><i class="iconfont icon-comment"></i></span>
          <div class="num">{{article.comments.length}}</div>
        </div>
      </div>
      <div class="item right" @click="handleLike">
        <span class="icon">
          <i class="iconfont icon-like" v-if="!this.isLike"></i>
          <i class="iconfont icon-like-fill like" v-else></i>
        </span>
        <div class="num">{{article.like_num}}</div>
      </div>
    </div>
    <comment 
            @postComment="handlePostComment" 
            @postReply="handlePostReply"
            :comments="comments"/>
  </div>
</template>
<script>
import MHeader from '@/base/header/header'
import Comment from '@/base/comment/comment'
import {getArticle} from '@/api/article'
import { userFollow } from '@/api/user'
import { postComment, postReply } from '@/api/comment'
import {mapActions,mapGetters,mapMutations} from 'vuex'
import { articleLike, articleCancelLike } from '@/api/article'
import {momentMode,contentType} from '@/common/js/config'
import moment from 'moment'
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
      article(){
        return {
          author: {
            username: "...",
            avatar: "..."
          },
          title: "loading...",
          meta:{
            createdAt: 'loading',
            updateddAt: "loading"
          },
          comments: [],
        }
      }
    }
  },
  props: {
    article_id:{
      type: String
    }
  },
  computed: {
    comments(){
      return this.article.comments
    },
    isFollowing(){
      let result = false
      if(this.uid&&this.article.author){
        if(this.uid == this.article.author._id)
          result = true
        else
          result =  this.following.includes(this.article.author._id)
      }
      return result
    },
    isLike(){
      let result = false
      if(this.uid){
        result =  this.like.article.includes(this.article._id)
      }
      return result
    },
    ...mapGetters(['following','uid','like','avatar','username'])
  },
  methods: {
    _getArticle(){
      getArticle(this.article_id).then((res) => {
        if(res.code==0&&res.data){
          let postTime = moment(res.data.meta.createdAt).fromNow()
          this.article = res.data
          this.article.meta.createdAt = postTime
        }
      })
    },
    handleLike(){
      let from = this.uid
      let to = this.article.author._id
      let imgUrl = this.article.cover
      let desc = this.article.title
      let article_id = this.article._id
      let recentlyMoment = {
            momentMode:momentMode.like,
            contentType: contentType.article,
            postTime: new Date(),
            imgUrl,
            desc
          }
      let notification = {
        from,
        message: "赞了你的文章",
        postTime: new Date(),
        articlePic:imgUrl
      }
      if(this.isLike){
        articleCancelLike(article_id, from, to, recentlyMoment).then(res=>{
          if(res.code==0&&res.data){
            this.article.like_num = res.data.like_num-1
            this.pullRecentlyMoment(recentlyMoment)
             let change = {
              type: 'article',
              moment_id: article_id
            }
            this.pullLike(change)
          }
        })
      }else{
        articleLike(article_id, from, to, recentlyMoment,notification).then((res) => {
          if(res.code==0&&res.data){
            this.article.like_num = res.data.like_num+1
            this.pushRecentlyMoment(recentlyMoment)
            let change = {
              type: 'article',
              moment_id: article_id
            }
            this.pushLike(change)
          }
        })
      }
    },
    handleFollow(){
      let from = this.uid
      let to = this.article.author._id
      let avatar = this.article.author.avatar
      let authorname = this.article.author.username
      let recentlyMoment = {
            momentMode:momentMode.follow,
            contentType: contentType.user,
            postTime: new Date(),
            imgUrl: avatar,
            desc:authorname
          }
      let notification = {
        from,
        message: "关注了你",
        postTime: new Date(),
        articlePic:null,
        isFollow: true
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
    handleUserClick(){
      let authorId = this.article.author._id
      let uid = this.uid
      if(uid){
        if(authorId == uid)
          this.$router.push(`/user`)
        else{
          this.$router.push(`/userProfile/${authorId}`)
        }
      }
    },
    handlePostComment(isreply,commentContent){
      if(!isreply){
        let imgUrl = this.article.cover
        let desc = this.article.title
        let article_id = this.article._id
        let comment = {
          author: this.uid,
          content: commentContent,
          replyType: 1,
          moment_id: article_id
        }
        let recentlyMoment = {
              momentMode:momentMode.comment,
              contentType: contentType.article,
              postTime: new Date(),
              imgUrl,
              desc
            }
        let notification = {
          from: this.uid,
          message: "评论了你的文章",
          postTime: new Date(),
          articlePic: imgUrl,
          isFollow: false
        }
        postComment(comment,recentlyMoment,notification).then((res) => {
            if(res.code==0&&res.data){
              this.article.comments = res.data.comments
              this.pushRecentlyMoment(recentlyMoment)
            }
          })
      }else{
        this.handlePostReply(commentContent)
      }
    },
    handlePostReply({to,content,comment_id}){
      let imgUrl = this.article.cover
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
            let comments = this.comments
            for(let i = 0;i<comments.length;i++){
              if(comments[i]._id == comment_id){
                comments[i].replys = res.data.replys
              }
            }
            this.pushRecentlyMoment(recentlyMoment)
          }
        })
    },
    ...mapActions([
      'setUserFollow',
      'pushRecentlyMoment',
      'pushLike',
      'pullRecentlyMoment',
      'pullLike',
    ]),
    ...mapMutations({
      pushRecentlyMoments:'PUSH_RECENTLY_MOMENTS'
    })
  },
  mounted() {
    this._getArticle()
  },
  activated() {
    this._getArticle()
  },
}
</script>
<style lang="stylus" scoped>
@import "~@/common/stylus/variable.styl"
.article-wrapper >>>p
  font-size .32rem !important
  line-height .4rem
  margin .2rem 0
.article-wrapper >>>p img 
  width 100%
  border-radius .1rem
  box-shadow 0 0 .2rem #aaa
  margin .15rem 0
.article-wrapper >>> blockquote {
  display: block;
  border-left: 8px solid #d0e5f2;
  padding: 5px 10px;
  margin: 10px 0;
  line-height: 1.4;
  font-size: 100%;
  background-color: #f1f1f1;
}

.article-wrapper >>> code {
  display: inline-block;
  *display: inline;
  *zoom: 1;
  background-color: #f1f1f1;
  border-radius: 3px;
  padding: 3px 5px;
  margin: 0 3px;
}
.article-wrapper >>> pre code {
  display: block;
}
.article-wrapper >>> ul, ol {
  margin: 10px 0 10px 20px;
}
.article-wrapper >>> h1 {
 font-size .56rem
 line-height .8rem
 font-weight 600
}
.article-wrapper >>> h2 {
 font-size .48rem
 line-height .6rem
 font-weight 600
}
.article-wrapper >>> h3 {
 font-size .42rem
 line-height .6rem
 font-weight 600
}
.article-wrapper >>> h4 {
 font-size .40rem
 line-height .6rem
 font-weight 600
}
.article-wrapper >>> h5 {
 font-size .36rem
 line-height .5rem
 font-weight 600
}
.article-wrapper >>> h6 {
 font-size .34rem
 line-height .5rem
 font-weight 600
}
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
    .right
      .like 
        color $cl-yellow
#content-wrapper
  .content
    background #fff
    margin-bottom 0.1rem
    padding .1rem 0.15rem
    div
      margin .2rem 0
</style>