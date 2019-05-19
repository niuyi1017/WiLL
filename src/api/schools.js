import Maxios from './config'
export function getSchools() {
  const url = '/api/schools'
  return Maxios.get(url
  ).then((res) => {
    return Promise.resolve(res.data)
  })
}
export function getSchoolsByScore(data) {
  const url = '/api/schoolsByScore'
  let config = {
    params: data
  }
  console.log(data)
  return Maxios.get(url, config
  ).then((res) => {
    return Promise.resolve(res.data)
  })
}
export function getSchoolsByRank(data) {
  const url = '/api/schoolsByRank'
  let config = {
    params: data
  }
  return Maxios.get(url, config
  ).then((res) => {
    return Promise.resolve(res.data)
  })
}
