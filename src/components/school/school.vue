<template>
  <div class="shool-wrapper">
    <s-header :title="title" 
              :showAbs="showAbs"/>
    <div class="pic-wrapper">
      <img src="../../common/image/b2.jpg" >
    </div>
    <div class="content">
      <div class="desc-wrapper">
        <div class="desc">
          <div class="top">
            <div class="left">
              <div class="pic">
                <img src="https://static-data.eol.cn/upload/logo/554.jpg" alt="" srcset="">
              </div>
            </div>
            <div class="right">
              <div class="title">烟台大学</div>
              <div class="tags">
                <div class="item">985</div>
                <div class="item">211</div>
                <div class="item">双一流</div>
              </div> 
            </div>
          </div>
          <div class="bottom">
            <div class="item">
              <div class="num">129</div>
              <div class="text">校友</div>
            </div>
            <div class="item">
              <div class="num">108</div>
              <div class="text">文章</div>
            </div>
            <div class="item">
              <div class="num">245</div>
              <div class="text">问答</div>
            </div>
            <div class="item">
              <div class="num">999+</div>
              <div class="text">动态</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="abx">
      <div class="col-title">
        <div class="title">热门文章</div>
        <div class="icon">更多</div>
      </div>
      <list-will :articleList="hotArticList"/>
      <div class="col-title">
        <div class="title">明星校友</div>
        <div class="icon">更多</div>
      </div>
      <div class="card-wrapper">
        <swiper-users :userList="recommendUserList"></swiper-users>
      </div>
     
      <div class="col-title">
        <div class="title">热门问答</div>
        <div class="icon">更多</div>
      </div>
      <div class="card-wrapper">
        <card-qa v-for="(qa, index ) in qaList" :key="index" :qaData="qa"/>
      </div>
      <div class="col-title">
        <div class="title">热门动态</div>
        <div class="icon">更多</div>
      </div>
      <div class="card-wrapper card-wrapper-moment">
        <card-moment v-for="(moment, index ) in momentList" :key="index" :momentData="moment"/>
      </div>
    </div>
  </div>
</template>
<script>
import SHeader from '@/base/header/Sheader'
import ListWill from '@/base/list/listWill'
import SwiperUsers from '@/base/swiper/swiperUsers'
import CardQa from '@/base/card/card-qa'
import CardMoment from '@/base/card/card-moment'
export default {
  name: 'School',
  data() {
    return {
      showAbs: true,
      title: '烟台大学',
      hotArticList: [
        {
          "imgUrl":"http://blogpic.niuy.xyz/2.jpg",
          "author": "一只小小白",
          "title": "在距海最近的大学读书是怎样的体验",
          "like": "1234",
          "comment": "123",
          "read":"3.4k"
        },
        {
          "imgUrl": "http://blogpic.niuy.xyz/2.jpg",
          "author": "一只小小白",
          "title": "在距海最近的大学读书是怎样的体验在距海最近的大学读书",
          "like": "1234",
          "comment": "123",
          "read": "3.4k"
        },
        {
          "imgUrl": "http://blogpic.niuy.xyz/2.jpg",
          "author": "一只小小白",
          "title": "在距海最近的大学读书是怎样的体验在距海最近的大学读书",
          "like": "1234",
          "comment": "123",
          "read": "3.4k"
        }
      ],
      recommendUserList: [
        {
          "avatar":"http://blogpic.niuy.xyz/t1.jpg",
          "name": "一只小小白",
          "desc": "与你均来自济北中学，就读于烟台大学物联网工程专业",
          "isFriend": false
        },
        {
          "avatar": "http://blogpic.niuy.xyz/t2.jpg",
          "name": "一只小小白",
          "desc": "与你均来自济北中学，就读于烟台大学物联网工程专业",
          "isFriend": false
        },
        {
          "avatar": "http://blogpic.niuy.xyz/t3.jpg",
          "name": "一只小小白",
          "desc": "与你均来自济北中学，就读于烟台大学物联网工程专业",
          "isFriend": false
        },
        {
          "avatar": "http://blogpic.niuy.xyz/t1.jpg",
          "name": "一只小小白",
          "desc": "与你均来自济北中学，就读于烟台大学物联网工程专业",
          "isFriend": false
        },
        {
          "avatar": "http://blogpic.niuy.xyz/t2.jpg",
          "name": "一只小小白",
          "desc": "与你均来自济北中学，就读于烟台大学物联网工程专业",
          "isFriend": false
        },
        {
          "avatar": "http://blogpic.niuy.xyz/t3.jpg",
          "name": "一只小小白",
          "desc": "与你均来自济北中学，就读于烟台大学物联网工程专业",
          "isFriend": false
        },
        {
          "avatar": "http://blogpic.niuy.xyz/t1.jpg",
          "name": "一只小小白",
          "desc": "与你均来自济北中学，就读于烟台大学物联网工程专业",
          "isFriend": false
        }
      ],
      qaList: [
        {
          "tag": "物联网工程",
          "postAt": "14 mins ago",
          "question": "物联网工程学单片机吗",
          "answer": "谢邀，物联网工程专业大三狗一枚。单片机可以说是电子信息类专业的必修课了bulabulabula~",
          "avatar": "132.jpg",
          "userName": "一只小小白",
          "agreeNum": "1.2k",
          "recommendNum": "1.5k"
        },
        {
          "tag": "物联网工程",
          "postAt": "14 mins ago",
          "question": "物联网工程学单片机吗",
          "answer": "谢邀，物联网工程专业大三狗一枚。单片机可以说是电子信息类专业的必修课了bulabulabula~",
          "avatar": "132.jpg",
          "userName": "一只小小白",
          "agreeNum": "1.2k",
          "recommendNum": "1.5k"
        },
        {
          "tag": "物联网工程",
          "postAt": "14 mins ago",
          "question": "物联网工程学单片机吗",
          "answer": "谢邀，物联网工程专业大三狗一枚。单片机可以说是电子信息类专业的必修课了bulabulabula~",
          "avatar": "132.jpg",
          "userName": "一只小小白",
          "agreeNum": "1.2k",
          "recommendNum": "1.5k"
        },
        {
          "tag": "物联网工程",
          "postAt": "14 mins ago",
          "question": "物联网工程学单片机吗",
          "answer": "谢邀，物联网工程专业大三狗一枚。单片机可以说是电子信息类专业的必修课了bulabulabula~",
          "avatar": "132.jpg",
          "userName": "一只小小白",
          "agreeNum": "1.2k",
          "recommendNum": "1.5k"
        }
      ],
      momentList: [
        {
          "avatar": "",
          "userName": "一只小小白",
          "postAt": "12 mins ago",
          "isFriend": false,
          "content": {
            "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quis reiciendis provident. Explicabo eum perferendis rem quia consectetur natus excepturi officiis similique at voluptate nulla, aliquid vitae culpa sit. Repellat!",
            "picList": [
              "http://blogpic.niuy.xyz/1.jpg",
              "http://blogpic.niuy.xyz/2.jpg",
              "http://blogpic.niuy.xyz/3.jpg"
            ]
          },
          "readNum": "1.2k",
          "commentNum": "1.2k",
          "likeNum": "1.2k"
        },
        {
          "avatar": "",
          "userName": "一只小小白",
          "postAt": "12 mins ago",
          "isFriend": false,
          "content": {
            "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quis reiciendis provident. Explicabo eum perferendis rem quia consectetur natus excepturi officiis similique at voluptate nulla, aliquid vitae culpa sit. Repellat!",
            "picList": [
              "http://blogpic.niuy.xyz/1.jpg"
            ]
          },
          "readNum": "1.2k",
          "commentNum": "1.2k",
          "likeNum": "1.2k"
        }
      ]
    }
  },
  components: {
    SHeader,
    ListWill,
    SwiperUsers,
    CardQa,
    CardMoment
  },
  methods: {
   
  },
  
}
</script>
<style lang="stylus" scoped>
@import "~@/common/stylus/variable.styl"
.shool-wrapper
  background $cl-bg2
  .pic-wrapper
    height 6.5rem
    width 100%
    position fixed
    background-size:100% 100%;
    img 
      height 100%
      width 100%
  .content
    height 6.5rem
    left 0
    right 0
    position absolute
    top 0
    .desc-wrapper
      position absolute
      top 5.2rem
      width 100%
      margin-bottom 2rem
      z-index 2
      height 2rem
      .desc
        height 3rem
        width 96%
        background rgba(255,255,255, 1)
        position absolute
        margin-left 2%
        box-shadow 0 0.2rem .8rem #ddd
        justify-content space-evenly
        align-items center
        border-radius .2rem
        overflow hidden
        .top
          height 1.6rem
          width 100%
          display flex
          .left
            height 1.6rem
            width 1.6rem
            margin-left .4rem
            margin-top .2rem
            margin-right .2rem
            .pic
              height 1.6rem
              width 1.6rem
              box-shadow 0 .15rem .35rem #ccc
              border-radius 50%
              overflow hidden
              img
                height 100%
                width 100%
          .right
            flex auto
            display flex
            flex-direction column
            justify-content center
            margin-top .2rem
            .title
              font-weight 600
              font-size .44rem
              height .8rem
              line-height .8rem
              padding-top .1rem
            .tags
              display flex
              flex-wrap wrap
              .item
                background $cl-yellow
                padding 0.05rem .3rem
                margin-right .1rem
                margin-bottom .1rem
                color #fff
                border-radius .2rem
        .bottom
          display flex
          height 1.4rem
          justify-content space-around
          align-items center
          margin-top 0.1rem
          .item
            display flex
            flex-direction column
            text-align center
            .num
              font-size .38rem
              color $cl-blue
  .abx
    position absolute
    margin-top 6.5rem
    padding-top 2rem
    padding-bottom .4rem
    width 100%
    background $cl-bg2
    .col-title
      height .8rem
      line-height .8rem
      padding 0 .2rem
      background $cl-bg2
      font-size .34rem 
      font-weight 600
      display flex
      justify-content space-between
      .icon
        font-weight 500
        font-size .30rem
        color $cl-blue
    .card-wrapper
      background $cl-bg2

</style>
