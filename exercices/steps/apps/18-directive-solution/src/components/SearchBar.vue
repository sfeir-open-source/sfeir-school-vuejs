<template>
  <div class="col s12">
    <form>
      <md-field>
        <label>Search</label>
        <md-input
          v-upper
          v-model="searchInput"
          @keyup.enter="search(searchInput)"
        ></md-input>
        <md-icon>search</md-icon>
      </md-field>
    </form>
  </div>
</template>
<script type="text/javascript">
export default {
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
