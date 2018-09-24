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
    <el-dialog :visible.sync="dialogFormVisible" title="权限分配" width="70%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="角色名称">
          <el-input v-model="form.name"/>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" >立即创建</el-button>
          <el-button @click="dialogFormVisible = false" >取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>

</template>

<script>
export default {
  name: 'Role',
  data() {
    return {
      tableData: [{
        date: '1',
        name: '普通管理员'

      }], dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }

    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }

}
</script>

