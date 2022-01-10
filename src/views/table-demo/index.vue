<template>
  <a-card title="一个表格">
    <template #extra>
      <a-button type="primary" @click="jump('/')">back</a-button>
    </template>
    <div>
      <a-table
        :title="() => '基本表格'"
        :columns="columns"
        :dataSource="tabledata"
      >
        <template #name="{ text }">
          <a>{{ text }}</a>
        </template>
        <template #customTitle>
          <span>
            <smile-outlined />
            Name
          </span>
        </template>
        <template #tags="{ text: tags }">
          <span>
            <a-tag
              v-for="tag in tags"
              :key="tag"
              :color="
                tag === 'loser'
                  ? 'volcano'
                  : tag.length > 5
                  ? 'geekblue'
                  : 'green'
              "
            >
              {{ tag.toUpperCase() }}
            </a-tag>
          </span>
        </template>
        <template #action="{ record }">
          <span>
            <a>Invite 一 {{ record.name }}</a>
            <a-divider type="vertical" />
            <a>Delete</a>
            <a-divider type="vertical" />
            <a class="ant-dropdown-link">
              More actions
              <down-outlined />
            </a>
          </span>
        </template>
      </a-table>
    </div>
  </a-card>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import { SmileOutlined, DownOutlined } from "@ant-design/icons-vue";
import { columns, data } from "./static";
import { useCommon } from "@/utils/common";
export default defineComponent({
  setup() {
    const { jumpTo: jump } = useCommon();
    const tabledata = reactive(data);
    return {
      jump,
      tabledata,
      columns
    };
  }
});
</script>
