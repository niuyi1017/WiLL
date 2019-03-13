<template>
  <div class="playground">
    <tab @changeTab="changeTab"/>
    <div class="scroll-wrapper">
      <scroll class="scroll" v-show="mode=='qa'">
        <div>
          <div class="card-page" >
            <card-qa v-for="(qa, index ) in qaList" :key="index" :qaData="qa"/>
          </div>
        </div>
      </scroll>
      <scroll class="scroll" v-show="mode=='moment'">
        <div>
           <div class="card-page" >
            <card-moment v-for="(moment, index ) in momentList" :key="index" :momentData="moment"/>
          </div>
        </div>
      </scroll>
    </div>
    <tab-bar/>
  </div>
</template>
<script>
import Tab from '@/base/tab/tab'
import CardQa from '@/base/card/card-qa'
import CardMoment from '@/base/card/card-moment'
import Scroll from '@/base/scroll/scroll'
import TabBar from '@/components/tabBar/tabBar'
import { getPlayground } from '@/api/playground'
export default {
  name: 'playground',
  components: {
    Tab,
    CardMoment,
    CardQa,
    Scroll,
    TabBar
  },
  data() {
    return {
      mode: 'qa',
      qaList:[],
      momentList: []
    }
  },
  methods: {
    changeTab(mode) {
      this.mode = mode
    },
    _getPlayground(){
      getPlayground().then((res) => {
        if(res.code==0&&res.data){
          this.qaList = res.data.qaList
          this.momentList = res.data.momentList
        }
      })
    }
  },
  mounted() {
    this._getPlayground()
  },
}
</script>
<style lang="stylus" scoped>
@import "~@/common/stylus/variable.styl"
.playground
  .scroll-wrapper
    position fixed
    top 1rem
    left 0
    right 0
    bottom 1.25rem
    overflow hidden
    .scroll
      height 100%
</style>
