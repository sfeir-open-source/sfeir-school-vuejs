<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';
import Card from '../../components/Card/Card.vue';
import { usePeopleStore } from '../../composable/people.store';
import type { Person } from '../../model/person';

const peopleStore = usePeopleStore();
const { filteredPeople } = storeToRefs(peopleStore);
const { getPeople, getRandomPerson } = peopleStore;
const person = ref<Person | null>(null);

onMounted(async () => {
  await getPeople();
  person.value = filteredPeople.value[0];
});

async function randomPerson() {
  person.value = await getRandomPerson();
}
</script>
<template>
  <div class="container-card">
    <Card v-if="person" :person="person" @on-delete-person="randomPerson" />
  </div>
</template>

<style scoped lang="css">
.container-card {
  display: flex;
  justify-content: center;
}
</style>
