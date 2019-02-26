<template>
  <div class="will">
   <search-box/>
   <swiper-will/>
   <div class="foryou ">
     <div class="title">为你推荐 For You</div>
     <i class="iconfont icon-shujuwajue"></i>
   </div>
   <div class="divider"></div>
   <list-will/>
  </div>
</template>

<script>
import SearchBox from '@/components/search-box/searchBox'
import SwiperWill from '@/base/swiper/swiperWill'
import ListWill from '@/base/list/listWill'
export default {
  name: 'Will',
  components: {
    SearchBox,
    SwiperWill,
    ListWill
  }
}
</script>
<style lang="stylus" scoped>
@import "~@/common/stylus/variable.styl"
.will
  .foryou
    height .65rem
    line-height .65rem
    margin-top .15rem
    padding 0 .4rem
    display flex
    justify-content space-between
    font-size .32rem
    font-weight 700
  .divider
    width 90%
    margin-left 5%
    height 0.02rem
    background $cl-divider
</style>