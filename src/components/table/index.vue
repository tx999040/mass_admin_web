 <template>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column
      v-for="(item, index) in tableHeader"
      :key="index"
      :prop="item.prop"
      :label="item.label"
      :width="180"
    >
    <template #default v-if="item.isSolt">
       <slot/>
      </template>
</el-table-column>
  </el-table>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
interface propData {
    prop: string
    label: string
    isSolt?: boolean
}
export default defineComponent({
  props: {
    tableHeader: {
      type: Array<propData>,
      default: () => []
    },
    tableData: {
      type: Array<any>,
      default: () => []
    }
  },
  setup() {}
})
</script>
