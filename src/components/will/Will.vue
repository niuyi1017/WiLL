<template>
  <div class="will">
   <search-box/>
   <swiper-will/>
  </div>
</template>

<script>
import SearchBox from '@/components/search-box/searchBox'
import SwiperWill from '@/base/swiper/swiperWill'
export default {
  name: 'Will',
  components: {
    SearchBox,
    SwiperWill
  }
}
</script>