<template>
  <div class="list-will">
    <div class="card-wrapper" v-for="item in articleList" :key="item.id" >
     <div class="left">
       <img class="left-pic" src='../../common/image/2.jpg' >
     </div>
     <div class="right">
       <div class="right-wrapper">
          <div class="header">
            <div class="title">{{item.title}}</div>
            <p class="sub-title">{{item.subTitle}}</p>
          </div>
          <div class="desc">
            <div class="author">{{item.author}}</div>
            <div class="icon-group">
              <div class="item">
                <i class="iconfont icon-eye"></i>
                <span class="num">{{item.like}}</span>
              </div>
              <div class="item">
                <i class="iconfont icon-eye"></i>
                <span class="num">{{item.comment}}</span>
              </div>
            </div>
          </div>
       </div>
     </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ListWill',
  data() {
    return {
      articleList: [
        {
          id: '001',
          imgUrl: '',
          title: '在距海最近的大学读书是怎样的体验',
          subTitle: '烟台大学，国内距海最近的大学国内距海最近的大',
          author: '一只小小白',
          like: 123,
          comment: 1233
        },
        {
          id: '002',
          imgUrl: '',
          title: '在距海最近的大学读书是怎样的体验',
          subTitle: '烟台大学，国内距海最近的大学国内距海最近的大',
          author: '一只小小白',
          like: 123,
          comment: 1233
        },
        {
          id: '003',
          imgUrl: '',
          title: '在距海最近的大学读书是怎样的体验',
          subTitle: '烟台大学，国内距海最近的大学国内距海最近的大',
          author: '一只小小白',
          like: 123,
          comment: 1233
        },
        {
          id: '004',
          imgUrl: '',
          title: '在距海最近的大学读书是怎样的体验距海最近的大',
          subTitle: '烟台大学，国内距海最近的大学国内距海最近的大',
          author: '一只小小白',
          like: 123,
          comment: 1233
        }
      ]
    }
  },
}
</script>
<style lang="stylus" scoped>
@import "~@/common/stylus/variable.styl"
@import '~@/common/stylus/mixins.styl'
.list-will
  display flex
  flex-direction column
  align-items center
  padding-top .3rem
  .card-wrapper
    height 2.5rem
    width 90%
    position relative
    margin-bottom .2rem
    .left
      height 2.2rem
      width 2.2rem
      overflow hidden
      border-radius .3rem
      box-shadow 0 0 0.2rem #ccc
      position absolute
      z-index 2
      left 0rem
      .left-pic
        width 100%
    .right
      height 2.2rem
      background #fff
      position absolute
      left 1rem
      right 0
      bottom 0
      border-radius .1rem
      box-shadow 0 0 0.2rem #ccc
      background #fff
      padding-right .2rem 
      padding-left 1.4rem
      .header
        margin-top .25rem
        .title
          margin-top .15rem
          height .8rem
          line-height .35rem
          font-size .32rem
          font-weight 600
        .sub-title
          height .3rem
          color $cl-subColor
          ellipsis()
      .desc
        margin-top .15rem  
        display flex
        justify-content space-between
        .author
          color $cl-disabled
          font-size .24rem
        .icon-group
          display flex
          .item
            margin-left 0.15rem
            color $cl-disabled
            font-size .24rem
            position relative
            .iconfont
              margin-right .1rem
            .num
              display inline-block
              position relative
              top -0.01rem
</style>
