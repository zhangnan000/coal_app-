<template>
  <div class="container">
    <w-header>注册信息填写</w-header>
    <div class="progress">
      <span class="current">1.注册账号</span>
      <span class="current">></span>
      <span class="current">2.信息填写</span>
      <span class="current">></span>
      <span class="current">3.资料上传</span>
    </div>
    <div class="tips">
      上传文件格式支持：PNG/JPG
    </div>
    <div class="upload-form">
      <div v-for="(item,index) in uploadList" :key="index" class="item">
        <h3>{{item.title}}</h3>
        <div class="upload-block">
          <label :for="item.id">
            <i class="iconfont icon-add"></i>
            <img v-if="item.src" :src="item.src" alt="">
            <!-- <p v-if="con.type">{{con.type}}</p> -->
            <input @change="handleUpload($event,index)" type="file" name="" :id="item.id">
          </label>
        </div>
      </div>
    </div>
    <button @click="handleComplete" class="complete">完成</button>
  </div>
</template>

<script>
import Header from '@/components/common/header'
import axios from 'axios'
import { transactionMember } from '@/api/register'
import Vue from 'vue'
import { ToastPlugin } from 'vux'
Vue.use(ToastPlugin)
export default {
  data () {
    return {
      uploadList: [
        {
          id:'AuthorizationId',
          title:'法人代表授权',
          gUid:'',
          src:''
        },
        {
          id:'LicenseId',
          title:'营业执照',
          gUid:'',
          src:''
        },
        {
          id: 'CorporateIDcard',
          title:'法人身份扫描 ',
          gUid:'',
          src:''
        },
        {
          id: 'AuthorizedIDcard',
          title:'被授权人身份证 ',
          gUid:'',
          src:''
        },
        {
          id:'ApplicationId',
          title:'交易商入市申请表 ',
          gUid:'',
          src:''
        },
      ]
    }
  },
  components: {
    'w-header': Header
  },
  methods: {
    handleUpload(e, idx) {
      if(!e.target.files[0]) {
        return
      }
      let params = new FormData()
      params.append('file', e.target.files[0])
      axios({
        method: 'post',
        url:'/Annex/AnnexUpload',
        headers: {'Content-type': 'multipart/form-data'},
        data:params
      }).then(({data}) => {
        if(data.Flag){
          console.log(data)
          this.uploadList[idx].gUid = data.Message
          this.uploadList[idx].src = 'http://10.162.1.191/Annex/GetAnnex?annexId=' + data.Message
          console.log(this.uploadList)
          return
        }
      })
    },

    handleComplete(){
      let data = {}
      let flag = true
      this.uploadList.forEach(el => {
        if(!el.gUid) {
          flag = false
        }
        data[el.id] = el.gUid
      })
      if(!flag) {
        return this.$vux.toast.text('请完整上传相关资质')
      }
      this.$store.commit('SET_UPLOAD_INFO', data)
      console.log(this.$store.state.user.registerInfo)
      transactionMember(this.$store.state.user.registerInfo).then(({data}) => {
        console.log(data)
        if(data.Flag) {
          return this.$router.push('/submited')
        }
        this.$vux.toast.text(data.Message)
      })
    }
  }
}
</script>


<style lang="scss" scoped >
   @import '@/assets/css/base.scss';
  .container {
    min-height: 100vh;
    background-color: #fff;
    padding-top: 88px;
  }
  .progress {
    padding: 30px 40px;
    color: #bdc1c3;
    .current {
      color: #1e92ec;
    }
    span:nth-child(2n) {
      margin-left: 20px;
      margin-right: 20px;
    }
  }

  .upload-form {
    padding: 0 40px;
    margin-top: 48px;
    .item {
      border-bottom: 1px solid #e6e6e6; /*no*/
      margin-bottom: 40px;
      h3 {
        font-size: $large-size;
        font-weight: 400;
      }
      .upload-block {
        padding-top: 30px;
        padding-bottom: 40px;
        display: flex;
        label {
          position: relative;
          text-align: center;
          width: 180px;
          height: 180px;
          margin-right: 30px;
          background-color: #f2f2f2;
          border-radius: 8px;
          border: solid 1px #cccccc; /*no*/
          color: #CCC;
          i {
            font-size: 54px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
          }
          img {
            width: 100%;
            height: 100%;
          }
          input {
            display: none;
          }
          p {
            margin-top: 140px;
            color: #b3b3b3;
          }
        }
      }
    }

  }

  .complete {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 615px;
    height: 80px;
    background-color: #1e92ec;
    border-radius: 8px;
    font-size: $large-size;
    color: #fff
  }

  .tips {
    padding: 0 40px;
    color: #0059b3;
  }
</style>

