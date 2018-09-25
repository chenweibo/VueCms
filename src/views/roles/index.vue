<template>

  <div class="app-container">
    <el-table
      :data="tableData"

      style="width: 100%">
      <el-table-column
        prop="date"
        label="ID"
        width="180"
      />
      <el-table-column
        prop="name"
        label="角色名称"
        width="100%"/>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="dialogFormVisible = true">权限分配</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :visible.sync="dialogFormVisible" title="权限分配" top="90px">
      <tree-table :data="data" :eval-func="func" :expand-all="expandAll" >
        <el-table-column label="导航" width="80px" align="center">
          <template slot-scope="scope">
            <span >{{ scope.row.nav }}</span>

          </template>
        </el-table-column>
        <el-table-column label="显示" width="80px" align="center">
          <template slot-scope="scope">
            <el-checkbox v-model="scope.row.show"/>
          </template>
        </el-table-column>
        <el-table-column label="添加" width="80px" align="center">
          <template slot-scope="scope">
            <el-checkbox v-model="scope.row.create"/>
          </template>
        </el-table-column>
        <el-table-column label="编辑" width="80px" align="center">
          <template slot-scope="scope">
            <el-checkbox v-model="scope.row.edit"/>
          </template>
        </el-table-column>
        <el-table-column label="删除" width="80px" align="center">
          <template slot-scope="scope">
            <el-checkbox v-model="scope.row.delete"/>
          </template>
        </el-table-column>

    </tree-table></el-dialog>
  </div>

</template>

<script>
import treeTable from '@/components/TreeTable'
import treeToArray from './customEval'
export default {
  name: 'Role',
  components: { treeTable },
  data() {
    return {

      func: treeToArray,
      expandAll: false,
      tableData: [{
        date: '1',
        name: '普通管理员'

      }],
      all: false,
      dialogFormVisible: false,
      data:
        {
          id: 1,
          nav: '站点设置',
          timeLine: 100,
          comment: '无',
          state: true,
          show: true,
          create: true,
          edit: true,
          delete: true,

          children: [
            {
              id: 2,
              nav: '基础设置',
              timeLine: 10,
              comment: '无',
              state: false,
              show: true,
              create: true,
              edit: true,
              delete: true
            }
          ]
        }

    }
  },
  methods: {
    message(row) {
      // this.$message.info(row.state)
      console.log(this.data)
    }

  }

}
</script>

