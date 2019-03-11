import * as types from './mutation-types'

const mutations = {
  [types.SET_SHOWPOST](state, showPost) {
    state.showPost = showPost
  },
}
export default mutations