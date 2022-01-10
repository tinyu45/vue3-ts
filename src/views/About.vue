<template>
  <a-card title="关于">
    <template #extra>
      <a-button type="primary" @click="jump('/')">back</a-button>
    </template>
    <div>一些内容</div>
  </a-card>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useCommon } from "@/utils/common";
export default defineComponent({
  setup() {
    const { jumpTo: jump } = useCommon();
    return {
      jump
    };
  }
});
</script>
