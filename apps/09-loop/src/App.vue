<template>
  <header>
    <n-page-header>
      <div class="header-content">
        <RouterLink :to="{ name: 'home' }">
          <img height="60" width="150" src="./assets/images/logo-people.svg" alt="sfeir-people-logo" />
        </RouterLink>
        <a class="link" href="/people">List</a>
      </div>
    </n-page-header>
  </header>
  <RouterView v-slot="{ Component }">
    <Suspense>
      <main>
        <component :is="Component" />
      </main>
    </Suspense>
  </RouterView>
</template>
<script lang="ts" setup></script>
<style scoped lang="css">
header {
  height: 5rem;
}
header .n-page-header-wrapper {
  box-sizing: border-box;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  background-color: #0168ab;
  background-image: url('./assets/images/bg_right.png');
}

header .n-page-header-wrapper .header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  box-sizing: border-box;
}

.header-content a.link {
  display: flex;
  align-items: center;
  all: unset;
  font-size: 1.5rem;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

a.link:hover {
  text-decoration: underline;
}

main {
  height: calc(100% - 5rem);
  width: 100%;
}
</style>
