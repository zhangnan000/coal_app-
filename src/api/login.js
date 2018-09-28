import Axios from '@/utils/request'

// 用户登录
const login = params => {
  return Axios({
    url:'/Account/AppLogin',
    method: 'get',
    params
  })
}
// 获取用户信息
const getUserInfo = query => {
  return Axios({
    url: '/Account/GetUserInfo',
    method: 'get',
    params:query
  })
}
// 发送手机或邮箱验证码
const sendCode = account => {
  return Axios({
    url: '/Account/SendPwdValidation',
    method: 'post',
    data: { account }
  })
}
// 找回密码
const recoverPwd = data => {
  return Axios({
    url: '/Account/RecoverPwd',
    method: 'post',
    data
  })
}

// 找回密码发送验证码
const sendPwdCode = data => {
  return Axios({
    url: 'Account/SendPwdValidation',
    method: 'post',
    data
  })
}
export {
  login,
  getUserInfo,
  sendCode,
  recoverPwd,
  sendPwdCode
}