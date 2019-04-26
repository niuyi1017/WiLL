import axios from 'axios'
export function getSpecials() {
  const url = '/api/specials.json'
  return axios.get(url
  ).then((res) => {
    return Promise.resolve(res.data)
  })
}
