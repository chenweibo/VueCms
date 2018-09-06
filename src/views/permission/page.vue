<template>
  <div class="app-container"/>
</template>

<script>
export default{
  name: 'PagePermission',
  methods: {
    handleRolesChange() {
      this.$router.push({ path: '/permission/index?' + +new Date() })
    }
  }
}
</script>
