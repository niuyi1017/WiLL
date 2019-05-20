<template>
  <div class="will">
    <search-box/>
    <swiper-will :swiperList="will.swiperlist"/>
    <swiper-majors :majorList="will.hotMajorList"></swiper-majors>
    <col-title title="热门 Hot" icon="icon-fire"/> 
    <list-will :articleList="will.hotArticles"/>
    <swiper-users :userList="will.recommendUserList"></swiper-users>
    <col-title title="热门大学" icon="icon-fire"/>
    <swiper-schools :schoolList="will.hotSchoolList"></swiper-schools>
    <col-title />
    <list-will :articleList="will.recommendArticleList"/>
    <TabBar />
  </div>
</template>
<script>
import TabBar from '@/components/tabBar/tabBar'
import SearchBox from '@/components/search-box/searchBox'
import SwiperWill from '@/base/swiper/swiperWill'
import SwiperUsers from '@/base/swiper/swiperUsers'
import SwiperSchools from '@/base/swiper/swiperSchools'
import SwiperMajors from '@/base/swiper/swiperMajors'
import ListWill from '@/base/list/listWill'
import ColTitle from '@/base/col-title/colTitle'
import { getWill } from '@/api/will'
export default {
  name: 'Will',
  components: {
    SearchBox,
    SwiperWill,
    ListWill,
    ColTitle,
    SwiperUsers,
    SwiperSchools,
    SwiperMajors,
    TabBar
  },
  data() {
    return {
      will:{}
    }
  },
  methods: {
    _getWill(){
      getWill().then((res) => {
        if(res.code==0&&res.data){
          this.will = res.data
        }
      })
    }
  },
  mounted() {
    this._getWill()
  },
}
</script>
<style lang="stylus" scoped>
@import "~@/common/stylus/variable.styl"
.will
  background $cl-bg2
  padding 1.2rem 0
</style>