<template>
  <div>
      <el-row type="flex" justify="center">
          <el-col :span="16" >
            <div class="wrap">
                <img  class="logo_img" src="../../assets/kakaluote.jpg" alt="">
                <ul class="nav_tag">
                    <router-link 
                        :to="item.to" 
                        tag="li"
                        v-for="(item,index) in navList" 
                        :key="index">
                        {{item.title}}
                    </router-link>
                </ul>
                <div class="inp">
                    <input v-model="inp" type="text" placeholder="输入你要查找的内容">
                    
                </div>
            </div>
          </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
    data(){
        return{
            navList:[
                {
                    title:"首页",
                    to:"/",
                },
                // {
                //     title:"关于",
                //     to:"/guanyu",
                // },
                {
                    title:"成长",
                    to:"/growup",
                },
                {
                    title:"学习",
                    to:"/learn",
                },
                {
                    title:"娱乐",
                    to:"/recreation",
                },
                {
                    title:"求助",
                    to:"/not",
                },
                {
                    title:"留言",
                    to:"/not",
                }
            ],
            inp:"",
            
        }
    },
    
    mounted(){
        
        
    }

}
</script>

<style scoped>


    .el-col{
        
    }
    .logo_img{
        width: 180px;
        height: 60px;
    }
    .nav_tag{
        width: 800px;
        display: flex;
        justify-content: space-between;
    }
    .nav_tag > li{
        color:#f1f1f1;
        font-size:16px;
        cursor: pointer;
        width:100px;
        text-align: center;
        height: 60px;
        line-height: 60px;
        
    }
    .nav_tag > li:hover{
        background:rgb(77, 71, 71);
    }
    .wrap{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .inp{
        width: 190px;
    }
</style>