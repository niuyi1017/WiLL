<template>
  <div class="wrapper">
    <swiper :options="swiperOption" >
      <swiper-slide >
        <div class="card-wrapper">
          <div class="top">
            <div class="tag">烟台大学</div>
            <img class="swiper-img" src="../../common/image/3.jpg">
          </div>
          <div class="bottom">
            <div class="header">距海最近的大学 -- 烟台大学</div>
            <div class="desc">
              <div class="item">
                <span class="icon-wrapper"><i class="iconfont icon-eye"></i></span>
                <span class="num">999+</span>
              </div>
              <div class="item">
                <span class="icon-wrapper"><i class="iconfont icon-comment"></i></span>
                <span class="num">999+</span>
              </div>
              <div class="item">
               <span class="icon-wrapper"><i class="iconfont icon-heart"></i></span>
                <span class="num">999+</span>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
  export default{
    name: 'HomeSwiper',
    props:{
      swiperList: Array
    },
    data () {
      return {
        swiperOption: {
          loop: true,
          autoplay: 3000
        },
      }
    },
    computed: {
      showSwiperList () {
        return this.swiperList.length
      }
    }
  }
</script>
<style lang="stylus" scoped>
@import "~@/common/stylus/variable.styl"
.wrapper
  width: 100%
  height :0
  overflow hidden
  padding-bottom :4.65rem
  background $cl-bg2
  .card-wrapper
    width 90%
    margin-left 5%
    margin-top .2rem
    overflow hidden
    border-radius .3rem
    height 4.25rem
    position relative
    box-shadow 0 0 .3rem 0 #AAAAAA
    margin-bottom .2rem
    .top
      height 0
      width 100%
      padding-bottom 3rem
      position relative
      overflow hidden
      .swiper-img
        width 100%
        margin-top: -3.0rem;
        overflow hidden
      .tag
        position absolute
        top .2rem
        left .2rem
        height .5rem
        line-height .5rem
        padding 0 .35rem
        background $cl-yellow
        border-radius .25rem
        color #fff
    .bottom
      width 100%
      height 1.25rem
      background #fff 
      position absolute
      // bottom 0%
      border-radius 0 0 .3rem .3rem
      .header
        height .8rem
        line-height .8rem
        padding-left .4rem
        font-size .36rem 
        margin-bottom 0rem
        font-weight 700
      .desc
        display flex
        justify-content space-between
        padding 0 .4rem
        height .35rem
        line-height .35rem
        .item
          height .35rem
          line-height .35rem
          .icon-wrapper
            margin-right .1rem
            .iconfont
              color $cl-yellow
              font-size .4rem
              margin-top .1rem
          .num
            height .4rem
            line-height .4rem
            font-size .24rem
            position relative
            top -0.05rem
            
           
           


</style>