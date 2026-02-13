<script setup lang="ts">
import { onMounted } from 'vue';
import Card from '../../components/Card/Card.vue';
import { usePeople } from '../../composable/people.composable';
const { people, getPeople } = usePeople();

onMounted(async () => {
  await getPeople();
});
</script>

<template>
  <section class="people-container">
    <Card v-for="person in people" :key="person.id" :person="person" />
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
