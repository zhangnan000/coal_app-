<template>
  <div>
    <w-header>挂牌详情</w-header>
    <div class="container">
      <!-- 挂牌信息 Start -->
      <div class="title">
        <span></span> 挂牌信息
      </div>
      <div class="brand-info">
        <div class="item">
          <p>挂牌公司</p>
          <p class="fc-black">{{detailInfo.CompanyName}}</p>
        </div>
        <div class="item">
          <p>挂牌方式</p>
          <p>{{detailInfo.ListingModel}}</p>
        </div>
        <div class="item">
          <p>挂牌类型</p>
          <p>{{detailInfo.Type}}</p>
        </div>
        <div class="line"></div>
        <div class="item">
          <p>有效期限</p>
          <p>{{detailInfo.BeginTimeString}} - <br>{{detailInfo.ExpirationTimeString}}</p>
        </div>
        <div class="line"></div>
        <div class="item">
          <p>挂牌数量</p>
          <p>{{detailInfo.CoalAmount}}·吨</p>
        </div>
        <div class="item">
          <p>最小摘牌数量</p>
          <p>{{detailInfo.MinimumDelisting}}·吨</p>
        </div>
        <div class="item">
          <p>剩余数量</p>
          <p>{{detailInfo.LeftAmount}}·吨</p>
        </div>
        <div class="line"></div>
        <div class="item">
          <p>价格类型</p>
          <p>{{detailInfo.PriceType}}</p>
        </div>
        <div class="item">
          <p>价格</p>
          <p> <span class="price">{{detailInfo.Price}}</span> ·元/吨</p>
        </div>
        <div class="line"></div>
        <div class="item">
          <p>交货方式</p>
          <p class="fc-black" >{{detailInfo.DeliveryMethod}}</p>
        </div>
        <div class="item">
          <p>交货地点</p>
          <p class="fc-black">{{detailInfo.DeliveryLocations}}</p>
        </div>
        <div class="line"></div>
        <div class="item">
          <p>备注</p>
          <p>{{detailInfo.Description}}</p>
        </div>
      </div>
      <!-- 挂牌信息 End -->
      <!-- 煤种信息 Start -->
      <div class="title">
        <span></span> 煤种信息
      </div>
      <div v-if="detailInfo.Quality" class="coal-info">
        <div v-if="detailInfo.Quality.CoalType == '焦炭'">
          <div class="item">
            <p>煤种类别</p>
            <p>{{detailInfo.Quality.CoalType}}</p>
          </div>
          <div class="item">
            <p>煤种名称</p>
            <p>{{detailInfo.Quality.CoalName}}</p>
          </div>
          <div class="item">
            <p>全水分(Mt)</p>
            <p>[{{detailInfo.Quality.CoalMt || '--'}},{{detailInfo.Quality.MaxCoalMt || '--'}}]</p>
          </div>
          <div class="item">
            <p>干燥基灰分(Ad)</p>
            <p>[{{detailInfo.Quality.CoalAd || '--'}},{{detailInfo.Quality.MaxCoalAd || '--'}}]</p>
          </div>
          <div class="item">
            <p>干燥基全硫(Std)</p>
            <p>[{{detailInfo.Quality.CoalSt_d || '--'}},{{detailInfo.Quality.MaxCoalSt_d || '--'}}]</p>
          </div>
          <div class="item">
            <p>干燥无灰基挥发分(Vdaf)</p>
            <p>[{{detailInfo.Quality.CoalVdaf || '--'}},{{detailInfo.Quality.MaxCoalVdaf || '--'}}]</p>
          </div>
          <div class="item">
            <p>抗碎强度(M25)</p>
            <p>[{{detailInfo.Quality.CoalM25 || '--'}},{{detailInfo.Quality.MaxCoalM25 || '--'}}]</p>
          </div>
          <div class="item">
            <p>热反应强度(CSR)</p>
            <p>[{{detailInfo.Quality.CoalCSR || '--'}},{{detailInfo.Quality.MaxCoalCSR || '--'}}]</p>
          </div>
          <div class="item">
            <p>固定含碳量</p>
            <p>[{{detailInfo.Quality.CoalFc || '--'}},{{detailInfo.Quality.MaxCoalFc || '--'}}]</p>
          </div>
          <div class="item">
            <p>耐磨强度(M10)</p>
            <p>[{{detailInfo.Quality.CoalM10 || '--'}},{{detailInfo.Quality.MaxCoalM10 || '--'}}]</p>
          </div>
        </div>
        <div v-if="detailInfo.Quality.CoalType == '动力煤'">
          <div class="item">
            <p>煤种类别</p>
            <p>{{detailInfo.Quality.CoalType}}</p>
          </div>
          <div class="item">
            <p>煤种名称</p>
            <p>{{detailInfo.Quality.CoalName}}</p>
          </div>
          <div class="item">
            <p>全水分(Mt)</p>
            <p>[{{detailInfo.Quality.CoalMt || '--'}},{{detailInfo.Quality.MaxCoalMt || '--'}}]</p>
          </div>
          <div class="item">
            <p>干燥基灰分(Ad)</p>
            <p>[{{detailInfo.Quality.CoalAd || '--'}},{{detailInfo.Quality.MaxCoalAd || '--'}}]</p>
          </div>
          <div class="item">
            <p>干燥基全硫(Std)</p>
            <p>[{{detailInfo.Quality.CoalSt_d || '--'}},{{detailInfo.Quality.MaxCoalSt_d || '--'}}]</p>
          </div>
          <div class="item">
            <p>干燥无灰基挥发分(Vdal)</p>
            <p>[{{detailInfo.Quality.CoalVdaf || '--'}},{{detailInfo.Quality.MaxCoalVdaf || '--'}}]</p>
          </div>
          <div class="item">
            <p>粒度</p>
            <p>[{{detailInfo.Quality.Granularity || '--'}},{{detailInfo.Quality.MaxGranularity || '--'}}]</p>
          </div>
            <div class="item">
            <p>低位发热量(Qnet,ar)</p>
            <p>[{{detailInfo.Quality.CoalQ || '--'}},{{detailInfo.Quality.MaxCoalQ || '--'}}]</p>
          </div>
        </div>
        <div v-if="detailInfo.Quality.CoalType == '炼焦煤'">
          <div class="item">
            <p>煤种类别</p>
            <p>{{detailInfo.Quality.CoalType}}</p>
          </div>
          <div class="item">
            <p>煤种名称</p>
            <p>{{detailInfo.Quality.CoalName}}</p>
          </div>
          <div class="item">
            <p>全水分(Mt)</p>
            <p>[{{detailInfo.Quality.CoalMt || '--'}},{{detailInfo.Quality.MaxCoalMt || '--'}}]</p>
          </div>
          <div class="item">
            <p>干燥基灰分(Ad)</p>
            <p>[{{detailInfo.Quality.CoalAd || '--'}},{{detailInfo.Quality.MaxCoalAd || '--'}}]</p>
          </div>
          <div class="item">
            <p>干燥基全硫(Std)</p>
            <p>[{{detailInfo.Quality.CoalSt_d || '--'}},{{detailInfo.Quality.MaxCoalSt_d || '--'}}]</p>
          </div>
          <div class="item">
            <p>干燥无灰基挥发分(Vdal)</p>
            <p>[{{detailInfo.Quality.CoalVdaf || '--'}},{{detailInfo.Quality.MaxCoalVdaf || '--'}}]</p>
          </div>
          <div class="item">
            <p>粘接指数(G)</p>
            <p>[{{detailInfo.Quality.CoalG || '--'}},{{detailInfo.Quality.CoalG || '--'}}]</p>
          </div>
          <div class="item">
            <p>胶质层最大厚度(Y)</p>
            <p>[{{detailInfo.Quality.CoalY || '--'}},{{detailInfo.Quality.MaxCoalY || '--'}}]</p>
          </div>
          <div class="item">
            <p>热反应强度(CSR)</p>
            <p>[{{detailInfo.Quality.CoalCSR || '--'}},{{detailInfo.Quality.MaxCoalCSR || '--'}}]</p>
          </div>
          <div class="item">
            <p>粒度</p>
            <p>[{{detailInfo.Quality.Granularity || '--'}},{{detailInfo.Quality.MaxGranularity || '--'}}]</p>
          </div>
          <div class="item">
            <p>回收率(CSR)</p>
            <p>[{{detailInfo.Quality.RecoveryRate || '--'}},{{detailInfo.Quality.MaxRecoveryRate || '--'}}]</p>
          </div>
        </div>
        <div v-if="detailInfo.Quality.CoalType == '无烟煤'">
          <div class="item">
            <p>煤种类别</p>
            <p>{{detailInfo.Quality.CoalType}}</p>
          </div>
          <div class="item">
            <p>煤种名称</p>
            <p>{{detailInfo.Quality.CoalName}}</p>
          </div>
          <div class="item">
            <p>全水分(Mt)</p>
            <p>[{{detailInfo.Quality.CoalMt || '--'}},{{detailInfo.Quality.MaxCoalMt || '--'}}]</p>
          </div>
          <div class="item">
            <p>干燥基灰分(Ad)</p>
            <p>[{{detailInfo.Quality.CoalAd || '--'}},{{detailInfo.Quality.MaxCoalAd || '--'}}]</p>
          </div>
          <div class="item">
            <p>干燥基全硫(Std)</p>
            <p>[{{detailInfo.Quality.CoalSt_d || '--'}},{{detailInfo.Quality.MaxCoalSt_d || '--'}}]</p>
          </div>
          <div class="item">
            <p>干燥无灰基挥发分(Vdaf)</p>
            <p>[{{detailInfo.Quality.CoalVdaf || '--'}},{{detailInfo.Quality.MaxCoalVdaf || '--'}}]</p>
          </div>
          <div class="item">
            <p>抗碎强度(M25)</p>
            <p>[{{detailInfo.Quality.CoalM25 || '--'}},{{detailInfo.Quality.MaxCoalM25 || '--'}}]</p>
          </div>
          <div class="item">
            <p>热反应强度(CSR)</p>
            <p>[{{detailInfo.Quality.CoalCSR || '--'}},{{detailInfo.Quality.MaxCoalCSR || '--'}}]</p>
          </div>
          <div class="item">
            <p>固定含碳量</p>
            <p>[{{detailInfo.Quality.CoalFc || '--'}},{{detailInfo.Quality.MaxCoalFc || '--'}}]</p>
          </div>
          <div class="item">
            <p>耐磨强度(M10)</p>
            <p>[{{detailInfo.Quality.CoalM10 || '--'}},{{detailInfo.Quality.MaxCoalM10 || '--'}}]</p>
          </div>
        </div>
        <div v-if="detailInfo.Quality.CoalType == '喷吹煤'">
          <div class="item">
            <p>煤种类别</p>
            <p>{{detailInfo.Quality.CoalType}}</p>
          </div>
          <div class="item">
            <p>煤种名称</p>
            <p>{{detailInfo.Quality.CoalName}}</p>
          </div>
          <div class="item">
            <p>全水分(Mt)</p>
            <p>[{{detailInfo.Quality.CoalMt || '--'}},{{detailInfo.Quality.MaxCoalMt || '--'}}]</p>
          </div>
          <div class="item">
            <p>干燥基灰分(Ad)</p>
            <p>[{{detailInfo.Quality.CoalAd || '--'}},{{detailInfo.Quality.MaxCoalAd || '--'}}]</p>
          </div>
          <div class="item">
            <p>干燥基全硫(Std)</p>
            <p>[{{detailInfo.Quality.CoalSt_d || '--'}},{{detailInfo.Quality.MaxCoalSt_d || '--'}}]</p>
          </div>
          <div class="item">
            <p>干燥无灰基挥发分(Vdal)</p>
            <p>[{{detailInfo.Quality.CoalVdaf || '--'}},{{detailInfo.Quality.MaxCoalVdaf || '--'}}]</p>
          </div>
          <div class="item">
            <p>哈氏可磨指数(HGI)</p>
            <p>[{{detailInfo.Quality.CoalHGI || '--'}},{{detailInfo.Quality.MaxCoalHGI || '--'}}]</p>
          </div>
          <div class="item">
            <p>低位发热量(Qnet,ar)</p>
            <p>[{{detailInfo.Quality.CoalQ || '--'}},{{detailInfo.Quality.MaxCoalQ || '--'}}]</p>
          </div>
        </div>
      </div>
      <button @click="handlePutBrand">我要摘牌</button>
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
        return this.$store.state.transation.putBrandInfo
      }
    },
    created(){
      this.$store.commit('SET_BRAND_ID',this.$route.params.id)
      this.$store.dispatch('GET_BRAND_INFO', this.$route.params.id)
    },
    methods: {
      handleGoBack () {
        this.$router.go(-1)
      },
      handlePutBrand () {
        this.$router.push({
          name: 'brandOrderDetail',
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
 @import '@/assets/css/transactionDetail.scss';
</style>
