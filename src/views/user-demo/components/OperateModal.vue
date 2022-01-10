<template>
  <a-modal
    v-model:visible="visible"
    :title="titleText"
    @ok="handleOk"
    @cancel="emit('update:show', false)"
    width="56%"
  >
    <a-form :model="formData" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="名字">
        <a-input v-model:value="formData.name" />
      </a-form-item>
      <a-form-item label="性别">
        <a-radio-group v-model:value="formData.isMan">
          <a-radio :value="true">男性</a-radio>
          <a-radio :value="false">女性</a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item label="年龄">
        <a-input-number v-model:value="formData.age" style="width: 100%" />
      </a-form-item>
      <a-form-item label="工作">
        <a-select
          v-model:value="formData.work"
          placeholder="please select your zone"
          :options="workOpts"
        >
        </a-select>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script lang="ts">
import { OptionData } from "ant-design-vue/lib/vc-select/interface";
import type { FormItem } from "@/views/user-demo/components/user-types";
import {
  computed,
  defineComponent,
  onMounted,
  reactive,
  toRefs,
  // unref,
  watch,
  PropType,
  onUnmounted
} from "vue";
const workOpts: OptionData[] = [
  {
    label: "会计",
    value: "会计"
  },
  {
    label: "人事",
    value: "人事"
  },
  {
    label: "前台",
    value: "前台"
  },
  {
    label: "研发",
    value: "研发"
  },
  {
    label: "销售",
    value: "销售"
  }
];

export default defineComponent({
  props: {
    show: Boolean,
    actionType: String,
    row: {
      type: Object as PropType<FormItem>
    }
  },
  setup(props, { attrs, slots, emit }) {
    const { show } = toRefs(props);
    const titleText = computed(
      () => `${props.actionType === "ADD" ? "新增" : "编辑"}用户`
    );

    /**
     * 提交
     */
    function handleOk(): void {
      emit("submit", { ...data.formData });
      emit("update:show", false);
      data.formData = {
        name: '',
        age: '',
        isMan: true,
        work: ''
      }
    }

    onMounted(() => {
      console.log('mounted')
    });
    onUnmounted(() => {
      console.log('onUnmounted')
    });

    const data = reactive({
      visible: false,
      handleOk,
      titleText,
      emit,
      formData: {
        name: '',
        age: '',
        isMan: true,
        work: ''
      }
    });

    watch(show, (val, old) => {
      // console.log("visible 更新了：", val);
      data.visible = val;
      if (val) {
        const row = props.row as FormItem;
        data.formData = { ...data.formData, ...row }
      }
    });
    return {
      ...toRefs(data),
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      workOpts
    };
  }
});
</script>

<style scoped>
</style>
