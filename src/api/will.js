import axios from 'axios'
export function getWill() {
  const url = '/api/will.json'
  return axios.get(url
  ).then((res) => {
    return Promise.resolve(res.data)
  })
}
