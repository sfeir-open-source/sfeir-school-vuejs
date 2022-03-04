<template>
  <div class="header row">
    <h1 class="col s12 flow-text">You have {{ filteredPeople.length }} contacts</h1>
    <SearchBar @search="filterPeople($event)" />
  </div>
  <section class="container">
    <card-panel
      v-for="person in filteredPeople"
      :key="person.id"
      :person="person"
      @person-delete="deletePerson($event)"
    />
  </section>
  <el-button
    class="fab-bottom"
    type="primary"
    size="large"
    circle
    @click="dialogVisible = true"
  >
    <el-icon><Plus /></el-icon>
  </el-button>
  <el-dialog
    v-model="dialogVisible"
    title="Contact informations"
  >
    <Form @cancel="dialogVisible = false" @save="addPerson($event)"/>
  </el-dialog>
</template>

<script lang="ts">
import CardPanel from '../components/CardPanel.vue';
import Form from '../components/Form.vue';
import SearchBar from '../components/SearchBar.vue';
import {Plus} from '@element-plus/icons-vue';
import {defineComponent} from 'vue';
import {mapGetters} from 'vuex';

export default defineComponent({
  components: {CardPanel, Form, Plus, SearchBar},
  data() {
    return {
      dialogVisible: false,
    };
  },
  async created() {
    await this.$store.dispatch('people/getPeople');
  },
  computed: {
    ...mapGetters('people', {
      filteredPeople: 'filterPeople',
    }),
  },
  methods: {
    async deletePerson(id) {
      this.$store.dispatch('people/deletePeople', id);
    },
    async addPerson(person) {
      try {
        await this.$store.dispatch('people/addPeople', person);
        this.dialogVisible = false;
      } catch (error) {
        console.error(error);
      }
    },
    filterPeople(searchFilter) {
      this.$store.commit('people/setSearch', searchFilter);
    },
  },
});
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.fab-bottom {
  position: fixed;
  bottom: 2.5rem;
  right: 2rem;
}

.header {
  text-align: center;
}
</style>
