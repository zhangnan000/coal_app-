<template>
  <div>
    <w-header>竞价详情</w-header>
    <div class="container">
      <!-- 挂牌信息 Start -->
      <div class="title">
        <span></span> 挂牌信息
      </div>
      <div class="brand-info">
        <div class="item">
          <p>挂牌公司</p>
          <p class="fc-black">{{detailInfo.ReleaseCompany}}</p>
        </div>
        <div class="item">
          <p>挂牌人姓名</p>
          <p>{{detailInfo.ReleaseUserName}}</p>
        </div>
        <div class="item">
          <p>挂牌人联系方式</p>
          <p>{{detailInfo.ReleaseUserPhone}}</p>
        </div>
        <div class="line"></div>
        <div class="item">
          <p>挂单创建时间</p>
          <p>{{detailInfo.CreateTimeString}}</p>
        </div>
        <div class="item">
          <p>竞价截止时间</p>
          <p>{{detailInfo.AuctionEndTime}}</p>
        </div>
        <div class="line"></div>
        <div class="item">
          <p>竞价总数量</p>
          <p>{{detailInfo.Amount}}·吨</p>
        </div>
        <div class="line"></div>
        <div class="item">
          <p>竞拍最低价</p>
          <p> <span class="price">{{detailInfo.Price}}</span> ·元/吨</p>
        </div>
        <div class="line"></div>
        <div class="item">
          <p>交货方式</p>
          <p class="fc-black" >{{detailInfo.DeliveryMethod}}</p>
        </div>
        <div class="item">
          <p>交货地点</p>
          <p class="fc-black">{{detailInfo.DeliveryLocation}}</p>
        </div>
        <div class="item">
          <p>产地</p>
          <p class="fc-black">{{detailInfo.Origin}}</p>
        </div>
        <div class="line"></div>
        <div class="item">
          <p>竞价类型</p>
          <p class="fc-black">{{detailInfo.AuctionType}}</p>
        </div>
        <div class="item">
          <p>审核状态</p>
          <p class="fc-black">{{detailInfo.State}}</p>
        </div>
        <div class="line"></div>
        <div class="item">
          <p>竞价违约条款</p>
          <p>{{detailInfo.Terms}}</p>
        </div>
        <div class="item">
          <p>备注</p>
          <p>{{detailInfo.Remark}}</p>
        </div>
      </div>
      <!-- 挂牌信息 End -->
      <!-- 煤种信息 Start -->
      <div class="title">
        <span></span> 煤种信息
      </div>
      <div v-if="detailInfo.CoalInfo" class="coal-info">
        <div v-if="detailInfo.CoalInfo.CoalType == '焦炭'">
          <div class="item">
            <p>煤种类别</p>
            <p>{{detailInfo.CoalInfo.CoalType}}</p>
          </div>
          <div class="item">
            <p>煤种名称</p>
            <p>{{detailInfo.CoalInfo.CoalName}}</p>
          </div>
          <div class="item">
            <p>全水分(Mt)</p>
            <p>[{{detailInfo.CoalInfo.CoalMt || '--'}},{{detailInfo.CoalInfo.MaxCoalMt || '--'}}]</p>
          </div>
          <div class="item">
            <p>干燥基灰分(Ad)</p>
            <p>[{{detailInfo.CoalInfo.CoalAd || '--'}},{{detailInfo.CoalInfo.MaxCoalAd || '--'}}]</p>
          </div>
          <div class="item">
            <p>干燥基全硫(Std)</p>
            <p>[{{detailInfo.CoalInfo.CoalSt_d || '--'}},{{detailInfo.CoalInfo.MaxCoalSt_d || '--'}}]</p>
          </div>
          <div class="item">
            <p>干燥无灰基挥发分(Vdaf)</p>
            <p>[{{detailInfo.CoalInfo.CoalVdaf || '--'}},{{detailInfo.CoalInfo.MaxCoalVdaf || '--'}}]</p>
          </div>
          <div class="item">
            <p>抗碎强度(M25)</p>
            <p>[{{detailInfo.CoalInfo.CoalM25 || '--'}},{{detailInfo.CoalInfo.MaxCoalM25 || '--'}}]</p>
          </div>
          <div class="item">
            <p>热反应强度(CSR)</p>
            <p>[{{detailInfo.CoalInfo.CoalCSR || '--'}},{{detailInfo.CoalInfo.MaxCoalCSR || '--'}}]</p>
          </div>
          <div class="item">
            <p>固定含碳量</p>
            <p>[{{detailInfo.CoalInfo.CoalFc || '--'}},{{detailInfo.CoalInfo.MaxCoalFc || '--'}}]</p>
          </div>
          <div class="item">
            <p>耐磨强度(M10)</p>
            <p>[{{detailInfo.CoalInfo.CoalM10 || '--'}},{{detailInfo.CoalInfo.MaxCoalM10 || '--'}}]</p>
          </div>
        </div>
        <div v-if="detailInfo.CoalInfo.CoalType == '动力煤'">
          <div class="item">
            <p>煤种类别</p>
            <p>{{detailInfo.CoalInfo.CoalType}}</p>
          </div>
          <div class="item">
            <p>煤种名称</p>
            <p>{{detailInfo.CoalInfo.CoalName}}</p>
          </div>
          <div class="item">
            <p>全水分(Mt)</p>
            <p>[{{detailInfo.CoalInfo.CoalMt || '--'}},{{detailInfo.CoalInfo.MaxCoalMt || '--'}}]</p>
          </div>
          <div class="item">
            <p>干燥基灰分(Ad)</p>
            <p>[{{detailInfo.CoalInfo.CoalAd || '--'}},{{detailInfo.CoalInfo.MaxCoalAd || '--'}}]</p>
          </div>
          <div class="item">
            <p>干燥基全硫(Std)</p>
            <p>[{{detailInfo.CoalInfo.CoalSt_d || '--'}},{{detailInfo.CoalInfo.MaxCoalSt_d || '--'}}]</p>
          </div>
          <div class="item">
            <p>干燥无灰基挥发分(Vdal)</p>
            <p>[{{detailInfo.CoalInfo.CoalVdaf || '--'}},{{detailInfo.CoalInfo.MaxCoalVdaf || '--'}}]</p>
          </div>
          <div class="item">
            <p>粒度</p>
            <p>[{{detailInfo.CoalInfo.Granularity || '--'}},{{detailInfo.CoalInfo.MaxGranularity || '--'}}]</p>
          </div>
            <div class="item">
            <p>低位发热量(Qnet,ar)</p>
            <p>[{{detailInfo.CoalInfo.CoalQ || '--'}},{{detailInfo.CoalInfo.MaxCoalQ || '--'}}]</p>
          </div>
        </div>
        <div v-if="detailInfo.CoalInfo.CoalType == '炼焦煤'">
          <div class="item">
            <p>煤种类别</p>
            <p>{{detailInfo.CoalInfo.CoalType}}</p>
          </div>
          <div class="item">
            <p>煤种名称</p>
            <p>{{detailInfo.CoalInfo.CoalName}}</p>
          </div>
          <div class="item">
            <p>全水分(Mt)</p>
            <p>[{{detailInfo.CoalInfo.CoalMt || '--'}},{{detailInfo.CoalInfo.MaxCoalMt || '--'}}]</p>
          </div>
          <div class="item">
            <p>干燥基灰分(Ad)</p>
            <p>[{{detailInfo.CoalInfo.CoalAd || '--'}},{{detailInfo.CoalInfo.MaxCoalAd || '--'}}]</p>
          </div>
          <div class="item">
            <p>干燥基全硫(Std)</p>
            <p>[{{detailInfo.CoalInfo.CoalSt_d || '--'}},{{detailInfo.CoalInfo.MaxCoalSt_d || '--'}}]</p>
          </div>
          <div class="item">
            <p>干燥无灰基挥发分(Vdal)</p>
            <p>[{{detailInfo.CoalInfo.CoalVdaf || '--'}},{{detailInfo.CoalInfo.MaxCoalVdaf || '--'}}]</p>
          </div>
          <div class="item">
            <p>粘接指数(G)</p>
            <p>[{{detailInfo.CoalInfo.CoalG || '--'}},{{detailInfo.CoalInfo.CoalG || '--'}}]</p>
          </div>
          <div class="item">
            <p>胶质层最大厚度(Y)</p>
            <p>[{{detailInfo.CoalInfo.CoalY || '--'}},{{detailInfo.CoalInfo.MaxCoalY || '--'}}]</p>
          </div>
          <div class="item">
            <p>热反应强度(CSR)</p>
            <p>[{{detailInfo.CoalInfo.CoalCSR || '--'}},{{detailInfo.CoalInfo.MaxCoalCSR || '--'}}]</p>
          </div>
          <div class="item">
            <p>粒度</p>
            <p>[{{detailInfo.CoalInfo.Granularity || '--'}},{{detailInfo.CoalInfo.MaxGranularity || '--'}}]</p>
          </div>
          <div class="item">
            <p>回收率(CSR)</p>
            <p>[{{detailInfo.CoalInfo.RecoveryRate || '--'}},{{detailInfo.CoalInfo.MaxRecoveryRate || '--'}}]</p>
          </div>
        </div>
        <div v-if="detailInfo.CoalInfo.CoalType == '无烟煤'">
          <div class="item">
            <p>煤种类别</p>
            <p>{{detailInfo.CoalInfo.CoalType}}</p>
          </div>
          <div class="item">
            <p>煤种名称</p>
            <p>{{detailInfo.CoalInfo.CoalName}}</p>
          </div>
          <div class="item">
            <p>全水分(Mt)</p>
            <p>[{{detailInfo.CoalInfo.CoalMt || '--'}},{{detailInfo.CoalInfo.MaxCoalMt || '--'}}]</p>
          </div>
          <div class="item">
            <p>干燥基灰分(Ad)</p>
            <p>[{{detailInfo.CoalInfo.CoalAd || '--'}},{{detailInfo.CoalInfo.MaxCoalAd || '--'}}]</p>
          </div>
          <div class="item">
            <p>干燥基全硫(Std)</p>
            <p>[{{detailInfo.CoalInfo.CoalSt_d || '--'}},{{detailInfo.CoalInfo.MaxCoalSt_d || '--'}}]</p>
          </div>
          <div class="item">
            <p>干燥无灰基挥发分(Vdaf)</p>
            <p>[{{detailInfo.CoalInfo.CoalVdaf || '--'}},{{detailInfo.CoalInfo.MaxCoalVdaf || '--'}}]</p>
          </div>
          <div class="item">
            <p>抗碎强度(M25)</p>
            <p>[{{detailInfo.CoalInfo.CoalM25 || '--'}},{{detailInfo.CoalInfo.MaxCoalM25 || '--'}}]</p>
          </div>
          <div class="item">
            <p>热反应强度(CSR)</p>
            <p>[{{detailInfo.CoalInfo.CoalCSR || '--'}},{{detailInfo.CoalInfo.MaxCoalCSR || '--'}}]</p>
          </div>
          <div class="item">
            <p>固定含碳量</p>
            <p>[{{detailInfo.CoalInfo.CoalFc || '--'}},{{detailInfo.CoalInfo.MaxCoalFc || '--'}}]</p>
          </div>
          <div class="item">
            <p>耐磨强度(M10)</p>
            <p>[{{detailInfo.CoalInfo.CoalM10 || '--'}},{{detailInfo.CoalInfo.MaxCoalM10 || '--'}}]</p>
          </div>
        </div>
        <div v-if="detailInfo.CoalInfo.CoalType == '喷吹煤'">
          <div class="item">
            <p>煤种类别</p>
            <p>{{detailInfo.CoalInfo.CoalType}}</p>
          </div>
          <div class="item">
            <p>煤种名称</p>
            <p>{{detailInfo.CoalInfo.CoalName}}</p>
          </div>
          <div class="item">
            <p>全水分(Mt)</p>
            <p>[{{detailInfo.CoalInfo.CoalMt || '--'}},{{detailInfo.CoalInfo.MaxCoalMt || '--'}}]</p>
          </div>
          <div class="item">
            <p>干燥基灰分(Ad)</p>
            <p>[{{detailInfo.CoalInfo.CoalAd || '--'}},{{detailInfo.CoalInfo.MaxCoalAd || '--'}}]</p>
          </div>
          <div class="item">
            <p>干燥基全硫(Std)</p>
            <p>[{{detailInfo.CoalInfo.CoalSt_d || '--'}},{{detailInfo.CoalInfo.MaxCoalSt_d || '--'}}]</p>
          </div>
          <div class="item">
            <p>干燥无灰基挥发分(Vdal)</p>
            <p>[{{detailInfo.CoalInfo.CoalVdaf || '--'}},{{detailInfo.CoalInfo.MaxCoalVdaf || '--'}}]</p>
          </div>
          <div class="item">
            <p>哈氏可磨指数(HGI)</p>
            <p>[{{detailInfo.CoalInfo.CoalHGI || '--'}},{{detailInfo.CoalInfo.MaxCoalHGI || '--'}}]</p>
          </div>
          <div class="item">
            <p>低位发热量(Qnet,ar)</p>
            <p>[{{detailInfo.CoalInfo.CoalQ || '--'}},{{detailInfo.CoalInfo.MaxCoalQ || '--'}}]</p>
          </div>
        </div>
      </div>
      <button @click="handleBidPrice">我要竞价</button>
    </div>
  </div>
</template>

<script>
  import { getPutBrandDeail } from '@/api/transaction'
  import Header from '@/components/common/header'
  export default {
    data () {
      return {}
    },
    components: {
      'w-header': Header
    },
    computed: {
      detailInfo () {
        return this.$store.state.transation.bidPriceDetail
      }
    },
    created(){
      this.$store.dispatch('GET_BID_INFO', this.$route.params.id)
    },
    methods: {
      handleBidPrice () {
        this.$router.push({
          name: 'bidPriceOrder',
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/css/transactionDetail.scss';
</style>
