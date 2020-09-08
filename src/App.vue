<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import provider from "./api/provider";
export default {
  name: "App",
  components: {},
  ...provider,
};
</script>



<style >
@import url('./assets/css/index.css');

</style>
