<template>
  <div class="col s12">
    <el-input
      v-model="searchInput"
      @keyup.enter="search(searchInput)"
      class="md-field"
      placeholder="Search"
      v-upper
    />
  </div>
</template>
<script lang="ts">
import UpperDirective from '../directives/upper.directive';
export default {
  directives: {
    upper: UpperDirective
  },
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
};
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
