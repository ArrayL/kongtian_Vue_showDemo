<template>
  <div class="satellite-imagery-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <div class="container">
        <div class="breadcrumb">
          <router-link to="/">首页</router-link>
          <span class="separator">></span>
          <span class="current">卫星遥感影像</span>
        </div>
        <h1 class="page-title">卫星遥感影像</h1>
        <p class="page-subtitle">高品质卫星遥感影像，指定区域/时间/分辨率光学卫星影像</p>
      </div>
    </div>

    <!-- 主要内容区域 -->
    <div class="main-content">
      <div class="container">
        <!-- 产品概述 -->
        <section class="product-overview">
          <h2 class="section-title">产品概述</h2>
          <div class="overview-content">
            <p>
              卫星遥感影像服务提供高品质的多源卫星遥感数据，覆盖全球范围，支持多种分辨率和光谱波段。
              通过先进的数据处理技术，为用户提供精准、及时的地球观测信息，满足农业监测、城市规划、
              环境保护、灾害监测等多领域应用需求。
            </p>
            <div class="data-specs">
              <div class="spec-item">
                <h4>卫星星源</h4>
                <p>GF-1、GF-2、GF-6、LANDSAT系列、哨兵-2、WorldView等</p>
              </div>
              <div class="spec-item">
                <h4>数据类型</h4>
                <p>高空间分辨率，包含红、绿、蓝、近红外波段多光谱影像数据</p>
              </div>
              <div class="spec-item">
                <h4>分辨率范围</h4>
                <p>0.3米-30米，满足不同精度需求</p>
              </div>
            </div>
          </div>
        </section>

        <!-- 产品优势 -->
        <section class="product-advantages">
          <h2 class="section-title">产品优势</h2>
          <div class="advantages-grid">
            <div class="advantage-card">
              <div class="advantage-icon">🌍</div>
              <h3>海量数据</h3>
              <p>提供覆盖全国范围的高分辨率影像，满足多时序、大范围、现势性等多类应用需求</p>
            </div>
            <div class="advantage-card">
              <div class="advantage-icon">⚡</div>
              <h3>强大算力</h3>
              <p>具备强大计算资源，可实现大范围空间智能高效计算</p>
            </div>
            <div class="advantage-card">
              <div class="advantage-icon">🎯</div>
              <h3>精准处理</h3>
              <p>采用先进的图像处理算法，确保数据质量和精度</p>
            </div>
            <div class="advantage-card">
              <div class="advantage-icon">🔧</div>
              <h3>灵活应用</h3>
              <p>为灵活的地球计算赋能，实现快速高效行业应用搭建</p>
            </div>
          </div>
        </section>

        <!-- 数据样例 -->
        <section class="data-samples">
          <h2 class="section-title">数据样例</h2>
          <div class="samples-grid">
            <div class="sample-card">
              <div class="sample-image">
                <div class="placeholder-image">高分辨率城市影像</div>
              </div>
              <h4>城市建筑监测</h4>
              <p>0.5米分辨率，清晰识别建筑物轮廓和道路网络</p>
            </div>
            <div class="sample-card">
              <div class="sample-image">
                <div class="placeholder-image">农田作物影像</div>
              </div>
              <h4>农业作物监测</h4>
              <p>多光谱数据，支持作物分类和长势监测</p>
            </div>
            <div class="sample-card">
              <div class="sample-image">
                <div class="placeholder-image">森林覆盖影像</div>
              </div>
              <h4>森林资源调查</h4>
              <p>高精度森林覆盖度分析和变化检测</p>
            </div>
          </div>
        </section>

        <!-- 服务模式 -->
        <section class="service-modes">
          <h2 class="section-title">服务模式</h2>
          <div class="modes-grid">
            <div class="mode-card">
              <h3>数据服务</h3>
              <p>提供标准化的卫星影像数据产品，支持批量下载和在线浏览</p>
            </div>
            <div class="mode-card">
              <h3>在线接口服务</h3>
              <p>RESTful API接口，支持实时数据查询和定制化数据处理</p>
            </div>
            <div class="mode-card">
              <h3>私有云部署</h3>
              <p>支持本地化部署，满足数据安全和定制化需求</p>
            </div>
          </div>
        </section>

        <!-- 应用场景 -->
        <section class="application-scenarios">
          <h2 class="section-title">应用场景</h2>
          <div class="scenarios-grid">
            <div class="scenario-card">
              <div class="scenario-icon">🏙️</div>
              <h3>城市规划</h3>
              <p>城市扩张监测、土地利用分析、基础设施规划，为城市可持续发展提供数据支撑</p>
            </div>
            <div class="scenario-card">
              <div class="scenario-icon">🌾</div>
              <h3>农业生产</h3>
              <p>作物分类识别、长势监测、产量预估，提高农业生产效率和精准化管理水平</p>
            </div>
            <div class="scenario-card">
              <div class="scenario-icon">🌿</div>
              <h3>环境保护</h3>
              <p>生态环境监测、污染源识别、生物多样性保护，支撑环境治理决策</p>
            </div>
            <div class="scenario-card">
              <div class="scenario-icon">🚨</div>
              <h3>灾害监测</h3>
              <p>自然灾害快速响应、损失评估、救援指导，提升防灾减灾能力</p>
            </div>
          </div>
        </section>

        <!-- 应用案例 -->
        <section class="application-cases">
          <h2 class="section-title">应用案例</h2>
          <div class="case-card">
            <h3>全国农田监测系统</h3>
            <p>
              基于多源卫星遥感数据，构建覆盖全国的农田监测系统。通过时序分析技术，
              实现对农作物种植面积、长势状况、产量预估的精准监测，为农业部门提供科学决策依据。
              系统已在多个省份成功应用，监测精度达到95%以上。
            </p>
          </div>
        </section>

        <!-- 相关推荐 -->
        <section class="related-products">
          <h2 class="section-title">相关推荐</h2>
          <div class="related-grid">
            <div class="related-card">
              <h4>建筑物变化检测</h4>
              <p>通过分析同一地点不同时间点的遥感影像，识别和评估建筑物变化</p>
            </div>
            <div class="related-card">
              <h4>地块提取算法</h4>
              <p>运用深度学习技术，实现耕地地块智能识别与精细化边界提取</p>
            </div>
            <div class="related-card">
              <h4>高清地图API</h4>
              <p>全国高分辨率地图数据服务，支持多种地图样式和功能</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SatelliteImagery',
  mounted() {
    // 页面加载时滚动到顶部
    window.scrollTo(0, 0);
  }
}
</script>

<style scoped>
.satellite-imagery-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
  color: #ffffff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 页面头部 */
.page-header {
  background: linear-gradient(135deg, #16213e 0%, #0f3460 100%);
  padding: 80px 0 60px;
  position: relative;
  overflow: hidden;
}

.page-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
  opacity: 0.3;
}

.breadcrumb {
  margin-bottom: 20px;
  font-size: 14px;
  position: relative;
  z-index: 1;
}

.breadcrumb a {
  color: #64b5f6;
  text-decoration: none;
}

.breadcrumb a:hover {
  text-decoration: underline;
}

.separator {
  margin: 0 10px;
  color: #666;
}

.current {
  color: #ffffff;
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #64b5f6 0%, #42a5f5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  z-index: 1;
}

.page-subtitle {
  font-size: 1.2rem;
  color: #b0bec5;
  max-width: 600px;
  line-height: 1.6;
  position: relative;
  z-index: 1;
}

/* 主要内容 */
.main-content {
  padding: 80px 0;
}

.section-title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 40px;
  color: #ffffff;
  position: relative;
  padding-left: 20px;
}

.section-title::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 30px;
  background: linear-gradient(135deg, #64b5f6 0%, #42a5f5 100%);
  border-radius: 2px;
}

/* 产品概述 */
.product-overview {
  margin-bottom: 80px;
}

.overview-content p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #b0bec5;
  margin-bottom: 40px;
}

.data-specs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.spec-item {
  background: rgba(255, 255, 255, 0.05);
  padding: 30px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.spec-item h4 {
  color: #64b5f6;
  font-size: 1.2rem;
  margin-bottom: 15px;
}

.spec-item p {
  color: #b0bec5;
  line-height: 1.6;
}

/* 产品优势 */
.product-advantages {
  margin-bottom: 80px;
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.advantage-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 40px 30px;
  border-radius: 12px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.advantage-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(100, 181, 246, 0.2);
}

.advantage-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.advantage-card h3 {
  color: #ffffff;
  font-size: 1.3rem;
  margin-bottom: 15px;
}

.advantage-card p {
  color: #b0bec5;
  line-height: 1.6;
}

/* 数据样例 */
.data-samples {
  margin-bottom: 80px;
}

.samples-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.sample-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;
}

.sample-card:hover {
  transform: translateY(-5px);
}

.sample-image {
  height: 200px;
  background: linear-gradient(135deg, #263238 0%, #37474f 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.placeholder-image {
  color: #64b5f6;
  font-weight: 500;
}

.sample-card h4 {
  color: #ffffff;
  font-size: 1.2rem;
  margin: 20px 20px 10px;
}

.sample-card p {
  color: #b0bec5;
  margin: 0 20px 20px;
  line-height: 1.6;
}

/* 服务模式 */
.service-modes {
  margin-bottom: 80px;
}

.modes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.mode-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 40px 30px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;
}

.mode-card:hover {
  transform: translateY(-5px);
}

.mode-card h3 {
  color: #64b5f6;
  font-size: 1.3rem;
  margin-bottom: 15px;
}

.mode-card p {
  color: #b0bec5;
  line-height: 1.6;
}

/* 应用场景 */
.application-scenarios {
  margin-bottom: 80px;
}

.scenarios-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.scenario-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 40px 30px;
  border-radius: 12px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;
}

.scenario-card:hover {
  transform: translateY(-5px);
}

.scenario-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.scenario-card h3 {
  color: #ffffff;
  font-size: 1.3rem;
  margin-bottom: 15px;
}

.scenario-card p {
  color: #b0bec5;
  line-height: 1.6;
}

/* 应用案例 */
.application-cases {
  margin-bottom: 80px;
}

.case-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 40px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.case-card h3 {
  color: #64b5f6;
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.case-card p {
  color: #b0bec5;
  line-height: 1.8;
  font-size: 1.1rem;
}

/* 相关推荐 */
.related-products {
  margin-bottom: 40px;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.related-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 30px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;
}

.related-card:hover {
  transform: translateY(-5px);
}

.related-card h4 {
  color: #64b5f6;
  font-size: 1.2rem;
  margin-bottom: 15px;
}

.related-card p {
  color: #b0bec5;
  line-height: 1.6;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
  
  .advantages-grid,
  .samples-grid,
  .modes-grid,
  .scenarios-grid,
  .related-grid {
    grid-template-columns: 1fr;
  }
  
  .data-specs {
    grid-template-columns: 1fr;
  }
}
</style>