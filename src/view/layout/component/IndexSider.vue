<template>
  <div>
    <a-layout-sider v-model:collapsed="collapsed" collapsible style="height:100vh;" :trigger="null">
      <div class="logo" />
      <a-menu mode="inline" theme="dark" v-model:selectedKeys="selectedKeys">
        <a-menu-item key="1">
          <i class="iconfont">&#xe647;</i>
          <span v-show="!collapsed">nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <i class="iconfont">&#xe647;</i>
          <span v-show="!collapsed">nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <i class="iconfont">&#xe647;</i>
          <span v-show="!collapsed">nav 3</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { reactive, ref, computed, onMounted } from "vue";
import Axios from "axios";

export default {
  setup(props, context) {
    const store = useStore();
    const state = reactive({
      selectedKeys: [],
    });
    const collapsed = computed(() => store.state.collapsed);

    function onMounted() {
    }
    return {
      collapsed,
      ...state,
    };
  },
};
</script>

<style scoped>
.iconfont {
  font-size: 20px;
}
</style>