<template>
  <div class="scroll-wrapper">
    <scroll class="scroll">
      <div>
        <div class="card-page" >
          <card-qa v-for="(qa, index ) in qaList" :key="index" :qaData="qa"/>
        </div>
      </div>
    </scroll>
  </div>
</template>
<script>
import CardQa from '@/base/card/card-qa'
import Scroll from '@/base/scroll/scroll'
import { getQaList } from '@/api/playground'
export default {
  name: 'qa-part',
  data() {
    return {
      qaList: []
    }
  },
  components: {
    CardQa,
    Scroll
  },
  methods: {
     _getQaList(){
        getQaList().then((res) => {
          if(res.code==0&&res.data){
            this.qaList = res.data
          }
        })
    }
  },
  mounted() {
   this._getQaList()
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
