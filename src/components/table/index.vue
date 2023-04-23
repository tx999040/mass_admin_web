 <template>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column
      v-for="(item, index) in tableHeader"
      :key="index"
      :prop="item.key"
      :label="item.title"
      :type="item.type"
      :width="item.width"
    >
      <template #default v-if="item.isSlot">
        <slot />
      </template>
    </el-table-column>
  </el-table>
</template>
<script lang="ts">
import { defineComponent } from "vue";
interface propData {
  key?: string;
  title?: string;
  isSlot?: boolean;
  type?: string;
  width?: number;
  align?: string;
}

export default defineComponent({
  props: {
    tableHeader: {
      type: Array<propData>,
      default: () => [],
    },
    tableData: {
      type: Array<any>,
      default: () => [],
    },
  },
  setup() {},
});
</script>
