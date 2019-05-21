<template>
  <div class="list-will">
    <div class="card-wrapper" v-for="(item,index) in articleList" 
                              :key="index"
                              @click="seleteItem(item._id)" >
     <div class="left">
       <img class="left-pic" :src="item.cover" >
     </div>
     <div class="right">
       <div class="right-wrapper">
          <div class="header">
            <div class="author">{{item.author.username}}</div>
            <div class="title-wrapper">
              <p class="title">{{item.title}}</p>
            </div>
          </div>
          <div class="desc">
            <div class="icon-group">
              <div class="item">
                <i class="iconfont icon-eye"></i>
                <span class="num">{{item.read_num}}</span>
              </div>
              <div class="item">
                <i class="iconfont icon-comment"></i>
                <span class="num">{{item.comments.length}}</span>
              </div>
              <div class="item">
                <i class="iconfont icon-like"></i>
                <span class="num">{{item.like_num}}</span>
              </div>
            </div>
          </div>
       </div>
     </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ListWill',
  props: {
    articleList: {
      type: Array,
      default(){
        return []
      }
    }
  },
  methods: {
    seleteItem(id){
      let url = `/articles/${id}`
      this.$router.push(url)
    }
  },
 
}
</script>
<style lang="stylus" scoped>
@import "~@/common/stylus/variable.styl"
@import '~@/common/stylus/mixins.styl'
.list-will
  display flex
  flex-direction column
  align-items center
  padding-top .3rem
  .card-wrapper
    height 2.5rem
    width 90%
    position relative
    margin-bottom .2rem
    .left
      height 2.2rem
      width 2.2rem
      overflow hidden
      border-radius .3rem
      box-shadow 0 0 0.2rem #ccc
      position absolute
      z-index 2
      left 0rem
      .left-pic
        width 100%
        height 100%
    .right
      height 2.2rem
      background #fff
      position absolute
      left 1rem
      right 0
      bottom 0
      border-radius .1rem
      box-shadow 0 0 0.2rem #ccc
      background #fff
      padding-right .2rem 
      padding-left 1.4rem
      .header
        margin-top .25rem
        .author
          color $cl-subColor
          font-size .28rem
        .title-wrapper
          margin-top .05rem
          height .95rem
          display flex
          justify-content flex-start
          align-items center
          .title
            line-height .36rem
            font-size .32rem
            // font-weight 600
      .desc
        margin-top .15rem  
        display flex
        justify-content flex-end
        .icon-group
          display flex
          .item
            margin-left 0.15rem
            color $cl-subColor
            font-size .26rem
            position relative
            .iconfont
              margin-right .1rem
            .num
              display inline-block
              position relative
              top -0.01rem
</style>
