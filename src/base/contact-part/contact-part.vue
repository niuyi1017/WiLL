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
          let contacts = res.data
          let result = []
          for(let i = 0;i<contacts.length;i++){
            let group = {
                          title: "",
                          items: []
                        }
            let pinyin = contacts[i].pinyin.split('')[0].toUpperCase()
            let user = {
              name:  contacts[i].username,
              avatar:  contacts[i].avatar
            }
            if(result.length == 0){
              group.title = pinyin
              group.items.push(user)
              result.push(group)
            }else{
              let has = false
              for(let i = 0;i<result.length;i++){
                if(result[i].title==pinyin){
                  result[i].items.push(user)
                  has = true
                }
              }
              if(!has){
                group.title = pinyin
                group.items.push(user)
                result.push(group)
              }
            }
          }
          // result.sort((a,b) => {
          //   return a.title-b.title
          // })
          this.contacts = result
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