import Axios from '@/utils/request'

const sendEmailCode = targetEmail => {
  return Axios({
    url: '/Account/SendValidateEmail',
    method: 'post',
    data: { targetEmail }
  })
}
// 普通会员注册
const conmmonMember = data => {
  return Axios({
    url: '/Account/RegisterAction',
    method: 'post',
    data
  })
}

// 交易会员注册
const transactionMember = data => {
  return Axios({
    url: '/Account/CompanyRegisterAction',
    method: 'post',
    data
  })
}

// 校验邮箱是否已被注册
const checkEmail = email => {
  return Axios({
    url: '/Account/CheckEmailRegistered',
    method: 'get',
    params: { email }
  })
}

export {
  sendEmailCode,
  conmmonMember,
  transactionMember,
  checkEmail
}