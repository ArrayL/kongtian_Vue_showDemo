<template>
  <el-container>
    <el-header>
      <Header />
    </el-header>
    <el-main>
      <router-view />
    </el-main>
    <el-footer>
      <Footer />
    </el-footer>
  </el-container>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'MainLayout',
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
.el-container {
  background: transparent;
  min-height: 100vh;
}

.el-header, .el-footer {
  background: rgba(0, 0, 0, 0.3);
  color: white;
  text-align: center;
  line-height: 60px;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.el-footer {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: none;
}

.el-main {
  background: transparent;
  color: white;
  text-align: center;
  padding: 0;
}
</style>