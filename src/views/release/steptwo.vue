<template>
  <div class="step-wrap">
    <group v-for="(item, index) in coalTypeList" :key="index">
      <p class="item-title">煤种信息</p>
      <x-input class="cell-item" placeholder="请输入" v-model="item.Quality.CoalName">
        <span slot="label" class="w-label">
          <span class="dot-tip">&nbsp;</span>煤种名称</span>
        <x-icon slot="right" type="ios-arrow-right" size="20"></x-icon>
      </x-input>
      <cell-box class="cell-item cell2-item" @click.native="clickSelect(index)">
        <span class="w-label">
          <span class="dot-tip">&nbsp;</span>煤种类型</span>
        <span class="value-sp">{{item.Quality.CoalType || '请选择'}}</span>
        <x-icon type="ios-arrow-right" size="20"></x-icon>
      </cell-box>
      <cell-box class="cell-item cell2-item" @click.native="handleOpenCoalType">
        <span class="w-label">
          <span class="dot-tip">&nbsp;</span>煤种参数</span>
        <span class="value-sp">{{item.isInput == 0 ? "请输入" : "已输入"}}</span>
        <x-icon type="ios-arrow-right" size="20"></x-icon>
      </cell-box>
      <x-textarea v-model="item.PriceAssessment" class="font-size_28" placeholder="请输入">
        <span slot="label" class="w2-label">
          <span class="dot-tip">&nbsp;</span>质价考核相关描述</span>
      </x-textarea>
      <x-input class="cell-item" placeholder="请输入" v-model="item.Origin">
        <span slot="label" class="w-label">
          <span class="dot-tip">&nbsp;</span>产地</span>
      </x-input>
      <x-input class="cell-item" placeholder="请输入" v-model="item.MinDelistingAmount">
        <span slot="label" class="w-label">
          <span class="dot-tip">&nbsp;</span>最小供应量</span>
        <span slot="right">吨={{item.MinDelistingAmount | changeToColumn}}列</span>
      </x-input>
      <x-input class="cell-item overflow_one" readonly placeholder="请输入" @click.native="clickDialog(index)" v-model="item.Remark">
        <span slot="label" class="w-label">
          <span class="dot-tip">&nbsp;</span>备注</span>
        <x-icon type="ios-arrow-right" slot="right" size="20"></x-icon>
      </x-input>
    </group>
    <span class="btn-add" @click="handleAddCoalType">添加煤种</span>
    <span class="btn-submit" @click="submitForm()">发布</span>
    <group>
      <popup-picker show-name :show-cell="false" ref="pickerName" :show.sync="showPopupPicker" :data="popupData" v-model="selVal" @on-show="onShow" @on-hide="onHide" @on-change="onChange"></popup-picker>
    </group>
    <remark-dialog :showDialog="isDialog" :message="dialogMsg" :title="titleDialog" :close="closeEvent" @remark="remarkItem"></remark-dialog>
    <popup :norm="norm" @is_change_data="isInputCoalType" @getCoal="getCoal" :close="handleCloseCoalType" :showDialog="isShowCoalType" :title="'煤种参数'"></popup>
  </div>
</template>
<script>
import { getCoalType, releaseEnquiryInfo } from "@/api/release";
import Vue from 'vue'
import  Popup  from "@/views/release/coal_type"
import { Group, Cell, XInput, CellBox, PopupPicker, XTextarea } from 'vux'
import release from '@/utils/release'
import { DatetimePlugin } from 'vux'
import remarkDialog from '@/views/release/remark'
Vue.use(DatetimePlugin)
export default {
  name: 'steptwo',
  data() {
    return {
      showPopupPicker: false, // popup 弹层显示变量
      selVal: [], // popup弹层当前选择的值
      popupData: [], // popup弹层数据
      pickerName: '', // picker名字
      isShowCoalType: false,
      norm:[],
      coalTypeList:[
        {
          Id:'',
          Quality: {
            CoalType: '',
            CoalName: '',
            "CoalMt": "1",
            "CoalAd": null,
            "CoalVdaf": null,
            "CoalQ": null,
            "CoalSt_d": "3",
            "CoalFc": null,
            "CoalY": null,
            "CoalG": null,
            "CoalM10": null,
            "CoalM25": null,
            "CoalST": null,
            "CoalHGI": null,
            "Granularity": null,
            "RecoveryRate": null,
            "CoalCSR": null,
            "MaxCoalMt": null,
            "MaxCoalAd": "2",
            "MaxCoalVdaf": "1",
            "MaxCoalQ": null,
            "MaxCoalSt_d": null,
            "MaxCoalFc": null,
            "MaxCoalY": null,
            "MaxCoalG": null,
            "MaxCoalM10": null,
            "MaxCoalM25": null,
            "MaxCoalST": null,
            "MaxCoalHGI": null,
            "MaxGranularity": null,
            "MaxRecoveryRate": null,
            "MaxCoalCSR": null
          },
          Origin:'', // 产地
          MinDelistingAmount: '', // 最小供应量
          Remark: '', // 备注
          PriceAssessment: '', // 质价考核相关描述
          isInput: 0
        },
      ],
      flagSel: 0, // 标记当前触发popup选择的索引值
      dateVal: '',
      title: '描述',
      value: '',
      coal_type:[],
      isDialog: false,
      titleDialog: '备注',
      dialogMsg:'',
    }
  },
  components: {
    Group,
    Cell,
    XInput,
    CellBox,
    PopupPicker,
    XTextarea,
    remarkDialog,
    Popup
  },
  created() {
    console.log(this.coalTypeList)
    this.get_coal_type();
  },
  mounted() {},
  methods: {
    remarkItem(val) {
      this.dialogMsg = val
      this.coalTypeList[this.flagSel].Remark = val
    },
    // 备注组件显示
    clickDialog(idx) {
      this.flagSel = idx
      this.dialogMsg = this.coalTypeList[idx].Remark
      this.isDialog = true

    },
    // 关闭备注组件
    closeEvent() {
      this.isDialog = false
    },
    // 日期触发事件
    datePlugin() {
      let self = this
      this.$vux.datetime.show({
        cancelText: '取消',
        confirmText: '确定',
        format: 'YYYY-MM-DD',
        value: '2017-05-20 18',
        onConfirm(val) {
          console.log('plugin confirm', val)
          self.form.brandDate = val
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
    clickSelect(idx) {
      this.flagSel = idx
      this.popupData = []
      this.popupData.push(this.coal_type)
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
      let _sel = this.coal_type.find(item => {
        return item.value == val[0]
      })
      this.coalTypeList[this.flagSel].Quality.CoalType = _sel.name
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
        this.norm=release.coalNorm().power
      }
    },
    handleCloseCoalType() {
      this.isShowCoalType = false
    },
    handleOpenCoalType() {
      this.isShowCoalType = true
    },
    handleAddCoalType() {
      let temp = {
        Id:'',
        Quality: {
          CoalType: '',
          CoalName: '',
          CoalMt: "1",
          CoalAd: null,
          CoalVdaf: null,
          CoalQ: null,
          CoalSt_d: "3",
          CoalFc: null,
          CoalY: null,
          CoalG: null,
          CoalM10: null,
          CoalM25: null,
          CoalST: null,
          CoalHGI: null,
          Granularity: null,
          RecoveryRate: null,
          CoalCSR: null,
          MaxCoalMt: null,
          MaxCoalAd: "2",
          MaxCoalVdaf: "1",
          MaxCoalQ: null,
          MaxCoalSt_d: null,
          MaxCoalFc: null,
          MaxCoalY: null,
          MaxCoalG: null,
          MaxCoalM10: null,
          MaxCoalM25: null,
          MaxCoalST: null,
          MaxCoalHGI: null,
          MaxGranularity: null,
          MaxRecoveryRate: null,
          MaxCoalCSR: null
        },
        Origin:'', // 产地
        MinDelistingAmount: '', // 最小供应量
        Remark: '', // 备注
        PriceAssessment: '', // 质价考核相关描述
        isInput: 0
      }
      this.coalTypeList.push(temp)
    },
    // 确认发布点击事件
    submitForm() {
      this.coalTypeList.forEach(el => {
        delete el.isInput
      })
      this.$store.commit('ADD_COALTYPE_LIST', this.coalTypeList)
      this.$store.commit('SET_ENQUIRY_TYPE', 1)
      releaseEnquiryInfo(this.$store.state.release.enquiryInfo).then(({data}) => {
        console.log(data)
        if (data.Flag) {
          return this.$router.push({ name: 'success' })
        }
      })
    },
     // 获取煤种类别名称功能接口
    get_coal_type() {
      getCoalType()
        .then(({ data }) => {
          console.log('data is',data);
          let list=[];
          data.forEach(element => {
            let cell={};
            cell.name=element.Name,
            cell.value=element.Id
            list.push(cell)
          });
          this.coal_type = Object.freeze(list);
          console.log('list',list);
        })
        .catch(err => {});
    },
    getCoal (data) {
      console.log('on',data)
      Object.assign(this.coalTypeList[this.flagSel].Quality, data)
    },
    isInputCoalType (status) {
      this.coalTypeList[this.flagSel].isInput = status
    }
  }
}
</script>
<style lang="scss" scoped>
$dotColor: #1e92ec;
.font-size_28 {
  font-size: 28px;
}
.step-wrap {
  .item-title {
    height: 90px;
    line-height: 90px;
    padding: 0 45px;
    font-size: 36px;
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
  .w-label {
    display: block;
    width: 230px;
    font-size: 28px;
  }
  .w2-label {
    display: block;
    font-size: 28px;
    margin-right: 30px;
  }
  .btn-add {
    display: block;
    width: 88%;
    height: 88px;
    line-height: 88px;
    text-align: center;
    margin: 20px auto 40px;
    font-size: 28px;
    color: #1e92ec;
    border: 1px solid #e6e6e6;
    background: #fff;
  }
}
</style>
