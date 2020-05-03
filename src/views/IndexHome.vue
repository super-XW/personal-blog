<template>
  <div>
    <el-container>
      <el-header class="hidden-lg-and-down">
          <header-nav ></header-nav>
      </el-header>
      <el-main>
          
          <router-view></router-view>
      </el-main>
      <!-- <el-footer>Footer</el-footer> -->
    </el-container>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css';
import HeaderNav from '@/components/nav/index'
// import BodyMain from '@/components/main/index'
export default {
    components:{
        HeaderNav,
        // BodyMain
    }
};
</script>

<style scoped>
    .el-header{
        background: #222;
    }
    .el-main{
      margin-top:20px;
      overflow:visible
    }
    
</style>