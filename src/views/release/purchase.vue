<template>
  <div class="release-wrap">
    <div class="top-title">
      <img src="../../assets/images/back_icon.png" alt="" @click="back_page_prev">采购挂牌
    </div>
    <group class="group-wrap">
      <x-input class="cell-item" placeholder="请输入" v-model="form.productName">
        <span slot="label" class="w-label">
          <span class="dot-tip">*</span>产品名称</span>
      </x-input>
      <cell-box class="cell-item cell2-item" @click.native="clickSelect(2)">
        <span class="w-label">
          <span class="dot-tip">*</span>定向挂牌</span>
        <span class="value-sp">{{form.brandFixed}}</span>
        <x-icon type="ios-arrow-right" size="20"></x-icon>
      </cell-box>
      <cell-box v-show="form.brandFixedId == 1" class="cell-item cell2-item" @click.native='click_show_company'>
        <span class="w-label">
          <span class="dot-tip">*</span>销售对象</span>
        <span class="value-sp">{{form.sellTarget}}</span>
        <x-icon type="ios-arrow-right" size="20"></x-icon>
      </cell-box>
      <x-input class="cell-item" placeholder="请输入" v-model="form.contact">
        <span slot="label" class="w-label">
          <span class="dot-tip">*</span>联系人</span>
      </x-input>
      <x-input class="cell-item" type="number" placeholder="请输入" v-model="form.phone">
        <span slot="label" class="w-label">
          <span class="dot-tip">*</span>联系电话</span>
      </x-input>
      <cell-box class="cell-item cell2-item" @click.native="clickSelect(3)">
        <span class="w-label">
          <span class="dot-tip">*</span>煤种</span>
        <span class="value-sp">{{form.coalType}}</span>
        <x-icon type="ios-arrow-right" size="20"></x-icon>
      </cell-box>
      <x-input class="cell-item" readonly placeholder="请输入"  @click.native="show_pop_up" v-model="form.coal_detail_type">
        <span slot="label" class="w-label">
          <span class="dot-tip">&nbsp;</span>指标参数</span>
        <x-icon type="ios-arrow-right" slot="right" size="20"></x-icon>
      </x-input>
      <x-input class="cell-item" placeholder="请输入" v-model="form.address">
        <span slot="label" class="w-label">
          <span class="dot-tip">*</span>交割地点</span>
      </x-input>
      <cell-box class="cell-item cell2-item" @click.native="clickSelect(4)">
        <span class="w-label">
          <span class="dot-tip">*</span>价格类型</span>
        <span class="value-sp">{{form.priceType}}</span>
        <x-icon type="ios-arrow-right" size="20"></x-icon>
      </cell-box>
      <x-input class="cell-item" v-show="form.priceTypeId == 2" placeholder="请输入" v-model="form.price">
        <span slot="label" class="w-label">
          <span class="dot-tip">*</span>价格</span>
        <span slot="right">元/吨</span>
      </x-input>
      <x-input class="cell-item" v-show="form.priceTypeId == 3" placeholder="请输入" v-model="form.descript">
        <span slot="label" class="w-label">
          <span class="dot-tip">*</span>指数挂钩描述</span>
      </x-input>
      <cell-box class="cell-item cell2-item" @click.native="clickSelect(5)">
        <span class="w-label">
          <span class="dot-tip">*</span>交货方式</span>
        <span class="value-sp">{{form.sellMode}}</span>
        <x-icon type="ios-arrow-right" size="20"></x-icon>
      </cell-box>
      <x-input class="cell-item" placeholder="请输入" v-model="form.brandTotal">
        <span slot="label" class="w-label">
          <span class="dot-tip">*</span>挂牌总数量</span>
        <span slot="right">吨</span>
      </x-input>
      <x-input class="cell-item" placeholder="请输入" v-model="form.minTotal">
        <span slot="label" class="w-label">
          <span class="dot-tip">*</span>最小摘牌数</span>
        <span slot="right">吨</span>
      </x-input>
      <cell-box class="cell-item cell2-item" @click.native="datePlugin">
        <span class="w-label">
          <span class="dot-tip">*</span>挂牌有效期(开始)</span>
        <span class="value-sp">{{form.brandDate}}</span>
        <x-icon type="ios-arrow-right" size="20"></x-icon>
      </cell-box>
       <cell-box class="cell-item cell2-item" @click.native="datePlugin_end">
        <span class="w-label">
          <span class="dot-tip">*</span>挂牌有效期(结束)</span>
        <span class="value-sp">{{form.brandDate_end}}</span>
        <x-icon type="ios-arrow-right" size="20"></x-icon>
      </cell-box>
      <x-input class="cell-item" placeholder="请输入" v-model="form.remark">
        <span slot="label" class="w-label">
          <span class="dot-tip">&nbsp;</span>备注</span>
      </x-input>
    </group>
    <span class="btn-submit" @click="submitForm()">确认发布</span>
    <group>
      <popup-picker show-name :show-cell="false" ref="pickerName" :show.sync="showPopupPicker" :data="popupData" v-model="selVal" @on-show="onShow" @on-hide="onHide" @on-change="onChange"></popup-picker>
    </group>
    <div class="checklist_box" v-show='show_company'>
      <div class="my_order_title">
        <img src="../../assets/images/back_icon.png" alt="" @click="back_page"> 请选择销售公司
      </div>
      <checklist ref="demoObject"  :options="objectList" v-model="objectListValue" @on-change="change"></checklist>
    </div>
    <Popup :norm="norm" :close="close_pop_coal" :showDialog="isShowDialog" title="参数输入" ref="show_popup" v-on:getCoal="getCoal" v-on:is_change_data="is_change_data"></Popup>
  </div>
</template>
<script>
import { getCompanyList } from "@/api/release";
import { releaseSaleInfo } from "@/api/release";
import { getCoalType } from "@/api/release";
import Vue from 'vue'
import { Group, Cell, XInput, CellBox, PopupPicker,Checklist } from 'vux'
import  Popup  from "@/views/release/coal_type"
import release from '@/utils/release'
import { ToastPlugin } from "vux";
import { DatetimePlugin } from 'vux'
Vue.use(ToastPlugin, { position: "middle" });
Vue.use(DatetimePlugin)
export default {
  name: 'purchase',
  data() {
    return {
      norm:[],
      isShowDialog: false,
      showPopupPicker: false, // popup 弹层显示变量
      selVal: [], // popup弹层当前选择的值
      popupData: [], // popup弹层数据
      pickerName: '', // picker名字
      form: this.formTemp(),
      flagSel: 1, // 标记当前触发popup选择的索引值
      dateVal: '',
      send_data: {},
      coal_type: [],
      objectList: [
       
      ],
      objectListValue: [],
      show_company:false,
      checked_company_list:{},
      TargetCompanyFlag:false,
      //煤种参数
      coal_detail_data:{},
      //判断用户是否点了指标参数
      is_click_type:0
    }
  },
  components: {
    Group,
    Cell,
    XInput,
    CellBox,
    PopupPicker,
    Checklist,
    'Popup':Popup
  },
  created() {
    this.get_coal_type();
    this.get_company_list();
  },
  mounted() {},
  methods: {
   // 返回
    back_page_prev() {
      this.$router.go(-1);
    },
    // 文件上传
    uploadFile() {
      this.$refs.files.click()
    },
    // 日期触发事件
    datePlugin() {
      let self = this;
      let date = new Date();
      let year = date.getFullYear() // 年
      let month = date.getMonth() + 1; // 月
      let day  = date.getDate(); // 日
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (day >= 0 && day <= 9) {
        day = "0" + day;
      }
      let current_date=`${year}-${month}-${day}`
      this.$vux.datetime.show({
        cancelText: "取消",
        confirmText: "确定",
        format: "YYYY-MM-DD",
        value: current_date,
        startDate: current_date,
        endDate: '2030-10-11',
        onConfirm(val) {
          self.form.brandDate = val;
        },
        onShow() {
          // console.log("plugin show");
        },
        onHide() {
          // console.log("plugin hide");
        }
      });
    },
    // 选择点击事件
    clickSelect(val) {
      this.flagSel = val
      this.popupData = []
      if (val == 2) {
        let _data = release.brandFixed()
        this.popupData.push(_data)
      } else if (val == 3) {
        let _data = release.coalType()
        this.popupData.push(_data)
      } else if (val == 4) {
        let _data = release.priceType()
        this.popupData.push(_data)
      } else if (val == 5) {
        let _data = release.sellMode()
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
      if (this.flagSel == 2) {
        let _data = release.brandFixed()
        let _sel = _data.find(item => {
          return item.value == val[0]
        })
        this.form.brandFixed = _sel.name
        this.form.brandFixedId=_sel.value
        if(_sel.value==1){
          this.TargetCompanyFlag=true
        }else if(_sel.val==2){
          this.TargetCompanyFlag=false
        }
      } else if (this.flagSel == 3) {
        let _data = release.coalType()
        let _sel = _data.find(item => {
          return item.value == val[0]
        })
        this.form.coalType = _sel.name
      } else if (this.flagSel == 4) {
        let _data = release.priceType()
        let _sel = _data.find(item => {
          return item.value == val[0]
        })
        this.form.priceType = _sel.name
        this.form.priceTypeId = _sel.value;
      } else if (this.flagSel == 5) {
        let _data = release.sellMode()
        let _sel = _data.find(item => {
          return item.value == val[0]
        })
        this.form.sellMode = _sel.name
      }
    },
    change(val, label) {
      this.checked_company_list=val
      if(val!=''){
        this.form.sellTarget='已选择'
      }else{
        this.form.sellTarget='请选择'
      }
    },
   // 确认发布点击事件
    submitForm() {
       if (this.form.productName == "") {
        this.$vux.toast.show({
          type: "cancel",
          text: "请输入产品名称"
        });
        return;
      }
      if (this.form.brandFixed == "请选择") {
        this.$vux.toast.show({
          type: "cancel",
          text: "请选择挂牌方式"
        });
        return;
      }
     
      // if (this.form. == "请选择") {
      //   this.$vux.toast.show({
      //     type: "cancel",
      //     text: "请选择"
      //   });
      //   return;
      // }
      if (this.form.contact == "") {
        this.$vux.toast.show({
          type: "cancel",
          text: "请输入联系人"
        });
        return;
      }
      if (this.form.phone == "") {
        this.$vux.toast.show({
          type: "cancel",
          text: "请输入联系电话"
        });
        return;
      }
      if (this.form.coalType == "请选择") {
        this.$vux.toast.show({
          type: "cancel",
          text: "请选择煤种"
        });
        return;
      }
      if (this.form.address == "") {
        this.$vux.toast.show({
          type: "cancel",
          text: "请输入交割地点"
        });
        return;
      }
      if (this.form.priceType == "请选择") {
        this.$vux.toast.show({
          type: "cancel",
          text: "请选择价格类型"
        });
        return;
      }
      if (this.form.sellMode == "请选择") {
        this.$vux.toast.show({
          type: "cancel",
          text: "请选择交货方式"
        });
        return;
      }
      if (this.form.brandTotal == "") {
        this.$vux.toast.show({
          type: "cancel",
          text: "请输入挂牌总数量"
        });
        return;
      }
      if(this.form.brandTotal<0){
           this.$vux.toast.show({
            type: "cancel",
            text: "挂牌总数量不能输入负数"
          });
          return;
        }
      if (this.form.minTotal == "") {
        this.$vux.toast.show({
          type: "cancel",
          text: "请输入最小摘牌数"
        });
        return;
      }
      if(this.form.minTotal<0){
           this.$vux.toast.show({
            type: "cancel",
            text: "最小摘牌数不能输入负数"
          });
          return;
      }
      if(this.form.minTotal>this.form.brandTotal){
         this.$vux.toast.show({
            type: "cancel",
            text: "最小摘牌数不能大于挂牌总数量"
          });
          return;
      }
      if (this.form.brandDate == "请选择") {
        this.$vux.toast.show({
          type: "cancel",
          text: "请选择挂牌有效期"
        });
        return;
      }
       if (this.form.brandDate_end == "请选择") {
        this.$vux.toast.show({
          type: "cancel",
          text: "请选择挂牌有效期"
        });
        return;
      }
      if (this.form.priceTypeId == 2) {
        if (this.form.price == "") {
          this.$vux.toast.show({
            type: "cancel",
            text: "请输入价格"
          });
          return;
        }
      } else if (this.form.priceTypeId == 3) {
        if (this.form.descript == "") {
          this.$vux.toast.show({
            type: "cancel",
            text: "请输入指数挂钩描述"
          });
          return;
        }
      }
      if(this.form.brandFixedId==1){
        if(this.checked_company_list==''){
          this.$vux.toast.show({
            type: "cancel",
            text: "请选择销售对象"
          });
          return;
        }
      }
      if(this.is_click_type==0){
        this.coal_detail_data=this.$refs.show_popup.select_data
        this.coal_detail_data.CoalType=this.form.coalType;
        this.coal_detail_data.QualityId=null;
        this.coal_detail_data.CoalName=this.form.productName;
      }
      let send_data = {
        Quality:this.coal_detail_data,
        CoalAmount: this.form.brandTotal, //挂牌总数量
        ContactPerson: this.form.contact, //联系人
        DeliveryMethod: this.form.sellMode, //交货方式
        ExpirationTime: `${this.form.brandDate} 00:00:00 - ${this.form.brandDate_end} 00:00:00`, //挂牌有效期
        ListingCategory: this.form.brandMode, //挂牌类型
        MinDelisting: this.form.minTotal, //最小摘牌量,
        ParamPrice:'',
        Price: this.form.price, //价格
        Tel:this.form.phone,
        PriceType: this.form.priceType, //价格类型
        CoalType: this.form.coalType, //请选择煤种类型
        CoalName: this.form.productName, //煤种名称
        Place: this.form.address, //交割地点
        Type:'采购挂牌',
        Guid:this.checked_company_list,
        TargetCompanyFlag:this.TargetCompanyFlag
      };
      // let send_data = {
      //   Quality: {
      //     QualityId: null,
      //     CoalType: "炼焦煤",
      //     CoalName: "测试销售",
      //     CoalMt: null,
      //     CoalAd: "1",
      //     CoalVdaf: null,
      //     CoalQ: null,
      //     CoalSt_d: "3",
      //     CoalFc: null,
      //     CoalY: null,
      //     CoalG: null,
      //     CoalM10: null,
      //     CoalM25: null,
      //     CoalST: null,
      //     CoalHGI: null,
      //     Granularity: null,
      //     RecoveryRate: null,
      //     CoalCSR: null,
      //     MaxCoalMt: "4",
      //     MaxCoalAd: null,
      //     MaxCoalVdaf: null,
      //     MaxCoalQ: null,
      //     MaxCoalSt_d: null,
      //     MaxCoalFc: null,
      //     MaxCoalY: null,
      //     MaxCoalG: "2",
      //     MaxCoalM10: null,
      //     MaxCoalM25: null,
      //     MaxCoalST: null,
      //     MaxCoalHGI: null,
      //     MaxGranularity: null,
      //     MaxRecoveryRate: null,
      //     MaxCoalCSR: null
      //   },
      //   CoalAmount: "1000",
      //   ContactPerson: "余涛43",
      //   DeliveryMethod: "车板交货",
      //   Place: "杭州",
      //   Description: null,
      //   MinDelisting: "100",
      //   ParamPrice: null,
      //   Price: "100",
      //   PriceType: "具体价格",
      //   ReceiptId: "",
      //   TargetCompanyFlag: false,
      //   Tel: "18868700540",
      //   Type: "销售挂牌",
      //   ListingCategory: "信誉挂牌",
      //   TargetCompany: [],
      //   ExpirationTime: "2018-09-11 00:00:00 - 2018-10-30 00:00:00"
      // };
      releaseSaleInfo(send_data)
        .then(({ data }) => {
          if(data.Flag==true){
            this.$router.push('success');
          }
        })
        .catch(err => {});
    },
    formTemp() {
      let obj = {
        brandMode: '请选择', // 挂牌方式
        brandModeId: 1,
        brandFixed: '请选择', // 定向挂牌
        brandFixedId: 1,
        contact: '', // 联系人
        phone: '', // 联系电话
        productName: '', // 产品名称
        coalType: '请选择', // 煤种
        targetParam: '', // 指标参数
        address: '', // 交割地点
        priceType: '请选择', // 价格类型
        priceTypeId: 1,
        price: '', // 价格
        sellMode: '请选择', // 交货方式
        brandTotal: '', // 挂牌总数量
        minTotal: '', // 最小摘牌数
        brandDate: '请选择', // 挂牌有效期
        brandDate_end:'请选择',//挂牌结束日期
        remark: '', // 备注
        sellTarget: '请选择', // 销售对象
        descript: '' // 指数挂钩描述
      }
      return obj
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
          this.coal_type=list;
          console.log('list',list);
        })
        .catch(err => {});
    },
    //公司列表
    click_show_company(){
       this.show_company=true
    },
    //实现获取“定向挂牌”时销售/采购对象的公司名称及公司ID列表的功能接口
    get_company_list() {
      getCompanyList()
        .then(({ data }) => {
          let list = [];
          data.forEach(element => {
            let cell = {};
            (cell.key = element.id), (cell.value = element.text);
            list.push(cell);
          });
          this.objectList = list;
        })
        .catch(err => {});
    },
    back_page(){
      this.show_company=false
    },
    //获取煤种参数
    show_pop_up(){
      if(this.form.coalType=='请选择'){
        this.$vux.toast.show({
          type: "cancel",
          text: "请先选择煤种"
        });
        return
      }
      this.is_click_type=1
      this.isShowDialog = true;
      if(this.form.coalType=='无烟煤'){  
        this.norm=release.coalNorm().noSmoke
      }else if(this.form.coalType=='喷吹煤'){
        this.norm=release.coalNorm().blowing
      }else if(this.form.coalType=='炼焦煤'){
        this.norm=release.coalNorm().coking
      }else if(this.form.coalType=='焦炭'){
        this.norm=release.coalNorm().coke
      }else if(this.form.coalType=='动力煤'){
        this.norm=release.coalNorm().power
      }
    },
    //选择结束日期
    datePlugin_end(){
      let self = this;
      let date = new Date();
      let year = date.getFullYear() // 年
      let month = date.getMonth() + 1; // 月
      let day  = date.getDate(); // 日
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (day >= 0 && day <= 9) {
        day = "0" + day;
      }
      let current_date=`${year}-${month}-${day}`
      this.$vux.datetime.show({
        cancelText: "取消",
        confirmText: "确定",
        format: "YYYY-MM-DD",
        value: current_date,
        startDate: current_date,
        endDate: '2030-10-11',
        onConfirm(val) {
          // console.log("plugin confirm", val);
          self.form.brandDate_end = val;
        },
        onShow() {
          // console.log("plugin show");
        },
        onHide() {
          // console.log("plugin hide");
        }
      });
    },
    //关闭煤种参数弹框
    close_pop_coal(){
      this.isShowDialog = false;
    },
    // 煤种参数
    getCoal(coal){
      this.coal_detail_data=coal;
      this.coal_detail_data.CoalType=this.form.coalType;
      this.coal_detail_data.QualityId=null;
      this.coal_detail_data.CoalName=this.form.productName;
    },
    //判断用户是否输入
    is_change_data(val){
      if(val==1){
        this.form.coal_detail_type='已输入'
      }
    },
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/base.scss";
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
.checklist_box {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 101;
  background: #fff;
}
.checklist_box /deep/ label.weui-cell {
  height: 80px;
  line-height: 80px;
  font-size: $base-size;
}
.my_order_title {
  width: 100%;
  height: 88px;
  line-height: 88px;
  background: #fff;
  text-align: center;
  font-size: $extra-large-size;
  border-bottom: 1px solid #e6e6e6; /*no*/
  position: fixed;
  top: 0;
  left: 0;
  z-index: 102;
  margin-bottom:90px;
  img {
    display: block;
    width: 56px;
    height: 56px;
    position: absolute;
    left: 10px;
    top: 16px;
  }
}
</style>
