<template>
  <div>
    <a-layout-sider v-model:collapsed="collapsed" collapsible style="height:100vh;" :trigger="null">
      <div class="logo" />
      <a-menu mode="inline" theme="dark" v-model:selectedKeys="selectedKeys">
        <a-menu-item class="a_menu" @click="handClick" v-for="(item,index) in menuItem" :key="index">
          <ul class="sider_menu">
            <router-link tag="li" class="sider_menu_a" :to="item.to" active-class="active_sider">
              <i class="iconfont">&#xe647;</i>
              <span style="margin-left:8px;" v-show="!collapsed">{{item.menuTitle}}</span>
              <!-- <i v-show="!collapsed" class="iconfont">&#xe632;</i> -->
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
import { reactive, ref, computed, onMounted } from "vue";
import Axios from "axios";

export default {
  setup(props, context) {
    const store = useStore();
    const router = useRouter();
    const state = reactive({
      selectedKeys: [],
      menuItem:[
        {
          menuTitle:"灵魂首页",
          menuIcon:"",
          to:"/home"
        },
        {
          menuTitle:"心情随笔",
          menuIcon:"",
          to:"/informal"
        },
        {
          menuTitle:"学习记录",
          menuIcon:"",
          to:"/informal"
        },
        {
          menuTitle:"技术杂谈",
          menuIcon:"",
          to:"/informal"
        },
        {
          menuTitle:"鬼才留言",
          menuIcon:"",
          to:"/message"
        },
        {
          menuTitle:"关于我",
          menuIcon:"",
          to:"/me"
        }
      ]
    });
    const collapsed = computed(() => store.state.collapsed);

    function onMounted() {}
    function handClick() {
      router.push("/user");
    }
    return {
      collapsed,
      ...state,
      handClick,
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
  color: rgb(6, 248, 127);
}
.active_sider::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  right: 0;
  background: rgba(127, 255, 212, 0.1);
}
.ant-menu-item {
  width: 100%;
  position: relative;
}
</style>