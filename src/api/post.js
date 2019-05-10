import Maxios from './config'
export function getUploadSK() {
  const url = '/api/uploadsk'
  return Maxios.get(url
  ).then((res) => {
    return Promise.resolve(res.data)
  })
}
export function post(postUrl, postContent, recentlyMoment) {
  const url = postUrl
  const data = { postContent, recentlyMoment}
  return Maxios.post(url,
    data
  ).then((res) => {
    return Promise.resolve(res.data)
  })
}