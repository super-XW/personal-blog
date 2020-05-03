<template>
  <div class="a-wrap">
    <span class="right-title">推荐文章</span>
    <div
      class="right-wrap"
      v-for="(item,index) in recommendArticle"
      :key="item.id"
      @mouseover="hoverIndex = index"
      :class="[hoverIndex == index ? 'column-wrap-active' : ''  ]"
      @mouseout="hoverIndex = -1"
    >
      <img style="width:100px;height:60px;border-radius:4px;" :src="item.img_url" alt />
      <div class="right-list">
        <p class="right-content">{{item.title}}</p>
        <div>
          <span>{{item.create_time | formatter}}</span>
          <span style="fontSize:12px;margin-left:4px;">{{item.browse}}次阅读</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['recommendArticle'],
  data() {
    return {
      hoverIndex: -1
    };
  }
};
</script>

<style scoped>
.a-wrap {
  margin-left: 20px;
  margin-top: 15px;
  background: #f7f7f7;
  width: 300px;
}
.right-wrap {
  display: flex;
  background: #fff;
  height: 100px;
  align-items: center;
  position: relative;
  justify-content: space-around;
  border-bottom: 1px solid #ccc;
}
.right-wrap:hover {
  background: rgb(225, 241, 210);
}
.right-title {
  height: 35px;
  line-height: 35px;
  font-size: 18px;
  padding-left: 10px;
}
.right-list {
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.column-wrap-active::before {
  content: "";
  width: 2px;
  background: #ccc;
  height: 80%;
  position: absolute;
  left: 0;
}
.right-content{
    -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  font-size:16px; 
    height: 30px;
    line-height: 30px;
    width:160px;
}
</style>