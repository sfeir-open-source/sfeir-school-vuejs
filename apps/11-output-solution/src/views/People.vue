<template>
  <section class="container">
    <Card v-for="person in people" :key="person.id" :person="person" @delete-person="deletePerson" />
  </section>
</template>
<script async setup lang="ts">
import Card from '@/components/Card.vue';
import { usePeople } from '@/composable/people.composable';

const { people, getPeople, deletePerson } = usePeople();

try {
  await getPeople();
} catch (error) {
  throw new Error('Oopps something wrong happen');
}
</script>

<style lang="css" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  padding: 0 1rem;
  box-sizing: border-box;
}
</style>
