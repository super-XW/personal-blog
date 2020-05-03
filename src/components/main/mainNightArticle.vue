<template>
  <div class="wrap">
          <span class="title">特别推荐</span>
          <div class="main-wrap">
            <div class="main-list" 
              @click="handleninearticle(item)"
              v-for="(item,index) in articleList" 
              :key="index" 
              :class="[index % 2 == 0 ? '' : 'active' ]"
              >
                <img :src="item.img_url" alt />
                <div class="main-content">
                  <p class="content-title">{{item.title}}</p>
                  <p style="color:#ccc">{{item.describe}}</p>
                </div>
            </div>
            
          </div>
        </div>
</template>

<script>
export default {
  props:['articleList'],
  methods:{
    handleninearticle(item){
      console.log("sjids");
      this.$router.push({path:'/articleDetail', query:{data:item.id,shu:9}});
    }
  }
  
}
</script>

<style scoped>
.super-wrap{
  
}
.main-list {
  width: 50%;
  display: flex;
  box-sizing: border-box;
  background: rgb(255, 255, 255,0.7);
  align-items: center;
  justify-content: center;
  height: 130px;
  border-bottom: 1px solid rgb(233, 227, 227);
  cursor: pointer;
}
.main-list > img {
  width: 110px;
  height: 85px;
  border-radius: 4px;
}
.main-list:hover{
  background: rgb(243, 253, 241);
  color:rgb(51, 228, 15)
}
.main-content {
  margin-left: 10px;
  width: 70%;
}
.main-wrap {
  display: flex;
  flex-wrap: wrap;
}
.wrap{
  margin-top:20px;
  background: #f7f7f7;
  /* padding:0 0.1px; */
}
.title{
  height: 30px;
  display: block;
  padding-left:10px;
  line-height: 30px;
  color:#666;
  font-size:16px;
}
.content-title{
  font-weight: 800;
  font-size: 14px;
 margin-bottom: 8px;
}
.active{
  /* bo */
  border-left: 0.1px solid #ccc;
}
</style>