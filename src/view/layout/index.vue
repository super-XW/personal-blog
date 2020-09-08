<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <index-sider />
    <a-layout>
      <index-header />
      <a-layout-content :style="{  padding:'18px'  }">
          <!-- leave-active-class="animate__animated animate__bounceInLeft" -->
        <transition name="custom-classes-transition" enter-active-class="animate__animated animate__rotateInUpRight" >
          <index-content ></index-content>
        </transition>
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
  setup(props: any, context: any) {
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
  height: 20px;
  margin: 16px;
}
</style>