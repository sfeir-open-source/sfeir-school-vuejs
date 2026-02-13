<script setup lang="ts">
import { onMounted } from 'vue';
import Card from '../../components/Card/Card.vue';
import { usePeople } from '../../composable/people.composable';
import { Person } from '../../model/person';

const { people, getPeople, deletePerson } = usePeople();

onMounted(async () => {
  await getPeople();
});

function removePerson({ id }: Person) {
  deletePerson(id);
}
</script>

<template>
  <section class="people-container">
    <Card v-for="person in people" :key="person.id" :person="person" @on-delete-person="removePerson" />
  </section>
</template>

<style scoped lang="css">
.people-container {
  padding: 0 1rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
