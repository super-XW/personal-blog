<template>
  <div class="d-wrap">
    <div class="d-header">
      <p class="d-title">{{articleDetailList.title}}</p>
      <div class="column-user">
        <ul class="dis">
          <li>
            <i class="el-icon-user"></i>
            <span>{{articleDetailList.user}}</span>
          </li>
          <li>
            <i class="el-icon-time"></i>
            <span>{{articleDetailList.create_time | formatter}}</span>
          </li>
          <li>
            <i class="el-icon-view"></i>
            <span>{{articleDetailList.browse}}次浏览</span>
          </li>
          <li>个人博客：[Java]</li>
        </ul>
      </div>
      
    </div>
    <div class="markdown-body"  v-html="articleDetailList.content"></div>
  </div>
</template>

<script>
// import marked from 'marked'
    
    import "mavon-editor/dist/css/index.css";
export default {
  data() {
    return {
      articleDetailList: "",
      content:""
    };
  },
  mounted() {
    this.axios
      .get("/articleDetail", {
        params: {
          id: this.$route.query.data,
          shu: this.$route.query.shu
        }
      })
      .then(data => {
        this.articleDetailList = data.data;
        // this.content = marked(this.articleDetailList.content)
        // console.log(data);
      });
  },
  computed: {}
};
</script>

<style scoped>
@import url('../../node_modules/mavon-editor/dist/css/index.css');

.d-wrap {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  justify-content: center;
}
.d-header {
  width: 900px;
  height: 50px;
  background: #f7f7f7;
  padding: 20px 20px;
  border-bottom: 1px solid #f1f1f1;
}
.d-content{
    
}
.markdown-body{
  width:49.5%;
  padding-top:10px;
  background: #fff;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  /* align-items: center; */
  padding: 10px;
}
.d-content, h1{
    /* font-size:20px; */
}
.d-title {
  font-size: 22px;
}
.column-user {
  margin: 10px 0;
}
.column-user > ul {
  width: 400px;
  display: flex;
  justify-content: space-between;
  color: #ccc;
}
.column-content {
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
}







</style>