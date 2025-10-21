<template>
  <el-menu mode="horizontal" class="space-header">
    <el-menu-item index="1" class="brand-item">空天遥感数据服务</el-menu-item>
    <el-menu-item index="2">
      <router-link to="/">首页</router-link>
    </el-menu-item>
    <el-menu-item index="3">
      <router-link to="/products">产品与服务</router-link>
    </el-menu-item>
    <el-menu-item index="4">
      <router-link to="/products">文档</router-link>
    </el-menu-item>
    <el-menu-item index="5">
      <router-link to="/about">关于我们</router-link>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
.space-header {
  background: transparent !important;
  border-bottom: none !important;
}

.space-header .el-menu-item {
  background: transparent !important;
  color: white !important;
  border-bottom: 2px solid transparent !important;
  transition: all 0.3s ease;
}

.space-header .el-menu-item:hover {
  background: rgba(255, 255, 255, 0.1) !important;
  border-bottom-color: #409EFF !important;
}

.space-header .el-menu-item.is-active {
  background: rgba(255, 255, 255, 0.1) !important;
  border-bottom-color: #409EFF !important;
}

.space-header .brand-item {
  font-weight: bold;
  font-size: 1.2rem;
}

.space-header a {
  color: white !important;
  text-decoration: none;
}

.space-header a:hover {
  color: #409EFF !important;
}
</style>