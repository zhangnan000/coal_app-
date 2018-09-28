// 交易模块

import Axios from '@/utils/request'

// 获取询比价列表
const getEnquireList = query => {
  return Axios({
    url:'/InquiryPurchase/GetAllInquiryList',
    method: 'get',
    params: query
  })
}

// 获取询比价详情
const getEnquireDetail = inquiryId => {
  return Axios({
    url: '/InquiryPurchase/InquiryPurchaseDetailApp',
    method: 'get',
    params: { inquiryId }
  })
}

// 获取应单页详情 
const getReplyOrderDetail = query => {
  return Axios({
    url: '/InquiryPurchase/GetOfferDetail',
    method: 'get',
    params: query
  })
}
// 询价报价信息提交
const saveReplyOrder = data => {
  return Axios({
    url: '/InquiryPurchase/SaveOffer',
    method: 'post',
    data
  })
}
// 获取竞价列表 
const getBidPriceList = query => {
  return Axios({
    url: '/AuctionTransaction/GetAuctionList',
    method: 'get',
    params: query
  })
}

// 获取竞价详情页
const getBidPriceDetail = auctionId => {
  return Axios({
    url: '/AuctionTransaction/AuctionDetailForEdit',
    method: 'get',
    params: { auctionId }
  })
}

// 挂摘牌采购发布列表页
const getPutBrandBuyList = query => {
  return Axios({
    url: '/BuyArea/PagingBuyListings',
    method: 'get',
    params: query
  })
}
// 挂摘牌销售发布列表页
const getPutBrandSaleList = query => {
  return Axios({
    url:'/SaleArea/PagingSaleListings',
    method: 'get',
    params: query
  })
}
// 挂摘牌销售发布详情
const getPutBrandDeail = listingId => {
  return Axios({
    url: '/SaleArea/DetailApp',
    method: 'get',
    params: { listingId }
  })
}

// 摘牌下单接口
const confirmPutBrand = data => {
  return Axios({
    url: '/Delisting/DelistingAction',
    method: 'post',
    data
  })
}
export {
  getEnquireList,
  getEnquireDetail,
  getReplyOrderDetail,
  saveReplyOrder,
  getBidPriceList,
  getBidPriceDetail,
  getPutBrandBuyList,
  getPutBrandSaleList,
  getPutBrandDeail,
  confirmPutBrand,
}