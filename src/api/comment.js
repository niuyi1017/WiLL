import axios from './config'
export function postComment(comment) {
  const url = '/api/comment'
  const data = { comment}
  return axios.post(url,data,)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}