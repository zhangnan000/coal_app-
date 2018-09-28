<template>
  <div class="release-wrap">
    <div class="top-title">
      <img src="../../assets/images/back_icon.png" alt="" @click="back_page">竞价挂牌
    </div>
    <group class="group-wrap">
      <cell-box class="cell-item cell2-item" @click.native="clickSelect(1)">
        <span class="w-label">
          <span class="dot-tip">*</span>竞价类型</span>
        <span class="value-sp">{{form.auctionTrading.AuctionType}}</span>
        <x-icon type="ios-arrow-right" size="20"></x-icon>
      </cell-box>
      <x-input class="cell-item" v-model="form.auctionTrading.ReservePrice" placeholder="竞拍基准价">
        <span slot="label" class="w-label">
          <span class="dot-tip">*</span>竞价基准价</span>
        <span slot="right">元/吨</span>
      </x-input>
      <x-input class="cell-item" v-model="form.auctionTrading.MinIncrease" placeholder="请输入">
        <span slot="label" class="w-label">
          <span class="dot-tip">*</span>报价最小增幅</span>
        <span slot="right">元</span>
      </x-input>
      <cell-box class="cell-item cell2-item" @click.native="clickSelect(2)">
        <span class="w-label">
          <span class="dot-tip">*</span>煤种类型</span>
        <span class="value-sp">{{form.quality.CoalType || '请选择'}}</span>
        <x-icon type="ios-arrow-right" size="20"></x-icon>
      </cell-box>
      <x-input class="cell-item" readonly placeholder="请输入" @click.native="handleOpenCoalType" >
        <span slot="label" class="w-label">
          <span class="dot-tip">&nbsp;</span>指标参数</span>
        <x-icon type="ios-arrow-right" slot="right" size="20"></x-icon>
      </x-input>
      <x-input class="cell-item" v-model="form.quality.CoalName" placeholder="请输入">
        <span slot="label" class="w-label">
          <span class="dot-tip">*</span>煤种名称</span>
      </x-input>
      <x-input class="cell-item" v-model="form.auctionTrading.Origin" placeholder="请输入">
        <span slot="label" class="w-label">
          <span class="dot-tip">*</span>产地</span>
      </x-input>
      <x-input class="cell-item" v-model="form.auctionTrading.Amount" placeholder="请输入">
        <span slot="label" class="w-label">
          <span class="dot-tip">*</span>竞价总数量</span>
        <span slot="right">吨</span>
      </x-input>
      <x-input class="cell-item" :value="form.auctionTrading.Amount | changeToColumn" readonly placeholder="0">
        <span slot="label" class="w-label">
          <span class="dot-tip">&nbsp;</span>
        </span>
        <span slot="right">列</span>
      </x-input>
      <cell-box class="cell-item cell2-item" @click.native="clickSelect(3)">
        <span class="w-label">
          <span class="dot-tip">*</span>交货方式</span>
        <span class="value-sp">{{form.auctionTrading.DeliveryMethod}}</span>
        <x-icon type="ios-arrow-right" size="20"></x-icon>
      </cell-box>
      <x-input class="cell-item" v-model="form.auctionTrading.DeliveryLocation" placeholder="请输入">
        <span slot="label" class="w-label">
          <span class="dot-tip">*</span>交货地点</span>
      </x-input>
      <cell-box class="cell-item cell2-item" @click.native="datePlugin">
        <span class="w-label">
          <span class="dot-tip">*</span>竞价截止日期</span>
        <span class="value-sp">{{form.auctionTrading.AuctionEndTime}}</span>
        <x-icon type="ios-arrow-right" size="20"></x-icon>
      </cell-box>
      <cell-box class="cell-item cell2-item" @click.native="clickSelect(4)" >
        <span class="w-label">
          <span class="dot-tip">*</span>保证金项</span>
        <span class="value-sp">{{form.auctionTrading.MarginType}}</span>
        <x-icon type="ios-arrow-right" size="20"></x-icon>
      </cell-box>
      <x-input v-if="form.auctionTrading.MarginType == '要求'" @click.native="clickDialog(0)" readonly class="cell-item" placeholder="请输入" v-model="form.auctionTrading.MarginDescription">
        <span slot="label" class="w-label">
          <span class="dot-tip">&nbsp;</span>保证金描述</span>
          <x-icon type="ios-arrow-right" slot="right" size="20"></x-icon>
      </x-input>
      <x-input v-if="form.auctionTrading.MarginType == '要求'" readonly class="cell-item" placeholder="请输入" v-model="form.auctionTrading.Bank">
        <span slot="label" class="w-label">
          <span class="dot-tip">&nbsp;</span>保证金收款行</span>
      </x-input>
      <x-input v-if="form.auctionTrading.MarginType == '要求'" readonly class="cell-item" placeholder="收款行账号" v-model="form.auctionTrading.AccountNumber">
        <span slot="label" class="w-label">
          <span class="dot-tip">&nbsp;</span>收款行账号</span>
      </x-input>
      <x-input v-if="form.auctionTrading.MarginType == '要求'" readonly class="cell-item" placeholder="请输入" v-model="form.auctionTrading.AccountName">
        <span slot="label" class="w-label">
          <span class="dot-tip">&nbsp;</span>收款方</span>
      </x-input>
      <x-input class="cell-item" readonly placeholder="请输入" @click.native="clickDialog(1)" v-model="form.auctionTrading.Terms">
        <span slot="label" class="w-label">
          <span class="dot-tip">&nbsp;</span>违约条款</span>
        <x-icon type="ios-arrow-right" slot="right" size="20"></x-icon>
      </x-input>
      <x-input class="cell-item" readonly placeholder="请输入" @click.native="clickDialog(2)" v-model="form.auctionTrading.Remark">
        <span slot="label" class="w-label">
          <span class="dot-tip">&nbsp;</span>备注</span>
        <x-icon type="ios-arrow-right" slot="right" size="20"></x-icon>
      </x-input>
    </group>
    <span class="btn-submit" @click="submitForm()">确认发布</span>
    <group>
      <popup-picker show-name :show-cell="false" ref="pickerName" :show.sync="showPopupPicker" :data="popupData" v-model="selVal" @on-show="onShow" @on-hide="onHide" @on-change="onChange"></popup-picker>
    </group>
    <remark-dialog :title="titleDialog" :message="dialogMsg" :showDialog="isDialog" :close="closeEvent" @remark="remarkItem"></remark-dialog>
    <coal-type :showDialog="isShowCoalType" :title="'指标参数'" :norm="norm" :close="handleCloseCoalType" @getCoal="getCoalInfo"></coal-type>
  </div>
</template>
<script>
import Vue from 'vue'
import { Group, Cell, XInput, CellBox, PopupPicker } from 'vux'
import release from '@/utils/release'
import { DatetimePlugin, ToastPlugin } from 'vux'
import remarkDialog from '@/views/release/remark'
import { getBankInfo } from '@/api/personal'
import { releaseBidInfo } from '@/api/release'
import coalType from './coal_type'
Vue.use(DatetimePlugin)
Vue.use(ToastPlugin)
export default {
  name: 'bidding',
  data() {
    return {
      isShowCoalType: false,
      norm: [], // 煤种指标参数
      showPopupPicker: false, // popup 弹层显示变量
      selVal: [], // popup弹层当前选择的值
      popupData: [], // popup弹层数据
      pickerName: '', // picker名字
      form: {
        auctionTrading: {
          "AuctionType": "采购",
          "Amount": "2000",
          "ReservePrice": "250",
          "MinIncrease": "10",
          "DeliveryMethod": "场地交货",
          "DeliveryLocation": "杭州余杭",
          "MarginType": "要求",
          "MarginDescription": "要求",
          "AccountName": "",
          "Bank": "",
          "AccountNumber": "",
          "Terms": "011",
          "Remark": "012",
          "AuctionEndTime": "2018-09-20 00:00:00",
          "Origin": "杭州01"
        }, // 基础信息
        quality:{
          CoalType: '',
          CoalName: 'xixi',
          "CoalType": "动力煤",
          "CoalName": "竞价采购01",
          "CoalMt": '',
          "CoalAd": "1",
          "CoalVdaf": "2",
          "CoalQ": '',
          "CoalSt_d": "3",
          "CoalFc": '',
          "CoalY": '',
          "CoalG": '',
          "CoalM10": '',
          "CoalM25": '',
          "CoalST": '',
          "CoalHGI": '',
          "Granularity": '',
          "RecoveryRate": '',
          "CoalCSR": '',
          "MaxCoalMt": "4",
          "MaxCoalAd": null,
          "MaxCoalVdaf": null,
          "MaxCoalQ": "2",
          "MaxCoalSt_d": null,
          "MaxCoalFc": null,
          "MaxCoalY": null,
          "MaxCoalG": null,
          "MaxCoalM10": null,
          "MaxCoalM25": null,
          "MaxCoalST": null,
          "MaxCoalHGI": null,
          "MaxGranularity": "2",
          "MaxRecoveryRate": null,
          "MaxCoalCSR": null
        },  //煤种信息
        listingType: '', // 类型： 提交 保存草稿
      },
      flagSel: 1, // 标记当前触发popup选择的索引值
      dateVal: '',
      isDialog: false, // 弹框显示
      titleDialog: '违约条款',
      dialogMsg: '', // 弹窗显示内容
      indexDialog: 1 // 弹框标记是违约条款or备注
    }
  },
  components: {
    Group,
    Cell,
    XInput,
    CellBox,
    PopupPicker,
    remarkDialog,
    coalType
  },
  created() {
    this.getBank()
  },
  mounted() {},
  methods: {
    // 获取银行账户信息
    getBank () {
      getBankInfo().then(({data}) => {
        console.log(data)
        this.form.auctionTrading.AccountName = data.OpenAccount
        this.form.auctionTrading.AccountNumber = data.AccountNumber
        this.form.auctionTrading.Bank = data.Bank
      })
    },
    remarkItem(val) {
      // console.log(val)
      if(this.indexDialog == 0) {
        this.form.auctionTrading.MarginDescription = val
      } else if (this.indexDialog == 1) {
        this.form.auctionTrading.Terms = val
      } else if (this.indexDialog == 2) {
        this.form.auctionTrading.Remark = val
      }
      this.dialogMsg = val
    },
    // 备注组件显示
    clickDialog(flag) {
      console.log('legal')
      this.indexDialog = flag
      this.isDialog = true
      if (flag == 0) {
        this.titleDialog = '保证金描述'
        this.dialogMsg = this.form.auctionTrading.MarginDescription
      } else if (flag == 1) {
        this.titleDialog = '违约条款'
        this.dialogMsg = this.form.auctionTrading.Terms
      } else if (flag == 2) {
        this.titleDialog = '备注'
        this.dialogMsg = this.form.auctionTrading.Remark
      }
    },
    // 关闭备注组件
    closeEvent() {
      this.isDialog = false
    },
    // 返回
    back_page() {
      this.$router.go(-1)
    },
    // 文件上传
    uploadFile() {
      this.$refs.files.click()
    },
    // 日期触发事件
    datePlugin() {
      let self = this
      this.$vux.datetime.show({
        cancelText: '取消',
        confirmText: '确定',
        format: 'YYYY-MM-DD HH:mm',
        value: '2017-05-20 18',
        startDate: new Date(),
        onConfirm(val) {
          console.log('plugin confirm', val)
          self.form.endDate = val
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
        let _data = release.biddingType()
        this.popupData.push(_data)
      } else if (val == 2) {
        let _data = release.coalType()
        this.popupData.push(_data)
      } else if (val == 3) {
        let _data = release.sellMode()
        this.popupData.push(_data)
      } else if (val == 4) {
        let _data = release.ensureMoney()
        this.popupData.push(_data)
      }
      if (this.popupData.length == 0) return
      this.showPopupPicker = true
    },
    // popup-picker 显示触发事件
    onShow() {
      console.log('on show')
    },
    // popup-picker 隐藏触发事件
    onHide(type) {
      console.log('on hide', type)
    },
    // popup-picker 选择改变触发事件
    onChange(val) {
      if (this.flagSel == 1) {
        let _data = release.biddingType()
        let _sel = _data.find(item => {
          return item.value == val[0]
        })
        this.form.auctionTrading.AuctionType = _sel.name
      } else if (this.flagSel == 2) {
        let _data = release.coalType()
        let _sel = _data.find(item => {
          return item.value == val[0]
        })
        this.form.quality.CoalType = _sel.name
        let coalType = _sel.name
        if(coalType == '无烟煤'){  
          this.norm = release.coalNorm().noSmoke
        }else if(coalType == '喷吹煤'){
          this.norm = release.coalNorm().blowing
        }else if(coalType == '炼焦煤'){
          this.norm = release.coalNorm().coking
        }else if(coalType == '焦炭'){
          this.norm = release.coalNorm().coke
        }else if(coalType == '动力煤'){
          this.norm = release.coalNorm().power
        }
      } else if (this.flagSel == 3) {
        let _data = release.sellMode()
        let _sel = _data.find(item => {
          return item.value == val[0]
        })
        this.form.auctionTrading.DeliveryMethod = _sel.name
      } else if (this.flagSel == 4) {
        let _data = release.ensureMoney()
        let _sel = _data.find(item => {
          return item.value == val[0]
        })
        this.form.auctionTrading.MarginType = _sel.name
      }
    },
    handleOpenCoalType() {
      if(!this.form.quality.CoalType) {
        return this.$vux.toast.text('请先选择煤种类型')
      }
      this.isShowCoalType = true
    },
    handleCloseCoalType() {
      this.isShowCoalType = false
    },
    getCoalInfo (data) {
      Object.assign(this.form.quality, data)
    },
    // 确认发布点击事件
    submitForm() {
      this.form.listingType = '提交'
      if(!this.form.auctionTrading.AuctionType) {
        return this.$vux.toast.text('请选择竞价类型')
      }
      if(!this.form.auctionTrading.ReservePrice) {
        return this.$vux.toast.text('请输入竞价基准价')
      }
      if(!this.form.auctionTrading.MinIncrease) {
        return this.$vux.toast.text('请输入报价最小增幅')
      }
      if(!this.form.quality.CoalType) {
        return this.$vux.toast.text('请选择煤种类型')
      }
      if(!this.form.quality.CoalName) {
        return this.$vux.toast.text('请输入煤种名称')
      }
      if(!this.form.auctionTrading.Origin) {
        return this.$vux.toast.text('请输入产地')
      }
      if(!this.form.auctionTrading.Amount) {
        return this.$vux.toast.text('请输入竞价总数量')
      }
      if(!this.form.auctionTrading.DeliveryMethod) {
        return this.$vux.toast.text('请选择交货方式')
      }
      if(!this.form.auctionTrading.DeliveryLocation) {
        return this.$vux.toast.text('请输入交货地点')
      }
      if(!this.form.auctionTrading.AuctionEndTime) {
        return this.$vux.toast.text('请选择竞价截止日期')
      }
      if(!this.form.auctionTrading.MarginType) {
        return this.$vux.toast.text('请选择保证金项')
      }
      releaseBidInfo(this.form).then(({data}) => {
        console.log(data)
        this.$vux.toast.text(data.Message)
        if (data.Flag) {
          this.$router.push({ name: 'success' })
        }
      }).catch(err => {
        this.$vux.toast.text('服务器错误')
      })
    },
  }
}
</script>
<style lang="scss" scoped>
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
