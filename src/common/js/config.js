export const momentMode = {
  post: 0,
  like: 1,
  comment: 2,
  favorite: 3,
  follow: 4,
  reply: 5
}
export const momentModeStr = ["发布了", "赞了", "评论了", "收藏了", "赞了","关注了","回复了"]
export const contentType = {
  article: 0,
  question: 1,
  comment: 2,
  answer: 3,
  moment: 4
}
export const contentTypeStr = ["文章", "问题", "评论", "回答", "同学圈"]
export const searchResultType = {
  school: 0,
  major: 1,
  user: 2,
  article: 3,
  moment: 4
}
export const searchResultTypeStr = ["学校", "专业", "同学", "文章", "动态"]
export const diffColor = [
  {
    background: '#EE4540'
  },
  {
    background: '#47b39d'
  },
  {
    background: '#ffc253'
  },
  {
    background: '#2db7f5'
  },
  {
    background: '#eb6b56'
  },
  {
    background: '#f18c8e'
  },
  {
    background: '#AC13D0'
  },
  {
    background: '#EF3D59'
  },
  {
    background: '#5ac4c3'
  },
  {
    background: '#AC13D0'
  }
]
export function getRandomColor() {
  let index = Math.floor(Math.random()*10)
  return diffColor[index]
}
