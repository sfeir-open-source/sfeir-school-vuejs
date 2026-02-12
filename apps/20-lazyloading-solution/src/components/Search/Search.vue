<script setup lang="ts">
const model = defineModel<string>({ required: true, default: '' });
</script>
<template>
  <div class="search-container">
    <a-input v-model:value="model" placeholder="Search" size="large" />
  </div>
</template>

<style scoped lang="css">
.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

:deep(.ant-input) {
  width: 30%;
}
</style>
