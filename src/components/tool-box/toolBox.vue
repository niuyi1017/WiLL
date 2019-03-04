<template>
  <div class="tool-box">
    <m-header title="工具箱"></m-header>
    <div class="scroll-wrapper">
      <scroll :data="calender.allDays" class="scroll">
        <div>
        <div class="calendar">
          <div class="top">
            <div class="top-left">Today</div>
            <div class="top-right">2019.02.27 星期三</div>
          </div>
          <div class="center">日历</div>
          <div class="bottom">
            <div class="tip-line">
              <div class="tip">S</div>
              <div class="tip">M</div>
              <div class="tip">T</div>
              <div class="tip">W</div>
              <div class="tip">T</div>
              <div class="tip">F</div>
              <div class="tip">S</div>
            </div>
            <div class="tip-line">
              <div class="tip" 
                              v-for="(item, index) in calender.allDays" 
                              :key="index"
                              :class="{tipChecked:calender.activeIndex==index }"
                              >{{item}}</div>
            </div>
          </div>
        </div>
        <div class="icon-group">
          <div class="item">
            <div class="icon"><i class="iconfont icon-linechart"></i></div>
            <div class="name">历年分数线</div>
          </div>
          <div class="item">
            <div class="icon"><i class="iconfont icon-bank"></i></div>
            <div class="name">院校库</div>
          </div>
          <div class="item">
            <div class="icon"><i class="iconfont icon-read"></i></div>
            <div class="name">专业库</div>
          </div>
        </div>
        <div class="boards">
          <div class="board">
            <div class="title">
              <h1 class="name">高考政策解读</h1>
            </div>
          </div>
          <div class="board">
            <div class="title">
              <h1 class="name">2019就业报告</h1>
            </div>
          </div>
          <div class="board">
            <div class="title">
              <h1 class="name">最新院校排名</h1>
            </div>
          </div>
          <div class="board">
            <div class="title">
              <h1 class="name">最新专业排名</h1>
            </div>
          </div>
        </div>
      </div>
    </scroll>
   </div>
    <div class="block"></div>
  </div>
</template>
<script>
import MHeader from '@/base/header/header'
import Scroll from '@/base/scroll/scroll'
export default {
  name: "ToolBox",
  components: {
    Scroll,
    MHeader
  },
  data() {
    return {
        calender:{
          today: '',
          activeIndex: 0,
          allDays: [],
        }
    }
  },
  computed: {
    activeIndex() {
      return this.calender.activeIndex
    }
  },
  methods: {
    // handlePlaylist(playlist) {
    //   const bottom = playlist.length > 0 ? '60px': ''
    //   this.$refs.recommend.style.bottom = bottom
    //   this.$refs.scroll.refresh()
    // },
    _initCalender() {
      let date = new Date()
      let year = date.getFullYear()
      let month = this.pad(date.getMonth()+1)
      let td = this.pad(date.getDate())
      let oriDay = date.getDay()
      let day = this.formatDay(date.getDay())
      let today = `${year}.${month}.${td} ${day}` 
      this.calender.today = today
      this.calender.activeIndex = oriDay
      this.calender.allDays = this.formatAllDays(year,month,td, oriDay)
    },
    formatAllDays(year,month,td, day) {
      let result = []
      let thisMonthLastDay = new Date(year,month,0).getDate()
      let lastMonthLastDay = new Date(year,month-1,0).getDate()
      let start  = td-day
      let end = start+6
      let delta = 0
      if(start < 0) {
        delta = start
        let newStart = lastMonthLastDay + delta
        for(let i = 0;i<7;i++){
          if(newStart>lastMonthLastDay){
            newStart = 1
          }
          result[i] = newStart++
        }
        return result
      }else if(end>thisMonthLastDay){
        let newStart = 1
        for(let i = 0;i<7;i++){
          if(start <= thisMonthLastDay){
            result[i] = start++
          }else{
            result[i] = newStart++
          }
        }
        return result
      }else{
        for(let i = 0;i<7;i++){
          result[i] = start++
        }
        return result
      }
     
    },
    formatDay(day) {
      let week = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]
      return week[day]
    },
    pad(num, len=2) {
      while(num.toString().length < len){
        num = '0' + num 
      }
      return num
    }
  },
  mounted() {
    this._initCalender()
  },
}
</script>
<style lang="stylus" scoped>
@import "~@/common/stylus/variable.styl"
.tool-box
  height 100%
  .scroll-wrapper
    width: 100%
    position fixed
    top 1rem
    // height 100%
    bottom 1.2rem
    overflow hidden
    .scroll
      height 100%
      .calendar
        height 3.2rem
        background #fff
        .top
          height 1rem
          display flex
          justify-content space-between
          align-items flex-end
          padding 0 .3rem .2rem .3rem
          .top-left
            font-size .88rem
          .top-right
            font-size .32rem
        .center
          height .5rem
          line-height .5rem
          padding-left .4rem
          background $cl-bg
        .bottom
          .tip-line
            height .6rem
            line-height .6rem
            display flex
            justify-content space-evenly
            .tip
              width .6rem
              text-align center
            .tipChecked
              background $cl-pink
              border-radius .3rem
              color #fff
      .icon-group
        height 2.4rem
        background #fff
        display flex
        align-items center
        justify-content space-evenly
        .item
          width 2rem
          height 2rem
          .icon
            height 1.6rem
            line-height 1.6rem
            text-align center
            .iconfont
              font-size 1.06rem
              color $cl-yellow
          .name
            height .4rem
            line-height .4rem
            text-align center
      .boards
        background #fff
        padding .4rem
        .board
          height 3rem
          background #fff
          border-radius .4rem
          margin-bottom .2rem
          &:nth-child(4)
            background #f18c8e91
            color $cl-orange
          &:nth-child(2)
            background #47b39d90
            color $cl-green
          &:nth-child(3)
            background #344e5c90
            color $cl-black
          &:nth-child(1)
            background #ffc25390
            color $cl-yellow
          .title
            height 1.4rem
            line-height 1.4rem
            padding-left .6rem
            .name
              font-size .48rem
              font-weight 600
  .block
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    background #fff
    z-index -1
</style>
