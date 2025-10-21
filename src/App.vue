<template>
  <div>
    <MainLayout />
  </div>
</template>

<script>
import MainLayout from './layouts/MainLayout.vue';

export default {
  name: 'App',
  components: {
    MainLayout,
  },
};
</script>

<style>
/* 全局星空背景 */
body, html, #app {
  margin: 0;
  padding: 0;
  background: #000 url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><radialGradient id="star" cx="50%" cy="50%" r="1"><stop offset="0%" stop-color="white" stop-opacity="1"/><stop offset="100%" stop-color="white" stop-opacity="0"/></radialGradient></defs><circle cx="100" cy="150" r="1" fill="url(%23star)"/><circle cx="200" cy="80" r="0.8" fill="url(%23star)"/><circle cx="350" cy="200" r="1.2" fill="url(%23star)"/><circle cx="450" cy="120" r="0.6" fill="url(%23star)"/><circle cx="600" cy="180" r="1" fill="url(%23star)"/><circle cx="750" cy="90" r="0.9" fill="url(%23star)"/><circle cx="850" cy="220" r="0.7" fill="url(%23star)"/><circle cx="150" cy="300" r="0.8" fill="url(%23star)"/><circle cx="300" cy="350" r="1.1" fill="url(%23star)"/><circle cx="500" cy="280" r="0.9" fill="url(%23star)"/><circle cx="700" cy="320" r="0.6" fill="url(%23star)"/><circle cx="900" cy="380" r="1" fill="url(%23star)"/><circle cx="80" cy="450" r="0.7" fill="url(%23star)"/><circle cx="250" cy="480" r="1.3" fill="url(%23star)"/><circle cx="420" cy="420" r="0.8" fill="url(%23star)"/><circle cx="650" cy="460" r="0.9" fill="url(%23star)"/><circle cx="800" cy="500" r="0.6" fill="url(%23star)"/><circle cx="120" cy="600" r="1" fill="url(%23star)"/><circle cx="320" cy="580" r="0.7" fill="url(%23star)"/><circle cx="520" cy="620" r="1.1" fill="url(%23star)"/><circle cx="720" cy="580" r="0.8" fill="url(%23star)"/><circle cx="920" cy="640" r="0.9" fill="url(%23star)"/><circle cx="180" cy="750" r="0.6" fill="url(%23star)"/><circle cx="380" cy="720" r="1.2" fill="url(%23star)"/><circle cx="580" cy="780" r="0.7" fill="url(%23star)"/><circle cx="780" cy="720" r="1" fill="url(%23star)"/><circle cx="50" cy="850" r="0.8" fill="url(%23star)"/><circle cx="280" cy="880" r="0.9" fill="url(%23star)"/><circle cx="480" cy="850" r="0.6" fill="url(%23star)"/><circle cx="680" cy="900" r="1.1" fill="url(%23star)"/><circle cx="880" cy="820" r="0.7" fill="url(%23star)"/></svg>') repeat;
  min-height: 100vh;
  color: white;
  position: relative;
  overflow-x: hidden;
}

* {
  box-sizing: border-box;
}
</style>
