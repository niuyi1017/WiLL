import axios from 'axios'
export function getComments() {
  const url = '/api/comments.json'
  return axios.get(url
  ).then((res) => {
    return Promise.resolve(res.data)
  })
}