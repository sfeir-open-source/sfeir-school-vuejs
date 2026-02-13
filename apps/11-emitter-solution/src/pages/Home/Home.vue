<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Card from '../../components/Card/Card.vue';
import { usePeople } from '../../composable/people.composable';
import type { Person } from '../../model/person';

const { people, getPeople, getRandomPerson } = usePeople();
const person = ref<Person>({} as Person);

onMounted(async () => {
  await getPeople();
  person.value = people.value[0];
});

async function randomPerson() {
  person.value = await getRandomPerson();
}
</script>
<template>
  <div class="container-card">
    <Card :person="person" @on-delete-person="randomPerson" />
  </div>
</template>

<style scoped lang="css">
.container-card {
  display: flex;
  justify-content: center;
}
</style>
