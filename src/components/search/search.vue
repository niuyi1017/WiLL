<template>
  <div class="search" >
    <div class="header">
      <h1 class="title">Search</h1>
      <div class="search-box">
        <span class="iconfont-wrapper"><i class="iconfont icon-search"></i></span>
        <input class="input" type="text" v-model="key">
        <span @click="clearKey" class="iconfont-wrapper icon-close">
          <i  v-show="key" class="iconfont icon-close-circle-fill"></i>
        </span>
      </div>
    </div>
    <div class="scroll-wrapper">
        <div class="recommend-box" v-show="!key">
          <div class="hot">
            <h3 class="recommend-title">热门搜索</h3>
            <ul class="card-wrapper">
              <li class="card" v-for="(item, index) in recommend.hot.cardList" :key="index">
                <div class="pic">
                  <img src="../../common/image/2.jpg" alt="" srcset="">
                </div>
                <div class="right">
                  <div class="topic">{{item.topic}}</div>
                  <div class="desc"><span>{{item.desc}}</span></div>
                </div>
              </li>
            </ul>
          </div>
          <div class="history">
            <div class="history-header">
              <h3 class="recommend-title">搜索历史</h3>
              <div class="clear">清除</div>
            </div>
           <ul class="item-wrapper">
             <li class="item" v-for="(item, index) in recommend.history" :key="index">
               {{item}}
               <span class="icon"><i class="iconfont icon-close-circle"></i></span>
             </li>
           </ul>
          </div>
          <div class="closeSearch">
            <div class="icon-wrapper" @click="handleSearchClose">
              <i class="iconfont icon-close-circle"></i>
            </div>
          </div>
        </div>
      <div class="result-box" v-show="key">
        <h3 class="result-title">搜索结果</h3>
        <ul class="result-list">
          <li class="result-item" v-for="(item, index) in resultList" :key="index">
            <div class="pic">
              <img src="../../common/image/1.jpg" alt="" srcset="">
            </div>
            <div class="result-content">
              <div class="result-text">{{item.text}}</div>
              <div class="result-tag">{{item.tag}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import {searchResultType,searchResultTypeStr} from '@/common/js/config'
export default {
  name: 'Search',
  data() {
    return {
      key: '',
      recommend: {
        hot:{
          cardList: [
            {
              topic: "#仙境大学",
              desc: "国内距海最近的大学"
            },
            {
              topic: "#仙境大学",
              desc: "国内距海最近的大学"
            },
            {
              topic: "#仙境大学",
              desc: "国内距海最近的大学"
            },
            {
              topic: "#仙境大学",
              desc: "距海最近的大学"
            }
          ]
        },
        history: ["烟台大学","物联网工程","济北中学","一只小小白"]
      },
      resultList: [
        {
          imgUrl: '',
          text: "烟台大学",
          tag: searchResultTypeStr[searchResultType.school]
        },
        {
          imgUrl: '',
          text: "烟台大学光电信息科学技术学院",
          tag: searchResultTypeStr[searchResultType.major]
        },
        {
          imgUrl: '',
          text: "济北中学",
          tag: searchResultTypeStr[searchResultType.user]
        },
        {
          imgUrl: '',
          text: "烟台大学光电信息科学技术学院",
          tag: searchResultTypeStr[searchResultType.moment]
        },
         {
          imgUrl: '',
          text: "烟台大学",
          tag: searchResultTypeStr[searchResultType.school]
        },
        {
          imgUrl: '',
          text: "烟台大学光电信息科学技术学院",
          tag: searchResultTypeStr[searchResultType.major]
        },
        {
          imgUrl: '',
          text: "济北中学",
          tag: searchResultTypeStr[searchResultType.user]
        },
        {
          imgUrl: '',
          text: "烟台大学光电信息科学技术学院",
          tag: searchResultTypeStr[searchResultType.moment]
        },
         {
          imgUrl: '',
          text: "烟台大学",
          tag: searchResultTypeStr[searchResultType.school]
        },
        {
          imgUrl: '',
          text: "烟台大学光电信息科学技术学院",
          tag: searchResultTypeStr[searchResultType.major]
        },
        {
          imgUrl: '',
          text: "济北中学",
          tag: searchResultTypeStr[searchResultType.user]
        },
        {
          imgUrl: '',
          text: "烟台大学光电信息科学技术学院",
          tag: searchResultTypeStr[searchResultType.moment]
        },
         {
          imgUrl: '',
          text: "烟台大学",
          tag: searchResultTypeStr[searchResultType.school]
        }
      ]
    }
  },
  methods: {
    clearKey() {
      this.key = ''
    },
    handleSearchClose(){
      this.$router.push('/')
    }
  },
}
</script>
<style lang="stylus" scoped>
@import "~@/common/stylus/variable.styl"
@import "~@/common/stylus/mixins.styl"
.search
  background #fff
  position absolute
  top 0
  right 0
  left 0 
  bottom 0
  .header
    position fixed
    top 0
    left 0
    right 0
    z-index 2
    background #ffffff
    .title
      height 1.5rem
      line-height 1.5rem
      color $cl-yellow
      padding-left .5rem
      font-size .78rem
    .search-box
      width 90%
      background #ffffff
      margin-left 5%
      height .8rem
      line-height .8rem
      display flex
      align-items center
      border-radius .2rem
      box-shadow 0 0.2rem 1rem #eee
      margin-bottom .6rem
      .iconfont-wrapper
        height .8rem
        line-height .8rem
        width .8rem
        margin 0 .2rem
        text-align center
        display flex
        justify-content center
        .iconfont
          color $cl-subColor
          font-size .36rem
      .input
        height .7rem
        line-height .7rem
        width 100%
        border none
        outline none
        color $cl-subColor
  .scroll-wrapper
    position relative
    margin-top 2.85rem
    bottom 0
    width 100%
    background #fff
    overflow hidden
    .recommend-box
      background #fff
      .hot
        .recommend-title
          height 1rem
          line-height 1rem
          padding-left .4rem
          font-size .36rem
          font-weight 600
        .card-wrapper
          display flex
          justify-content space-evenly
          flex-wrap wrap
          .card
            width 45%
            display flex
            height 1.5rem
            align-items center
            justify-content flex-start
            .pic
              height 1rem
              width 1rem
              flex none
              overflow hidden
              box-shadow 0 0 .1rem #aaa
              border-radius .1rem
              margin-right .15rem
              img
                width 100%
            .right
              display flex
              flex-direction column
              height 1rem
              justify-content space-evenly
              .topic
                font-size .32rem
                font-weight 600
              .desc
                color $cl-yellow
                overflow hidden
                // ellipsis()
      .history
        width 100%
        .history-header
          display flex
          justify-content space-between
          padding-right .2rem
          align-items center
          .recommend-title
            height 1rem
            line-height 1rem
            padding-left .4rem
            font-size .36rem
            font-weight 600
            width 50%
          .clear
            height .45rem
            line-height .45rem
            border 0.02rem solid $cl-orange
            padding 0 .25rem
            border-radius .225rem
            color $cl-orange
            font-size .24rem
        .item-wrapper
          display flex
          flex-wrap wrap
          padding 0 .4rem
          justify-content flex-start
          .item
            height .6rem
            line-height .6rem
            padding 0 .2rem 0 .25rem
            border-radius .3rem
            background $cl-bg
            margin-right .2rem
            margin-bottom .2rem
            color $cl-subColor
            .icon
              float right
              margin-left .1rem
              height .6rem
              line-height .6rem
      .closeSearch
        position fixed
        bottom 0
        left 0
        right 0 
        height 2rem
        background #fff
        display flex
        justify-content center
        align-items center
        .icon-wrapper
          height 1.2rem
          width 1.2rem
          background $cl-yellow
          border-radius 50%
          box-shadow 0 0 .5rem $cl-yellow
          display flex
          justify-content center
          align-items center
          .iconfont
            color #fff
            font-size .78rem
    .result-box
      background #fff
      margin-bottom 1.4rem
      .result-title
        height 1rem
        line-height 1rem
        padding-left .4rem
        font-size .36rem
        font-weight 600
      .result-list
        .result-item
          height 1.3rem
          margin .1rem
          display flex
          align-items center
          padding 0 .2rem
          overflow hidden
          justify-content flex-start
          .pic
            height 1rem
            width 1rem
            overflow hidden
            margin-right .2rem
            border-radius .15rem
            img 
              width 100%
          .result-content
            height 1.2rem
            flex auto
            display flex
            flex-direction column
            justify-content space-evenly
          .result-text
            color $cl-subColor
          .result-tag
            color $cl-yellow

</style>
