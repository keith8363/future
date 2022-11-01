<template>
  <el-container>
    <el-aside >
      Aside
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <!-- 子路由出口 -->
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name:'Layout'
  })
</script>

<style scoped lang="scss">
.el-container {
  height: 100vh;
}
.el-header {
  background-color: #B3C0D1;
}
.el-aside {
  width: auto;
  background-color: #304156;
}
.el-main {
  background-color: #E9EEF3;
}
</style>
