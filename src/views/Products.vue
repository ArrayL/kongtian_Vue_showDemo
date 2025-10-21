<template>
  <div class="products-page">
    <div class="page-header">
      <h1>产品与服务</h1>
      <p>探索我们全面的空天遥感解决方案</p>
    </div>
    <div class="content-wrapper">
      <el-tabs v-model="activeName" class="space-tabs">
        <el-tab-pane label="数据产品" name="data">
          <div class="tab-content">
            <h3>🛰️ 多源遥感数据</h3>
            <p>我们提供全球范围内的多尺度、多类型遥感数据产品，包括卫星影像、无人机影像、激光雷达数据等。</p>
          </div>
        </el-tab-pane>
        <el-tab-pane label="平台产品" name="platform">
          <div class="tab-content">
            <h3>☁️ 云端处理平台</h3>
            <p>我们提供一站式遥感数据处理与分析云平台，帮助用户快速获取、处理和分析遥感数据。</p>
          </div>
        </el-tab-pane>
        <el-tab-pane label="解决方案" name="solution">
          <div class="tab-content">
            <h3>🎯 行业定制方案</h3>
            <p>我们为农业、林业、环保、应急等多个行业提供定制化的遥感应用解决方案。</p>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Products',
  data() {
    return {
      activeName: 'data',
    };
  },
};
</script>

<style scoped>
.products-page {
  min-height: 100vh;
  padding: 2rem;
  color: white;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-header h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}

.page-header p {
  font-size: 1.2rem;
  opacity: 0.8;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.space-tabs {
  color: white;
}

.space-tabs :deep(.el-tabs__header) {
  background: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.space-tabs :deep(.el-tabs__nav-wrap) {
  background: transparent;
}

.space-tabs :deep(.el-tabs__item) {
  color: rgba(255, 255, 255, 0.7) !important;
  background: transparent !important;
  border: none !important;
  font-size: 1.1rem;
  padding: 0 2rem;
}

.space-tabs :deep(.el-tabs__item:hover) {
  color: white !important;
}

.space-tabs :deep(.el-tabs__item.is-active) {
  color: #409EFF !important;
}

.space-tabs :deep(.el-tabs__active-bar) {
  background-color: #409EFF;
}

.tab-content {
  padding: 2rem 0;
  text-align: center;
}

.tab-content h3 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #409EFF;
}

.tab-content p {
  font-size: 1.2rem;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0.9;
}
</style>