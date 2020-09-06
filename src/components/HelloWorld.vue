<template>
  <h1>{{ msg }}</h1>
  <button @click="state.count++">count is: {{ state.count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <a-button type="primary">
    Primary
  </a-button>
</template>

<script lang="ts">
import { reactive } from "vue";
export default {
  props: {
    msg: {
      type: String,
    },
  },
  // context是什么？
  //在setup()里我们不能用this
  //所以vue2.0里的 this.$emit, this.$psrent, this.$refs在这里都不能用了。
  //context就是对这些参数的集合
  //context.attrs
  //context.slots
  //context.parent 相当于2.0里 this.$psrent
  //context.root 相当于2.0里 this
  //context.emit 相当于2.0里 this.$emit
  //context.refs 相当于2.0里 this.$refs
  setup(props, context) {
    const name = props.msg;
    const state = reactive({
      count: 3,
    });
    return {
      name,
      state,
    };
  },
};
</script>
