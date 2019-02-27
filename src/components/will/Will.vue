<template>
  <div class="will">
    <search-box/>
    <swiper-will/>
    <col-title title="热门 Hot" icon="icon-fire"/> 
    <list-will/>
    <swiper-users></swiper-users>
    <col-title />
    <list-will/>
    <div class="block">
   </div>
  </div>
</template>

<script>
import SearchBox from '@/components/search-box/searchBox'
import SwiperWill from '@/base/swiper/swiperWill'
import SwiperUsers from '@/base/swiper/swiperUsers'
import ListWill from '@/base/list/listWill'
import ColTitle from '@/base/col-title/colTitle'
export default {
  name: 'Will',
  components: {
    SearchBox,
    SwiperWill,
    ListWill,
    ColTitle,
    SwiperUsers
  }
}
</script>
<style lang="stylus" scoped>
@import "~@/common/stylus/variable.styl"
.will
  .block
    height 2rem
  
</style>