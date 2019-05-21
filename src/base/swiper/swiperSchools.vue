<template>
  <div class="wrapper" ref="wrapper">
    <swiper :options="swiperOption" >
      <swiper-slide v-for="(school,index) in schoolList" :key="index">
        <div class="card-wrapper" @click="selectSchool(index)">
          <div class="pic">
            <img src="http://prt246ayv.bkt.clouddn.com/%E7%A8%BF%E5%AE%9A%E8%AE%BE%E8%AE%A1%E5%AF%BC%E5%87%BA-20190521-233408.png" alt="" srcset="">
          </div>
          <div class="info">
            <!-- <div class="pic">
              <img src="https://static-data.eol.cn/upload/logo/554.jpg" alt="" srcset="">
            </div> -->
            <div class="desc">
              <h3 class="name">{{school.name}}</h3>
              <div class="tags">
                <div class="tag" v-show="school.is985">985</div>
                <div class="tag" v-show="school.is211">211</div>
                <div class="tag" v-show="school.isDualClass">????ù</div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import {diffColor} from '@/common/js/config'
export default {
  name: "SwiperSchools",
  props: {
    schoolList:{
      type: Array,
      default() {
        return []
      }
    }
  },
  data () {
      return {
        swiperOption: {
          loop: false,
          freeMode: true,
          breakpoints: {
            1024: {
              slidesPerView: 3.8,
              spaceBetween: 10
            },
            768: {
              slidesPerView: 2.8,
              spaceBetween: 10
            },
            640: {
              slidesPerView: 1.6,
              spaceBetween: 10
            },
            380: {
              slidesPerView: 1.45,
              spaceBetween: 10
            },
            320: {
              slidesPerView: 1.4,
              spaceBetween: 10
            }
          }
        },
        diffColor
      }
  },
  methods: {
    selectSchool(id){
      let url = `/schools/${id}` 
      this.$router.push(url)
    }
  },
}
</script>
<style lang="stylus" scoped>
@import "~@/common/stylus/variable.styl"
.wrapper
  width: 100%
  height :0
  overflow hidden
  padding-bottom 3.6rem
  .card-wrapper
    margin-top .35rem
    width 5rem
    height 3rem
    position relative
    border-radius .2rem
    margin-bottom .5rem
    // box-shadow 0 0rem .4rem #aaa
    overflow hidden
    &:first-child
      margin-left .3rem
    .pic
      height 3rem
      width 5rem
      position absolute
      img 
        height 100%
        width 100%
        // filter brightness(0.80)
    .info
      position absolute
      width 100%
      bottom 0
      height 1.2rem
      display flex
      align-items center
      padding 0 .2rem
      .pic
        height .8rem
        width .8rem
        border-radius 50%
        overflow hidden
        // border 0.05rem solid #fff
        // box-shadow 0 0.1rem 0.3rem #ccc
        img 
          height 100%
          width 100%
          filter brightness(1)
      .desc
        // margin-left 1rem
        .name
          color #FFF
          font-size .36rem
          font-weight 600
          height .6rem
          line-height .6rem
          overflow hidden
        .tags
          display flex
          align-items flex-end
          .tag
            height .4rem
            line-height .4rem
            padding 0 .25rem
            background rgba(0,0,0,.5)
            text-align center
            margin-right .1rem
            color $cl-yellow
            border-radius .1rem

</style>
