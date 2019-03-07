<template>
  <div class="will">
    <search-box/>
    <div class="scroll-wrapper">
      <scroll :data="list" class="will-content">
        <div>
          <swiper-will/>
          <col-title title="热门 Hot" icon="icon-fire"/> 
          <list-will/>
          <swiper-users></swiper-users>
          <col-title />
          <list-will/>
        </div>
      </scroll>
    </div>
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
  .scroll-wrapper
    position fixed
    top 1.2rem
    width 100%
    bottom 1.2rem
    overflow hidden
    background $cl-bg2
    .will-content
      height 100%
</style>