<template>
  <a-layout-header class="header_wrap">
    <a-row>
      <a-col :span="12">
        <div class="switch">
          <i class="iconfont" @click="activeSider">&#xe647;</i>
        </div>
      </a-col>
    </a-row>
  </a-layout-header>
</template>

<script>
import { ref, inject, watchEffect, computed } from "vue";
import { useStore } from "vuex";
export default {
  components: {},
  mounted() {},
  setup(props, context) {
    const store = useStore();
    let testMsg = ref(inject("xx"));
    let testFn = inject("testFn");
    function activeSider() {
      store.commit("activeCollapsed");
      testMsg.value = "g‘’";
      testFn("josdjfosd");
      console.log(testMsg);
    }
    return {
      activeSider,
    };
  },
};
</script>

<style scoped>
.header_wrap {
  font-size: 16px;
  background: rgba(42, 42, 34,.8);
}
.iconfont {
  font-size: 30px;
  cursor: pointer;
}
.iconfont:hover {
  color: rgb(24, 144, 255);
}
.switch {
  color: #fff;

}
</style>