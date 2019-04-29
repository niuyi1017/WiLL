/* eslint-disable */
import axios from 'axios'
export function getUser() {
  const url = '/api/user.json'
  return axios.get(url
  ).then((res) => {
    return Promise.resolve(res.data)
  })
}
export function signIn(phoneNumber,password) {
  const url = '/api/signIn'
  const data = {
    phoneNumber,
    password
  }
  console.log(data)
  return axios.post(url, data)
    .then((res) => {
    return Promise.resolve(res.data)
  })
}
export function signUp(phoneNumber, password) {
  const url = '/api/signIn'
  const data = {
    phoneNumber,
    password
  }
 
  return axios.post(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}