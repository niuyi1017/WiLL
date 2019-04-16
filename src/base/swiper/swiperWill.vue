<template>
  <div class="wrapper">
    <swiper :options="swiperOption" >
      <swiper-slide v-for="(item, index) in swiperList" :key="index" >
        <div class="card-wrapper">
          <div class="top">
            <div class="tag">{{item.tag}}</div>
            <div class="pic">
              <img :src="item.imgUrl">
            </div>
            <div class="header">{{item.title}}</div>
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
          slidesPerView: 1.1,
          autoplay: 4500
        },
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
  padding-bottom :3.8rem
  background $cl-bg2
  .card-wrapper
    width 94%
    margin-left 5%
    margin-top .2rem
    overflow hidden
    border-radius .3rem
    height 3.6rem
    box-shadow 0 0rem .1rem 0 #AAAAAA
    margin-bottom .2rem
    .top
      height 0
      width 100%
      padding-bottom 3.6rem
      position relative
      overflow hidden
      .pic
        height 3.6rem
        width 100%
        overflow hidden
        img
          width 100%
          margin-top: -2.0rem;
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
      .header
        position absolute
        bottom 0rem
        width 100%
        height 1rem
        line-height 1rem
        padding-left .2rem
        font-size .43rem
        color #fff
        font-weight 1000
        background: linear-gradient(transparent,#ffc253fa)
</style>