import axios from 'axios'
export function getSpecials(page) {
  const url = `/api/specials?page=${page}`
  return axios.get(url
  ).then((res) => {
    return Promise.resolve(res.data)
  })
}
