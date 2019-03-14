import * as types from './mutation-types'

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
  [types.SET_ISSIGNIN](state, isSignin) {
    state.isSignin = isSignin
  },
}
export default mutations