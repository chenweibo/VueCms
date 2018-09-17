<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="站点标题">
        <el-input v-model="form.title"/>
      </el-form-item>
      <el-form-item label="Logo">
        <el-upload
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/">
          <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"/>
        </el-upload>
      </el-form-item>
      <el-form-item label="关键词">
        <el-input v-model="form.keywords"/>
      </el-form-item>
      <el-form-item label="描述">
        <el-input v-model="form.description"/>
      </el-form-item>
      <el-form-item label="电话号码">
        <el-input v-model="form.tel"/>
      </el-form-item>
      <el-form-item label="手机号码">
        <el-input v-model="form.telephone"/>
      </el-form-item>
      <el-form-item label="邮政编码">
        <el-input v-model="form.code"/>
      </el-form-item>
      <el-form-item label="企业邮箱">
        <el-input v-model="form.email"/>
      </el-form-item>
      <el-form-item label="传真">
        <el-input v-model="form.fax"/>
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="form.address"/>
      </el-form-item>
      <el-form-item label="备案号">
        <el-input v-model="form.icp"/>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即保存</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
export default {
  name: 'BaseSets',
  data() {
    return {
      form: {
        title: '',
        region: '',
        imageUrl: '',
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
    onSubmit() {
      console.log(this.form)
    },
    handleAvatarSuccess(res, file) {
      this.form.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" >
  .avatar-uploader .el-upload {
    border: 1px dashed #130303c0;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
