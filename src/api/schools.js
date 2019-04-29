import Maxios from './config'
export function getSchools() {
  const url = '/api/schools'
  return Maxios.get(url
  ).then((res) => {
    return Promise.resolve(res.data)
  })
}
