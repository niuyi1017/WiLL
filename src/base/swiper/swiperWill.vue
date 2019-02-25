<template>
  <div class="wrapper">
    <swiper :options="swiperOption" >
      <swiper-slide >
        <div class="card-wrapper">
          <div class="top">
            <div class="tag">烟台大学</div>
            <img class="swiper-img" src="../../common/image/1.jpg">
          </div>
          <div class="bottom">
            <div class="header"></div>
            <div class="desc">
              <div class="item">
                <i class="iconfont"></i>
                <span class="num"></span>
              </div>
              <div class="item">
                <i class="iconfont"></i>
                <span class="num"></span>
              </div>
              <div class="item">
                <i class="iconfont"></i>
                <span class="num"></span>
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
          // autoplay: 3000
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
  padding-bottom :60%
  .card-wrapper
    width 90%
    margin-left 5%
    margin-top .2rem
    overflow hidden
    border-radius .3rem
    height 0
    padding-bottom 70%
    position relative
    .top
      height 0
      width 100%
      padding-bottom :50%
      position relative
      overflow hidden
      .swiper-img
        width 100%
        margin-top: -3.0rem;
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
      height 0
      padding-bottom 15%
      background #fff 
      z-index 200
      position absolute
      bottom 20%
      border-radius 0 0 .3rem .3rem
</style>