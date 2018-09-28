export default {
  brandMode() {
    let arr = [{
        name: '信誉挂牌',
        value: 1
      },
      {
        name: '仓单挂牌',
        value: 2
      }
    ]
    return arr;
  },
  brandFixed() {
    let arr = [{
        name: '定向挂牌',
        value: 1
      },
      {
        name: '非定向挂牌',
        value: 2
      }
    ]
    return arr;
  },
  coalType() {
    let arr = [{
        name: '焦炭',
        value: 1
      },
      {
        name: '无烟煤',
        value: 2
      },
      {
        name: '喷吹煤',
        value: 3
      },
      {
        name: '动力煤',
        value: 4
      },
      {
        name: '炼焦煤',
        value: 5
      }
    ]
    return arr
  },
  priceType() {
    let arr = [{
        name: '商议',
        value: 1
      },
      {
        name: '具体价格',
        value: 2
      },
      {
        name: '指数挂钩',
        value: 3
      }
    ]
    return arr
  },
  sellMode() {
    let arr = [{
        name: '坑口交货',
        value: 1
      },
      {
        name: '车板交货',
        value: 2
      },
      {
        name: '平仓交货',
        value: 3
      },
      {
        name: '场地交货',
        value: 4
      },
      {
        name: '到场(港)交货',
        value: 5
      }
    ]
    return arr;
  },
  biddingType() {
    let arr = [{
        name: '采购',
        value: 1
      },
      {
        name: '销售',
        value: 2
      }
    ]
    return arr
  },
  // 煤种指标参数
  coalNorm() {
    let obj = {
      // 无烟煤
      noSmoke: [{
        name: '干燥基灰分(Ad)',
        minValue: '',
        maxValue: '',
        id: 1,
      }, {
        name: '干燥无灰基挥发份(Vdaf)',
        minValue: '',
        maxValue: '',
        id: 2,
      }, {
        name: '干燥基全硫(St.d)',
        minValue: '',
        maxValue: '',
        id: 3,
      }, {
        name: '全水份(Mt)',
        minValue: '',
        maxValue: '',
        id: 4,
      }, {
        name: '低位发热量(Qnet,ar)',
        minValue: '',
        maxValue: '',
        id: 5,
      }],
      // 喷吹煤
      blowing: [{
        name: '干燥基灰分(Ad)',
        minValue: '',
        maxValue: '',
        id: 6,
      }, {
        name: '干燥无灰基挥发份(Vdaf)',
        minValue: '',
        maxValue: '',
        id: 7,
      }, {
        name: '干燥基全硫(St.d)',
        minValue: '',
        maxValue: '',
        id: 8,
      }, {
        name: '全水份(Mt)',
        minValue: '',
        maxValue: '',
        id: 9,
      }, {
        name: '低位发热量(Qnet,ar)',
        minValue: '',
        maxValue: '',
        id: 10,
      }, {
        name: '哈氏可磨指数(HGI)',
        minValue: '',
        maxValue: '',
        id: 11,
      }],
      //炼焦煤
      coking: [{
          name: '干燥基灰分(Ad)',
          minValue: '',
          maxValue: '',
          id: 12,
        },
        // {
        //   name: '粉结指数(G)',
        //   minValue: '',
        //   maxValue: '',
        //   id: 13,
        // },
        {
          name: '干燥基全硫(St.d)',
          minValue: '',
          maxValue: '',
          id: 14,
        },
        {
          name: '全水份(Mt)',
          minValue: '',
          maxValue: '',
          id: 15,
        },
        {
          name: '胶质层最大厚度(Y)',
          minValue: '',
          maxValue: '',
          id: 16,
        },
        {
          name: '热反应强度(CSR)',
          minValue: '',
          maxValue: '',
          id: 17,
        },
        {
          name: '干燥无灰基挥发份(Vdaf)',
          minValue: '',
          maxValue: '',
          id: 18,
        },
        {
          name: '粒度',
          minValue: '',
          maxValue: '',
          id: 19,
        },
        {
          name: '回收率',
          minValue: '',
          maxValue: '',
          id: 20,
        }
      ],
      // 焦炭
      coke: [{
          name: '干燥基灰分(Ad)',
          minValue: '',
          maxValue: '',
          id: 21,
        },
        {
          name: '干燥基全硫(St.d)',
          minValue: '',
          maxValue: '',
          id: 22,
        },
        {
          name: '抗碎强度(M25)',
          minValue: '',
          maxValue: '',
          id: 23,
        },
        {
          name: '干燥无灰基挥发份(Vdaf)',
          minValue: '',
          maxValue: '',
          id: 24,
        },
        {
          name: '热反应强度(CSR)',
          minValue: '',
          maxValue: '',
          id: 25,
        },
        {
          name: '固定碳含量',
          minValue: '',
          maxValue: '',
          id: 26,
        },
        {
          name: '耐磨强度',
          minValue: '',
          maxValue: '',
          id: 27,
        },
        {
          name: '全水份',
          minValue: '',
          maxValue: '',
          id: 28,
        }
      ],
      // 动力煤
      power: [{
          name: '干燥基灰分(Ad)',
          minValue: '',
          maxValue: '',
          id: 29,
        },
        {
          name: '低位发热量(Qnet,ar)',
          minValue: '',
          maxValue: '',
          id: 30,
        },
        {
          name: '干燥基全硫(St.d)',
          minValue: '',
          maxValue: '',
          id: 31,
        },
        {
          name: '全水份',
          minValue: '',
          maxValue: '',
          id: 32,
        }, {
          name: '干燥无灰基挥发份(Vdaf)',
          minValue: '',
          maxValue: '',
          id: 33,
        },
        {
          name: '粒度',
          minValue: '',
          maxValue: '',
          id: 34,
        },
        {
          name: '灰熔点(ST)',
          minValue: '',
          maxValue: '',
          id: 35,
        }
      ]
    }
    return obj
  }

}