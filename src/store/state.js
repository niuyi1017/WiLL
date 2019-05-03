/* eslint-disable */
let token = null
try {
  if(localStorage.token){
    token = localStorage.token
  }
} catch (error) {
  console.log(error)
}

let uid = null
try {
  if (localStorage.uid) {
    uid = localStorage.uid
  }
} catch (error) {
  console.log(error)
}

let following = []
try {
  if (localStorage.following) {
    following = localStorage.following
  }
} catch (error) {
  console.log(error)
}

const state = {
  showPost: false,
  galleryImgs: [],
  galleryIndex: 0,
  isSignin: false,
  token,
  uid,
  uploadSK: null,
  following
}
export default state