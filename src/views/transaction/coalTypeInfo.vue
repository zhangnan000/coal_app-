<template>
  <div>
    <w-header>煤种详情</w-header>
    <div class="container">
      <div class="title">
        <span></span> 煤种信息
      </div>
      <div class="coal-info">
        <div v-if="coalTypeInfo.Quality.CoalType == '焦炭'">
          <div class="item">
            <p>煤种类别</p>
            <p>{{coalTypeInfo.Quality.CoalType}}</p>
          </div>
          <div class="item">
            <p>煤种名称</p>
            <p>{{coalTypeInfo.Quality.CoalName}}</p>
          </div>
          <div class="item">
            <p>全水分(Mt)</p>
            <p>[{{coalTypeInfo.Quality.CoalMt || '--'}},{{coalTypeInfo.Quality.MaxCoalMt || '--'}}]</p>
          </div>
          <div class="item">
            <p>干燥基灰分(Ad)</p>
            <p>[{{coalTypeInfo.Quality.CoalAd || '--'}},{{coalTypeInfo.Quality.MaxCoalAd || '--'}}]</p>
          </div>
          <div class="item">
            <p>干燥基全硫(Std)</p>
            <p>[{{coalTypeInfo.Quality.CoalSt_d || '--'}},{{coalTypeInfo.Quality.MaxCoalSt_d || '--'}}]</p>
          </div>
          <div class="item">
            <p>干燥无灰基挥发分(Vdaf)</p>
            <p>[{{coalTypeInfo.Quality.CoalVdaf || '--'}},{{coalTypeInfo.Quality.MaxCoalVdaf || '--'}}]</p>
          </div>
          <div class="item">
            <p>抗碎强度(M25)</p>
            <p>[{{coalTypeInfo.Quality.CoalM25 || '--'}},{{coalTypeInfo.Quality.MaxCoalM25 || '--'}}]</p>
          </div>
          <div class="item">
            <p>热反应强度(CSR)</p>
            <p>[{{coalTypeInfo.Quality.CoalCSR || '--'}},{{coalTypeInfo.Quality.MaxCoalCSR || '--'}}]</p>
          </div>
          <div class="item">
            <p>固定含碳量</p>
            <p>[{{coalTypeInfo.Quality.CoalFc || '--'}},{{coalTypeInfo.Quality.MaxCoalFc || '--'}}]</p>
          </div>
          <div class="item">
            <p>耐磨强度(M10)</p>
            <p>[{{coalTypeInfo.Quality.CoalM10 || '--'}},{{coalTypeInfo.Quality.MaxCoalM10 || '--'}}]</p>
          </div>
        </div>
        <div v-if="coalTypeInfo.Quality.CoalType == '动力煤'">
          <div class="item">
            <p>煤种类别</p>
            <p>{{coalTypeInfo.Quality.CoalType}}</p>
          </div>
          <div class="item">
            <p>煤种名称</p>
            <p>{{coalTypeInfo.Quality.CoalName}}</p>
          </div>
          <div class="item">
            <p>全水分(Mt)</p>
            <p>[{{coalTypeInfo.Quality.CoalMt || '--'}},{{coalTypeInfo.Quality.MaxCoalMt || '--'}}]</p>
          </div>
          <div class="item">
            <p>干燥基灰分(Ad)</p>
            <p>[{{coalTypeInfo.Quality.CoalAd || '--'}},{{coalTypeInfo.Quality.MaxCoalAd || '--'}}]</p>
          </div>
          <div class="item">
            <p>干燥基全硫(Std)</p>
            <p>[{{coalTypeInfo.Quality.CoalSt_d || '--'}},{{coalTypeInfo.Quality.MaxCoalSt_d || '--'}}]</p>
          </div>
          <div class="item">
            <p>干燥无灰基挥发分(Vdal)</p>
            <p>[{{coalTypeInfo.Quality.CoalVdaf || '--'}},{{coalTypeInfo.Quality.MaxCoalVdaf || '--'}}]</p>
          </div>
          <div class="item">
            <p>粒度</p>
            <p>[{{coalTypeInfo.Quality.Granularity || '--'}},{{coalTypeInfo.Quality.MaxGranularity || '--'}}]</p>
          </div>
            <div class="item">
            <p>低位发热量(Qnet,ar)</p>
            <p>[{{coalTypeInfo.Quality.CoalQ || '--'}},{{coalTypeInfo.Quality.MaxCoalQ || '--'}}]</p>
          </div>
        </div>
        <div v-if="coalTypeInfo.Quality.CoalType == '炼焦煤'">
          <div class="item">
            <p>煤种类别</p>
            <p>{{coalTypeInfo.Quality.CoalType}}</p>
          </div>
          <div class="item">
            <p>煤种名称</p>
            <p>{{coalTypeInfo.Quality.CoalName}}</p>
          </div>
          <div class="item">
            <p>全水分(Mt)</p>
            <p>[{{coalTypeInfo.Quality.CoalMt || '--'}},{{coalTypeInfo.Quality.MaxCoalMt || '--'}}]</p>
          </div>
          <div class="item">
            <p>干燥基灰分(Ad)</p>
            <p>[{{coalTypeInfo.Quality.CoalAd || '--'}},{{coalTypeInfo.Quality.MaxCoalAd || '--'}}]</p>
          </div>
          <div class="item">
            <p>干燥基全硫(Std)</p>
            <p>[{{coalTypeInfo.Quality.CoalSt_d || '--'}},{{coalTypeInfo.Quality.MaxCoalSt_d || '--'}}]</p>
          </div>
          <div class="item">
            <p>干燥无灰基挥发分(Vdal)</p>
            <p>[{{coalTypeInfo.Quality.CoalVdaf || '--'}},{{coalTypeInfo.Quality.MaxCoalVdaf || '--'}}]</p>
          </div>
          <div class="item">
            <p>粘接指数(G)</p>
            <p>[{{coalTypeInfo.Quality.CoalG || '--'}},{{coalTypeInfo.Quality.CoalG || '--'}}]</p>
          </div>
          <div class="item">
            <p>胶质层最大厚度(Y)</p>
            <p>[{{coalTypeInfo.Quality.CoalY || '--'}},{{coalTypeInfo.Quality.MaxCoalY || '--'}}]</p>
          </div>
          <div class="item">
            <p>热反应强度(CSR)</p>
            <p>[{{coalTypeInfo.Quality.CoalCSR || '--'}},{{coalTypeInfo.Quality.MaxCoalCSR || '--'}}]</p>
          </div>
          <div class="item">
            <p>粒度</p>
            <p>[{{coalTypeInfo.Quality.Granularity || '--'}},{{coalTypeInfo.Quality.MaxGranularity || '--'}}]</p>
          </div>
          <div class="item">
            <p>回收率(CSR)</p>
            <p>[{{coalTypeInfo.Quality.RecoveryRate || '--'}},{{coalTypeInfo.Quality.MaxRecoveryRate || '--'}}]</p>
          </div>
        </div>
        <div v-if="coalTypeInfo.Quality.CoalType == '无烟煤'">
          <div class="item">
            <p>煤种类别</p>
            <p>{{coalTypeInfo.Quality.CoalType}}</p>
          </div>
          <div class="item">
            <p>煤种名称</p>
            <p>{{coalTypeInfo.Quality.CoalName}}</p>
          </div>
          <div class="item">
            <p>全水分(Mt)</p>
            <p>[{{coalTypeInfo.Quality.CoalMt || '--'}},{{coalTypeInfo.Quality.MaxCoalMt || '--'}}]</p>
          </div>
          <div class="item">
            <p>干燥基灰分(Ad)</p>
            <p>[{{coalTypeInfo.Quality.CoalAd || '--'}},{{coalTypeInfo.Quality.MaxCoalAd || '--'}}]</p>
          </div>
          <div class="item">
            <p>干燥基全硫(Std)</p>
            <p>[{{coalTypeInfo.Quality.CoalSt_d || '--'}},{{coalTypeInfo.Quality.MaxCoalSt_d || '--'}}]</p>
          </div>
          <div class="item">
            <p>干燥无灰基挥发分(Vdaf)</p>
            <p>[{{coalTypeInfo.Quality.CoalVdaf || '--'}},{{coalTypeInfo.Quality.MaxCoalVdaf || '--'}}]</p>
          </div>
          <div class="item">
            <p>抗碎强度(M25)</p>
            <p>[{{coalTypeInfo.Quality.CoalM25 || '--'}},{{coalTypeInfo.Quality.MaxCoalM25 || '--'}}]</p>
          </div>
          <div class="item">
            <p>热反应强度(CSR)</p>
            <p>[{{coalTypeInfo.Quality.CoalCSR || '--'}},{{coalTypeInfo.Quality.MaxCoalCSR || '--'}}]</p>
          </div>
          <div class="item">
            <p>固定含碳量</p>
            <p>[{{coalTypeInfo.Quality.CoalFc || '--'}},{{coalTypeInfo.Quality.MaxCoalFc || '--'}}]</p>
          </div>
          <div class="item">
            <p>耐磨强度(M10)</p>
            <p>[{{coalTypeInfo.Quality.CoalM10 || '--'}},{{coalTypeInfo.Quality.MaxCoalM10 || '--'}}]</p>
          </div>
        </div>
        <div v-if="coalTypeInfo.Quality.CoalType == '喷吹煤'">
          <div class="item">
            <p>煤种类别</p>
            <p>{{coalTypeInfo.Quality.CoalType}}</p>
          </div>
          <div class="item">
            <p>煤种名称</p>
            <p>{{coalTypeInfo.Quality.CoalName}}</p>
          </div>
          <div class="item">
            <p>全水分(Mt)</p>
            <p>[{{coalTypeInfo.Quality.CoalMt || '--'}},{{coalTypeInfo.Quality.MaxCoalMt || '--'}}]</p>
          </div>
          <div class="item">
            <p>干燥基灰分(Ad)</p>
            <p>[{{coalTypeInfo.Quality.CoalAd || '--'}},{{coalTypeInfo.Quality.MaxCoalAd || '--'}}]</p>
          </div>
          <div class="item">
            <p>干燥基全硫(Std)</p>
            <p>[{{coalTypeInfo.Quality.CoalSt_d || '--'}},{{coalTypeInfo.Quality.MaxCoalSt_d || '--'}}]</p>
          </div>
          <div class="item">
            <p>干燥无灰基挥发分(Vdal)</p>
            <p>[{{coalTypeInfo.Quality.CoalVdaf || '--'}},{{coalTypeInfo.Quality.MaxCoalVdaf || '--'}}]</p>
          </div>
          <div class="item">
            <p>哈氏可磨指数(HGI)</p>
            <p>[{{coalTypeInfo.Quality.CoalHGI || '--'}},{{coalTypeInfo.Quality.MaxCoalHGI || '--'}}]</p>
          </div>
          <div class="item">
            <p>低位发热量(Qnet,ar)</p>
            <p>[{{coalTypeInfo.Quality.CoalQ || '--'}},{{coalTypeInfo.Quality.MaxCoalQ || '--'}}]</p>
          </div>
        </div>
      </div>
    </div>
    <button @click="handleReply" class="reply-order">应单</button>
  </div>
</template>

<script>
import Header from '@/components/common/header'
export default {
  data () {
    return {
    }
  },
  components: {
    'w-header': Header
  },
  computed: {
    coalTypeInfo() {
      return this.$store.state.transation.enquirePriceDetail.model.coalTypeList[this.$route.params.idx]
    }
  },
  methods: {
    handleReply () {
      this.$router.push({
        name: 'replyOrder',
        params:{
          idx: this.$route.params.idx
        }
      })
    }
  }
}
</script>


<style lang="scss" scoped>
  @import '@/assets/css/transactionDetail.scss';
  .reply-order {
    display: block;
    width: 710px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
