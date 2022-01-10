<template>
  <div>
    <a-table
      :columns="columns"
      :dataSource="userList"
      size="small"
      :pagination="false"
      row-key="name"
      bordered
    >
      <!--表头 -->
      <template #title="tabledata">
        <div class="table-title-continer">
          <a-space>
            <span class="table-title-text">表格标题</span>
            <a-tag color="success">{{ tabledata.length }}条</a-tag>
          </a-space>
          <div class="table-title-btns">
            <a-button type="primary" @click="addHandler">add</a-button>
          </div>
        </div>
      </template>
      <!-- 操作列 -->
      <template #actions="{ index, record }">
        <a-space>
          <a-button
            type="primary"
            size="small"
            @click="editHandler(record, index)"
          >
            编辑
          </a-button>
          <a-button type="danger" size="small" @click="removeHandler(index)">
            删除
          </a-button>
        </a-space>
      </template>
    </a-table>
    <operate-modal
      v-model:show="showEdit"
      :actionType="actionType"
      :row="editRow"
      @submit="submitForm"
    ></operate-modal>
  </div>
</template>

<script lang="ts">
// import { defineComponent, reactive, ref, Ref, toRefs } from "vue";
// import type { FormItem, User, UserForm } from "@/views/user-demo/components/user-types";
import { defineComponent } from "vue";
import OperateModal from "./OperateModal.vue";
import { useUserList } from "./use";
export default defineComponent({
  components: {
    OperateModal
  },
  setup() {
    // const userList: Ref<User[]> = ref([]);
    return { ...useUserList() };
  }
});
</script>

<style lang="less" scoped>
.table-title-continer {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  .table-title-text {
    font-size: 16px;
    font-weight: 600;
  }
  .table-title-btns {
    text-align: right;
  }
}
</style>
