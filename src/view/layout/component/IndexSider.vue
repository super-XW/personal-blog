<template>
  <div>
    <a-layout-sider   v-model:collapsed="collapsed"   style="height:100vh;">
      <div class="logo" />
      <a-menu  mode="inline" theme="dark" v-model:selectedKeys="selectedKeys">
        <a-menu-item key="1">
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3" >
          <span>nav 3</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { reactive, ref, computed } from "vue";

export default {
  setup(props, context) {
    const store = useStore();
    const state = reactive({
      selectedKeys: [],
    });
    const collapsed = computed(() => store.state.collapsed);
    return {
      collapsed,
      ...state,
    };
  },
};
</script>

<style >
</style>