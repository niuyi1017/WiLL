<template>
  <div class="tool-box">
    <m-header title="专业库"></m-header>
    <div class="scroll-wrapper">
      <scroll :data="specials" class="scroll">
        <div>
          <div class="card" v-for="(special, index) in specials" :key="index">
            <div class="left">
              <div class="special-name">{{special.special_name}}</div>
              <div class="tags">
                <div class="tag">{{special.level1_name}}</div>
                <div class="tag">{{special.limit_year}}</div>
                 <div class="tag">{{special.degree}}</div>
              </div>
            </div>
            <div class="right">
              <div class="type">{{special.level3_name}}</div>
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
import { getSpecials } from '@/api/specials.js'
export default {
  name: "ToolBox",
  components: {
    Scroll,
    MHeader
  },
  data() {
    return {
      specials:[]
    }
  },
  computed: {
   
  },
  methods: {
    _getSpecials() {
      getSpecials().then(res => {
         if(res.code==0&&res.data){
          this.specials = res.data
        }
      })
    }
  },
  mounted() {
    this._getSpecials()
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
    bottom 0rem
    overflow hidden
    .scroll
      height 100%
      background $cl-bg
      .card
        height 2rem
        background #fff
        display flex
        align-items center
        justify-content space-between
        margin-bottom .1rem
        .left
          margin-left .4rem
          .special-name
            height 1rem
            line-height 1rem
            font-size .36rem
          .tags
            display flex
            .tag
              height .4rem
              padding 0 .2rem
              line-height .4rem
              margin-right .2rem
              background #eee
              border-radius .05rem
        .right
          margin-right .4rem
          font-size .40rem
          color $cl-yellow
  .block
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    background #fff
    z-index -1
</style>
