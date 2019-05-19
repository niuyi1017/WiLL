import * as types from './mutation-types'

export const openGallery = function ({ commit },{galleryImgs,index}) {
  commit(types.SET_GALLERYIMGS, galleryImgs)
  commit(types.SET_GALLERYINDEX, index)
}
export const closeGallery = function ({ commit }) {
  commit(types.SET_GALLERYIMGS,[])
  commit(types.SET_GALLERYINDEX,0)
}
export const signInSuccess = function ({ commit }, { token, uid,avatar,username, following, favour, like,recentlyMoments}){
  commit(types.SET_TOKEN,token)
  commit(types.SET_UID, uid)
  commit(types.SET_AVATAR, avatar)
  commit(types.SET_USERNAME, username)
  commit(types.SET_FOLLOWING, following)
  commit(types.SET_FAVOUR, favour)
  commit(types.SET_LIKE, like)
  commit(types.SET_RECENTLY_MOMENTS, recentlyMoments)
}
export const setUserFollow = function ({ commit }, { following, recentlyMoment}) {
  commit(types.PUSH_FOLLOWING, following)
  commit(types.PUSH_RECENTLY_MOMENTS, recentlyMoment)
}
export const pushRecentlyMoment = function ({ commit }, recentlyMoment) {
  commit(types.PUSH_RECENTLY_MOMENTS, recentlyMoment)
}
export const pushLike = function ({ commit }, moment_id) {
  commit(types.PUSH_LIKE, moment_id)
}
export const pullRecentlyMoment = function ({ commit }, recentlyMoment) {
  commit(types.PULL_RECENTLY_MOMENTS, recentlyMoment)
}
export const pullLike = function ({ commit }, moment_id) {
  commit(types.PULL_LIKE, moment_id)
}

export const setMomentData = function ({ commit }, momentDada) {
  commit(types.SET_MOMENTDATA, momentDada)
}
export const setChoolSchools = function ({ commit }, chooseSchools) {
  commit(types.SET_CHOOSESCHOOLS, chooseSchools)
}