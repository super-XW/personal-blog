<template>
  <div class="super-wrap">
    <el-row>
      <el-col  :sm={span:24} :lg={span:18} :xs={span:24} >
        <main-night-article :articleList=articleNight ></main-night-article>
        <main-column-article :articleList=articleList title="最新发布"></main-column-article>
      </el-col>
      <el-col :lg={span:6} >
        <right-main-tag :hotTag=hotTag></right-main-tag>
        <main-list-article :recommendArticle=recommendArticle></main-list-article>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css';
import MainNightArticle from './mainNightArticle'
import MainColumnArticle from './mainColumnArticle'

import RightMainTag from './main-right/mainTag'
import MainListArticle from './main-right/mainListArticle'
export default {
  data(){
    return{
      articleNight:'',
      articleList:'',
      hotTag:'',
      recommendArticle:''
    }
  },
  components:{
    MainNightArticle,
    MainColumnArticle,
    RightMainTag,
    MainListArticle
  },
  methods:{

  },
  mounted(){
    this.axios.get('/articleNightList').then((data)=>{
      this.articleNight = data.data;
    })
    this.axios.get('/newest').then((data)=>{
      this.articleList = data.data;
      
    })


    this.axios.get('/hotTag').then((data)=>{
      this.hotTag = data.data;
    })
    this.axios.get('/recommendArticle').then((data)=>{
      this.recommendArticle = data.data;
    })
  }
}

</script>

<style scoped lang="css">


</style>