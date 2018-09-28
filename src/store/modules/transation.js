import { getPutBrandDeail, getBidPriceDetail, getEnquireDetail } from '@/api/transaction'


export default {
  state: {
    id:'', // 挂摘牌查询详情
    putBrandInfo: {}, // 挂摘牌详情
    enquirePriceDetail: {
      auditLog: {},
      model: {
        coalTypeList: [],
        inquiryPurchase: {}
      }
    }, // 询价详情
    bidPriceDetail: {} // 竞价详情
  },
  mutations: {
    SET_BRAND_ID: (state, id) => {
      state.id = id
    },
    SET_BRAND_INFO: (state, data) => {
      state.putBrandInfo = data
    },
    SET_BID_INFO: (state, data) => {
      state.bidPriceDetail = data
    },
    SET_ENQUIRE_INFO: (state, data) => {
      state.enquirePriceDetail = data
    }
  },
  actions: {
    GET_BRAND_INFO ( {commit}, id ) {
      return new Promise((resolve, reject) => {
        getPutBrandDeail(id).then(({data}) => {
          commit('SET_BRAND_INFO',data)
          resolve(data)
        }).catch(err => {
          reject(err)
        }) 
      })
    },
    GET_BID_INFO ({commit}, id) {
      return new Promise((resolve, reject) => {
        getBidPriceDetail(id).then(({data}) => {
          commit('SET_BID_INFO',data)
          resolve(data)
        }).catch(err => {
          reject(err)
        })
      })
    },
    GET_ENQUIRE_INFO ({commit}, id) {
      return new Promise((resolve, reject) => {
        getEnquireDetail (id).then(({data}) => {
          commit('SET_ENQUIRE_INFO', data)
          resolve(data)
        }).catch(err => {
          reject(err)
        })
      })
    }
  },
}