<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :span="16">
        <main-column-article :articleList="articleList" title="娱乐"></main-column-article>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MainColumnArticle from "../components/main/mainColumnArticle";
export default {
    data(){
        return{
            articleList:""
        }
    },
  components: {
    MainColumnArticle
  },
  mounted(){
      this.axios.get('/newest').then((data)=>{
      this.articleList = data.data;
      
    })
  }
};
</script>

<style>
</style>