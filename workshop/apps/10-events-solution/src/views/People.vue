<template>
  <section class="container">
    <CardPanel
      v-for="person in people"
      :key="person.id"
      :person="person"
      @person-delete="deletePerson($event)"
    />
  </section>
</template>
<script type="text/javascript">
import PeopleService from '../services/people.service';
import CardPanel from '../components/CardPanel.vue';
export default {
  components: {
    CardPanel,
  },
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
};
</script>
<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
