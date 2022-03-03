<template>
  <div class="col s12">
    <el-input
      v-model="searchInput"
      class="md-field"
      placeholder="Search"
    />
  </div>
</template>
<script lang="ts">
export default {};
</script>
<style scoped>
form {
  display: flex;
  justify-content: center;
}
.md-field {
  width: 40%;
}
</style>
