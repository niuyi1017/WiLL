import axios from './config'
export function postComment(comment, recentlyMoment, notification) {
  const url = '/api/comment'
  const data = { comment, recentlyMoment, notification}
  return axios.post(url,data,)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
/* eslint-disable */
export function postReply(reply, recentlyMoment, notification) {
  const url = '/api/comment/reply'
  const data = { reply, recentlyMoment, notification }
  return axios.post(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}