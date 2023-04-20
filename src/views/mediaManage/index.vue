<template>
  <div class="container">
    <tables :table-data="data" :table-header="tableProp"></tables>
  </div>
</template>
  <script lang="ts">
import { defineComponent } from 'vue'
import tables from '@/components/table/index.vue'
export default defineComponent({
  name: 'mediaHome',
  components: {
    tables
  },
  setup() {
    const tableProp = [
      {
        label: '姓名',
        prop: 'name'
      },
      {
        label: '日期',
        prop: 'date'
      },
      {
        label: '时间',
        prop: 'time'
      },
      {
        label: '体重',
        prop: 'weight'
      },
      {
        label: '性别',
        prop: 'sex'
      },
      {
        label: '年纪',
        prop: 'age'
      }
    ]
    const data = [
      {
        name: '张三',
        date: '2023-04-12',
        age: 18,
        sex: '男',
        weight: '80kg',
        time: '16:12'
      },
      {
        name: '小六',
        date: '2023-04-12',
        age: 18,
        sex: '男',
        weight: '80kg',
        time: '16:12'
      },
      {
        name: '王五',
        date: '2023-04-12',
        age: 18,
        sex: '男',
        weight: '80kg',
        time: '16:12'
      },
      {
        name: '里斯',
        date: '2023-04-12',
        age: 18,
        sex: '男',
        weight: '80kg',
        time: '16:12'
      }
    ]
    return {
      tableProp,
      data
    }
  }
})
</script>
  <style lang="scss">
</style>
  