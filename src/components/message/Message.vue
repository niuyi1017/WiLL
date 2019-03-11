<template>
  <div class="message">
    <tab @changeTab="changeTab" :menu="menu"/>
    <notification-part :notifications="notifications"
                        v-show="mode=='notifications'"/>
    <message-part :messages="messages"
                  v-show="mode=='message'"/>
    <contact-part :contacts="contacts"
                    v-if="mode=='contacts'"/>
    <tab-bar/>
  </div>
</template>
<script>
import Tab from '@/base/tab/tab'
import NotificationPart from '@/base/notification-part/notification-part'
import MessagePart from '@/base/message-part/message-part'
import ContactPart from '@/base/contact-part/contact-part'
import TabBar from '@/components/tabBar/tabBar'
export default {
  name: 'message',
  components: {
    Tab,
    NotificationPart,
    MessagePart,
    ContactPart,
    TabBar
  },
  data() {
    return {
      mode: 'notifications',
      menu: [
        {
          modeName: 'notifications',
          text: '通知'
        },
        {
          modeName: 'message',
          text: '消息'
        },
        {
          modeName: 'contacts',
          text: '同窗'
        }
      ],
      notifications: [
        {
          date: '今天',
          notifications: [
            {
              isRead: false,
              isSystemMsg: false,
              isFollow: false,
              isFriends: false,
              avatar: '',
              username: '一只小小白',
              message: '赞了你的文章',
              postTime: '17 mins ago',
              articlePic: ''
            },
            {
              isRead: false,
              isSystemMsg: false,
              isFollow: false,
              isFriends: false,
              avatar: '',
              username: '一只小小白',
              message: '评论了你的文章',
              postTime: '17 mins ago',
              articlePic: ''
            },
            {
              isRead: false,
              isSystemMsg: false,
              isFollow: false,
              isFriends: false,
              avatar: '',
              username: '一只小小白',
              message: '收藏了你的文章',
              postTime: '17 mins ago',
              articlePic: ''
            },
            {
              isRead: false,
              isSystemMsg: true,
              isFollow: false,
              isFriends: false,
              avatar: '',
              username: '',
              message: '你的文章被推荐到热门',
              postTime: '17 mins ago',
              articlePic: ''
            }  
          ]
        },
        {
          date: '昨天',
          notifications: [
            {
              isRead: false,
              isSystemMsg: false,
              isFollow: true,
              isFriends: false,
              avatar: '',
              username: '一只小小白',
              message: '关注了你',
              postTime: '17 mins ago',
              articlePic: ''
            },
            {
              isRead: false,
              isSystemMsg: false,
              isFollow: false,
              isFriends: false,
              avatar: '',
              username: '一只小小白',
              message: '赞了你的文章',
              postTime: '17 mins ago',
              articlePic: ''
            },
            {
              isRead: false,
              isSystemMsg: false,
              isFollow: false,
              isFriends: false,
              avatar: '',
              username: '一只小小白',
              message: '赞了你的文章',
              postTime: '17 mins ago',
              articlePic: ''
            },
            {
              isRead: false,
              isSystemMsg: false,
              isFollow: false,
              isFriends: false,
              avatar: '',
              username: '一只小小白',
              message: '赞了你的文章',
              postTime: '17 mins ago',
              articlePic: ''
            }  
          ]
        },
        {
          date: '前天',
          notifications: [
            {
              isRead: false,
              isSystemMsg: false,
              isFollow: false,
              isFriends: false,
              avatar: '',
              username: '一只小小白',
              message: '赞了你的文章',
              postTime: '17 mins ago',
              articlePic: ''
            },
            {
              isRead: false,
              isSystemMsg: false,
              isFollow: false,
              isFriends: false,
              avatar: '',
              username: '一只小小白',
              message: '赞了你的文章',
              postTime: '17 mins ago',
              articlePic: ''
            },
            {
              isRead: false,
              isSystemMsg: false,
              isFollow: false,
              isFriends: false,
              avatar: '',
              username: '一只小小白',
              message: '赞了你的文章',
              postTime: '17 mins ago',
              articlePic: ''
            },
            {
              isRead: false,
              isSystemMsg: false,
              isFollow: false,
              isFriends: false,
              avatar: '',
              username: '一只小小白',
              message: '赞了你的文章',
              postTime: '17 mins ago',
              articlePic: ''
            }  
          ]
        },
        {
          date: '更早',
          notifications: [
            {
              isRead: false,
              isSystemMsg: false,
              isFollow: false,
              isFriends: false,
              avatar: '',
              username: '一只小小白',
              message: '赞了你的文章',
              postTime: '17 mins ago',
              articlePic: ''
            },
            {
              isRead: false,
              isSystemMsg: false,
              isFollow: false,
              isFriends: false,
              avatar: '',
              username: '一只小小白',
              message: '赞了你的文章',
              postTime: '17 mins ago',
              articlePic: ''
            },
            {
              isRead: false,
              isSystemMsg: false,
              isFollow: false,
              isFriends: false,
              avatar: '',
              username: '一只小小白',
              message: '赞了你的文章',
              postTime: '17 mins ago',
              articlePic: ''
            },
            {
              isRead: false,
              isSystemMsg: false,
              isFollow: false,
              isFriends: false,
              avatar: '',
              username: '一只小小白',
              message: '赞了你的文章',
              postTime: '17 mins ago',
              articlePic: ''
            }  
          ]
        }
        
      ],
      messages: [
        {
          username: '一只小小白',
          time: '12 mins ago',
          desc: '学长你好，我也想学物联网工程专业，想请教你点问题',
          num: 1
        },
        {
          username: '一只小小白',
          time: '12 mins ago',
          desc: '学长你好，我也想学物联网工程专业，想请教你点问题',
          num: 12
        },
        {
          username: '一只小小白',
          time: '12 mins ago',
          desc: '学长你好，我也想学物联网工程专业，想请教你点问题',
          num: 12
        },
        {
          username: '一只小小白',
          time: '12 mins ago',
          desc: '学长你好，我也想学物联网工程专业，想请教你点问题',
          num: 12
        },
        {
          username: '一只小小白',
          time: '12 mins ago',
          desc: '学长你好，我也想学物联网工程专业，想请教你点问题',
          num: 12
        },
        {
          username: '一只小小白',
          time: '12 mins ago',
          desc: '学长你好，我也想学物联网工程专业，想请教你点问题',
          num: 12
        },
        {
          username: '一只小小白',
          time: '12 mins ago',
          desc: '学长你好，我也想学物联网工程专业，想请教你点问题',
          num: 12
        },
        {
          username: '一只小小白',
          time: '12 mins ago',
          desc: '学长你好，我也想学物联网工程专业，想请教你点问题',
          num: 12
        },
        {
          username: '一只小小白',
          time: '12 mins ago',
          desc: '学长你好，我也想学物联网工程专业，想请教你点问题',
          num: 12
        },
        {
          username: '一只小小白',
          time: '12 mins ago',
          desc: '学长你好，我也想学物联网工程专业，想请教你点问题',
          num: 12
        },
        {
          username: '一只小小白',
          time: '12 mins ago',
          desc: '学长你好，我也想学物联网工程专业，想请教你点问题',
          num: 12
        },
        {
          username: '一只小小白',
          time: '12 mins ago',
          desc: '学长你好，我也想学物联网工程专业，想请教你点问题',
          num: 12
        },
        {
          username: '一只小小白',
          time: '12 mins ago',
          desc: '学长你好，我也想学物联网工程专业，想请教你点问题',
          num: 12
        },
        {
          username: '一只小小白',
          time: '12 mins ago',
          desc: '学长你好，我也想学物联网工程专业，想请教你点问题',
          num: 12
        },
        {
          username: '一只小小白',
          time: '12 mins ago',
          desc: '学长你好，我也想学物联网工程专业，想请教你点问题',
          num: 12
        },
        {
          username: '一只小小白',
          time: '12 mins ago',
          desc: '学长你好，我也想学物联网工程专业，想请教你点问题',
          num: 12
        },
        {
          username: '一只小小白',
          time: '12 mins ago',
          desc: '学长你好，我也想学物联网工程专业，想请教你点问题',
          num: 12
        },
        {
          username: '一只小小白',
          time: '12 mins ago',
          desc: '学长你好，我也想学物联网工程专业，想请教你点问题',
          num: 12
        }
      ],
      contacts: [
        {
          title: '常用',
          items: [
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            }

          ]
        },
        {
          title: 'A',
          items: [
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            }

          ]
        },
        {
          title: 'B',
          items: [
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            }

          ]
        },
        {
          title: 'C',
          items: [
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            }

          ]
        },
        {
          title: 'D',
          items: [
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            }

          ]
        },
        {
          title: 'E',
          items: [
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            }
          ]
        },
         {
          title: 'F',
          items: [
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            }

          ]
        },
        {
          title: 'G',
          items: [
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            }

          ]
        },
        {
          title: 'H',
          items: [
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            }

          ]
        },
        {
          title: 'I',
          items: [
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            }

          ]
        },
        {
          title: 'J',
          items: [
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            }

          ]
        },
        {
          title: 'K',
          items: [
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            },
            {
              avatar: '',
              name: '一只小小白'
            }
          ]
        }
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

</style>
