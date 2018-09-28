<template>
  <popup v-model="showDialog" height="100%" :show-mask="false">
    <div class="coal_type_box">
      <div class="coal_type_title">
        <span class="sp-title">{{title}}</span>
        <span class="close-sp" @click="closeEvent">
            <i class="iconfont icon-guanbi"></i>
          </span>
      </div>
      <section class="sec-wrap">
        <div class="item-wrap">
          <div class="item" v-for="(item,index) in norm" :key="index">
            <h4>{{item.name}}：</h4>
            <div class="flex-input">
              <input type="number" v-model="item.minValue" @blur="is_change(item.minValue)">
              <span class="line">—</span>
              <input type="number" v-model="item.maxValue" @blur="is_change_max(item.maxValue)">
            </div>
          </div>
        </div>
        <span class="btn-submit" @click="submit">确定</span>
      </section>
    </div>
  </popup>
</template>
<script>
  import {
    Popup
  } from "vux";
  export default {
    name: "coal_type",
    props: {
      showDialog: false,
      title: String,
      norm: Array,
      close: Function
    },
    components: {
      Popup
    },
    data() {
      return {
        select_data: {},
        is_change_data: 0
      };
    },
    created() {},
    mounted() {},
    methods: {
      closeEvent() {
        this.close();
      },
      submit() {
        let select_coal = {
          // CoalAd:null,
          // MaxCoalAd:null,
          // CoalSt_d:null,
          // MaxCoalSt_d:null,
          // CoalVdaf:null,
          // MaxCoalVdaf:null,
          // CoalCSR:null,
          // MaxCoalCSR:null,
          // CoalFc:null,
          // MaxCoalCSR:null,
          // CoalFc:null,
          // MaxCoalFc:null,
          // CoalM25:null,
          // MaxCoalM25:null,
          // CoalQ:null,
          // MaxCoalQ:null,
          // CoalY:null,
          // MaxCoalY:null,
          // CoalM10:null,
          // MaxCoalM10:null,
          // CoalHGI:null,
          // MaxCoalHGI:null,
          // Granularity:null,
          // MaxGranularity:null,
          // RecoveryRate:null,
          // MaxRecoveryRate:null,
          // CoalST:null,
          // MaxCoalST:null,
          // CoalMt:null,
          // MaxCoalMt:null
        };
        this.norm.forEach(element => {
          //干燥基灰分
          if (
            element.id == 1 ||
            element.id == 6 ||
            element.id == 21 ||
            element.id == 12 ||
            element.id == 29
          ) {
            if (element.minValue != "") {
              select_coal.CoalAd = element.minValue;
            }
            if (element.maxValue != "") {
              select_coal.MaxCoalAd = element.maxValue;
            }
          } else if (
            element.id == 3 ||
            element.id == 8 ||
            element.id == 14 ||
            element.id == 22 ||
            element.id == 31
          ) {
            //干燥基全硫
            if (element.minValue != "") {
              select_coal.CoalSt_d = element.minValue;
            }
            if (element.maxValue != "") {
              select_coal.MaxCoalSt_d = element.maxValue;
            }
          } else if (
            element.id == 2 ||
            element.id == 7 ||
            element.id == 18 ||
            element.id == 24 ||
            element.id == 33
          ) {
            //干燥无灰基挥发份
            if (element.minValue != "") {
              select_coal.CoalVdaf = element.minValue;
            }
            if (element.maxValue != "") {
              select_coal.MaxCoalVdaf = element.maxValue;
            }
          } else if (element.id == 26) {
            //固定碳含量
            if (element.minValue != "") {
              select_coal.CoalFc = element.minValue;
            }
            if (element.maxValue != "") {
              select_coal.MaxCoalFc = element.maxValue;
            }
          } else if (element.id == 23) {
            //抗碎强度(M25)
            (select_coal.CoalM25 = element.minValue),
            (select_coal.MaxCoalM25 = element.maxValue);
          } else if (element.id == 5 || element.id == 10 || element.id == 30) {
            //低位发热量(Qnet,ar)
            (select_coal.CoalQ = element.minValue),
            (select_coal.MaxCoalQ = element.maxValue);
          } else if (element.id == 16) {
            //胶质层最大厚度
            (select_coal.CoalY = element.minValue),
            (select_coal.MaxCoalY = element.maxValue);
          } else if (element.id == 27) {
            //耐磨强度(M10)
            (select_coal.CoalM10 = element.minValue),
            (select_coal.MaxCoalM10 = element.maxValue);
          } else if (element.id == 11) {
            //哈氏可磨指数(HGI)
            (select_coal.CoalHGI = element.minValue),
            (select_coal.MaxCoalHGI = element.maxValue);
          } else if (element.id == 19 || element.id == 34) {
            //粒度
            (select_coal.Granularity = element.minValue),
            (select_coal.MaxGranularity = element.maxValue);
          } else if (element.id == 17 || element.id == 25) {
            //热反应强度(CSR)
            (select_coal.CoalCSR = element.minValue),
            (select_coal.MaxCoalCSR = element.maxValue);
          } else if (element.id == 20) {
            //回收率
            (select_coal.RecoveryRate = element.minValue),
            (select_coal.MaxRecoveryRate = element.maxValue);
          } else if (element.id == 35) {
            //灰熔点
            (select_coal.CoalST = element.minValue),
            (select_coal.MaxCoalST = element.maxValue);
          } else if (
            element.id == 4 ||
            element.id == 9 ||
            element.id == 15 ||
            element.id == 28 ||
            element.id == 32
          ) {
            //全水分(Mt)
            (select_coal.CoalMt = element.minValue),
            (select_coal.MaxCoalMt = element.maxValue);
          }
        });
        this.select_data = select_coal;
        this.$emit("getCoal", select_coal);
        this.$emit("is_change_data", this.is_change_data);
        this.close();
      },
      is_change(val) {
        if (val != "") {
          this.is_change_data = 1;
        }
      },
      is_change_max(val) {
        if (val != "") {
          this.is_change_data = 1;
        }
      }
    }
  };
</script>
<style lang="scss" scoped>
  // 煤种
  .coal_type_box {
    width: 100%;
    height: 100%;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .coal_type_title {
      width: 94%;
      height: 120px;
      line-height: 120px;
      margin: 0 auto;
      padding-left: 1%;
      border-bottom: 1px solid #e6e6e6;
      /*no*/
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      .sp-title {
        font-size: 36px;
      }
      .close-sp {
        display: block;
        width: 60px;
        height: 100%;
        text-align: center;
      }
      .icon-guanbi {
        font-size: 36px;
      }
    }
    .sec-wrap {
      flex: 1;
      width: 100%;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .item-wrap {
      flex: 1;
    }
    .item {
      width: 94%;
      padding: 20px 0;
      margin: 0 auto;
      border-bottom: 1px solid #f0f0f0;
      /*no*/
      h4 {
        margin-bottom: 20px;
        font-size: 28px;
        color: #333;
      }
    }
    .flex-input {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      input {
        width: 315px;
        height: 56px;
        background-color: #fafafa;
        border-radius: 8px;
        border: solid 1px #d9d9d9;
        /*no*/
        padding-left: 20px;
      }
      .line {
        margin-left: 20px;
        margin-right: 20px;
        color: #bdc1c3;
      }
    }
  }
</style>
