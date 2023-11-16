<template>
  <div class="status">
    <span>如果喜欢Akali，请在<a href="https://gitee.com/dromara/Akali">Gitee仓库</a>上点个Star，谢谢！</span>
    <Close @click.native="$closeCurrentStatus" />
  </div>
</template>

<script>
import Close from "./Close.vue";

export default {
  components: {
    Close,
  },
};
</script>

<style lang="stylus"scoped>
.status {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    cursor: pointer;
    position: absolute;
    top: 4px;
    right: 10px;
  }
}
</style>
