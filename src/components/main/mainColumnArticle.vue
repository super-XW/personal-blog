<template>
  <div class="c-wrap">
    <span class="c-h2" >{{title}}</span>
    <div
      class="column-wrap"
      v-for="(item,index) in articleList"
      :key="item.id"
      @mouseover="hoverIndex = index"
      :class="[hoverIndex == index ? 'column-wrap-active' : ''  ]"
      @click="handlecolumnarticle(item)"
      @mouseout="hoverIndex = -1"
    >
      <img style="width:220px;height:150px;border-radius:4px;" :src="item.img_url" alt />
      <div class="column-right">
        <div>
          <p class="column-title">{{item.title}}</p>
          <p class="column-content">{{item.describe}}</p>
        </div>
        <div class="column-user">
          <ul>
            <li>
              <i class="el-icon-user"></i>
              <span>{{item.user}}</span>
            </li>
            <li>
              <i class="el-icon-time"></i>
              <span>{{item.create_time | formatter}}</span>
            </li>
            <li>
              <i class="el-icon-view"></i>
              <span>{{item.browse}}次浏览</span>
            </li>
            <li>个人博客：[Java]</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["articleList","title"],
  
  data() {
    return {
      hoverIndex: -1
    };
  },
  methods: {
    handlecolumnarticle(item) {
      console.log(item.id)
      this.$router.push({
        path: "/articleDetail",
        query: { data: item.id, shu: 10 }
      });
    }
  }
};
</script>

<style scoped>
li{
  list-style: none;
}
.c-wrap {
  background: #f7f7f7;
}
.column-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  height: 200px;
  position: relative;
  cursor: pointer;
  /* width:960px; */
}
.column-wrap-active::before {
  content: "";
  width: 2px;
  background: #ccc;
  height: 100%;
  position: absolute;
  left: 0;
}
.column-wrap:hover {
  background: rgb(225, 241, 210);
}
.column-right {
  padding-left: 15px;
  width: 680px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 140px;
  /* align-items: ; */
}
.column-title {
  /* color:rgb(44, 42, 42); */
  font-size: 18px;
  font-weight: 600;
  height: 40px;
  line-height: 40px;
}
.column-user {
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
  color: #ccc;
}
.c-h2 {
  height: 35px;
  line-height: 35px;
  padding-left: 10px;
  font-size: 16px;
}
</style>