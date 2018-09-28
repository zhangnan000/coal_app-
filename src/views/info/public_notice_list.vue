<template>
    <div class="industry_box">
         <div class="my_order_title">
            <img src="../../assets/images/back_icon.png" alt=""  @click="back_index"> 历史公告
        </div>
        <ul class="public_notice_box">
            <li class="public_notice_list public_notice_list_active" v-for="(item,key) in company_show" :key="key" @click="jump_public_detail(item.ID)">
                <p class="public_notice_title overflow_one">
                    {{item.FullTitle}}
                </p>
                <p class="public_notice_time">{{item.UpdateTime}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
import { getPlantformNotice } from "@/api/indexInfo";
export default {
  name: "publicNoticeList",
  data() {
    return {
      industry_list_params: {
        pageSize: 15,
        pageNumber: 1
      },
      company_show: {}
    };
  },
  created() {
    window.scroll(0, 0);
    this.get_company_data();
  },
  methods: {
    //平台公告
    get_company_data() {
      getPlantformNotice(this.industry_list_params)
        .then(({ data }) => {
          this.company_show = data.Rows;
        })
        .catch(err => {});
    },
    jump_public_detail(id){
        this.$router.push({
        name: 'publicNoticeDetail',
        params: {
          id: id,
          is_index:0
        }
      })
    },
    back_index(){
        this.$router.push({ name: 'info'});
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/industry_list.scss";
.public_notice_list_active{
  height: 105px;
  line-height: 105px;
}
.public_notice_title{
  width:540px;
}
</style>