<template>
  <div class="app-container">
    <div class="filter-container">

      <el-button class="filter-item" type="primary" size="mini" icon="el-icon-edit" @click="dialogVisible = true" >添加</el-button>

    </div>
    <tree-table :data="data" :columns="columns" border >
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </tree-table>
    <el-dialog
      :visible.sync="dialogVisible"
      :before-close="handleClose"
      title="创建类目"
      width="60%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="类目名称">
          <el-input v-model="form.name"/>
        </el-form-item>
        <el-form-item label="分类">
          <el-select v-model="form.region" placeholder="请选择分类">
            <el-option label="顶级分类" value="0"/>
            <el-option label="测试分类1" value="123123"/>
          </el-select>
        </el-form-item>
        <el-form-item label="排序">
          <el-input v-model="form.sort" placeholder="排序" style="width:200px"/>
        </el-form-item>
        <el-form-item label="缩略图">
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple>
            <i class="el-icon-upload"/>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">

        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>

</template>

<script>

import treeTable from '@/components/TreeTable'
export default {
  name: 'Articlecate',
  components: { treeTable },
  data() {
    return {
      dialogVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        sort: '99'
      },

      columns: [
        {
          text: '事件',
          value: 'event',
          width: 200
        },
        {
          text: 'ID',
          value: 'id'
        },
        {
          text: '时间线',
          value: 'timeLine'
        },
        {
          text: '备注',
          value: 'comment'
        }
      ],
      data: [
        {
          id: 0,
          event: '事件1',
          timeLine: 50,
          comment: '无'
        },
        {
          id: 1,
          event: '事件1',
          timeLine: 100,
          comment: '无',
          children: [
            {
              id: 2,
              event: '事件2',
              timeLine: 10,
              comment: '无'
            },
            {
              id: 3,
              event: '事件3',
              timeLine: 90,
              comment: '无',
              children: [
                {
                  id: 4,
                  event: '事件4',
                  timeLine: 5,
                  comment: '无'
                },
                {
                  id: 5,
                  event: '事件5',
                  timeLine: 10,
                  comment: '无'
                },
                {
                  id: 6,
                  event: '事件6',
                  timeLine: 75,
                  comment: '无',
                  children: [
                    {
                      id: 7,
                      event: '事件7',
                      timeLine: 50,
                      comment: '无',
                      children: [
                        {
                          id: 71,
                          event: '事件71',
                          timeLine: 25,
                          comment: 'xx'
                        },
                        {
                          id: 72,
                          event: '事件72',
                          timeLine: 5,
                          comment: 'xx'
                        },
                        {
                          id: 73,
                          event: '事件73',
                          timeLine: 20,
                          comment: 'xx'
                        }
                      ]
                    },
                    {
                      id: 8,
                      event: '事件8',
                      timeLine: 25,
                      comment: '无'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row)
    },

    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
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
<style rel="stylesheet/scss" lang="scss" scoped>
 .filter-container{
       padding-bottom: 10px;
 }
</style>
