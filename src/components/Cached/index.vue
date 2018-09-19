<template>
  <div >
    <el-button size="small" class="bug-btn" type="info">
      <svg-icon icon-class="cached" />
    </el-button>

  </div>
</template>

<script>
export default {
  name: 'Cached'

}
</script>

<style scoped>
.bug-btn.el-button--small {
  padding: 9px 10px;
}
.bug-svg {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.message-title {
  font-size: 16px;
  color: #333;
  font-weight: bold;
  padding-right: 8px;
}
</style>

