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
    <el-dialog :visible.sync="dialogFormVisible" title="权限分配" width="90%" top="90px">
      <tree-table :data="data" :eval-func="func" :eval-args="args" :expand-all="expandAll" border>
        <el-table-column label="事件">
          <template slot-scope="scope">
            <span style="color:sandybrown">{{ scope.row.nav }}</span>
            <el-tag>{{ scope.row.nav+'ms' }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="时间线">
          <template slot-scope="scope">
            <el-tooltip :content="scope.row.timeLine+'ms'" effect="dark" placement="left">
              <div class="processContainer">
                <div
                  :style="{ width:scope.row._width * 500+'px',
                            background:scope.row._width>0.5?'rgba(233,0,0,.5)':'rgba(0,0,233,0.5)',
                            marginLeft:scope.row._marginLeft * 500+'px' }"
                  class="process">
                  <span style="display:inline-block"/>
                </div>
              </div>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <el-button type="text" @click="message(scope.row)">点击</el-button>
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

      }], dialogFormVisible: false,
      value1: true,
      value2: true,
      data:
        {
          id: 1,
          nav: '站点设置',
          timeLine: 100,
          comment: '无',
          state: true,
          children: [
            {
              id: 2,
              nav: '基础设置',
              timeLine: 10,
              comment: '无',
              state: false
            }
          ]
        }, args: [null, null, 'timeLine']

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

