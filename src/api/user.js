/* eslint-disable */
import axios from 'axios'
export function getUser(uid) {
  const url = `/api/user/${uid}`
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
  return axios.post(url, data)
    .then((res) => {
    return Promise.resolve(res.data)
  })
}
export function signUp(phoneNumber,username, password) {
  const url = '/api/signUp'
  const data = {
    phoneNumber,
    username,
    password
  }
 
  return axios.post(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
export function userFollow(from, to) {
  const url = '/api/user/follow'
  const data = {
    from,
    to
  }
  return axios.post(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}