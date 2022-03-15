<template>
  <Form v-if="person.id" :person="person" v-on:save="updatePerson($event)" v-on:cancel="goBack" />
</template>

<script lang="ts">
import PeopleService from '../services/people.service';
import Form from '../components/Form.vue';
import {defineComponent} from 'vue';
export default defineComponent( {
  components: {Form},
  data() {
    return {
      person: {},
    };
  },
  async created() {
    this.person = await PeopleService.fetchOne(this.$route.params.id);
  },
  methods: {
    async updatePerson(person) {
      await PeopleService.update(person);
      this.goBack();
    },
    goBack() {
      this.$router.back();
    }
  },
});
</script>

<style scoped></style>
