import axios from './config'
export function getArticle(article_id) {
  const url = `/api/articles/${article_id}`
  return axios.get(url
  ).then((res) => {
    return Promise.resolve(res.data)
  })
}
export function articleLike(article_id, from, to, recentlyMoment, notification) {
  const url = '/api/article/like'
  const data = {
    article_id,
    from,
    to,
    recentlyMoment,
    notification
  }
  return axios.put(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
export function articleCancelLike(article_id, from, to, recentlyMoment) {
  const url = '/api/article/cancelLike'
  const data = {
    article_id,
    from,
    to,
    recentlyMoment
  }
  return axios.put(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}