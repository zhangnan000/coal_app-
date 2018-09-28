<template>
  <div class="step-wrap">
    <group>
      <x-input class="cell-item" type="number" placeholder="请输入" v-model="form.CoalAmount">
        <span slot="label" class="w-label">
          <span class="dot-tip">&nbsp;</span>总数量</span>
        <span slot="right">吨={{ column }}列</span>
      </x-input>
      <cell-box class="cell-item cell2-item" @click.native="clickSelect(1)">
        <span class="w-label">
          <span class="dot-tip">*</span>交货方式</span>
        <span v-if="deliveryMethod != 0" class="value-sp">
          <span @click.stop="handleDelMode($event, index)" v-for=" (item, index) in deliveryMethod" :key="index" class="multiple">
            <i class="icon iconfont icon-guanbi"></i>
            {{item}}
          </span>
        </span>
        <span v-else class="value-sp">请选择</span>
        <x-icon type="ios-arrow-right" size="20"></x-icon>
      </cell-box>
      <x-input class="cell-item" placeholder="请输入" v-model="form.DeliveryLocation">
        <span slot="label" class="w-label">
          <span class="dot-tip">&nbsp;</span>交货地点</span>
      </x-input>
      <cell-box class="cell-item cell2-item" @click.native="datePlugin(1)">
        <span class="w-label">
          <span class="dot-tip">*</span>报价截止日期</span>
        <span class="value-sp">{{form.InquiryTimeString || '请选择'}}</span>
        <x-icon type="ios-arrow-right" size="20"></x-icon>
      </cell-box>
      <cell-box class="cell-item cell2-item" @click.native="datePlugin(2)">
        <span class="w-label">
          <span class="dot-tip">*</span>交货日期</span>
        <span class="value-sp">{{startDate || '请选择'}}</span>
        <x-icon type="ios-arrow-right" size="20"></x-icon>
      </cell-box>
      <cell-box class="cell-item cell2-item" @click.native="datePlugin(3)">
        <span class="w-label">
          <span class="dot-tip">*</span>交货截止日期</span>
        <span class="value-sp">{{endDate || '请选择'}}</span>
        <x-icon type="ios-arrow-right" size="20"></x-icon>
      </cell-box>
      <cell-box class="cell-item cell2-item" @click.native="clickSelect(2)">
        <span class="w-label">
          <span class="dot-tip">*</span>保证金</span>
        <span class="value-sp">{{form.MarginType || '请选择'}}</span>
        <x-icon type="ios-arrow-right" size="20"></x-icon>
      </cell-box>
      <x-input v-if="form.MarginType == '要求'" class="cell-item" readonly placeholder="请输入" @click.native="clickDialog(0)" v-model="form.MarginDescription">
        <span slot="label" class="w-label">
          <span class="dot-tip">&nbsp;</span>保证金描述</span>
          <x-icon type="ios-arrow-right" slot="right" size="20"></x-icon>
      </x-input>
      <x-input v-if="form.MarginType == '要求'" class="cell-item" readonly placeholder="请输入" v-model="form.Bank">
        <span slot="label" class="w-label">
          <span class="dot-tip">&nbsp;</span>保证金收款行</span>
        <x-icon type="ios-arrow-right" slot="right" size="20"></x-icon>
      </x-input>
      <x-input v-if="form.MarginType == '要求'" class="cell-item" readonly placeholder="收款行账号" v-model="form.AccountNumber">
        <span slot="label" class="w-label">
          <span class="dot-tip">&nbsp;</span>收款行账号</span>
      </x-input>
      <x-input v-if="form.MarginType == '要求'" class="cell-item" readonly placeholder="请输入" v-model="form.OpenAccount">
        <span slot="label" class="w-label">
          <span class="dot-tip">&nbsp;</span>收款方</span>
      </x-input>
      <x-input class="cell-item" readonly placeholder="请输入" @click.native="clickDialog(1)" v-model="form.Terms">
        <span slot="label" class="w-label">
          <span class="dot-tip">&nbsp;</span>违约条款</span>
        <x-icon type="ios-arrow-right" slot="right" size="20"></x-icon>
      </x-input>
      <x-input class="cell-item" readonly placeholder="请输入" @click.native="clickDialog(2)" v-model="form.OtherTerm">
        <span slot="label" class="w-label">
          <span class="dot-tip">&nbsp;</span>其他条款</span>
          <x-icon type="ios-arrow-right" slot="right" size="20"></x-icon>
      </x-input>
      <x-input class="cell-item" readonly placeholder="请输入" @click.native="clickDialog(3)" v-model="form.Description">
        <span slot="label" class="w-label">
          <span class="dot-tip">&nbsp;</span>备注</span>
        <x-icon type="ios-arrow-right" slot="right" size="20"></x-icon>
      </x-input>
    </group>
    <span class="btn-submit" @click="submitForm()">确定,继续添加煤种信息</span>
    <group>
      <popup-picker show-name :show-cell="false" ref="pickerName" :show.sync="showPopupPicker" :data="popupData" v-model="selVal" @on-show="onShow" @on-hide="onHide" @on-change="onChange"></popup-picker>
    </group>
    <remark-dialog :message="dialogMsg" :showDialog="isDialog" :title="titleDialog" :close="closeEvent" @remark="remarkItem"></remark-dialog>
  </div>
</template>
<script>
import Vue from 'vue'
import { Group, Cell, XInput, CellBox, PopupPicker } from 'vux'
import release from '@/utils/release'
import { DatetimePlugin, ToastPlugin } from 'vux'
import remarkDialog from '@/views/release/remark'
import { getBankInfo } from '@/api/personal'
Vue.use(DatetimePlugin)
Vue.use(ToastPlugin)
export default {
  name: 'stepone',
  data() {
    return {
      showPopupPicker: false, // popup 弹层显示变量
      selVal: [], // popup弹层当前选择的值
      popupData: [], // popup弹层数据
      pickerName: '', // picker名字
      startDate: '', // 交货日期起止时间 
      endDate: '', // 交货日期起止时间 
      deliveryMethod: [],
      form: {
        "DeliveryTimeString": "",
        "CoalAmount": "",
        "DeliveryMethod": '',
        "InquiryTimeString": "",
        "Description": "",
        "DeliveryLocation": "",
        "OtherTerm": "",
        "MarginType": "",
        "MarginDescription": "",
        "OpenAccount": "",
        "Bank": "",
        "AccountNumber": "",
        "Terms": ""
      },
      flagSel: 1, // 标记当前触发popup选择的索引值
      dateVal: '',
      isDialog: false,
      titleDialog: '违约条款',
      dialogMsg:'', // 弹窗显示的内容
      indexDialog: 1
    }
  },
  components: {
    Group,
    Cell,
    XInput,
    CellBox,
    PopupPicker,
    remarkDialog
  },
  computed: {
    column () {
      return (this.form.CoalAmount / 8400).toFixed(2)
    }
  },
  created() {
    this.getBank()
  },
  mounted() {},
  methods: {
    getBank () {
      getBankInfo().then(({data}) => {
        console.log(data)
        this.form.OpenAccount = data.OpenAccount
        this.form.AccountNumber = data.AccountNumber
        this.form.Bank = data.Bank
      })
    },
    remarkItem(val) {
      if (this.indexDialog == 0) {
        this.form.MarginDescription = val
      } else if (this.indexDialog == 1) {
        this.form.Terms = val
      } else if (this.indexDialog == 2) {
        this.form.OtherTerm = val
      } else if (this.indexDialog == 3) {
        this.form.Description = val
      }
      this.dialogMsg = val // 用于解决dialogMsg这几个值都为空字符串时的bug,值没有改变，watch就不会触发
    },
    // 备注组件显示
    clickDialog(flag) {
      console.log('legal')
      this.indexDialog = flag
      if (flag == 1) {
        this.titleDialog = '违约条款'
        this.dialogMsg = this.form.Terms
      }else if(flag == 2){
        this.titleDialog = '其他条款'
        this.dialogMsg = this.form.OtherTerm
      } else if (flag == 3) {
        this.titleDialog = '备注'
        this.dialogMsg = this.form.Description
      } else if (flag == 4) {
        this.titleDialog = '保证金描述'
        this.dialogMsg = this.form.MarginDescription
      }
      this.isDialog = true
    },
    // 关闭备注组件
    closeEvent() {
      this.isDialog = false
    },
    // 日期触发事件
    datePlugin(flag) {
      let self = this
      this.$vux.datetime.show({
        cancelText: '取消',
        confirmText: '确定',
        format: 'YYYY-MM-DD HH:mm',
        value: '2017-05-20 18',
        startDate: new Date(),
        onConfirm(val) {
          if (flag == 1) {
            self.form.InquiryTimeString = val
          }
          if (flag == 2) {
            self.startDate = val
          }
          if (flag == 3) {
            self.endDate = val
          }
        },
        onShow() {
          console.log('plugin show')
        },
        onHide() {
          console.log('plugin hide')
        }
      })
    },
    // 选择点击事件
    clickSelect(val) {
      this.flagSel = val
      this.popupData = []
      if (val == 1) {
        // 交货方式
        let _data = release.sellMode()
        this.popupData.push(_data)
      }
      if (val == 2) {
        // 保证金
        let _data = release.ensureMoney()
        this.popupData.push(_data)
      }
      if (this.popupData.length == 0) return
      this.showPopupPicker = true
    },
    // popup-picker 显示触发事件
    onShow() {
      // console.log('on show')
    },
    // popup-picker 隐藏触发事件
    onHide(type) {
      // console.log('on hide', type)
    },
    // popup-picker 选择改变触发事件
    onChange(val) {
      if (this.flagSel == 1) {
        let _data = release.sellMode()
        let _sel = _data.find(item => {
          return item.value == val[0]
        })
        this.deliveryMethod.push(_sel.name)
      }
      if (this.flagSel == 2) {
        let _data = release.ensureMoney()
        let _sel = _data.find(item => {
          return item.value == val[0]
        })
        this.form.MarginType = _sel.name
      }
    },
    handleDelMode(e, idx) {
      if(e.target.nodeName != 'I') {
        return
      }
      this.deliveryMethod.splice(idx, 1)
    },
    // 确认发布点击事件
    submitForm() {
      if(this.deliveryMethod.length == 0) {
        return this.$vux.toast.text('请选择交货方式')
      }
      if(!this.form.InquiryTimeString) {
        return this.$vux.toast.text('请选择报价截止日期')
      }
      if(!this.startDate) {
        return this.$vux.toast.text('请选择交货日期')
      }
      if(!this.endDate) {
        return this.$vux.toast.text('请选择交货截止日期')
      }
      if(!this.form.MarginType) {
        return this.$vux.toast.text('请选择是否要求保证金')
      }
      this.form.DeliveryTimeString = this.startDate + '-' + this.endDate
      this.form.DeliveryMethod = this.deliveryMethod.join()
      this.$store.commit('SET_ENQUIRY_PURCHASE', this.form)
      this.$router.push({ name: 'steptwo' })
    },
  }
}
</script>
<style lang="scss" scoped>
$dotColor: #1e92ec;
.step-wrap {
  // background: #f5f6f7;
  .step-p {
    padding: 30px 40px 0;
    .step1-title {
      font-size: 26px;
      color: #1e92ec;
    }
    .step2-title {
      font-size: 26px;
      color: #bdc1c3;
    }
    .activeColor {
      color: #1e92ec;
    }
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
    .multiple {
      padding: 8px 20px;
      border: 1px solid #1e92ec; /*no*/
      border-radius: 8px;
      margin-right: 20px;
      i {
        font-size: 12px;
      }
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
  .w-label {
    display: block;
    width: 230px;
  }
}
</style>