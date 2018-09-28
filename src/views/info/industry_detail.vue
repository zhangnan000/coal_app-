<template>
    <div class="industry_box">
        <div class="my_order_title">
            <img src="../../assets/images/back_icon.png" alt="" @click="back_index_or_list" class="back_icon">  资讯详情
            <span class="look_more"  @click="back_list">
                资讯列表
            </span>  
        </div>
        <div class="industry_news_box">
            <h3 class="industry_title">{{detail_info.Title}}</h3>
            <p class="industry_source_time">
                {{detail_info.Source}} | 时间：{{detail_info.NewsDateString}}
            </p>
            <img :src="detail_info.imgUrl" alt="">
            <div class="news_con" v-html="detail_info.ContentString">
            </div>
        </div>   
    </div>
</template>
<script>
import { newsDetail } from "@/api/indexInfo";
export default {
  name: "industryDetail",
  data() {
    return {
        id:this.$route.params.id,
        detail_info:{},
        is_index:this.$route.params.is_index
    };
  },
  created() {
       window.scroll(0, 0);
       this.get_detail_info();
  },
  methods: {
      get_detail_info(){
        newsDetail(this.id).then(({ data }) => {
          this.detail_info = data
          this.detail_info.imgUrl='http://10.162.1.191/Annex/GetAnnex?annexId='+this.detail_info.PictureAnnexId
        }).catch(err => {});
       },
       //返回
       back_index_or_list(){
           if(this.is_index==1){
               this.$router.go(-1)
           }else{
               this.$router.push({name: 'industryList'});
           }
       },
       back_list(){
           this.$router.push({name: 'industryList'});
       }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/industry_detail.scss";

</style>