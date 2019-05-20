import axios from './config'
export function getArticle(article_id) {
  const url = `/api/articles/${article_id}`
  return axios.get(url
  ).then((res) => {
    return Promise.resolve(res.data)
  })
}