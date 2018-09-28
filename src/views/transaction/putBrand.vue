<template>
  <div>
    <!-- 挂摘牌专区 -->
    <!-- 列表 -->
    <ul>
      <li v-for="(item, index) in list" :key="index" >
        <router-link :to="{name:'putBrandDetail', params:{id: item.ListingId}}">
          <div class="tip">
            <span class="type">销售</span>
            <p>{{item.CompanyName}}</p>
          </div>
          <div class="content">
            <div class="coal-type">
              <span>{{item.Quality.CoalType}}</span> · 煤种
            </div>
            <div class="price">
              <span>{{item.Price}}</span> · 元/吨
            </div>
            <div class="amount">
              <span>{{item.CoalAmount}}</span> · 吨 · 交易数量
            </div>
            <div class="surplus-time">
              <p>{{item.ExpirationTimeString | restTime}}</p>
              <p>剩余时间</p>
            </div>
            <div class="is-buy">
              已购买&nbsp;<a @click.prevent="handleLook" href="javascript:;">查看 ></a>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { getPutBrandBuyList } from '@/api/transaction'
  export default {
    data() {
      return {
        list: [],
        listQuery: {
          sortOrder: '交易',
          pageSize: 10,
          pageNumber: 1
        }
      }
    },
    created(){
      this.getList()
    },
    methods: {
      getList () {
        getPutBrandBuyList(this.listQuery).then(({data}) => {
          this.list = data.Rows
        })
      },
      handleLook(){
        console.log('点击查看')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/css/list.scss';
  .is-buy {
    position: absolute;
    bottom: 32px;
    right: 60px;
    color: #bdc1c3;
    a {
      color: #1e92ec;
    }
  }
</style>

