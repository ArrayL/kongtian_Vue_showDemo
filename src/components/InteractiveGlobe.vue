<template>
  <div ref="globeContainer" class="globe-container"></div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, nextTick } from 'vue';
import Globe from 'globe.gl';
import * as THREE from 'three';

const globeContainer = ref(null);
let globe;

onMounted(() => {
  nextTick(() => {
    if (globeContainer.value) {
      console.log('Initializing globe...', globeContainer.value);
      
      globe = Globe()(globeContainer.value)
        .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
        .backgroundColor('rgba(0,0,0,0)')
        .width(globeContainer.value.clientWidth || 500)
        .height(globeContainer.value.clientHeight || 500);

      console.log('Globe created:', globe);

      // Add high-quality lighting for better visibility
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
      directionalLight.position.set(10, 10, 5);
      directionalLight.castShadow = true;
      
      // Add additional lights for better illumination
      const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.6);
      directionalLight2.position.set(-10, -10, -5);
      
      globe.scene().add(ambientLight);
      globe.scene().add(directionalLight);
      globe.scene().add(directionalLight2);

      // Auto-rotate
      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = 0.5;

      // Responsiveness
      const handleResize = () => {
          if (globeContainer.value && globe) {
            const { clientWidth, clientHeight } = globeContainer.value;
            globe.width(clientWidth || 500);
            globe.height(clientHeight || 500);
          }
        };

      window.addEventListener('resize', handleResize);
      
      // Force initial render
      setTimeout(() => {
        handleResize();
      }, 100);

      onUnmounted(() => {
        window.removeEventListener('resize', handleResize);
        if (globe && globe.controls()) {
          globe.controls().dispose();
        }
      });
    } else {
      console.error('Globe container not found');
    }
  });
});
</script>

<style scoped>
.globe-container {
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 0 80px rgba(100, 149, 237, 0.6), 0 0 120px rgba(100, 149, 237, 0.3);
}
</style>