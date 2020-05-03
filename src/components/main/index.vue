<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :lg="{span:16}" :md="{span:24}" :xs="{span:24}">
        <main-splider :splider=spliderList></main-splider>
        <main-article></main-article>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MainSplider from "./mainSplider";
import MainArticle from "./mainListArticle";
export default {
    data(){
        return{
            spliderList:""
        }
    },
  components: {
    MainSplider,
    MainArticle
  },
  mounted() {
    this.axios.get("/splider").then(data => {
        this.spliderList = data.data;
    });
  }
};
</script>

<style scoped>

.el-carousel__container {
  height: 320px !important;
}
</style>