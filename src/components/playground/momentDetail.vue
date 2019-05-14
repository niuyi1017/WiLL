<template>
  <div class="moment-datail-wrapper">
    <m-header title="同学圈详情"/>
    <div class="card-moment-wrapper">
      <card-moment :momentData="realMomentData"/>
    </div>
    <comment/>
  </div>
</template>
<script>
import MHeader from '@/base/header/header'
import Comment from '@/base/comment/comment'
import CardMoment from '@/base/card/card-moment'
import { mapGetters } from 'vuex';
export default {
  name: 'momentDetail',
  components: {
    MHeader,
    CardMoment,
    Comment
  },
  props: {
    moment_id: {
      type: String
    }
  },
  data() {
    return {
      
    }
  },
  computed: {
    realMomentData(){
      let result = this.momentData
      return result
    },
    ...mapGetters(['momentData'])
  },

}
</script>
<style lang="stylus" scoped>
@import "~@/common/stylus/variable.styl"
.moment-datail-wrapper
  .card-moment-wrapper
    margin-top 1.15rem
</style>