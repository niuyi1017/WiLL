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
    try {
      localStorage.token = token
    } catch (error) {
      console.log(error)
    }
  },
  [types.SET_UID](state, uid) {
    state.uid = uid
    // try {
    //   localStorage.uid = uid
    // } catch (error) {
    //   console.log(error)
    // }
  },
  [types.SET_AVATAR](state, avatar) {
    state.avatar = avatar
    // try {
    //   localStorage.avatar = avatar
    // } catch (error) {
    //   console.log(error)
    // }
  },
  [types.SET_USERNAME](state, username) {
    state.username = username
    // try {
    //   localStorage.username = username
    // } catch (error) {
    //   console.log(error)
    // }
  },
  [types.SET_UPLOADSK](state, uploadSK) {
    state.uploadSK = uploadSK
    
  },
  [types.SET_FOLLOWING](state, following) {
    state.following = following
    try {
      localStorage.following =  JSON.stringify(following)
    } catch (error) {
      console.log(error)
    }
  },
  [types.SET_RECENTLY_MOMENTS](state, recentlyMoments) {
    state.recentlyMoments = recentlyMoments
    try {
      localStorage.recentlyMoments = JSON.stringify(recentlyMoments)
    } catch (error) {
      console.log(error)
    }
  },
  [types.PUSH_FOLLOWING](state, following) {
    console.log(following)
    state.following.push(following)
    try {
      let locaFollowing = JSON.parse(localStorage.getItem('following'));
      locaFollowing.push(following)
      
      localStorage.following = JSON.stringify(locaFollowing)
    } catch (error) {
      console.log(error)
    }
    console.log(state.following)
  },
  [types.SET_FAVOUR](state, favour) {
    state.favour = favour
    try {
      localStorage.favour = JSON.stringify(favour)
    } catch (error) {
      console.log(error)
    }
  },
  [types.SET_LIKE](state, like) {
    state.like = like
    try {
      localStorage.like = JSON.stringify(like)
    } catch (error) {
      console.log(error)
    }
  },

  [types.PUSH_RECENTLY_MOMENTS](state, recentlyMoment) {
    state.recentlyMoments.push(recentlyMoment)
    try {
      let localRecentlyMoments = JSON.parse(localStorage.getItem('recentlyMoments'));
      localRecentlyMoments.push(recentlyMoment)
      localStorage.recentlyMoments = JSON.stringify(localRecentlyMoments)
    } catch (error) {
      console.log(error)
    }
  },
  [types.PULL_RECENTLY_MOMENTS](state, recentlyMoment) {
    state.recentlyMoments.splice(state.recentlyMoments.indexOf(recentlyMoment),1)
    try {
      let localRecentlyMoments = JSON.parse(localStorage.getItem('recentlyMoments'));
      localRecentlyMoments.splice(localRecentlyMoments.indexOf(recentlyMoment),1)
      localStorage.recentlyMoments = JSON.stringify(localRecentlyMoments)
    } catch (error) {
      console.log(error)
    }
  },
  [types.PUSH_LIKE](state, moment_id) {
    state.like.moment.push(moment_id)
    try {
      let like = JSON.parse(localStorage.getItem('like'))
      like.moment.push(moment_id)
      localStorage.like = JSON.stringify(like)
    } catch (error) {
      console.log(error)
    }
  },
  [types.PULL_LIKE](state, moment_id) {
    state.like.moment.splice(state.like.moment.indexOf(moment_id), 1)
    try {
      let like = JSON.parse(localStorage.getItem('like'));
      like.moment.splice(like.moment.indexOf(moment_id), 1)
      localStorage.like = JSON.stringify(like)
    } catch (error) {
      console.log(error)
    }
  },
  [types.SET_MOMENTDATA](state, momentData) {
    state.momentData = momentData
  },

  [types.SET_CHOOSESCHOOLS](state, chooseSchools) {
    state.chooseSchools = chooseSchools
  },
}
export default mutations