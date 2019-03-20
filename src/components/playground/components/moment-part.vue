<template>
  <div class="scroll-wrapper">
    <scroll class="scroll">
      <div>
        <div class="card-page" >
         <card-moment v-for="(moment, index ) in momentList" :key="index" :momentData="moment"/>
        </div>
      </div>
    </scroll>
  </div>
</template>
<script>
import CardMoment from '@/base/card/card-moment'
import Scroll from '@/base/scroll/scroll'
import { getMomentList } from '@/api/playground'
export default {
  name: 'moment-part',
  data() {
    return {
     momentList: []
    }
  },
  components: {
    CardMoment,
    Scroll
  },
  methods: {
     _getMomentList(){
        getMomentList().then((res) => {
          if(res.code==0&&res.data){
            this.momentList = res.data
          }
        })
    }
  },
  mounted() {
   this._getMomentList()
  }
}
</script>
<style lang="stylus" scoped>
@import "~@/common/stylus/variable.styl"
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
