<template>
  <div class="wrap">
    <el-carousel  arrow="always">
      <el-carousel-item v-for="(item,index) in splider" :key="index">
        <el-image @click.native="spl(index)" :src="item.img_url" >
          <div slot="error" class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  props:["splider"],
  data() {
    return {
    };
  },
  methods:{
      spl(i){
          console.log(i);
      }
  },
  mounted(){
    
  }
};
</script>

<style scoped>
.image-slot{
    
    display: flex;
    justify-content: center;
    align-items: center;
}


.el-image{
    width: 100%;
    height: 100%;
    border-radius: 6px;
}
.wrap{
    width: 100%;
    /* min-width: 1200px; */
}
</style>