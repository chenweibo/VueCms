<template>
  <div class="dashboard-container">
    <div class="dashboard-editor-container">
      <el-row :gutter="32">
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">

            <ve-pie :data="chartData" :settings="chartSettings" />
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
            <ve-histogram :data="zhudata" :settings="zhu" />
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
            <ve-line :data="chartData"/>
          </div>
        </el-col>
      </el-row>
    </div>

  </div>

</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    this.chartSettings = {
      roseType: 'radius'
    }
    this.zhu = {
      stack: { '用户': ['访问用户', '下单用户'] }
    }
    return {
      chartData: {
        columns: ['日期', '访问用户'],
        rows: [
          { '日期': '1/1', '访问用户': 1393 },
          { '日期': '1/2', '访问用户': 3530 },
          { '日期': '1/3', '访问用户': 2923 },
          { '日期': '1/4', '访问用户': 1723 },
          { '日期': '1/5', '访问用户': 3792 },
          { '日期': '1/6', '访问用户': 4593 }
        ]
      },
      zhudata: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
          { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
          { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
          { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
          { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
          { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
        ]
      }
    }
  },
  mounted() {
    this.open()
  },
  methods: {
    open() {
      const h = this.$createElement
      this.$notify({
        title: '欢迎登陆网站后台',
        duration: 2500,
        offset: 40,
        message: h('i', { style: 'color: teal' }, '如有bug联系:563960993@qq.com')
      })
    }
  }

}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
   width: 100%;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }

}
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
      min-height: calc(100vh - 128px);
  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}
</style>
