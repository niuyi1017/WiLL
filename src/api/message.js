import axios from 'axios'
export function getMessages() {
  const url = '/api/messages.json'
  return axios.get(url
  ).then((res) => {
    return Promise.resolve(res.data)
  })
}
export function getNotifications() {
  const url = '/api/notifications.json'
  return axios.get(url
  ).then((res) => {
    return Promise.resolve(res.data)
  })
}
export function getContacts() {
  const url = '/api/contacts.json'
  return axios.get(url
  ).then((res) => {
    return Promise.resolve(res.data)
  })
}