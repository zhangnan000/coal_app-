import { login } from '@/api/login'
import md5 from 'js-md5'
export default {
  state: {
    token:'',
    userInfo: {},
    loginInfo:{
      account:'',
      pwd:''
    },
    registerInfo: {
      Account: '',
      Password: '',
      ConfirmPassword: '',
      CompanyName: '',
      LegalPerson: '',
      SocialCreditCode: '',
      Tel: '',
      LicenseId: '',
      CorporateIDcard: '',
      AuthorizedIDcard: '',
      AuthorizationId: '',
      ApplicationId: '',
      EmailCode: '',
      RegisterName: '',
      RegisterTel: ''
    },
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USER_INFO: (state, data) => {
      state.userInfo = data
    },
    SET_LOGIN_INFO: (state, data) => {
      state.loginInfo.account = data.account
      state.loginInfo.pwd = md5(data.pwd)
    },
    SET_REGISTER_INFO: (state, data) => {
      Object.assign(state.registerInfo, data)
    },
    SET_FILL_INFO: (state, data) => {
      Object.assign(state.registerInfo, data) 
    },
    SET_UPLOAD_INFO: (state, data) => {
      Object.assign(state.registerInfo, data)
    },
    SET_RECOVER_INFO: (state, data) => {
      Object.assign(state.recoverInfo, data)
    }
  },
  actions: {
    LOGIN: ({commit, state}) => {
      return new Promise((resolve, reject) => {
        login(state.loginInfo).then(({data}) => {
          if(data.Flag) {
            console.log(1)
            commit('SET_TOKEN', data.Message)
            localStorage.setItem('token', data.Message)
            resolve()
          }else {
            console.log(2)
            reject(data.Message)
          }
        }).catch(err => {
          reject(err)
        })
      }) 
    },
    GET_USER_INFO: ({commit, state}) => {
      return new Promise((resolve, reject) => {
        getUserInfo(state.loginInfo).then(({data}) => {
          commit('SET_USER_INFO', data)
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}