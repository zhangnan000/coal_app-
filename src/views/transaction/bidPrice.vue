<template>
  <div>
    <!-- 竞价专区 -->
    <!-- 列表 -->
    <ul>
      <li v-for="(item, index) in bidPriceList" :key="index" >
        <router-link :to="{name:'bidPriceDetail', params:{id: item.Id}}">
        <div class="tip">
          <span class="type">销售</span>
          <p>{{item.ReleaseCompany}}</p>
        </div>
        <div class="content">
          <div class="coal-type">
            <span>{{item.CoalInfo.CoalType}}</span> · 煤种
          </div>
          <div class="price">
            <span>{{item.ReservePrice}}</span> · 元/吨
          </div>
          <div class="amount">
            <span>{{item.Amount}}</span> · 吨 · 交易数量
          </div>
          <div class="surplus-time">
            <p>{{item.AuctionEndTime | restTime}}</p>
            <p>剩余时间</p>
          </div>
        </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { getBidPriceList } from '@/api/transaction'
export default {
  data () {
    return {
      bidPriceList:[],
      listQuery:{
        limit: 5,
        offset: 0
      }
    }
  },
  created(){
    this.getList()
  },
  methods: {
    getList () {
      getBidPriceList(this.listQuery).then(({data}) => {
        this.bidPriceList = data.rows
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


