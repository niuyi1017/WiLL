<template>
  <div class="card-moment">
    <div class="header">
      <div class="left">
        <div class="pic">
          <img :src="momentData.author.avatar" alt="" srcset="">
        </div>
        <div class="title-time">
          <div class="title">{{momentData.author.username}}</div>
          <span class="time">{{dispalyCreatedAt}}</span>
        </div>
      </div>
      <div class="right">
        <div class="button" v-show="!momentData.isFriend">+ Follow</div>
      </div>
        
    </div>
    <div class="content-wrapper">
      <div class="text">{{momentData.content}}
      </div>
      <div class="pic-group-wrapper" v-show="displayPicList.length">
        <div class="pic-group" v-for="(pics, index) in displayPicList" :key="index">
          <div class="pic" v-for="(pic,innerIndex) in pics" :key="innerIndex">
            <img :src="pic" v-show="pic" @click="handleImgClick(index,innerIndex)">
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="left">
        <div class="item">
          <i class="iconfont icon-eye"></i>
          <span class="num">{{momentData.read_num}}</span>
        </div>
        <div class="item">
          <i class="iconfont icon-comment"></i>
          <span class="num">{{momentData.commentNum}}</span>
        </div>
      </div>
      <div class="right">
        <div class="item">
          <i class="iconfont icon-like"></i>
          <span class="num">{{momentData.like_num}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment'
import {mapActions} from 'vuex'
export default {
  name: 'Tab',
  props: {
    momentData:{
      type: Object,
      default(){
        return {}
      }
    }
  },
  computed: {
    galleryImgs(){
      return this.momentData.picUrls
    },
    displayPicList(){
        let picList = this.momentData.picUrls
        let res = []
        if(picList.length == 4){
          res = [[],[]]
          res[0][0] = picList[0]
          res[0][1] = picList[1]
          res[1][0] = picList[2]
          res[1][1] = picList[3]
        }else{
          for(let i = 0;i< picList.length;i++){
          if(i%3 == 0&&i>=3){
            res.push(["","",""])
          }
          if(i%3 == 0&&i<3){
            res.push([])
          }
          let x = Math.floor(i/3)
          let y = i%3
          res[x][y] = picList[i]? picList[i]: ''
        }
      }
        return res
      },
      dispalyCreatedAt() {
      let createdAt = this.momentData.meta.createdAt
      let display = moment(createdAt).fromNow()
      return display
    }
  },
  methods: {
    handleImgClick(index,innerIndex){
      let galleryImgs = this.galleryImgs
      let realIndex = 3*index + innerIndex
      this.openGallery({
        index: realIndex,
        galleryImgs
        })
    },
    ...mapActions([
      'openGallery'
    ])
  }
}
</script>
<style lang="stylus" scoped>
@import "~@/common/stylus/variable.styl"
.card-moment
  border-radius .2rem
  background #fff
  width 96%
  margin-left 2%
  overflow hidden
  margin-top .15rem
  margin-bottom .1rem
  .header
    height 1.2rem
    display flex
    justify-content space-between
    padding 0 .2rem
    .left
      display flex
      .pic
        height .85rem
        width .85rem
        border-radius .5rem
        background #fff
        margin-top .15rem
        overflow hidden
        margin-right .2rem
        img 
          width 100%
          height 100%
      .title-time
        height 1rem
        margin-top .1rem
        display flex
        flex-direction column
        justify-content space-evenly
        .title
          font-weight 600
        .time
          color $cl-subColor
    .right
      width 2rem
      height 1.2rem
      display flex
      justify-content flex-end
      align-items center
      .button
        padding 0 .25rem
        border-radius .25rem
        height .5rem
        line-height .5rem
        border 0.02rem solid $cl-yellow
        color $cl-yellow
  .content-wrapper
    padding .2rem .4rem
    .text
      font-size .32rem
      line-height .4rem
      max-height 1.6rem
      overflow hidden
      margin-bottom .2rem
    .pic-group
      display flex
      justify-content space-evenly
      max-height 9rem
      .pic
        width 100%
        border-radius .1rem
        overflow hidden
        margin .05rem
        img 
          width 100%
          height 100%
  .footer
    display flex
    font-size .30rem
    height .8rem
    padding 0 .4rem
    justify-content space-between
    .left
      display flex
      height .8rem
      line-height .8rem
      .item
        margin-right .4rem
        .iconfont
          font-size .34rem
    .right
      height .8rem
      line-height .8rem
      .iconfont
          font-size .34rem
</style>
