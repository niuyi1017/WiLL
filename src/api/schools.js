import Maxios from './config'
export function getSchools(page) {
  const url = `/api/schools?page=${page}`
  return Maxios.get(url
  ).then((res) => {
    return Promise.resolve(res.data)
  })
}
export function getSchoolsByScore(data,page) {
  const url = `/api/schoolsByScore?page=${page}`
  let config = {
    params: data
  }
  return Maxios.get(url, config
  ).then((res) => {
    return Promise.resolve(res.data)
  })
}
export function getSchoolsByRank(data,page) {
  const url = `/api/schoolsByRank?page=${page}`
  let config = {
    params: data
  }
  return Maxios.get(url, config
  ).then((res) => {
    return Promise.resolve(res.data)
  })
}
