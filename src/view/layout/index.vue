<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <index-sider />
    <a-layout>
      <index-header />
      <a-layout-content :style="{  background: '#ccc',  }">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { reactive, ref } from "vue";

import IndexSider from "./component/IndexSider.vue";
import IndexHeader from "./component/IndexHeader.vue";
import IndexContent from "./component/IndexContent.vue";
export default {
  name: "Layout",
  components: {
    IndexHeader,
    IndexSider,
    IndexContent,
  },
  setup(props, context: any) {
    const collapsed = ref(false);
    const state = reactive({
      selectedKeys: [],
    });
    return {
      collapsed,
      ...state,
    };
  },
};
</script>
<style>
#components-layout-demo-custom-trigger {
  height: 100vh;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>