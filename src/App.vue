<template>
<div>
  <router-view></router-view>
</div>
</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import provider from  './api/provider'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  ...provider
}
</script>



<style lang="less" scoped>


</style>
