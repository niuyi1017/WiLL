<template>
  <div class="post-moment">
    <m-header :title="title" :right="right" @headerRightClicked="headerRightClicked"></m-header>
    <div class="edit">
      <div class="questionTitle" v-show="questionPlaceholder!=''">
        <input type="text" name="questionTitle" id="questionTitle" :placeholder="questionPlaceholder" v-model="questionTitle">
      </div>
      <div class="textarea">
        <textarea name="moment" cols="30" rows="10" :placeholder="placeholder" v-model="momentContent"></textarea>
      </div>
      <div class="pic-add-line">
        <div class="imgbox">
          <input type="file" name="moment-pic" id="moment-pic" @change="handlePicInput($event)" multiple="multiple" accept="image/*">
          <span class="icon"><i class="iconfont myicon icon-image"></i></span>
          <span class="text">添加照片</span>
        </div>
      </div>
    </div>
    <div class="preview" v-show="previewPics.length">
      <!-- <div class="pic">
        <div class="img-wrapper">
          <img src="../../common/image/p3.jpg" alt="" srcset="">
        </div>
        
       <span class="icon-wrapper" @click="delPic(index)">
          <i class="iconfont icon-close-circle myicon" ></i>
        </span>
      </div> -->
      <div class="pic" v-for="(pic,index) in previewPics" :key="index">
        <div class="img-wrapper">
          <img :src="pic"  alt="" srcset="">
        </div>
        <span class="icon-wrapper" @click="delPic(index)">
          <i class="iconfont icon-close-circle myicon" ></i>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import MHeader from '@/base/header/header'
export default {
  name: "ToolBox",
  components: {
    MHeader
  },
  props:{
    type: {
      default: "moment",
      type: String
    }
  },
  data() {
    return {
        right: {
          text: "发布"
        },
        questionTitle: "",
        momentContent: "",
        sk: '',
        previewPics: [],
        picFiles:[]
    }
  },
  computed: {
    title(){
      return this.type == 'moment' ? "同学圈" : "提问"
    },
    placeholder(){
      return this.type == 'moment' ? "向世界分享你的新鲜事..." : "向世界提出你的疑惑..."
    },
    questionPlaceholder(){
      return this.type == 'moment' ? '' : "请输入问题标题"
    }
  },
  methods: {
    _getUploadSk(){

    },
    _readAsDataUrlProminse(file){
      return new Promise((resolve, reject) => {
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function(){
          resolve(this.result)
        }
        reader.onerror = function(error){
          reject(error)
        }
      })
    },
    headerRightClicked(){
      // console.log(this.momentContent.length)
    },
    handlePicInput(e){
      let readFiles = e.target.files
      let haveTiles = this.picFiles
      let pushedFiles = [...readFiles, ...haveTiles]
      this.picFiles = pushedFiles
      for(let i=0;i<readFiles.length;i++){
        this._readAsDataUrlProminse(readFiles[i])
          .then(((result) =>{
            this.previewPics.push(result)
          }))
          .catch((err) => {
            // eslint-disable-next-line
            console.log(err)
          })
      }
    },
    delPic(index) {
      this.picFiles.splice(index,1)
      this.previewPics.splice(index,1)
    }
  },
  mounted() {
    this._getUploadSk()
  },
}
</script>
<style lang="stylus" scoped>
@import "~@/common/stylus/variable.styl"
.post-moment
  height 100%
  .edit
    width: 100%
    margin-top 1.05rem
    bottom 0rem
    overflow hidden
    .questionTitle
      width 100%
      background #fff
      box-sizing border-box
      padding .2rem
      height 1rem
      margin-bottom .05rem
    .textarea
      width 100%
      background #fff
      box-sizing border-box
      padding .2rem
      height 3.2rem
      textarea
        width 100%
        height 100%
        height 3rem
        font-size .32rem
        resize none
    .pic-add-line
      height 2.2rem
      line-height 1rem
      background #fff
      font-size .32rem
      padding-left .2rem
      .imgbox
        height 1.8rem
        padding-top .2rem
        width 2rem
        background #eee
        border-radius .2rem
        display flex
        flex-direction column
        justify-content center
        align-items center
        position relative
        #moment-pic
          position absolute
          top 0
          left 0
          width 100%
          bottom 0
          opacity 0
          z-index 2
        .icon
          position absolute
          top 0.15rem
          .myicon
            font-size 1rem
            color #aaa
        .text
          position absolute
          top 1.1rem
  .preview
    min-height 2rem
    margin-top .1rem
    padding .2rem 0
    background #fff
    display flex
    flex-wrap  wrap 
    .pic
      width 30%
      margin-left 2.5%
      margin-bottom .1rem
      height 0
      padding-bottom 30%
      position relative
      .img-wrapper
        position absolute
        left 0
        right 0
        top 0
        bottom 0
        overflow hidden
        img
          width 100%
          height 100%
          border-radius .2rem
      .icon-wrapper
        display flex
        position absolute
        height .8rem
        width .8rem
        justify-content center
        align-items center
        right -0.35rem
        top -0.35rem
      .myicon
        font-size .48rem
        font-weight 800
        text-shadow 0 0 .3rem #aaa
        color $cl-orange
</style>
