<template>
  <header>
    <n-page-header>
      <img height="60" width="150" src="./assets/images/logo-people.svg" alt="sfeir-people-logo" />
    </n-page-header>
  </header>
  <main>
    <Home />
  </main>
</template>
<script lang="ts" setup>
import Home from '@/views/Home.vue';
</script>
<style scoped lang="css">
header {
  height: 5rem;
}
header .n-page-header-wrapper {
  display: flex;
  align-items: center;
  padding: 0 1rem;
  box-sizing: border-box;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  background-color: #0168ab;
  background-image: url('./assets/images/bg_right.png');
}

main {
  height: calc(100% - 5rem);
  width: 100%;
}
</style>
