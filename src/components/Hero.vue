<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <h2 class="hero-title">探索无限可能的空天世界</h2>
        <p class="hero-subtitle">
          我们致力于航空航天技术的创新与发展，为人类探索宇宙提供先进的解决方案
        </p>
        <div class="hero-buttons">
          <button class="btn btn-primary">Quick Start</button>
          <button class="btn btn-secondary">联系我们</button>
      </div>
      </div>
      <div class="hero-image">
        <div class="space-animation">
          <div class="planet"></div>
          <div class="stars"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  padding: 4rem 0;
  min-height: 70vh;
  display: flex;
  align-items: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background: #ff6b6b;
  color: white;
}

.btn-primary:hover {
  background: #ff5252;
  transform: translateY(-2px);
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: white;
  color: #1e3c72;
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.space-animation {
  position: relative;
  width: 300px;
  height: 300px;
}

.planet {
  width: 200px;
  height: 200px;
  background: linear-gradient(45deg, #4facfe 0%, #00f2fe 100%);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: rotate 20s linear infinite;
  box-shadow: 0 0 50px rgba(79, 172, 254, 0.3);
}

.stars {
  position: absolute;
  width: 100%;
  height: 100%;
}

.stars::before,
.stars::after {
  content: '';
  position: absolute;
  width: 4px;
  height: 4px;
  background: white;
  border-radius: 50%;
  animation: twinkle 2s ease-in-out infinite alternate;
}

.stars::before {
  top: 20%;
  left: 20%;
  animation-delay: 0s;
}

.stars::after {
  top: 80%;
  right: 20%;
  animation-delay: 1s;
}

@keyframes rotate {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes twinkle {
  from {
    opacity: 0.3;
  }
  to {
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-buttons {
    justify-content: center;
  }
  
  .space-animation {
    width: 200px;
    height: 200px;
  }
  
  .planet {
    width: 150px;
    height: 150px;
  }
}
</style>