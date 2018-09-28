<template>
     <div class="industry_box">
        <div class="my_order_title">
            <img src="../../assets/images/back_icon.png" alt=""  @click="back_index_or_list" class="back_icon">  公告详情
            <img class="look_more_img"  src="../../assets/images/history_notice.png"  @click="back_list"/>
        </div>
        <div class="industry_news_box">
            <h3 class="industry_title">{{detail_info.FullTitle}}</h3>
            <div v-html="detail_info.ContentString" class="news_con">
            </div>
        </div>   
    </div>
</template>
<script>
import { publicDetail } from "@/api/indexInfo";
export default {
    name: 'publicNoticeDetail',
    data() {
        return {
            id:this.$route.params.id,
            detail_info:{},
            is_index:this.$route.params.is_index
        }
    },
    created() {
        window.scroll(0, 0);
        this.get_detail_info();
    },
    methods: {
       get_detail_info(){
        publicDetail(this.id).then(({ data }) => {
          this.detail_info = data;
        }).catch(err => {});
       },
       //返回
       back_index_or_list(){
           if(this.is_index==1){
               this.$router.go(-1)
           }else{
               this.$router.push({name: 'publicNoticeList'});
           }
       },
       back_list(){
           this.$router.push({name: 'publicNoticeList'});
       }
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/industry_detail.scss";
</style>