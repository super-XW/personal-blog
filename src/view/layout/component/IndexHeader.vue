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
import { ref } from "vue"
import { useStore } from 'vuex';
export default {
  components: {},
  setup(props,context) {
    const store = useStore();
    function activeSider() {
      store.commit('activeCollapsed');
    }
    return {
      activeSider
    }
  }
};
</script>

<style scoped>
.header_wrap {
  font-size: 16px;
}
.iconfont {
  font-size: 30px;
  cursor:pointer;
}
.iconfont:hover{
  color:yellowgreen;
}
.switch{
  color:#fff;

}
</style>