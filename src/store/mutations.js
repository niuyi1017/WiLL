import * as types from './mutation-types'
/* eslint-disable */
const mutations = {
  [types.SET_SHOWPOST](state, showPost) {
    state.showPost = showPost
  },
  [types.SET_GALLERYIMGS](state, galleryImgs) {
    state.galleryImgs = galleryImgs
  },
  [types.SET_GALLERYINDEX](state, galleryIndex) {
    state.galleryIndex = galleryIndex
  },
  [types.SET_TOKEN](state, token) {
    state.token = token
    // try {
    //   localStorage.token = token
    // } catch (error) {
    //   console.log(error)
    // }
  },
  [types.SET_UID](state, uid) {
    state.uid = uid
    // try {
    //   localStorage.uid = uid
    // } catch (error) {
    //   console.log(error)
    // }
  },
  [types.SET_UPLOADSK](state, uploadSK) {
    state.uploadSK = uploadSK
    
  },
}
export default mutations