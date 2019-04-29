/* eslint-disable */
let token = null
// try {
//   if(localStorage.token){
//     token = localStorage.token
//   }
// } catch (error) {
//   console.log(error)
// }

let uid = null
// try {
//   if (localStorage.uid) {
//     token = localStorage.uid
//   }
// } catch (error) {
//   console.log(error)
// }

const state = {
  showPost: false,
  galleryImgs: [],
  galleryIndex: 0,
  isSignin: false,
  token,
  uid,
  uploadSK: null
}
export default state