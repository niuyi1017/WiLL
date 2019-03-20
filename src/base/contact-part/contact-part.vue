<template>
  <div class="scroll-wrapper">
    <list-view :data="contacts"/>
  </div>
</template>
<script>
import ListView from '@/base/listview/listview'
import { getContacts } from '@/api/message'
export default {
  name: 'ContactPart',
  data() {
    return {
      contacts: []
    }
  },
  components: {
    ListView
  },
  methods: {
    _getContacts(){
      getContacts().then((res) => {
        if(res.code==0&&res.data){
          this.contacts = res.data
        }
      })
    }
  },
  mounted() {
    this._getContacts()
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
  background $cl-bg2
</style>