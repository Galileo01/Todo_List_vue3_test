<template>
  <button
    class="my-button"
    :class="[{'my-button-primary':type==='primary'},{'my-button-danger':type==='danger'}]"
  >
    <slot>按钮</slot>
  </button>
</template>

<script>
export default {
  name: "MyButton",
  props: {
    type: {
      type: String,
      default: "primary",
    },
  },
};
</script>

<style lang="less" scoped>
button {
  outline: none;
  border: none;

  cursor: pointer;
  width: 60px;
  height: 30px;
  border-radius: 5px;
}
.my-button-primary {
  background-color: #409eff;
  border-color: #409eff;
  color: #fff;
}
.my-button-danger {
  background-color: #f56c6c;
  border-color: #f56c6c;
  color: #fff;
}
</style>