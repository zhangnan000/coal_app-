
/**
 * validate email 验证邮箱
 * @param email
 * @returns {boolean}
 */
const validateEmail = email => {
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return reg.test(email)
}

const validateMobile = mobile => {
  const reg=/^[1][3,4,5,7,8][0-9]{9}$/;
  return reg.test(mobile)
}


export {
  validateEmail,
  validateMobile
}