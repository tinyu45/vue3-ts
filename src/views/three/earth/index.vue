<template>
  <div ref="container" class="three-container"></div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, unref, onBeforeUnmount } from "vue";
export default defineComponent({});
</script>
<style lang="less" scoped>
.three-container {
  width: 100%;
  height: 100vh;
  position: relative;
}
</style>
