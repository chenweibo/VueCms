<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input placeholder="标题" style="width: 200px;" class="filter-item" size="medium" />
      <el-select v-model="value" placeholder="请选择" class="filter-item " size="medium" style="width: 130px">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"/>
      </el-select>
      <el-button v-waves class="filter-item" type="primary" size="medium" icon="el-icon-search" >搜索</el-button>
      <el-button v-waves class="filter-item" style="margin-left: 10px;" size="medium" type="primary" icon="el-icon-edit" >添加</el-button>
      <el-button v-waves :loading="downloadLoading" class="filter-item" size="medium" type="primary" icon="el-icon-download">导出</el-button>

    </div>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="id"
        label="序号"
        width="65px"
        align="center"
      />
      <el-table-column
        prop="time"
        label="时间"
        width="150px"
        align="center"
      />
      <el-table-column
        prop="title"
        label="标题"
      />
      <el-table-column
        prop="author"
        label="作者"
        align="center"
        width="110px"
      />
      <el-table-column
        prop="click"
        label="阅读量"
        align="center"
        width="110px"
      />
      <el-table-column
        prop="state"
        label="状态"
        width="100px"
        align="center"
      />
      <el-table-column
        label="操作"
        width="230px"
        align="center"
      >
        <template slot-scope="scope">

          <el-button
            type="primary"
            size="mini"
          >编辑</el-button>
          <el-button
            size="mini"
            type="success"
          >发布</el-button>
          <el-button
            size="mini"
            type="danger"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="block">
      <el-pagination
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        :total="400"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"/>
    </div>

  </div>
</template>

<script>
import waves from '@/directive/waves' // 水波纹指令
export default {
  directives: {
    waves
  },
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      options: [{
        value: '选项1',
        label: '测试咨询1'
      }, {
        value: '选项2',
        label: '测试咨询2'
      }, {
        value: '选项3',
        label: '测试咨询3'
      }],
      value: '',
      downloadLoading: false,
      tableData: [{
        id: '1',
        time: '1989-09-29 02:53',
        title: 'Ssnsb Atnb Mwoazcrpv Hkyytpkhx Sxqwycyjd Epvvtyprgv Ncfr',
        author: '超级管理员',
        click: '20000',
        state: '未发布'
      },
      {
        id: '2',
        time: '1989-09-29 02:53',
        title: 'Ssnsb Atnb Mwoazcrpv Hkyytpkhx Sxqwycyjd Epvvtyprgv Ncfr',
        author: '超级管理员',
        click: '20000',
        state: '未发布'
      },
      {
        id: '3',
        time: '1989-09-29 02:53',
        title: 'Ssnsb Atnb Mwoazcrpv Hkyytpkhx Sxqwycyjd Epvvtyprgv Ncfr',
        author: '超级管理员',
        click: '20000',
        state: '未发布'
      }, {
        id: '4',
        time: '1989-09-29 02:53',
        title: 'Ssnsb Atnb Mwoazcrpv Hkyytpkhx Sxqwycyjd Epvvtyprgv Ncfr',
        author: '超级管理员',
        click: '20000',
        state: '未发布'
      }]
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

