<template>
  <div class="app-container">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item >当前路径</el-breadcrumb-item>
      <el-breadcrumb-item>/</el-breadcrumb-item>
      <el-breadcrumb-item>view</el-breadcrumb-item>
      <el-breadcrumb-item>home</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="line"/>
    <div class="filter-container">
      <el-button class="filter-item" type="primary" size="mini" >上传</el-button>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="文件名"
      >
        <template slot-scope="scope">
          <svg-icon icon-class="folder"/>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="大小"
      />
      <el-table-column
        prop="address"
        label="修改时间"/>
      <el-table-column
        prop="cc"
        label="操作"/>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'File',
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '200k',
        address: '2018.4.12',
        cc: '11'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>

.line{
   width: 100%;
   border-top: 1px solid #f0f0f0;
   margin: 20px 0 10px 0;
}
</style>

