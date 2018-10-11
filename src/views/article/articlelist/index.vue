<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input placeholder="标题" style="width: 200px;" class="filter-item" />
      <el-select v-model="value" placeholder="请选择" class="filter-item" style="width: 130px">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"/>
      </el-select>
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" >搜索</el-button>
      <el-button v-waves class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" >添加</el-button>
      <el-button v-waves :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download">导出</el-button>

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
      downloadLoading: false
    }
  }
}
</script>

