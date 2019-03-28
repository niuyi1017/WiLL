<template>
  <div class="wrapper" ref="wrapper">
    <swiper :options="swiperOption" >
      <swiper-slide v-for="(major,index) in majorList" :key="index">
        <div class="card-wrapper" :style="diffColor[index]">
          <h3 class="major">{{major.name}}</h3>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import {diffColor} from '@/common/js/config'
export default {
  name: "SwiperMajors",
  props: {
    // userList:{
    //   type: Array,
    //   default() {
    //     return []
    //   }
    // }
  },
  data () {
      return {
        swiperOption: {
          loop: false,
          freeMode: true,
          breakpoints: {
            1024: {
              slidesPerView: 6.4,
              spaceBetween: 10
            },
            768: {
              slidesPerView: 2.8,
              spaceBetween: 10
            },
            640: {
              slidesPerView: 2.7,
              spaceBetween: 10
            },
            380: {
              slidesPerView: 2.4,
              spaceBetween: 10
            },
            320: {
              slidesPerView: 1.4,
              spaceBetween: 10
            }
          }
        },
        majorList:[
          {
            name: "物联网工程"
          },
          {
            name: "物联网工程"
          },
          {
            name: "物联网工程"
          },
          {
            name: "物联网工程"
          },
          {
            name: "物联网工程"
          },
          {
            name: "物联网工程"
          },
          {
            name: "物联网工程"
          },
          {
            name: "物联网工程"
          }
        ],
        diffColor
      }
  },
  methods: {
    selectUser(id){
      let url = `/userProfile/${id}` 
      this.$router.push(url)
    },
    addFriend(){
    //  console.log(index)
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
  padding-bottom 1.4rem
  .card-wrapper
    margin-top .35rem
    width 3rem
    height .8rem
    line-height .8rem
    text-align center
    position relative
    border-radius .1rem
    margin-bottom .5rem
    color #fff
    box-shadow 0 0rem .4rem #aaa
    overflow hidden
    &:first-child
      margin-left .3rem
</style>
