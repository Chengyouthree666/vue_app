

<script setup>
</script>

<template>
  <el-empty description="404 not found" />
</template>

<style lang="scss" scoped>
.el-empty {
  height: 100%;
  background-image: linear-gradient(
    to left,
    rgba(179, 31, 238, 0.1),
    rgba(217, 250, 29, 0.3)
  );
  animation: colorFlash 0.5s infinite linear;

  :deep(.el-empty__image) {
    padding: 20px;
    border-radius: 10px;
    background-image: linear-gradient(
      to right,
      rgba(169, 46, 226, 0.3),
      rgba(64, 229, 193, 0.3)
    );
    animation-name: colorFlash, run;
    animation-duration: 3s, 5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
  :deep(.el-empty__description) p {
    font-size: 18px;
    font-weight: 600;
    background-image: linear-gradient(
      45deg,
      rgb(82, 10, 205),
      #dcea1c 30%,
      rgb(173, 125, 125) 80%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 400%;
    background-position: 0%;
    animation-name: colorFlash, run;
    animation-duration: 3s, 5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
  @keyframes run {
    0% {
    }
    20% {
      transform: translate(150px, 150px);
    }

    40% {
      transform: translate(-150px, 0px);
    }
    60% {
      transform: translate(0px, -150px);
    }
    80% {
      transform: translate(150px, 0px);
    }
    100% {
    }
  }
  @keyframes colorFlash {
    0% {
    }
    25% {
      background-image: linear-gradient(
        to right,
        rgba(99, 24, 134, 0.3),
        rgba(238, 227, 20, 0.3)
      );
    }
    50% {
      background-image: linear-gradient(
        to right,
        rgba(98, 16, 221, 0.3),
        rgba(229, 64, 64, 0.3)
      );
    }
    75% {
      background-image: linear-gradient(
        to left,
        rgba(98, 16, 221, 0.3),
        rgba(229, 64, 64, 0.3)
      );
    }
    100% {
    }
  }
}
</style>