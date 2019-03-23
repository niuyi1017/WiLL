<template>
  <div class="shool-wrapper">
    <s-header :title="title" 
              :showAbs="showAbs"/>
    <div class="pic-wrapper">
      <img src="../../common/image/b2.jpg" >
    </div>
    <div class="content">
      <div class="desc-wrapper">
        <div class="desc">
          <div class="top">
            <div class="left">
              <div class="pic">
                <img src="https://static-data.eol.cn/upload/logo/554.jpg" alt="" srcset="">
              </div>
            </div>
            <div class="right">
              <div class="title">烟台大学</div>
              <!-- <div class="intro">山东 综合类 公办 普通本科</div> -->
              <div class="tags">
                <div class="item">985</div>
                <div class="item">211</div>
                <div class="item">双一流</div>
              </div> 
            </div>
          </div>
          <div class="bottom">
            <div class="item">
              <div class="num">129</div>
              <div class="text">校友</div>
            </div>
            <div class="item">
              <div class="num">108</div>
              <div class="text">文章</div>
            </div>
            <div class="item">
              <div class="num">245</div>
              <div class="text">问答</div>
            </div>
            <div class="item">
              <div class="num">999+</div>
              <div class="text">动态</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="abx"></div>
  </div>
</template>
<script>
import SHeader from '@/base/header/Sheader'
// import {getSchoolList} from '@/api/toolbox'
// import axios from 'axios'
export default {
  name: 'School',
  data() {
    return {
      showAbs: true,
      title: '烟台大学'
    }
  },
  components: {
    SHeader
  },
  methods: {
    _getSchoolList(){
      // const options = {
      //   param: 'jsonpCallback'
      // }
      // getSchoolList('https://gkcx.eol.cn/api', {
      //   uri: "gksjk/api/school/hotlists", 
      //   page: 1, 
      //   request_type:1,
      //   size: 20,
      //   sort: "view_total",
      // },options).then((result) => {
      //   console.log(result.data)
      // })
      // axios.get('https://gkcx.eol.cn/api',{
      //   params: {
      //     uri: "gksjk/api/school/hotlists", 
      //     page: 1, 
      //     request_type:1,
      //     size: 20,
      //     sort: "view_total"
      //   }
      // }).then(res => {
      //   console.log(res.data)
      // })
      
    }
  },
  mounted() {
   this._getSchoolList()
  },
}
</script>
<style lang="stylus" scoped>
@import "~@/common/stylus/variable.styl"
.shool-wrapper
  height 25rem
  .pic-wrapper
    height 6.5rem
    width 100%
    position fixed
    background-size:100% 100%;
    img 
      height 100%
      width 100%
  .content
    height 6.5rem
    left 0
    right 0
    position absolute
    top 0
    .desc-wrapper
      position absolute
      top 5.2rem
      width 100%
      margin-bottom 2rem
      z-index 2
      height 2rem
      .desc
        height 3rem
        width 96%
        background rgba(255,255,255, 1)
        position absolute
        margin-left 2%
        box-shadow 0 0.2rem .8rem #ddd
        justify-content space-evenly
        align-items center
        border-radius .2rem
        overflow hidden
        .top
          height 1.6rem
          width 100%
          display flex
          .left
            height 1.6rem
            width 1.6rem
            margin-left .4rem
            margin-top .2rem
            margin-right .2rem
            .pic
              height 1.6rem
              width 1.6rem
              box-shadow 0 .15rem .35rem #ccc
              border-radius 50%
              overflow hidden
              img
                height 100%
                width 100%
          .right
            flex auto
            display flex
            flex-direction column
            justify-content center
            margin-top .2rem
            .title
              font-weight 600
              font-size .44rem
              height .8rem
              line-height .8rem
              padding-top .1rem
            .tags
              display flex
              flex-wrap wrap
              .item
                background $cl-yellow
                padding 0.05rem .3rem
                margin-right .1rem
                margin-bottom .1rem
                color #fff
                border-radius .2rem
        .bottom
          display flex
          height 1.4rem
          justify-content space-around
          align-items center
          margin-top 0.1rem
          .item
            display flex
            flex-direction column
            text-align center
            .num
              font-size .38rem
              color $cl-blue
  .abx
    position absolute
    top 6.5rem
    height 5rem
    width 100%
    background #fff
</style>
