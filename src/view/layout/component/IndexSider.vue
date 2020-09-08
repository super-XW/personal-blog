<template>
  <div class="i_sider">
    <a-layout-sider v-model:collapsed="collapsed" collapsible style="height:100vh;" :trigger="null">
      <div class="logo"></div>
      <a-menu mode="vertical" style="background:transparent;box-sizing:border-box;border:none;" v-model:selectedKeys="selectedKeys">
        <a-menu-item class="a_menu " style="margin:30px 0;" @click="handClick(index)" v-for="(item,index) in menuItem" :key="index">
          <ul class="sider_menu">
            <router-link  class="sider_menu_a" :to="item.to" active-class="active_sider">
              <i :class='["iconfont",item.menuIcon]'></i>
              <span style="margin-left:8px;" v-show="!collapsed">{{item.menuTitle}}</span>
            </router-link>
          </ul>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { reactive, ref, computed, onMounted,toRefs } from "vue";

export default {
  setup(props, context) {
    const store = useStore();
    const router = useRouter();
    const state = reactive({
      menuItem:[
        {
          menuTitle:"灵魂首页",
          menuIcon:"icon-shouye1",
          to:"/home"
        },
        {
          menuTitle:"心情随笔",
          menuIcon:"icon-liuyan2",
          to:"/jottings"
        },
        {
          menuTitle:"学习记录",
          menuIcon:"icon-xingtuxuetang-kecheng-",
          to:"/record"
        },
        {
          menuTitle:"技术杂谈",
          menuIcon:"icon-jishufuwu",
          to:"/technology"
        },
        {
          menuTitle:"鬼才留言",
          menuIcon:"icon-liuyan-duandian",
          to:"/message"
        },
        {
          menuTitle:"关于我",
          menuIcon:"icon-nb-",
          to:"/me"
        }
      ]
    });
    const collapsed = computed(() => store.state.collapsed);

    function onMounted() {}

    let selectedKeys = ref([0]);
    function handClick(index) {
      selectedKeys = index;
    }
    return {
      collapsed,
      ...toRefs(state),
      handClick,
      selectedKeys
    };
  },
};
</script>

<style scoped>
.iconfont {
  font-size: 20px;
}
.sider_menu {
  display: flex;
  color: aliceblue;
  align-items: center;
}
.sider_menu_a {
  display: flex;
  align-items: center;
  flex: 1;
  color: aliceblue;
}
.active_sider {
  color: #fff;
}

.ant-menu-item {
  width: 100%;
  position: relative;
}
.ant-layout-sider{
  background:url("../../../assets/img/sider_bg.jpg");
  background-image: 100% 100%;
}
</style>