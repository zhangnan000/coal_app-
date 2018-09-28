const routers = [{
    path: '/',
    name: 'index',
    component: () =>
      import('@/views/index/index'),
    redirect: '/info',
    meta: {},
    children: [{
        path: '/info',
        name: 'info',
        component: () =>
          import('@/views/index/info'),
        meta: {},
      },
      {
        path: '/transaction',
        name: 'transaction',
        component: () =>
          import('@/views/index/transaction'),
        meta: {},
        redirect: '/transaction/putBrand',
        children: [{
            path: '/transaction/bidPrice',
            name: 'bidPrice',
            component: () =>
              import('@/views/transaction/bidPrice')
          },
          {
            path: '/transaction/enquirePrice',
            name: 'enquirePrice',
            component: () =>
              import('@/views/transaction/enquirePrice')
          },
          {
            path: '/transaction/putBrand',
            name: 'putBrand',
            component: () =>
              import('@/views/transaction/putBrand')
          },
        ]
      },
      {
        path: '/release',
        name: 'release',
        component: () =>
          import('@/views/index/release'),
        meta: {}
      },
      {
        path: '/dynamic',
        name: 'dynamic',
        component: () =>
          import('@/views/index/dynamic'),
        meta: {}
      },
      {
        path: '/mine',
        name: 'mine',
        component: () =>
          import('@/views/index/mine'),
        meta: {}
      },
      {
        path: '/sell',
        name: 'sell',
        component: () =>
          import('@/views/release/sell'),
        meta: {}
      },
      {
        path: '/enquiry',
        name: 'enquiry',
        component: () =>
          import('@/views/release/enquiry'),
        meta: {},
        children: [{
            path: '/stepone',
            name: 'stepone',
            component: () =>
              import('@/views/release/stepone'),
            meta: {},
          },
          {
            path: '/steptwo',
            name: 'steptwo',
            component: () =>
              import('@/views/release/steptwo'),
            meta: {},
          }
        ],
        redirect: '/stepone' 
      },
      {
        path: '/purchase',
        name: 'purchase',
        component: () =>
          import('@/views/release/purchase'),
        meta: {}
      },
      {
        path: '/bidding',
        name: 'bidding',
        component: () =>
          import('@/views/release/bidding'),
        meta: {}
      },
      {
        path: '/success',
        name: 'success',
        component: () =>
          import('@/views/release/success'),
        meta: {}
      }
    ],
  },
  {
    path: '/putBrandDetail/:id',
    name: 'putBrandDetail',
    component: () =>
      import('@/views/transaction/putBrandDetail')
  },
  {
    path: '/bidPriceDetail/:id',
    name: 'bidPriceDetail',
    component: () => import('@/views/transaction/bidPriceDetail')
  },
  {
    path: '/bidPriceOrder',
    name: 'bidPriceOrder',
    component: () => import('@/views/transaction/bidPriceOrder')
  },
  {
    path: '/enquirePriceDetail/:id',
    name: 'enquirePriceDetail',
    component: () => import('@/views/transaction/enquirePriceDetail')
  },
  {
    path: '/brandOrderDetail',
    name: 'brandOrderDetail',
    component: () =>
      import('@/views/transaction/orderDetail'),
  },
  {
    path: '/coalTypeInfo/:idx',
    name: 'coalTypeInfo',
    component: () => import('@/views/transaction/coalTypeInfo'),
  },
  {
    path: '/replyOrder',
    name: 'replyOrder',
    component: () => import('@/views/transaction/replyOrder'),
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import('@/views/login/login'),
  },
  {
    path: '/findPwd',
    name: 'findPwd',
    component: () =>
      import('@/views/login/findPwd'),
  },
  {
    path: '/resetSuccess',
    name: 'resetSuccess',
    component: () =>
      import('@/views/login/resetSuccess'),
  },
  {
    path: '/registerReady',
    name: 'registerReady',
    component: () =>
      import('@/views/login/registerReady'),
  },
  {
    path: '/register',
    name: 'register',
    component: () =>
      import('@/views/login/register'),
  },
  {
    path: '/fillInfo',
    name: 'fillInfo',
    component: () =>
      import('@/views/login/fillInfo'),
  },
  {
    path: '/uploadMterials',
    name: 'uploadMterials',
    component: () =>
      import('@/views/login/uploadMterials'),
  },
  {
    path: '/submited',
    name: 'submited',
    component: () =>
      import('@/views/login/submited'),
  },
]


export default routers