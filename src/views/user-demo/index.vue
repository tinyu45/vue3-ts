<template>
  <a-card title="用户管理">
    <template #extra>
      <a-button type="primary" @click="jump('/')">back</a-button>
    </template>
    <user-list/>
  </a-card>
</template>
<script lang="ts">
import UserList from "./components/UserList.vue";
import { defineComponent } from "vue";
import { useCommon } from "@/utils/common";
export default defineComponent({
  components: { UserList },
  setup() {
    const { jumpTo: jump } = useCommon();
    return {
      jump
    };
  }
});
</script>
