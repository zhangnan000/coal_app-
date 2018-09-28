<template>
  <div class="release-wrap">
    <w-header>报价详情</w-header>
    <group class="group-wrap">
      <x-input class="cell-item" disabled placeholder="请输入" :value="pageInfo.TypeName">
        <span slot="label" class="w-label">
          <span class="dot-tip">&nbsp;</span>煤种类别</span>
      </x-input>
      <x-input class="cell-item" disabled placeholder="请输入" :value="pageInfo.CoalTypeName">
        <span slot="label" class="w-label">
          <span class="dot-tip">&nbsp;</span>供应煤种</span>
      </x-input>
      <x-input class="cell-item" placeholder="请输入" v-model="form.Origin">
        <span slot="label" class="w-label">
          <span class="dot-tip">*</span>煤原产地</span>
      </x-input>
      <x-input class="cell-item" placeholder="请输入" v-model="form.DeliveryLocation">
        <span slot="label" class="w-label">
          <span class="dot-tip">*</span>交货流向</span>
      </x-input>
      <cell-box class="cell-item cell2-item" @click.native="clickSelect()">
        <span class="w-label">
          <span class="dot-tip">*</span>交货方式</span>
        <span class="value-sp">{{form.Delivery}}</span>
        <x-icon type="ios-arrow-right" size="20"></x-icon>
      </cell-box>
      <x-input class="cell-item" placeholder="请输入" v-model="form.Amount">
        <span slot="label" class="w-label">
          <span class="dot-tip">*</span>可供数量</span>
          <span slot="right">吨</span>
      </x-input>
      <x-input class="cell-item" placeholder="请输入" v-model="form.MinSupplyAmount">
        <span slot="label" class="w-label">
          <span class="dot-tip">*</span>最小供应数量</span>
          <span slot="right">吨</span>
      </x-input>
      <x-input class="cell-item" type="number" placeholder="请输入" v-model="form.CoalQ">
        <span slot="label" class="w-label">
          <span class="dot-tip">*</span>合同基准热值</span>
          <span slot="right">kcal/kg</span>
      </x-input>
      <x-input class="cell-item" v-model="form.CoalQActual" placeholder="请输入">
        <span slot="label" class="w-label">
          <span class="dot-tip">*</span>实际热值</span>
          <span slot="right">kcal/kg</span>
      </x-input>
      <x-input class="cell-item" placeholder="请输入" v-model="form.CoalStd">
        <span slot="label" class="w-label">
          <span class="dot-tip">*</span>合同基准硫分</span>
          <span slot="right">%</span>
      </x-input>
      <x-input class="cell-item"  placeholder="请输入" v-model="form.CoalStdActual">
        <span slot="label" class="w-label">
          <span class="dot-tip">*</span>实际硫分</span>
        <span slot="right">%</span>
      </x-input>
      <x-input class="cell-item" placeholder="请输入" v-model="form.Price">
        <span slot="label" class="w-label">
          <span class="dot-tip">*</span>报价描述 </span>
      </x-input>
      <x-input class="cell-item" placeholder="请输入" v-model="form.Description">
        <span slot="label" class="w-label">
          <span class="dot-tip">&nbsp;</span>备注</span>
      </x-input>
    </group>
    <span class="btn-submit" @click="submitForm()">确认应单</span>
    <group>
      <popup-picker show-name :show-cell="false" ref="pickerName" :show.sync="showPopupPicker" :data="popupData" v-model="selVal" @on-show="onShow" @on-hide="onHide" @on-change="onChange"></popup-picker>
    </group> 
  </div>
</template>
<script>
import { getReplyOrderDetail, saveReplyOrder } from "@/api/transaction";
import Header from '@/components/common/header'
import Vue from "vue";
import { Group, Cell, XInput, CellBox, PopupPicker } from "vux";
import { DatetimePlugin } from "vux";
import { ToastPlugin } from "vux";
Vue.use(ToastPlugin, { position: "middle" });
Vue.use(DatetimePlugin);
export default {
  name: "sell",
  data() {
    return {
      pageInfo: {},
      showPopupPicker: false, // popup 弹层显示变量
      selVal: [], // popup弹层当前选择的值
      popupData: [], // popup弹层数据
      pickerName: "", // picker名字
      form: {
          "InquiryId": this.$store.state.transation.enquirePriceDetail.model.coalTypeList[this.$route.params.idx].InquiryId,
          "CoalTypeId": this.$store.state.transation.enquirePriceDetail.model.coalTypeList[this.$route.params.idx].Id,
          "Id": this.$route.params.offerId || '',
          "Origin": "",
          "DeliveryLocation": "",
          "Delivery": "请选择",
          "Amount": "",
          "MinSupplyAmount": "",
          "CoalQ": "",
          "CoalStd": "",
          "CoalQActual": "",
          "CoalStdActual": "",
          "Price": "",
          "Description": ""
      },
      dateVal: "",
    };
  },
  components: {
    Group,
    Cell,
    XInput,
    CellBox,
    PopupPicker,
    'w-header': Header
  },
  created() {
    this.getPageInfo()
  },
  mounted() {},
  methods: {
    getPageInfo () {
      let query = {
        inquiryId: this.$store.state.transation.enquirePriceDetail.model.coalTypeList[this.$route.params.idx].InquiryId,
        coalTypeId: this.$store.state.transation.enquirePriceDetail.model.coalTypeList[this.$route.params.idx].Id,
        offerId: this.$route.params.offerId || ''
      }
      getReplyOrderDetail(query).then(({data}) => {
        this.pageInfo = Object.freeze(data)
        this.popupData.push(data.DeliveryWay)
        console.log(this.popupData)
      })
    },
    // 选择点击事件
    clickSelect() {
      this.showPopupPicker = true;
    },
    // popup-picker 显示触发事件
    onShow() {
      console.log("on show");
    },
    // popup-picker 隐藏触发事件
    onHide(type) {
      console.log("on hide", type);
    },
    // popup-picker 选择改变触发事件
    onChange(val) {
      this.form.Delivery = val.toString()
    },
    // 确认发布点击事件
    submitForm() {
      if(!this.form.Origin) {
        return this.$vux.toast.text('请输入煤原产地')
      }
      if(!this.form.DeliveryLocation) {
        return this.$vux.toast.text('请输入交易流向')
      }
      if(this.form.Delivery == '请选择') {
        return this.$vux.toast.text('请选择交货方式')
      }
      if(!this.form.Amount) {
        return this.$vux.toast.text('请输入可供应数量')
      }
      if(!this.form.MinSupplyAmount) {
        return this.$vux.toast.text('请输入最小供应数量')
      }
      if(!this.form.CoalQ) {
        return this.$vux.toast.text('请输入合同基准热值')
      }
      if(!this.form.CoalQActual) {
        return this.$vux.toast.text('请输入实际热值')
      }
      if(!this.form.CoalStd) {
        return this.$vux.toast.text('请输入合同基准硫分')
      }
      if(!this.form.CoalQActual) {
        return this.$vux.toast.text('请输入合同实际硫分')
      }
      if(!this.form.Price) {
        return this.$vux.toast.text('请输入报价描述')
      }
      saveReplyOrder(this.form).then(({data}) => {
        console.log(data)
        if(data.Flag) {
          this.$vux.toast.text(data.Message)
          return
        }
        this.$vux.toast.text(data.Message)
      })
    },
  }
};
</script>
<style lang="scss" scoped>
@import '@/assets/css/base.scss';
$dotColor: #1e92ec;
.release-wrap {
  background: #f5f6f7;
  .group-wrap {
    margin-top: 80px;
    overflow-y: auto;
  }
  .cell2-item {
    display: flex;
    flex-direction: row nowrap;
    justify-content: space-between;
    align-items: center;
    .value-sp {
      flex: 1;
      color: $dotColor;
    }
  }
  .cell-item {
    height: 90px;
    font-size: 28px;
  }
  .dot-tip {
    color: $dotColor;
    margin-right: 15px;
  }
  .file-sp {
    display: block;
    width: 120px;
    height: 60px;
    line-height: 60px;
    text-align: center;
  }
  .w-label {
    display: block;
    width: 230px;
  }
}

</style>
