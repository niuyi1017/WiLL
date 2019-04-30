import axios from 'axios'
export function getQaList() {
  const url = '/api/qaList.json'
  return axios.get(url
  ).then((res) => {
    return Promise.resolve(res.data)
  })
}
export function getMomentList() {
  const url = '/api/moments'
  return axios.get(url
  ).then((res) => {
    return Promise.resolve(res.data)
  })
}