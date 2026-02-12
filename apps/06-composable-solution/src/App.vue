<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <header>
    <a-page-header :back-icon="false">
      <img height="60" width="150" src="/images/logo-people.svg" alt="sfeir-people-logo" />
      <div class="header-container-links">
        <span>HOME</span>
        <span>PEOPLE</span>
      </div>
    </a-page-header>
  </header>
  <main class="main-application">
    <RouterView />
  </main>
</template>

<style scoped lang="scss">
.ant-page-header {
  background-color: var(--header-bg-color);
  height: 5rem;
}

:deep(.ant-page-header-content) {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
}

.header-container-links {
  display: flex;
  gap: 1rem;
  color: white;
}

.main-application {
  height: calc(100% - 5rem);
  padding-top: 1rem;
  width: 100%;
}
</style>
