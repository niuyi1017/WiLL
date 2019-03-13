import axios from 'axios'
export function getMessage() {
  const url = '/api/message.json'
  return axios.get(url
  ).then((res) => {
    return Promise.resolve(res.data)
  })
}