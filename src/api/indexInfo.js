import Axios from '@/utils/request'

// 成交信息
const getDealInfo = () => {
  return Axios({
    url: 'Home/DealedAmount',
    method: 'get'
  })
}

// 获取航运指数
const getShipData = () => {
  return Axios({
    url: '/Home/GetShipIndexData',
    method: 'get'
  })
}

// 平台公告

const getPlantformNotice = query => {
  return Axios({
    url: '/Announcement/AllAnnouncement',
    method: 'get',
    params: query
  })
}

// 平台公告详情
const getNoticeDetail = id => {
  return Axios({
    url: '/Announcement/AnnouncementDetailAtApp',
    method: 'get',
    params: { id }
  })
}

// 行业资讯
const getIndustryNews = query => {
  return Axios({
    url: '/News/GetAllNews',
    method: 'get',
    params: query
  })
}
//竞价专区、成交展示
const getAlldata=()=>{
  return Axios({
    url:'/Home/GetAllData',
    method:'get'
  })
}
//公告详情
const publicDetail=id=>{
  return Axios({
    url:'/Announcement/AnnouncementDetailAtApp',
    method:'get',
    params: {id}
  })
}
//资讯详情
const newsDetail=id=>{
  return Axios({
    url:'/News/NewsDetailAtApp',
    method:'get',
    params: {id}
  })
}
export {
  getDealInfo,
  getShipData,
  getPlantformNotice,
  getNoticeDetail,
  getIndustryNews,
  getAlldata,
  publicDetail,
  newsDetail
}