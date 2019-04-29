import axios from 'axios'
export function getWill() {
  const url = '/api/will'
  return axios.get(url
  ).then((res) => {
    return Promise.resolve(res.data)
  })
}
