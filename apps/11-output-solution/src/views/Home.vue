<template>
  <section class="container">
    <Card :person="person" @delete-person="randomPerson" />
    <n-button class="random-button" circle color="#ff69b4" size="large" @click="randomPerson">
      <template #icon>
        <n-icon :component="ReloadOutlined"></n-icon>
      </template>
    </n-button>
  </section>
</template>

<script lang="ts" async setup>
import Card from '@/components/Card.vue';
import { usePeople } from '@/composable/people.composable';
import type { Person } from '@/models/person.model';
import { ReloadOutlined } from '@vicons/antd';
import { ref, type Ref } from 'vue';

const { people, getPeople, getRandomPeople } = usePeople();
const person: Ref<Person> = ref({} as Person);

try {
  await getPeople();
  person.value = people.value[0];
} catch (error) {
  throw new Error('Oopps something wrong happen');
}

async function randomPerson() {
  person.value = await getRandomPeople();
}
</script>

<style lang="css">
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  padding: 0 1rem;
  box-sizing: border-box;
}

.random-button {
  position: absolute;
  bottom: 6rem;
  right: 3rem;
}
</style>
