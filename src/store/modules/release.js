const state = {
  isSteptwo: false,
  enquiryInfo: { // 发布询价采购信息
    inquiryPurchase:{}, // 基础信息
    coalTypeList: [], // 煤种信息list
    type:'' // 状态 保存 0 提交 1 
  }
}

const getters = {
  isSteptwo: state => state.isSteptwo
}

const mutations = {
  isSteptwo(state, data) {
    if (data == 'steptwo') {
      state.isSteptwo = true
    } else {
      state.isSteptwo = false
    }
  },
  SET_ENQUIRY_PURCHASE(state, data) {
    state.enquiryInfo.inquiryPurchase = data
  },
  ADD_COALTYPE_LIST(state, data) {
    state.enquiryInfo.coalTypeList = data
  },
  SET_ENQUIRY_TYPE(state, data) {
    state.enquiryInfo.type = data
  }
}

const actions = {}
export default {
  state,
  getters,
  mutations,
  actions
}