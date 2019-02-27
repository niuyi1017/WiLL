<template>
  <div class="wrapper">
    <swiper :options="swiperOption" >
      <swiper-slide v-for="user in userList" :key="user.id">
        <div class="card-wrapper">
          <div class="pic-wrapper">
            <img src="../../common/image/t1.jpg" >
          </div>
          <div class="content">
            <h1 class="user-name">{{user.name}}</h1>
            <div class="desc">
              <p class="desc-content">{{user.desc}}</p>
            </div>
          </div>
          <div class="button">加好友</div>
          <div class="line"></div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "SwiperUsers",
  data () {
      return {
        swiperOption: {
          loop: true,
          slidesPerView: 2.3,
          freeMode: true,
        },
        userList: [
          {
            id: '001',
            avatar: '',
            name: '一只小小白',
            desc: '与你均来自济北中学，就读于烟台大学物联网工程专业'
          },
          {
            id: '002',
            avatar: '',
            name: '一只小小白',
            desc: '与你均来自济北中学，就读于烟台大学物联网工程专业'
          },
          {
            id: '003',
            avatar: '',
            name: '一只小小白',
            desc: '与你均来自济北中学，就读于烟台大学物联网工程专业'
          },
          {
            id: '004',
            avatar: '',
            name: '一只小小白',
            desc: '与你均来自济北中学，就读于烟台大学物联网工程专业'
          },
          {
            id: '005',
            avatar: '',
            name: '一只小小白',
            desc: '与你均来自济北中学，就读于烟台大学物联网工程专业'
          },
          {
            id: '006',
            avatar: '',
            name: '一只小小白',
            desc: '与你均来自济北中学，就读于烟台大学物联网工程专业'
          },
        ]
      }
  },
}
</script>
<style lang="stylus" scoped>
@import "~@/common/stylus/variable.styl"
.wrapper
  width: 100%
  height :0
  overflow hidden
  padding-bottom 4.8rem
  .card-wrapper
    margin-top .35rem
    width 3rem
    height 4.2rem
    background #fff
    position relative
    border-radius .2rem
    margin-bottom .5rem
    box-shadow 0 0rem .5rem #aaa
    
    &:first-child
      margin-left .5rem
    .pic-wrapper
      position absolute
      top -0.3rem
      left -0.3rem
      height 1rem
      width 1rem
      background #123
      border-radius 50%
      overflow hidden
      z-index 2
      img 
        width 100%
    .content
      position absolute
      height 2.4rem
      top .8rem
      .user-name
        height .5rem
        line-height .5rem
        text-align center
        font-size .36rem
        font-weight 600
      .desc
        display flex
        justify-content center
        align-items center
        height 1.9rem
        padding 0 .18rem
        .desc-content
          color $cl-subColor
          text-align justify
    .line
      position absolute
      bottom 0
      height .1rem
      width 80%
      margin-left 10%
      background $cl-orange
      border-radius .05rem
    .button
      height .5rem
      line-height .5rem
      text-align center
      border-radius .3rem
      border .02rem solid $cl-border
      width 80%
      margin-left 10%
      position absolute
      bottom .3rem
      color $cl-yellow
</style>
