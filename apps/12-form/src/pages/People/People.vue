<script setup lang="ts">
import { onMounted } from 'vue';
import Card from '../../components/Card/Card.vue';
import { usePeople } from '../../composable/people.composable';
import { Person } from '../../model/person';
import { PlusOutlined } from '@ant-design/icons-vue';

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
    <a-float-button type="primary">
      <template #icon>
        <PlusOutlined />
      </template>
    </a-float-button>
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
