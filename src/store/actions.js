import * as types from './mutation-types'

export const openGallery = function ({ commit },{galleryImgs,index}) {
  commit(types.SET_GALLERYIMGS, galleryImgs)
  commit(types.SET_GALLERYINDEX, index)
}
export const closeGallery = function ({ commit }) {
  commit(types.SET_GALLERYIMGS,[])
  commit(types.SET_GALLERYINDEX,0)
}
export const signInSuccess = function ({commit}, {token,uid}){
  commit(types.SET_TOKEN,token)
  commit(types.SET_UID, uid)
}