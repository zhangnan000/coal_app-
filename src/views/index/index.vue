<template>
  <div class="pdb-100">
    <router-view></router-view>
    <footer>
      <div>
        <router-link to="/info">
          <div>
            <i class="iconfont icon-shouye"></i>
            <p>首页</p>
          </div>
        </router-link>
      </div>
      <div>
        <router-link to="/transaction">
          <div>
            <i class="iconfont icon-jiaoyitixing"></i>
            <p>交易</p>
          </div>
        </router-link>
      </div>
      <div>
        <router-link to="/release">
          <div class="release">
            <i class="iconfont icon-tianjia"></i>
          </div>
        </router-link>
      </div>
      <div>
        <router-link to="/dynamic">
          <div>
            <i class="iconfont icon-dongtai"></i>
            <p>动态</p>
          </div>
        </router-link>
      </div>
      <div>
        <router-link to="/mine">
          <div>
            <i class="iconfont icon-wode"></i>
            <p>我的</p>
          </div>
        </router-link>
      </div>
    </footer>
  </div> 
</template>


<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  .pdb-100 {
    padding-bottom: 100px;
  }
  footer {
    padding-top: 10px;
    display: flex;
    width: 100%;
    height: 100px;
    justify-content: space-around;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    .release {
      color: #fff;
      width: 80px;
      height: 80px;
      line-height: 80px;
      border-radius: 50%;
      background-color: #1e92ec;
      margin-left: auto;
      margin-right: auto;
    }
    .router-link-active {
      div {
        color: #1e92ec;
      }
    }
    div {
      flex: 1;
      text-align: center;
      color: #9da2a6;
    }
    i {
      font-size: 50px;
    }
  }
</style>


