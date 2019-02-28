<template>
  <div class="will">
    <search-box/>
    <scroll :data="list" class="will-content">
      <swiper-will/>
      <col-title title="热门 Hot" icon="icon-fire"/> 
      <list-will/>
      <swiper-users></swiper-users>
      <col-title />
      <list-will/>
      <div class="block"></div>
    </scroll>
  </div>
</template>

<script>
import SearchBox from '@/components/search-box/searchBox'
import SwiperWill from '@/base/swiper/swiperWill'
import SwiperUsers from '@/base/swiper/swiperUsers'
import ListWill from '@/base/list/listWill'
import ColTitle from '@/base/col-title/colTitle'
import Scroll from '@/base/scroll/scroll'
export default {
  name: 'Will',
  components: {
    SearchBox,
    SwiperWill,
    ListWill,
    ColTitle,
    SwiperUsers,
    Scroll
  },
  data() {
    return {
      list: [1,2,3]
    }
  },

}
</script>
<style lang="stylus" scoped>
@import "~@/common/stylus/variable.styl"
.will
  .will-content
    height 100%
    overflow hidden
    .block
      height 2rem
  
</style>