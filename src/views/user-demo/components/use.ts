import { h, reactive, toRefs } from "vue";
import type { User, UserForm } from "@/views/user-demo/components/user-types";
/** *************   表格列   *************** */
const columns = [
  {
    dataIndex: "name",
    title: "姓名",
    align: "center"
  },
  {
    dataIndex: "age",
    title: "年龄",
    align: "center"
  },
  {
    dataIndex: "sex",
    title: "性别",
    align: "center",
    customRender: ({ text, record, index }:any) => {
      return h('span', text ? '男性' : '女性')
    }
  },
  {
    dataIndex: "work",
    title: "工作",
    align: "center"
  },
  {
    dataIndex: "actions",
    title: "操作",
    align: "center",
    slots: {
      customRender: "actions"
    }
  }
];

export function useOperate() {
  //
}

/**
 *
 * @returns 用户列表逻辑
 */
export function useUserList() {
  // 编辑行索引
  let editIndex = 0;
  // 用户列表
  const userList: User[] = [];
  const pageData = reactive({
    userList,
    showEdit: false,
    actionType: "",
    editRow: {}
  });

  /**
     * 新增
     */
  const addHandler = () => {
    pageData.actionType = "ADD";
    pageData.showEdit = true;
  };

  /**
     * 编辑
     */
  const editHandler = (item: User, index: number): void => {
    pageData.actionType = "EDIT";
    pageData.editRow = item;
    editIndex = index;
    pageData.showEdit = true;
  };

  /**
   *
   * @param index 删除
   */
  const removeHandler = (index: number): void => {
    pageData.userList.splice(index, 1);
  };

  /**
   *
   * @param item 提交数据（新增|编辑）
   */
  function submitForm(item: UserForm): void {
    if (pageData.actionType === "ADD") {
      pageData.userList.push(item);
    } else if (pageData.actionType === "EDIT") {
      pageData.userList.splice(editIndex, 1, item);
    }
  }

  return {
    columns,
    addHandler,
    editHandler,
    removeHandler,
    submitForm,
    ...toRefs(pageData)
  }
}
