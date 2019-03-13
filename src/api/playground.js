import axios from 'axios'
export function getPlayground() {
  const url = '/api/playground.json'
  return axios.get(url
  ).then((res) => {
    return Promise.resolve(res.data)
  })
}