import Axios from '@/utils/request.js'

// 发布采购挂牌信息

const releaseBuyInfo = data => {
  return Axios({
    url: '/Listing/ReleaseListing',
    method: 'post',
    data
  })
}

// 发布销售挂牌信息
const releaseSaleInfo = data => {
  return Axios({
    url:'/Listing/ReleaseListing',
    method:'post',
    data: data
  })
}

// 获取定向挂牌时采购对象公司列表
const getCompanyList = () => {
  return Axios({
    url:'/Account/GetCompanyListForSelect2',
    method: 'get'
  })
}

// 获取煤种类别名称
const getCoalType = () => {
  return Axios({
    url: '/InfoMaintain/GetCoalTypeName',
    method: 'get',
  })
}

// 获取交货方式
const getDeliveryMode = () => {
  return Axios({
    url: '/InfoMaintain/GetDeliveryMethodName',
    method: 'get'
  })
}

// 发布询价采购
const releaseEnquiryInfo = data => {
  return Axios({
    url: '/InquiryPurchase/AddInquiryPurchase',
    method: 'post',
    data
  })
}

// 发布竞价信息
const releaseBidInfo = data => {
  return Axios({
    url: 'AuctionTransaction/AuctionListing',
    method: 'post',
    data
  })
}

export {
  releaseBuyInfo,
  getCompanyList,
  getCoalType,
  getDeliveryMode,
  releaseSaleInfo,
  releaseEnquiryInfo,
  releaseBidInfo
}
