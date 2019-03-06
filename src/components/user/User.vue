<template>
  <div class="user">
    <user-profile :user="user"/>
  </div>
</template>
<script>
import {momentMode,contentType} from '@/common/js/config'
import UserProfile from '@/base/user-profile/userProfile'
export default {
  name: 'user',
  data() {
    return {
      user: {
        username: "一只小小白",
        desc: '烟台大学 物联网工程专业',
        isSelf: true,
        sum: {
          following: 1024,
          followers: '1.2k',
          favorites: 256,
          posts: 124
        },
        intro: "大三狗，主修物联网工程，来自国内距海最近的大学烟台大学。对于烟台大学或者物联网工程有什么想了解的，欢迎给我发小纸条~",
        tags: [
          '烟台大学','物联网工程专业','大三狗','射手座','校企合作','浪潮优派','旅行', '穷游','周杰伦',"科幻迷"
        ],
        recentlyMoments:[
          {
            contentType: contentType.article,
            momentMode: momentMode.post,
            postTime: '12 mins ago',
            img: '',
            title: '在距海最近的大学读书的是怎样的体验',
            desc: '在距海最近的大学读书的是怎样的体验在距海最近的大学读书的是怎样的体验在距海最近的大学读书的是怎样的体验',
          },
          {
            contentType: contentType.Moment,
            momentMode: momentMode.post,
            postTime: '12 mins ago',
            img: '',
            title: '新的同学圈',
            desc: '在距海最近的大学读书的是怎样的体验在距海最近的大学读书的是怎样的体验在距海最近的大学读书的是怎样的体验',
          },
          {
            contentType: contentType.question,
            momentMode: momentMode.post,
            postTime: '12 mins ago',
            img: '',
            title: '烟台大学有哪些隐藏美食',
            desc: '在距海最近的大学读书的是怎样的体验在距海最近的大学读书的是怎样的体验在距海最近的大学读书的是怎样的体验',
          },
          {
            contentType: contentType.answer,
            momentMode: momentMode.post,
            postTime: '12 mins ago',
            img: '',
            title: '烟台大学有哪些隐藏美食',
            desc: '在距海最近的大学读书的是怎样的体验在距海最近的大学读书的是怎样的体验在距海最近的大学读书的是怎样的体验',
          },
          {
            contentType: contentType.answer,
            momentMode: momentMode.like,
            postTime: '12 mins ago',
            img: '',
            title: '烟台大学有哪些隐藏美食',
            desc: '在距海最近的大学读书的是怎样的体验在距海最近的大学读书的是怎样的体验在距海最近的大学读书的是怎样的体验',
          },
          {
            contentType: contentType.article,
            momentMode: momentMode.comment,
            postTime: '12 mins ago',
            img: '',
            title: '烟台大学有哪些隐藏美食',
            desc: '在距海最近的大学读书的是怎样的体验在距海最近的大学读书的是怎样的体验在距海最近的大学读书的是怎样的体验',
          },
          {
            contentType: contentType.article,
            momentMode: momentMode.favorite,
            postTime: '12 mins ago',
            img: '',
            title: '烟台大学有哪些隐藏美食',
            desc: '在距海最近的大学读书的是怎样的体验在距海最近的大学读书的是怎样的体验在距海最近的大学读书的是怎样的体验',
          }
        ]
      }
    }
  },
  components: {
    UserProfile
  }
}
</script>