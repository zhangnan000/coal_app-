import Axios from '@/utils/request'
const getBankInfo = () => {
  return Axios({
    url: '/Account/BankInfoByCompanyId',
    method: 'get'
  })
}

export {
  getBankInfo
}