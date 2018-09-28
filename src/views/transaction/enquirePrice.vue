<template>
  <div>
    <!-- 询比价专区 -->
    <!-- 列表 -->
    <ul>
      <li v-for="(item, index) in enquireList" :key="index">
        <router-link :to="{name:'enquirePriceDetail', params:{id: item.InquiryId}}">
        <div class="tip">
          <span class="type">销售</span>
          <p>浙江浙能富兴燃料有限公司</p>
        </div>
        <div class="content">
          <div class="coal-type">
            <span>{{item.CoalType}}</span> · 煤种
          </div>
          <div class="delivery-place">
            <span>{{item.DeliveryLocations}}</span> · 交割地
          </div>
          <div class="amount">
            <span>{{item.CoalAmount}}</span> · 吨 · 交易数量
          </div>
          <div class="surplus-time">
            <p>{{item.ExpirationTime | restTime}}</p>
            <p>剩余时间</p>
          </div>
        </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { getEnquireList } from '@/api/transaction'
export default {
  data () {
    return {
      enquireList:[],
      listQuery: {
        limit: 5,
        offset: 0,
      }
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      getEnquireList(this.listQuery).then(({data}) => {
        this.enquireList = data.rows
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/list.scss';
</style>

