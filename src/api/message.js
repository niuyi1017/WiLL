import axios from 'axios'
export function getMessages() {
  const url = '/api/messages.json'
  return axios.get(url
  ).then((res) => {
    return Promise.resolve(res.data)
  })
}
export function getNotifications(uid) {
  const url = `/api/messages/notifications?uid=${uid}`
  return axios.get(url
  ).then((res) => {
    return Promise.resolve(res.data)
  })
}
export function getContacts() {
  const url = '/api/messages/contacts'
  return axios.get(url
  ).then((res) => {
    return Promise.resolve(res.data)
  })
}