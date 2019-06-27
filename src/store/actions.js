/*vuex的actions模块*/
import { reqAddress, reqCategorys, reqShops, reqUser } from '../api'
import { RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS, RECEIVE_USER_INFO, RESET_USER_INFO } from './mutation-types'

export default {
  // 异步获取地址
  async getAddress ({commit,state}) {
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS,{address})
    }
  },
  // 获取分类列表
  async getCategorys({commit}) {
    const result = await reqCategorys()
    if (result.code === 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS,{categorys})
    }
  },
  // 获取商家列表
  async getShops ({commit,state}) {
    const {latitude,longitude} = state
    const result = await reqShops({latitude,longitude})
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS,{shops})
    }
  },
  // 记录用户信息
  recordUserInfo({commit},userInfo) {
    commit(RECEIVE_USER_INFO,{userInfo})
  },
  // 异步获取用户信息
  async getUserInfo ({commit}) {
    const result = await reqUser()
    if (result.code === 0) {
      const userInfo = result.data
      commit(RECEIVE_USER_INFO,{userInfo})
    }
  },
  // 退出登录
  async logout({commit}) {
    const result = await reqLogout()
    if (result.code === 0) {
      commit(RESET_USER_INFO)
    }
  }

}
