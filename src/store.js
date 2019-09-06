import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  position: '北京',
  userName: ''
}

const mutations = {
  setPosition (state, val) {
    state.position = val
  },
  setUserName (state, val) {
    state.userName = val
  }
}

// 根据经纬度获取到的地理位置信息渲染，异步的
const actions = {
  setPosition ({ commit }, val) {
    // 异步请求后端获取当前位置数据
    commit('setPosition', val)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
