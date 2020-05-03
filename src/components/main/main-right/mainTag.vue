<template>
  <div class="right-wrap">
          <span class="right-tag">热门标签</span>
          <div class="right-tag-list-wrap">
            <ul>
              <router-link v-for="item in hotTag" :key="item.id" tag="li" to="/not">{{item.tag}}</router-link>
            </ul>
          </div>
        </div>
</template>

<script>
export default {
  props:['hotTag']
}
</script>

<style scoped>
li{
  list-style: none;
}
/* //右边样式 */
.right-wrap{
  margin-top:20px;
  margin-left:20px;
  background:#f7f7f7;
  border-radius: 4px;
  width:300px;
}
.right-tag{
  height:50px;
  line-height: 50px;
  font-size:18px;
  font-weight: 500;
  padding-left:10px;
  /* background: #fff; */
}
.right-tag-list-wrap{
  background: #fff;
  border-radius: 4px;
}
.right-tag-list-wrap > ul{
  display: flex;
  justify-content: flex-start;
  /* padding: 10px; */
  padding-bottom: 20px;
  padding-right: 10px;
  padding-left:10px;
  flex-wrap: wrap;
}
.right-tag-list-wrap > ul > li{
  padding: 5px 8px 5px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin:10px 0 0px 10px;
  cursor: pointer;
}
.right-tag-list-wrap > ul > li:hover{
  border:1px solid rgb(196, 226, 24);
  color: rgb(204, 201, 18);
}
</style>