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
        label="日期"
        width="180"/>
      <el-table-column
        prop="name"
        label="姓名"
        width="180"/>
      <el-table-column
        prop="address"
        label="地址"/>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Pagelist',
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
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
