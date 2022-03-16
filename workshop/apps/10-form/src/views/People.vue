<template>
  <section class="container">
    <card-panel
      v-for="person in people"
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
    <span>your form goes here</span>
  </el-dialog>
</template>

<script lang="ts">
import PeopleService from '../services/people.service';
import CardPanel from '../components/CardPanel.vue';
import {Plus} from '@element-plus/icons-vue';
import {defineComponent} from 'vue';

export default defineComponent({
  components: {CardPanel, Plus},
  data() {
    return {
      people: [],
      dialogVisible: false,
    };
  },
  async created() {
    this.people = await PeopleService.fetch();
  },
  methods: {
    async deletePerson(id) {
      this.people = await PeopleService.delete(id);
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
</style>
