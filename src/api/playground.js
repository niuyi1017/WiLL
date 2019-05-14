import axios from './config'
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
export function momentLike(moment_id,from,to,recentlyMoment) {
  const url = '/api/moment/like'
  const data = {
    moment_id,
    from,
    to,
    recentlyMoment
  } 
  return axios.put(url,data)
  .then((res) => {
    return Promise.resolve(res.data)
  })
}
export function momentCancelLike(moment_id, from, to, recentlyMoment) {
  const url = '/api/moment/cancelLike'
  const data = {
    moment_id,
    from,
    to,
    recentlyMoment
  }
  return axios.put(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}