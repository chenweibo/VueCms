<template>
  <div class="app-container">
    <div class="filter-container">
      <router-link :to="'/page/create'" class="link-type">
        <el-button class="filter-item" type="primary" size="mini" icon="el-icon-edit" >添加</el-button>
      </router-link>

    </div>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="date"
        label="Id"
        width="50"
        align="center"/>
      <el-table-column
        prop="name"
        label="名称"
        width="180"/>
      <el-table-column
        prop="address"
        label="地址"/>
      <el-table-column label="操作" width="80">
        <template slot-scope="scope">
          <el-button
            size="mini"
          >编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Pagelist',
  data() {
    return {
      tableData: [{
        date: '1',
        name: '关于我们',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2',
        name: '联系我们',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '3',
        name: '荣誉资质',
        address: '上海市普陀区金沙江路 1519 弄'
      }]
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
 .filter-container{
       padding-bottom: 10px;
 }
</style>
