import Maxios from './config'
export function getUploadSK() {
  const url = '/api/uploadsk'
  return Maxios.get(url
  ).then((res) => {
    return Promise.resolve(res.data)
  })
}
export function post(postUrl, postContent) {
  const url = postUrl
  const data = postContent
  return Maxios.post(url,
    data
  ).then((res) => {
    return Promise.resolve(res.data)
  })
}