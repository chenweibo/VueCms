<template>
  <div class="app-container">
    <el-collapse accordion>
      <el-collapse-item>
        <template slot="title">
          标题：某某某留言
        </template>
        <div class="message-content">
          <div>联系人：xxxx</div>
          <div>联系号码：18968574859等。</div>
          <div>主要内容：xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.</div>
          <el-button class="btn" size="mini" @click="handleDelete()">删除</el-button>
        </div>
      </el-collapse-item>
      <el-collapse-item>
        <template slot="title">
          标题：某某某留言
        </template>
        <div class="message-content">
          <div>联系人：xxxx</div>
          <div>联系号码：18968574859等。</div>
          <div>主要内容：xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.</div>
          <el-button class="btn" size="mini" @click="handleDelete()">删除</el-button>
        </div>
      </el-collapse-item>
      <el-collapse-item>
        <template slot="title">
          标题：某某某留言
        </template>
        <div class="message-content">
          <div>联系人：xxxx</div>
          <div>联系号码：18968574859等。</div>
          <div>主要内容：xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.</div>
          <el-button class="btn" size="mini" @click="handleDelete()">删除</el-button>
        </div>
      </el-collapse-item>
      <el-collapse-item>
        <template slot="title">
          标题：某某某留言
        </template>
        <div class="message-content">
          <div>联系人：xxxx</div>
          <div>联系号码：18968574859等。</div>
          <div>主要内容：xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.</div>
          <el-button class="btn" size="mini" @click="handleDelete()">删除</el-button>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
export default {
  name: 'Message',
  methods: {
    handleDelete(index, row) {
      this.$confirm('此操作将永久删除该留言, 是否继续?', '提示', {
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
<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
  .message-content{
    position: relative;
  }
  .btn{
    position: absolute;
    right: 0;
    top: 0;
  }
</style>

