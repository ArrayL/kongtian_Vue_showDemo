<template>
  <div class="home">
    <!-- 流星元素 - 只在首页显示 -->
    <div class="meteor"></div>
    <div class="meteor"></div>
    <div class="meteor"></div>
    <div class="meteor"></div>
    <div class="meteor"></div>
    
    <!-- 闪烁星星元素 - 只在首页显示 -->
    <div class="twinkling-star"></div>
    <div class="twinkling-star"></div>
    <div class="twinkling-star"></div>
    <div class="twinkling-star"></div>
    <div class="twinkling-star"></div>
    
    <div class="hero-section">
      <div class="hero-left">
        <div class="hero-content">
          <h1 v-html="typedTitle"></h1>
          <p v-html="typedDescription"></p>
          <div class="hero-buttons">
            <el-button type="primary" size="large">Quick Start</el-button>
            <el-button type="default" size="large">联系我们</el-button>
          </div>
        </div>
      </div>
      <div class="hero-right">
        <div class="globe-wrapper">
          <InteractiveGlobe />
        </div>
      </div>
    </div>

    <!-- 产品与服务展示区域 -->
    <div class="products-section">
      <div class="section-header">
        <h2>核心产品与服务</h2>
        <p>丰富灵活的开放能力，助力高效集成开发</p>
      </div>

      <!-- 核心数据服务 -->
      <div class="products-grid">
        <div class="product-card featured">
          <div class="product-icon">🛰️</div>
          <h3>卫星遥感影像</h3>
          <p>高品质卫星遥感影像，指定区域/时间/分辨率光学卫星影像</p>
          <div class="product-features">
            <span class="feature-tag">300+卫星资源</span>
            <span class="feature-tag">高频次更新</span>
            <span class="feature-tag">在线极速交付</span>
          </div>
          <el-button type="primary" class="product-btn" @click="goToSatelliteImagery" onclick="console.log('原生onclick被触发')">查看详情</el-button>
        </div>

        <div class="product-card">
          <div class="product-icon">🌤️</div>
          <h3>全球天气API</h3>
          <p>高精度商业气象服务，全球天气API/精细化网格数据/可视化图层</p>
          <div class="product-features">
            <span class="feature-tag">分钟级更新</span>
            <span class="feature-tag">公里级网格精度</span>
            <span class="feature-tag">官方合作授权</span>
          </div>
          <el-button type="primary" class="product-btn">查看详情</el-button>
        </div>

        <div class="product-card">
          <div class="product-icon">🌬️</div>
          <h3>空气质量API</h3>
          <p>PM2.5/PM10/臭氧/NO₂/CO等数据或图层，站点级/格点级/城市级</p>
          <div class="product-features">
            <span class="feature-tag">24小时实时监测</span>
            <span class="feature-tag">多维度数据</span>
            <span class="feature-tag">高精度可视化</span>
          </div>
          <el-button type="primary" class="product-btn">查看详情</el-button>
        </div>


      </div>

      <!-- AI智能解译算法 -->
      <div class="ai-services">
        <h3>AI智能算法</h3>
        <div class="ai-grid">
          <div class="ai-card">
            <h4>建筑物变化检测</h4>
            <p>精准分析同一地点不同时间点建筑物变化，准确率优于90%</p>
          </div>
          <div class="ai-card">
            <h4>地块提取算法</h4>
            <p>精准提取不同形态地块轮廓，地块边界识别面积自动计算</p>
          </div>
          <div class="ai-card">
            <h4>光伏提取算法</h4>
            <p>屋顶光伏地表光伏识别，准确率优于90%，大范围快速提取</p>
          </div>

        </div>
      </div>

      <!-- 平台产品 -->
      <div class="platform-section">
        <h3>空天遥感数据产品</h3>
        <div class="platform-grid">
          <div class="platform-card">
            <h4>高分辨率光学影像</h4>
            <p>0.5-2米分辨率卫星影像数据，覆盖全球主要区域，支持多光谱分析</p>
          </div>
          <div class="platform-card">
            <h4>SAR雷达影像数据</h4>
            <p>全天候合成孔径雷达数据，不受云雾影响，支持地表变形监测</p>
          </div>
          <div class="platform-card">
            <h4>高光谱遥感数据</h4>
            <p>精细光谱信息获取，支持地物精确识别和成分分析应用</p>
          </div>
          <div class="platform-card">
            <h4>时序遥感数据集</h4>
            <p>长时间序列卫星数据产品，支持变化检测和趋势分析研究</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import InteractiveGlobe from '@/components/InteractiveGlobe.vue';

const router = useRouter();

const title = '探索无垠宇宙，洞悉地球万象';
const description = '我们致力于提供全球领先的空天遥感数据、平台与解决方案';
const typedTitle = ref('');
const typedDescription = ref('');

const typeWriter = (text, target, delay) => {
  let i = 0;
  const interval = setInterval(() => {
    if (i < text.length) {
      target.value += text.charAt(i);
      i++;
    } else {
      clearInterval(interval);
    }
  }, delay);
};

const goToSatelliteImagery = () => {
  console.log('=== Vue点击事件被触发 ===');
  console.log('点击了查看详情按钮');
  console.log('准备跳转到:', '/satellite-imagery');
  console.log('router对象:', router);
  try {
    router.push('/satellite-imagery');
    console.log('路由跳转命令已执行');
  } catch (error) {
    console.error('路由跳转失败:', error);
  }
};

onMounted(() => {
  typeWriter(title, typedTitle, 100);
  setTimeout(() => {
    typeWriter(description, typedDescription, 50);
  }, title.length * 100 + 500);
});
</script>

<style scoped>
.home {
  text-align: center;
}

.hero-section {
  position: relative;
  height: 60vh;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  gap: 5rem;
  .hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><radialGradient id="star" cx="50%" cy="50%" r="1"><stop offset="0%" stop-color="white" stop-opacity="1"/><stop offset="100%" stop-color="white" stop-opacity="0"/></radialGradient></defs><circle cx="100" cy="150" r="1" fill="url(%23star)"/><circle cx="200" cy="80" r="0.8" fill="url(%23star)"/><circle cx="350" cy="200" r="1.2" fill="url(%23star)"/><circle cx="450" cy="120" r="0.6" fill="url(%23star)"/><circle cx="600" cy="180" r="1" fill="url(%23star)"/><circle cx="750" cy="90" r="0.9" fill="url(%23star)"/><circle cx="850" cy="220" r="0.7" fill="url(%23star)"/><circle cx="150" cy="300" r="0.8" fill="url(%23star)"/><circle cx="300" cy="350" r="1.1" fill="url(%23star)"/><circle cx="500" cy="280" r="0.9" fill="url(%23star)"/><circle cx="700" cy="320" r="0.6" fill="url(%23star)"/><circle cx="900" cy="380" r="1" fill="url(%23star)"/><circle cx="80" cy="450" r="0.7" fill="url(%23star)"/><circle cx="250" cy="480" r="1.3" fill="url(%23star)"/><circle cx="420" cy="420" r="0.8" fill="url(%23star)"/><circle cx="650" cy="460" r="0.9" fill="url(%23star)"/><circle cx="800" cy="500" r="0.6" fill="url(%23star)"/><circle cx="120" cy="600" r="1" fill="url(%23star)"/><circle cx="320" cy="580" r="0.7" fill="url(%23star)"/><circle cx="520" cy="620" r="1.1" fill="url(%23star)"/><circle cx="720" cy="580" r="0.8" fill="url(%23star)"/><circle cx="920" cy="640" r="0.9" fill="url(%23star)"/><circle cx="180" cy="750" r="0.6" fill="url(%23star)"/><circle cx="380" cy="720" r="1.2" fill="url(%23star)"/><circle cx="580" cy="780" r="0.7" fill="url(%23star)"/><circle cx="780" cy="720" r="1" fill="url(%23star)"/><circle cx="50" cy="850" r="0.8" fill="url(%23star)"/><circle cx="280" cy="880" r="0.9" fill="url(%23star)"/><circle cx="480" cy="850" r="0.6" fill="url(%23star)"/><circle cx="680" cy="900" r="1.1" fill="url(%23star)"/><circle cx="880" cy="820" r="0.7" fill="url(%23star)"/></svg>') repeat;
    z-index: 0;
  }

  .meteor {
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 2px;
    background-color: white;
    border-radius: 50%;
    animation: meteor-fall 10s linear infinite;
    z-index: 1;
  }

  .meteor:nth-child(2) {
    animation-delay: -3s;
  }

  .meteor:nth-child(3) {
    animation-delay: -5s;
  }

  .meteor:nth-child(4) {
    animation-delay: -7s;
  }

  .meteor:nth-child(5) {
    animation-delay: -9s;
  }

  @keyframes meteor-fall {
    from {
      transform: translate(-100px, -100px) rotate(45deg);
      opacity: 1;
    }
    to {
      transform: translate(100vw, 100vh) rotate(45deg);
      opacity: 0;
    }
  }
}

.hero-left {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0;
}

.hero-content {
  max-width: 500px;
  text-align: left;
}

.hero-content h1 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1.2rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  line-height: 1.2;
}

.hero-content p {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
}

.hero-right {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0;
}

.globe-wrapper {
  width: 480px;
  height: 480px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Products Section */
.products-section {
  padding: 3rem 2rem;
  background: #000 url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><radialGradient id="star" cx="50%" cy="50%" r="1"><stop offset="0%" stop-color="white" stop-opacity="1"/><stop offset="100%" stop-color="white" stop-opacity="0"/></radialGradient></defs><circle cx="100" cy="150" r="1" fill="url(%23star)"/><circle cx="200" cy="80" r="0.8" fill="url(%23star)"/><circle cx="350" cy="200" r="1.2" fill="url(%23star)"/><circle cx="450" cy="120" r="0.6" fill="url(%23star)"/><circle cx="600" cy="180" r="1" fill="url(%23star)"/><circle cx="750" cy="90" r="0.9" fill="url(%23star)"/><circle cx="850" cy="220" r="0.7" fill="url(%23star)"/><circle cx="150" cy="300" r="0.8" fill="url(%23star)"/><circle cx="300" cy="350" r="1.1" fill="url(%23star)"/><circle cx="500" cy="280" r="0.9" fill="url(%23star)"/><circle cx="700" cy="320" r="0.6" fill="url(%23star)"/><circle cx="900" cy="380" r="1" fill="url(%23star)"/><circle cx="80" cy="450" r="0.7" fill="url(%23star)"/><circle cx="250" cy="480" r="1.3" fill="url(%23star)"/><circle cx="420" cy="420" r="0.8" fill="url(%23star)"/><circle cx="650" cy="460" r="0.9" fill="url(%23star)"/><circle cx="800" cy="500" r="0.6" fill="url(%23star)"/><circle cx="120" cy="600" r="1" fill="url(%23star)"/><circle cx="320" cy="580" r="0.7" fill="url(%23star)"/><circle cx="520" cy="620" r="1.1" fill="url(%23star)"/><circle cx="720" cy="580" r="0.8" fill="url(%23star)"/><circle cx="920" cy="640" r="0.9" fill="url(%23star)"/><circle cx="180" cy="750" r="0.6" fill="url(%23star)"/><circle cx="380" cy="720" r="1.2" fill="url(%23star)"/><circle cx="580" cy="780" r="0.7" fill="url(%23star)"/><circle cx="780" cy="720" r="1" fill="url(%23star)"/><circle cx="50" cy="850" r="0.8" fill="url(%23star)"/><circle cx="280" cy="880" r="0.9" fill="url(%23star)"/><circle cx="480" cy="850" r="0.6" fill="url(%23star)"/><circle cx="680" cy="900" r="1.1" fill="url(%23star)"/><circle cx="880" cy="820" r="0.7" fill="url(%23star)"/></svg>') repeat;
  color: white;
  position: relative;
}

.products-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  pointer-events: none;
}

.products-section > * {
  position: relative;
  z-index: 1;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}

.section-header p {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  max-width: 700px;
  margin: 0 auto;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.8rem;
  max-width: 1200px;
  margin: 0 auto 3rem;
}

.product-card {
  background: rgba(0, 0, 0, 0.4);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.product-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(64, 158, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.product-card:hover::before {
  opacity: 1;
}

.product-card:hover {
  transform: translateY(-8px) scale(1.02);
  border-color: rgba(64, 158, 255, 0.8);
  box-shadow: 0 15px 40px rgba(64, 158, 255, 0.4), 0 0 20px rgba(64, 158, 255, 0.3);
}

.product-card.featured {
  background: rgba(64, 158, 255, 0.1);
}

.product-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.product-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: white;
}

.product-card p {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.product-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.feature-tag {
  background: rgba(64, 158, 255, 0.2);
  color: #409EFF;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  border: 1px solid rgba(64, 158, 255, 0.3);
}

.product-btn {
  width: 100%;
  margin-top: auto;
  position: relative;
  z-index: 999;
  pointer-events: auto !important;
}

/* AI Services */
.ai-services {
  margin: 3rem auto;
  max-width: 1200px;
}

.ai-services h3 {
  font-size: 2.2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}

.ai-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.ai-card {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  padding: 1.8rem;
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.ai-card:hover {
  transform: translateY(-6px) scale(1.02);
  border-color: rgba(64, 158, 255, 0.7);
  box-shadow: 0 12px 35px rgba(64, 158, 255, 0.3), 0 0 15px rgba(64, 158, 255, 0.2);
}

.ai-card h4 {
  color: white;
  margin-bottom: 0.8rem;
  font-size: 1.2rem;
}

.ai-card p {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin: 0;
  font-size: 0.95rem;
}

/* Platform Section */
.platform-section {
  margin: 3rem auto;
  max-width: 1200px;
}

.platform-section h3 {
  font-size: 2.2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}

.platform-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.platform-card {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  padding: 1.8rem;
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.platform-card:hover {
  transform: translateY(-6px) scale(1.02);
  border-color: rgba(64, 158, 255, 0.7);
  box-shadow: 0 12px 35px rgba(64, 158, 255, 0.3), 0 0 15px rgba(64, 158, 255, 0.2);
}

.platform-card h4 {
  color: white;
  margin-bottom: 0.8rem;
  font-size: 1.2rem;
}

.platform-card p {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin: 0;
  font-size: 0.95rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-section {
    flex-direction: column;
    height: auto;
    padding: 2rem 1rem;
    gap: 2rem;
  }
  
  .hero-left, .hero-right {
    padding: 0;
  }
  
  .hero-content {
    text-align: center;
    max-width: 100%;
  }
  
  .hero-content h1 {
    font-size: 2.5rem;
  }
  
  .globe-wrapper {
    width: 300px;
    height: 300px;
  }
  
  .products-section {
    padding: 2rem 1rem;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
  
  .products-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

/* 流星动画效果 - 升级版 */
.meteor {
  position: fixed;
  width: 4px;
  height: 4px;
  background: radial-gradient(circle, #ffffff 0%, #87ceeb 30%, transparent 70%);
  border-radius: 50%;
  box-shadow: 
    0 0 10px #ffffff,
    0 0 20px #87ceeb,
    0 0 30px #4169e1,
    0 0 40px #1e90ff;
  animation: meteor-fall linear infinite;
  z-index: 1;
}

.meteor::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150px;
  height: 2px;
  background: linear-gradient(90deg, 
    rgba(255, 255, 255, 0.9) 0%,
    rgba(135, 206, 235, 0.7) 20%,
    rgba(65, 105, 225, 0.5) 40%,
    rgba(30, 144, 255, 0.3) 60%,
    transparent 100%);
  transform: translate(-50%, -50%) rotate(225deg);
  border-radius: 2px;
  filter: blur(0.5px);
}

.meteor::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 1px;
  background: linear-gradient(90deg, 
    rgba(255, 255, 255, 1) 0%,
    rgba(135, 206, 235, 0.8) 30%,
    transparent 100%);
  transform: translate(-50%, -50%) rotate(225deg);
  border-radius: 1px;
}

@keyframes meteor-fall {
  0% {
    transform: translateX(-200px) translateY(-200px) scale(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
    transform: translateX(-150px) translateY(-150px) scale(1);
  }
  90% {
    opacity: 1;
    transform: translateX(calc(100vw - 50px)) translateY(calc(100vh - 50px)) scale(1);
  }
  100% {
    transform: translateX(100vw) translateY(100vh) scale(0);
    opacity: 0;
  }
}

/* 创建多个不同颜色和大小的流星 */
.meteor:nth-child(1) {
  top: 5%;
  left: 5%;
  animation-duration: 4s;
  animation-delay: 0s;
  filter: hue-rotate(0deg);
}

.meteor:nth-child(2) {
  top: 15%;
  left: 85%;
  animation-duration: 3.2s;
  animation-delay: 1.5s;
  filter: hue-rotate(60deg);
  transform: scale(0.8);
}

.meteor:nth-child(3) {
  top: 8%;
  left: 45%;
  animation-duration: 5s;
  animation-delay: 3s;
  filter: hue-rotate(120deg);
  transform: scale(1.2);
}

.meteor:nth-child(4) {
  top: 25%;
  left: 15%;
  animation-duration: 3.8s;
  animation-delay: 4.5s;
  filter: hue-rotate(180deg);
  transform: scale(0.9);
}

.meteor:nth-child(5) {
  top: 12%;
  left: 75%;
  animation-duration: 4.5s;
  animation-delay: 6s;
  filter: hue-rotate(240deg);
  transform: scale(1.1);
}

/* 添加闪烁星星效果 */
.twinkling-star {
  position: fixed;
  width: 2px;
  height: 2px;
  background: #ffffff;
  border-radius: 50%;
  animation: twinkle 2s ease-in-out infinite alternate;
  z-index: 0;
}

@keyframes twinkle {
  0% {
    opacity: 0.3;
    transform: scale(1);
    box-shadow: 0 0 5px #ffffff;
  }
  100% {
    opacity: 1;
    transform: scale(1.2);
    box-shadow: 0 0 10px #ffffff, 0 0 15px #87ceeb;
  }
}

.twinkling-star:nth-child(6) {
  top: 20%;
  left: 30%;
  animation-delay: 0s;
}

.twinkling-star:nth-child(7) {
  top: 60%;
  left: 70%;
  animation-delay: 0.5s;
}

.twinkling-star:nth-child(8) {
  top: 40%;
  left: 20%;
  animation-delay: 1s;
}

.twinkling-star:nth-child(9) {
  top: 80%;
  left: 60%;
  animation-delay: 1.5s;
}

.twinkling-star:nth-child(10) {
  top: 30%;
  left: 90%;
  animation-delay: 2s;
}
</style>