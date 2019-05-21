<template>
  <div class="wrapper" ref="wrapper">
    <swiper :options="swiperOption" >
      <swiper-slide v-for="(user,index) in users" :key="index">
        <div class="card-wrapper" >
          <div class="pic-wrapper" >
            <img :src="user.avatar" >
          </div>
          <div class="content" ref="cradWapper" @click.stop="handleUserClick(index)">
            <h1 class="user-name">{{user.username}}</h1>
            <div class="desc">
              <p class="desc-content">{{user.desc}}</p>
            </div>
          </div>
          <div class="button" v-if="user.isFriend">已关注</div>
          <div class="button" v-else @click.stop="addFriend(index)"> + Follow</div>
          <div class="line" :style="diffColor[index]"></div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import {diffColor} from '@/common/js/config'
import {mapGetters} from 'vuex'
export default {
  name: "SwiperUsers",
  props: {
    userList:{
      type: Array,
      default() {
        return []
      }
    }
  },
  data () {
      return {
        swiperOption: {
          loop: false,
          freeMode: true,
          breakpoints: {
            1024: {
              slidesPerView: 5.5,
              spaceBetween: 40
            },
            768: {
              slidesPerView: 4.5,
              spaceBetween: 30
            },
            640: {
              slidesPerView: 2.4,
              spaceBetween: 20
            },
            380: {
              slidesPerView: 2.3,
              spaceBetween: 20
            },
            320: {
              slidesPerView: 1.3,
              spaceBetween: 10
            }
          }
        },
        diffColor
      }
  },
  computed: {
    users(){
      let userList = this.userList
      let result = []
      let descs = [
        '与你均毕业于济北中学，目前就读于烟台大学',
        '与你均来自烟台大学，目前就读于物联网工程专业',
        '与你均来自物联网工程专业，目前就读于青岛大学',
        '与你均来自烟台大学，目前就读于软件工程专业',
        '与你均关注了“考研”话题，目前就读于烟台大学应用物理专业',
        '与你均来自济北中学，目前高二在读，目标烟台大学',
        '与你均读大四，目前在浪潮软件实习',
        '与你均收藏了文章“BEC攻略”，目前就读于烟台大学'
      ]
      for(let i = 0;i< userList.length;i++){
        let user = {
          username: userList[i].username,
          avatar: userList[i].avatar,
          _id : userList[i]._id,
          desc: descs[i],
          isFriend: this.following.includes( userList[i]._id)
        }
        result.push(user)
      }
      return result
    },
    ...mapGetters(['following'])
  },
  methods: {
    selectUser(id){
      let url = `/userProfile/${id}` 
      this.$router.push(url)
    },
    addFriend(){
    //  console.log(index)
    },
    handleUserClick(index){
     
      let authorId = this.userList[index]._id
      let uid = this.uid
      if(authorId == uid)
        this.$router.push(`/user`)
      else{
        this.$router.push(`/userProfile/${authorId}`)
      }
      
    },
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
    &:last-child
      margin-right .5rem
    .pic-wrapper
      position absolute
      top -0.3rem
      left -0.3rem
      height 1rem
      width 1rem
      border-radius 50%
      overflow hidden
      z-index 2
      img 
        width 100%
        height 100%
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
