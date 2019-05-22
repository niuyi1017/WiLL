<template>
  <div class="tool-box">
    <m-header title="院校库"></m-header>
    <div class="scroll-wrapper">
      <scroll :data="schools" class="scroll" :pullup="pullup" @scrollToEnd="loadMore">
        <div>
          <div class="card" v-for="(school, index) in schools" :key="index">
            <div class="pic">
              <img :src="school.logo" alt="" srcset="">
            </div>
            <div class="content">
              <div class="left">
                <div class="school-name">{{school.name}}</div>
                <div class="tags">
                  <div class="tag" v-show="school.is985">985</div>
                  <div class="tag" v-show="school.is211">211</div>
                  <div class="tag" v-show="school.isDual_class">双一流</div>
                </div>
              </div>
              <div class="right">
                <div class="type">{{school.type}}</div>
              </div>
            </div>
          </div>
          <loading v-show="hasMore"/>
      </div>
    </scroll>
   </div>
    <div class="block"></div>
  </div>
</template>
<script>
import MHeader from '@/base/header/header'
import Scroll from '@/base/scroll/scroll'
import Loading from '@/base/loading/loading'
import { getSchools } from '@/api/schools.js'
export default {
  name: "ToolBox",
  components: {
    Scroll,
    MHeader,
    Loading
  },
  data() {
    return {
      schools:[],
      pullup: true,
      hasMore: true,
      page: 0
    }
  },
  methods: {
    _getSchools(page){
      this.hasMore = true
      getSchools(page).then((res) => {
        if(res.code==0&&res.data){
          this.schools = res.data
          if(res.data.length==0){
            this.hasMore = false
          }
        }
      })
    },
    loadMore(){
      if(!this.hasMore){
        return
      }
      this.page++
      getSchools(this.page).then((res) => {
        if(res.code==0&&res.data){
          this.schools =  this.schools.concat(res.data)
          if(res.data.length==0){
            this.hasMore = false
          }
        }
      })
    }
  },
  mounted() {
    this._getSchools(this.page)
  }
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
    bottom 0rem
    overflow hidden
    .scroll
      height 100%
      background $cl-bg
      .card
        position relative
        height 2rem
        background #fff
        display flex
        align-items center
        margin-bottom .2rem
        .pic
          height 1.5rem
          width 1.5rem
          margin 0 .4rem
          img 
            height 100%
            width 100%
        .content
          display flex
          align-items center
          justify-content space-between
          .left
            display flex
            flex-direction column
            justify-content center
            .school-name
              height .8rem
              line-height .8rem
              font-size .46rem
              margin-bottom .2rem
            .tags
              display flex
              .tag
                height .4rem
                line-height .4rem
                border-radius .2rem
                color #fff
                margin-right .2rem
                background $cl-yellow
                padding 0 .2rem
          .right
            position absolute
            height .2rem
            line-height .2rem
            font-size .44rem
            color $cl-yellow
            right 0.4rem
           
            
  .block
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    background #fff
    z-index -1
</style>
