const routers=[
  {
    path: '/myOrder',
    name: 'myOrder',
    component: () => import('@/views/mine/my_order'),
    meta:{}
  },
  // 公告详情
  {
    path: '/publicNoticeDetail',
    name: 'publicNoticeDetail',
    component: () => import('@/views/info/public_notice_detail'),
    meta:{}
  },
  // 公告列表
  {
    path: '/publicNoticeList',
    name: 'publicNoticeList',
    component: () => import('@/views/info/public_notice_list'),
    meta:{}
  },
  // 行业快讯列表
  {
    path: '/industryList',
    name: 'industryList',
    component: () => import('@/views/info/industry_list'),
    meta:{}
  },
  // 行业快讯详情
  {
    path: '/industryDetail',
    name: 'industryDetail',
    component: () => import('@/views/info/industry_detail'),
    meta:{}
  },
  //我的订单详情
  {
    path:'/myOrderDetail',
    name:'myOrderDetail',
    component:()=>import('@/views/mine/my_order_detail'),
    meta:{}
  },
  //动态-（我的发布，我的报价）待审核
  {
    path:'/waitReview',
    name:'waitReview',
    component:()=>import('@/views/dynamic/wait_review'),
    meta:{}
  }
]

export default routers