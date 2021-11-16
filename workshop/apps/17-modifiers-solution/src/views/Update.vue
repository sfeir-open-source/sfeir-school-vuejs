<template>
  <Form :person="person" @save="updatePerson($event)" />
</template>

<script type="text/javascript">
import PeopleService from '../services/people.service';
import Form from '../components/Form.vue';
export default {
  components: {
    Form,
  },
  data() {
    return {
      person: {},
    };
  },
  async beforeRouteEnter(to, from, next) {
    const person = await PeopleService.fetchOne(to.params.id);
    next(vm => (vm.person = person));
  },
  methods: {
    async updatePerson(person) {
      await PeopleService.update(person);
    },
  },
};
</script>

<style scoped></style>
