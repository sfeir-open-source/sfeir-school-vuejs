<template>
  <div class="col s12">
    <el-input
      v-model="searchInput"
      @keyup.enter="search(searchInput)"
      class="md-field"
      placeholder="Search"
    />
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  data() {
    return {
      searchInput: '',
    };
  },
  methods: {
    search(searchValue) {
      this.$emit('search', searchValue);
    },
  },
});
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
