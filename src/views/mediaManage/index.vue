<template>
  <div class="container">
    <tables :table-data="data" :table-header="tableProp"></tables>
  </div>
</template>
  <script lang="ts">
import { defineComponent } from "vue";
import tables from "@/components/table/index.vue";
export default defineComponent({
  name: "mediaHome",
  components: {
    tables,
  },
  setup() {
    const tableProp = [
      {
        type: "selection",
        width: 50,
        align: "center",
      },
      {
        title: "序号",
        key: "id",
      },

      {
        title: "类型",
        key: "categoryName",
      },
      {
        title: "内容封面",
        key: "img",
        isSlot: true,
      },
      {
        title: "主名称",
        key: "name",
      },
      {
        title: "内容",
        key: "remark",
        isSlot: true,
      },
      {
        title: "简介",
        key: "introduction",
      },
      {
        title: "状态",
        isSlot: true,
      },
      {
        title: "上传时间",
        key: "createTime",
      },
      {
        title: "操作",
        isSlot: true,
      },
    ];
    const data: any = [];
    return {
      tableProp,
      data,
    };
  },
});
</script>
  <style lang="scss">
</style>
  