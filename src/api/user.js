import axios from 'axios'
export function getUser() {
  const url = '/api/user.json'
  return axios.get(url
  ).then((res) => {
    return Promise.resolve(res.data)
  })
}