import axios from 'axios'
export function getSchools() {
  const url = '/api/schools.json'
  return axios.get(url
  ).then((res) => {
    return Promise.resolve(res.data)
  })
}
