<template>
  <div >
    <div class="big_box">
    <div class="tab">
      <div class="active">
        <a href="javascript:;">我的发布</a>
      </div>
      <div>
        <a href="javascript:;">我的报价</a>
      </div>
    </div>
    <div class="filter">
      <div :class='item.isActive?"active":""' @click="switch_status(item.orderStatus)" v-for="(item,key) in switch_list" :key='key'>{{item.text}}</div>
    </div>
    </div>
    <scroller lock-x height="600px" @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" :scroll-bottom-offst="100">
      <div class="box2">
         <ul>
          <li v-for="(item,key) in release_list" :key='key'>
            <div class="coal-type">
              <span class="classify">{{item.ListType}}</span>
              <span>{{item.CoalType}}</span> · 煤种
            </div>
            <div class="price">
            <span>{{item.Price}}</span> · 元/吨
            </div>
            <div class="amount">
              <span>{{item.CoalAmount}}</span> · 吨 · 交易数量
            </div>
            <div class="surplus-time">
              <p>提交时间</p>
            <p>{{item.ReleaseTime}}</p>
            </div>
        </li>
    </ul>
        <load-more tip="loading"></load-more>
      </div>
    </scroller>
    <!-- 列表页 -->
    <!-- <ul @scroll="handleScroll()">
      <li v-for="(item,key) in release_list" :key='key'>
        <div class="coal-type">
          <span class="classify">{{item.ListType}}</span>
          <span>{{item.CoalType}}</span> · 煤种
        </div>
        <div class="price">
          <span>{{item.Price}}</span> · 元/吨
        </div>
        <div class="amount">
          <span>{{item.CoalAmount}}</span> · 吨 · 交易数量
        </div>
        <div class="surplus-time">
          <p>提交时间</p>
          <p>{{item.ReleaseTime}}</p>
        </div>
      </li>
    </ul> -->
  </div>
</template>

<script>
import { Scroller, LoadMore } from "vux";
import { myReleaseList } from "@/api/mine";
export default {
  name: "dynamic",
  data() {
    return {
      dataValue: {
        limit: 10,
        offset: 0,
        stateValue: -1
      },
      release_list: {},
      switch_list: [
        { text: "待审核", isActive: true, orderStatus: -1 },
        { text: "已发布", isActive: false, orderStatus: 0 },
        { text: "已成交", isActive: false, orderStatus: 1 }
      ],
      onFetching: false
    };
  },
  components: {
    Scroller,
    LoadMore
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    this.get_release_list();
  },
  methods: {
    // 我的发布列表页
    get_release_list() {
      myReleaseList(this.dataValue)
        .then(({ data }) => {
          if (this.dataValue.offset == 0) {
            this.release_list = data.rows;
          } else {
            if (data.rows != []) {
              let list = [];
              list = this.release_list.concat(data.rows);
              this.release_list = list;
            }
          }
        })
        .catch(err => {});
    },
    switch_status(key) {
      this.dataValue.offset = 0;
      this.switch_list.forEach(el => {
        el.isActive = false;
        if (el.orderStatus == key) {
          el.isActive = true;
        }
      });
      this.dataValue.stateValue = key;
      this.get_release_list();
    },
    onScrollBottom() {
      if (this.onFetching) {
        // this.onFetching=false;
        // do nothing
      } else {
        this.onFetching = true;
        let pageSize = this.dataValue.offset;
        this.dataValue.offset += 10;
        setTimeout(() => {
          this.get_release_list();
          this.onFetching = false;
        }, 1500);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/base.scss";
.box2 {
  padding-bottom: 100px;
}
.big_box {
  background: #f6f6f6;
  z-index: 20;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 190px;
}
.tab {
  height: 108px;
  font-size: $large-size;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $block-bg;
  width: 100%;
  div {
    flex: 1;
    position: relative;
    text-align: center;
    &.active::after {
      content: "";
      width: 155px;
      height: 4px;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      background-color: #1e92ec;
    }
    &.active {
      a {
        color: #1e92ec;
      }
      a:target {
        background: transparent;
      }
    }
  }
  a {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);

    -webkit-user-select: none;

    -moz-user-focus: none;

    -moz-user-select: none;
    line-height: 108px;
  }
}

ul {
  margin-top: 200px;
}
.filter {
  margin: 10px; // width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  border: solid 1px #1e92ec; /*no*/
  color: #1e92ec;
  height: 56px;
  border-radius: 8px;
  div {
    flex: 1;
    line-height: 56px;
    border-right: 1px solid #1e92ec; /*no*/
    font-size: $bigger-size;
    &:last-child {
      border-right: none;
    }
  }
  .active {
    background-color: #1e92ec;
    color: #fff;
  }
}
li {
  position: relative;
  background-color: #fff;
  padding: 20px;
  border-bottom: 1px solid #e6e6e6; /*no*/
  color: #bdc1c3;
  .coal-type {
    position: relative;
    line-height: 54px;
    padding-left: 80px;
    .classify {
      background-color: #1e92ec;
      padding: 4px 14px;
      border-radius: 16px;
      color: #fff;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      line-height: initial;
    }
    span:nth-child(2) {
      font-size: $largest-size;
      color: #333;
      margin-left: 50px;
    }
  }
  .price {
    span {
      font-size: 46px;
      color: #ed801f;
    }
  }
  .amount {
    line-height: 52px;
    span {
      color: #333;
      font-size: 32px;
    }
  }
  .surplus-time {
    position: absolute;
    bottom: 30px;
    right: 20px;
    p {
      line-height: 35px;
    }
  }
}
</style>


