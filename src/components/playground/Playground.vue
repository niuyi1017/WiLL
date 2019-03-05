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
  </div>
</template>
<script>
import Tab from '@/base/tab/tab'
import CardQa from '@/base/card/card-qa'
import CardMoment from '@/base/card/card-moment'
import Scroll from '@/base/scroll/scroll'
export default {
  name: 'playground',
  components: {
    Tab,
    CardMoment,
    CardQa,
    Scroll
  },
  data() {
    return {
      mode: 'qa',
      qaList: [
        {
          tag: "物联网工程",
          postAt: '14 mins ago',
          question: "物联网工程学单片机吗",
          answer: '谢邀，物联网工程专业大三狗一枚。单片机可以说是电子信息类专业的必修课了bulabulabula~',
          avatar: '132.jpg',
          userName: "一只小小白",
          agreeNum: '1.2k',
          recommendNum: '1.5k'
        },
        {
          tag: "物联网工程",
          postAt: '14 mins ago',
          question: "物联网工程学单片机吗",
          answer: '谢邀，物联网工程专业大三狗一枚。单片机可以说是电子信息类专业的必修课了bulabulabula~',
          avatar: '132.jpg',
          userName: "一只小小白",
          agreeNum: '1.2k',
          recommendNum: '1.5k'
        },
        {
          tag: "物联网工程",
          postAt: '14 mins ago',
          question: "物联网工程学单片机吗",
          answer: '谢邀，物联网工程专业大三狗一枚。单片机可以说是电子信息类专业的必修课了bulabulabula~',
          avatar: '132.jpg',
          userName: "一只小小白",
          agreeNum: '1.2k',
          recommendNum: '1.5k'
        },
        {
          tag: "物联网工程",
          postAt: '14 mins ago',
          question: "物联网工程学单片机吗",
          answer: '谢邀，物联网工程专业大三狗一枚。单片机可以说是电子信息类专业的必修课了bulabulabula~',
          avatar: '132.jpg',
          userName: "一只小小白",
          agreeNum: '1.2k',
          recommendNum: '1.5k'
        },
        {
          tag: "物联网工程",
          postAt: '14 mins ago',
          question: "物联网工程学单片机吗",
          answer: '谢邀，物联网工程专业大三狗一枚。单片机可以说是电子信息类专业的必修课了bulabulabula~',
          avatar: '132.jpg',
          userName: "一只小小白",
          agreeNum: '1.2k',
          recommendNum: '1.5k'
        },
        {
          tag: "物联网工程",
          postAt: '14 mins ago',
          question: "物联网工程学单片机吗",
          answer: '谢邀，物联网工程专业大三狗一枚。单片机可以说是电子信息类专业的必修课了bulabulabula~',
          avatar: '132.jpg',
          userName: "一只小小白",
          agreeNum: '1.2k',
          recommendNum: '1.5k'
        },
        {
          tag: "物联网工程",
          postAt: '14 mins ago',
          question: "物联网工程学单片机吗",
          answer: '谢邀，物联网工程专业大三狗一枚。单片机可以说是电子信息类专业的必修课了bulabulabula~',
          avatar: '132.jpg',
          userName: "一只小小白",
          agreeNum: '1.2k',
          recommendNum: '1.5k'
        },
        {
          tag: "物联网工程",
          postAt: '14 mins ago',
          question: "物联网工程学单片机吗",
          answer: '谢邀，物联网工程专业大三狗一枚。单片机可以说是电子信息类专业的必修课了bulabulabula~',
          avatar: '132.jpg',
          userName: "一只小小白",
          agreeNum: '1.2k',
          recommendNum: '1.5k'
        },
        {
          tag: "物联网工程",
          postAt: '14 mins ago',
          question: "物联网工程学单片机吗",
          answer: '谢邀，物联网工程专业大三狗一枚。单片机可以说是电子信息类专业的必修课了bulabulabula~',
          avatar: '132.jpg',
          userName: "一只小小白",
          agreeNum: '1.2k',
          recommendNum: '1.5k'
        },
        {
          tag: "物联网工程",
          postAt: '14 mins ago',
          question: "物联网工程学单片机吗",
          answer: '谢邀，物联网工程专业大三狗一枚。单片机可以说是电子信息类专业的必修课了bulabulabula~',
          avatar: '132.jpg',
          userName: "一只小小白",
          agreeNum: '1.2k',
          recommendNum: '1.5k'
        },
        {
          tag: "物联网工程",
          postAt: '14 mins ago',
          question: "物联网工程学单片机吗",
          answer: '谢邀，物联网工程专业大三狗一枚。单片机可以说是电子信息类专业的必修课了bulabulabula~',
          avatar: '132.jpg',
          userName: "一只小小白",
          agreeNum: '1.2k',
          recommendNum: '1.5k'
        },
        {
          tag: "物联网工程",
          postAt: '14 mins ago',
          question: "物联网工程学单片机吗",
          answer: '谢邀，物联网工程专业大三狗一枚。单片机可以说是电子信息类专业的必修课了bulabulabula~',
          avatar: '132.jpg',
          userName: "一只小小白",
          agreeNum: '1.2k',
          recommendNum: '1.5k'
        },
        {
          tag: "物联网工程",
          postAt: '14 mins ago',
          question: "物联网工程学单片机吗",
          answer: '谢邀，物联网工程专业大三狗一枚。单片机可以说是电子信息类专业的必修课了bulabulabula~',
          avatar: '132.jpg',
          userName: "一只小小白",
          agreeNum: '1.2k',
          recommendNum: '1.5k'
        },
        {
          tag: "物联网工程",
          postAt: '14 mins ago',
          question: "物联网工程学单片机吗",
          answer: '谢邀，物联网工程专业大三狗一枚。单片机可以说是电子信息类专业的必修课了bulabulabula~',
          avatar: '132.jpg',
          userName: "一只小小白",
          agreeNum: '1.2k',
          recommendNum: '1.5k'
        }
      ],
      momentList: [
        {
          avatar: '',
          userName: '一只小小白',
          postAt: '12 mins ago',
          isFriend: false,
          content: {
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quis reiciendis provident. Explicabo eum perferendis rem quia consectetur natus excepturi officiis similique at voluptate nulla, aliquid vitae culpa sit. Repellat!',
            picList:[
              [
                {
                  imgUrl: '1'
                }
              ]
            ]
          },
          readNum:'1.2k',
          commentNum: '1.2k',
          likeNum:'1.2k'
        },
        {
          avatar: '',
          userName: '一只小小白',
          postAt: '12 mins ago',
          isFriend: false,
          content: {
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quis reiciendis provident. Explicabo eum perferendis rem quia consectetur natus excepturi officiis similique at voluptate nulla, aliquid vitae culpa sit. Repellat!',
            picList:[
              [
                {
                  imgUrl: '1'
                },
                {
                  imgUrl: '2'
                }
              ]
            ]
          },
          readNum:'1.2k',
          commentNum: '1.2k',
          likeNum:'1.2k'

        },
        {
          avatar: '',
          userName: '一只小小白',
          postAt: '12 mins ago',
          isFriend: false,
          content: {
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quis reiciendis provident. Explicabo eum perferendis rem quia consectetur natus excepturi officiis similique at voluptate nulla, aliquid vitae culpa sit. Repellat!',
            picList:[
              [
                {
                  imgUrl: '1'
                },
                {
                  imgUrl: '2'
                },
                {
                  imgUrl: '2'
                }
              ]
            ]
          },
          readNum:'1.2k',
          commentNum: '1.2k',
          likeNum:'1.2k'

        },
        {
          avatar: '',
          userName: '一只小小白',
          postAt: '12 mins ago',
          isFriend: false,
          content: {
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quis reiciendis provident. Explicabo eum perferendis rem quia consectetur natus excepturi officiis similique at voluptate nulla, aliquid vitae culpa sit. Repellat!',
            picList:[
              [
                {
                  imgUrl: '1'
                },
                {
                  imgUrl: '2'
                }
              ],
              [
                {
                  imgUrl: '3'
                },
                {
                  imgUrl: '4'
                }
              ]
            ]
          },
          readNum:'1.2k',
          commentNum: '1.2k',
          likeNum:'1.2k'

        },
        {
          avatar: '',
          userName: '一只小小白',
          postAt: '12 mins ago',
          isFriend: false,
          content: {
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quis reiciendis provident. Explicabo eum perferendis rem quia consectetur natus excepturi officiis similique at voluptate nulla, aliquid vitae culpa sit. Repellat!',
            picList:[
              [
                {
                  imgUrl: '1'
                },
                {
                  imgUrl: '2'
                },
                {
                  imgUrl: '3'
                }
              ],
              [
                
                {
                  imgUrl: '4'
                },
                {
                  imgUrl: '5'
                },
                {
                  imgUrl: ''
                }
              ]
            ]
          },
          readNum:'1.2k',
          commentNum: '1.2k',
          likeNum:'1.2k'

        },
        {
          avatar: '',
          userName: '一只小小白',
          postAt: '12 mins ago',
          isFriend: false,
          content: {
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quis reiciendis provident. Explicabo eum perferendis rem quia consectetur natus excepturi officiis similique at voluptate nulla, aliquid vitae culpa sit. Repellat!',
            picList:[
              [
                {
                  imgUrl: '1'
                },
                {
                  imgUrl: '2'
                },
                {
                  imgUrl: '3'
                }
              ],
              [
                
                {
                  imgUrl: '4'
                },
                {
                  imgUrl: '5'
                },
                {
                  imgUrl: '6'
                }
              ]
            ]
          },
          readNum:'1.2k',
          commentNum: '1.2k',
          likeNum:'1.2k'

        },
        {
          avatar: '',
          userName: '一只小小白',
          postAt: '12 mins ago',
          isFriend: false,
          content: {
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quis reiciendis provident. Explicabo eum perferendis rem quia consectetur natus excepturi officiis similique at voluptate nulla, aliquid vitae culpa sit. Repellat!',
            picList:[
              [
                {
                  imgUrl: '1'
                },
                {
                  imgUrl: '2'
                },
                {
                  imgUrl: '3'
                }
              ],
              [
                
                {
                  imgUrl: '4'
                },
                {
                  imgUrl: '5'
                },
                {
                  imgUrl: '6'
                }
              ],
              [
                
                {
                  imgUrl: '7'
                },
                {
                  imgUrl: '8'
                },
                {
                  imgUrl: '9'
                }
              ]
            ]
          },
          readNum:'1.2k',
          commentNum: '1.2k',
          likeNum:'1.2k'

        },
      ]
    }
  },
  methods: {
    changeTab(mode) {
      this.mode = mode
    }
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
