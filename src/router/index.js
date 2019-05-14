import Vue from 'vue'
import Router from 'vue-router'

import Will from '../components/will/Will.vue'

import Playground from '../components/playground/Playground.vue'
import qaPart from '../components/playground/components/qa-part.vue'
import momentPart from '../components/playground/components/moment-part.vue'
import PostMoment from '../components/post/post-moment.vue'
import MomentDetail from '../components/playground/momentDetail.vue'

import Message from '../components/message/Message.vue'
import NotificationPart from '@/base/notification-part/notification-part'
import MessagePart from '@/base/message-part/message-part'
import ContactPart from '@/base/contact-part/contact-part'

import User from '../components/user/User.vue'
import UserProfile from '@/base/user-profile/userProfile'
import ToolBox from '../components/tool-box/toolBox.vue'
import SchoolList from '../components/schoolList/schoolList.vue'
import SpeciallList from '../components/speciallist/specialist.vue'
import Search from '../components/search/search.vue'
import School from '../components/school/school.vue'
import Article from '../components/article/article.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/will'
    },
    {
      path: '/will',
      name: 'will',
      component: Will
    },
    {
      path: '/playground',
      name: 'playground',
      component: Playground,
      children: [
        {
          path: 'qa',
          component: qaPart,
        },
        {
          path: 'moment',
          component: momentPart,
        }
      ]
    },
    {
      path: '/message',
      name: 'message',
      component: Message,
      children: [
        {
          path: 'notifications',
          component: NotificationPart
        },
        {
          path: 'messages',
          component: MessagePart
        },
        {
          path: 'contacts',
          component: ContactPart
        },
        
      ]
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/toolbox',
      name: 'ToolBox',
      component: ToolBox
    },
    {
      path: '/schoollist',
      name: "SchoolList",
      component: SchoolList
    },
    {
      path: '/speciallist',
      name: "SpeciallList",
      component: SpeciallList
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/schools/:id',
      name: 'schools',
      component: School
    },
    {
      path: '/articles/:id',
      name: 'articles',
      component: Article
    },
    {
      path: '/userProfile/:id',
      name: 'userProfile',
      component: UserProfile,
      props:true
    },
    {
      path: '/post/:type',
      name: 'postmoment',
      component: PostMoment,
      props: true
    },
    {
      path: '/momentDetail/:moment_id',
      name: 'momentDetail',
      component: MomentDetail,
      props: true
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})