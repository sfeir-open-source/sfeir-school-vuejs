<script setup lang="ts"></script>

<template>
  <header>
    <a-page-header :back-icon="false">
      <img height="60" width="150" src="/images/logo-people.svg" alt="sfeir-people-logo" />
      <div class="header-container-links">
        <RouterLink v-slot="{ href }" custom to="/home">
          <a-button type="link" custom :href="href"> HOME </a-button>
        </RouterLink>
        <RouterLink v-slot="{ href }" to="/people">
          <a-button type="link" :href="href"> PEOPLE </a-button>
        </RouterLink>
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
  overflow: auto;
}

:deep(.ant-btn-link) {
  color: white;
}

:deep(.ant-btn-link:hover) {
  color: white;
}
</style>
