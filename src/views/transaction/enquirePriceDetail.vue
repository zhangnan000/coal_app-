<template>
  <div>
    <w-header>询价详情</w-header>
    <div class="container">
      <!-- 挂牌信息 Start -->
      <div class="title"> 
        <span></span> 挂牌信息
      </div>
      <div class="brand-info">
        <div class="item">
          <p>询价公司</p>
          <p class="fc-black">{{detailInfo.InquiryCompany}}</p>
        </div>
        <div class="item">
          <p>挂牌人联系方式</p>
          <p>{{detailInfo.Tel}}</p>
        </div>
        <div class="item">
          <p>报价截止时间</p>
          <p>{{detailInfo.InquiryTimeString}}</p>
        </div>
        <div class="line"></div>
        <div class="item">
          <p>交货时间</p>
          <p>{{detailInfo.DeliveryTimeString}}</p>
        </div>
        <div class="line"></div>
        <div class="item">
          <p>询价数量</p>
          <p>{{detailInfo.CoalAmount}}·吨</p>
        </div>
        <div class="line"></div>
        <div class="item">
          <p>当前状态</p>
          <p>{{detailInfo.State}}</p>
        </div>
        <div class="line"></div>
        <div class="item">
          <p>交货方式</p>
          <p class="fc-black" >{{detailInfo.DeliveryMethod ? detailInfo.DeliveryMethod.join() : ''}}</p>
        </div>
        <div class="item">
          <p>交货地点</p>
          <p class="fc-black">{{detailInfo.DeliveryLocation}}</p>
        </div>
        <div class="line"></div>
        <div class="item">
          <p>开户名称</p>
          <p>{{detailInfo.OpenAccount}}</p>
        </div>
        <div class="item">
          <p>开户银行</p>
          <p>{{detailInfo.Bank}}</p>
        </div>
        <div class="item">
          <p>银行账号</p>
          <p>{{detailInfo.AccountNumber}}</p>
        </div>
        <div class="line"></div>
        <div class="item">
          <p>保证金描述</p>
          <p>{{detailInfo.Description}}</p>
        </div>
        <div class="item">
          <p>违约条款</p>
          <p>{{detailInfo.Terms}}</p>
        </div>
        <div class="line"></div>
        <div class="item">
          <p>其他条款</p>
          <p>{{detailInfo.OtherTerm}}</p>
        </div>
        <div class="line"></div>
        <div class="item">
          <p>备注</p>
          <p>{{detailInfo.Description}}</p>
        </div>
      </div>
      <!-- 挂牌信息 End -->
    </div>
     <!-- 煤种信息 Start -->
      <div v-for="(item, index) in coalTypeList" :key="index" class="coal-type-list">
        <div class="title">
          <span></span> 煤种{{index + 1}}
        </div>
        <div class="item">
          <p>类型</p>
          <p>{{item.Quality.CoalType}}</p>
        </div>
        <div class="item">
          <p>名称</p>
          <p>{{item.Quality.CoalName}}</p>
        </div>
        <div class="item">
          <p>产地</p>
          <p>{{item.Origin}}</p>
        </div>
        <div class="item">
          <button @click="handleGoCoalInfo(index)">详情</button>
          <button>应单</button>
        </div>
      </div>
  </div>
</template>

<script>
  import { getPutBrandDeail } from '@/api/transaction'
  import Header from '@/components/common/header'
  export default {
    data () {
      return {
        // detailInfo: {},
      }
    },
    components: {
      'w-header': Header
    },
    computed: {
      detailInfo () {
        console.log(1)
        return this.$store.state.transation.enquirePriceDetail.model.inquiryPurchase
      },
      coalTypeList () {
        return this.$store.state.transation.enquirePriceDetail.model.coalTypeList
      }
    },
    created(){
      this.$store.dispatch('GET_ENQUIRE_INFO', this.$route.params.id)
    },
    methods: {
      handleGoCoalInfo (index) {
        this.$router.push({
          name: 'coalTypeInfo',
          params: {
            idx: index
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '@/assets/css/transactionDetail.scss';
.coal-type-list {
  padding: 0 20px;
  border-radius: 16px;
  margin-top: 10px;
  background-color: #fff;
  &:last-child {
    margin-bottom: 20px;
  }
  .item {
    font-size: 28px;
    height: 90px;
    display: flex;
    border-bottom: 1px solid #e6e6e6; /*no*/
    align-items: center;
    &:last-child {
      justify-content: space-between;
    }
    p:first-child {
      color: #1e92ec;
      width: 218px;
    }
    p:last-child {
      flex: 1
    }
    button {
      width: 348px;
      height: 50px;
      background-color: #1e92ec;
      border-radius: 8px;
    }
  }
}
</style>
