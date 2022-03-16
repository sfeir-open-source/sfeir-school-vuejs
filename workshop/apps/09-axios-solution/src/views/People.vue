<template>
  <section class="container">
    <card-panel
      v-for="person in people"
      :key="person.id"
      :person="person"
      @person-delete="deletePerson($event)"
    />
  </section>
</template>

<script lang="ts">
import PeopleService from '../services/people.service';
import CardPanel from '../components/CardPanel.vue';
import {defineComponent} from 'vue';

export default defineComponent({
  components: {CardPanel},
  data() {
    return {
      people: [],
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
</style>
