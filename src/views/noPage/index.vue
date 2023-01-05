<script setup lang="ts">
import NotFound from "@/components/notFound/index.vue";
// import * as THREE from "three";

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );

// console.log("scene: >>", scene);

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.getElementById("three")?.appendChild(renderer.domElement);
</script>

<template>
  <!-- <div class="no-page-wrap">
    <el-empty description="404" />
  </div> -->
  <Suspense>
    <template #default>
      <NotFound />
      <!-- <div id="three" style="width: 100%; height: 100%"></div> -->
    </template>
    <!-- loading state via #fallback slot -->
    <template #fallback> Loading... </template>
  </Suspense>
</template>
