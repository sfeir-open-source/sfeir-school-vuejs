<script setup lang="ts">
import { PlusOutlined } from '@ant-design/icons-vue';
import { onMounted, ref } from 'vue';
import Card from '../../components/Card/Card.vue';
import Form from '../../components/Form/Form.vue';
import { usePeople } from '../../composable/people.composable';
import { Person, type PersonForm } from '../../model/person';

const isModalOpen = ref(false);
const { people, getPeople, deletePerson, createPerson } = usePeople();

onMounted(async () => {
  await getPeople();
});

function removePerson({ id }: Person) {
  deletePerson(id);
}

function openModal() {
  isModalOpen.value = true;
}

async function addPerson(person?: PersonForm) {
  if (!person) {
    return (isModalOpen.value = false);
  }
  await createPerson(person);
  return (isModalOpen.value = false);
}
</script>

<template>
  <section class="people-container">
    <Card v-for="person in people" :key="person.id" :person="person" @on-delete-person="removePerson" />
    <a-float-button type="primary" @click="openModal">
      <template #icon>
        <PlusOutlined />
      </template>
    </a-float-button>
  </section>

  <a-modal v-model:open="isModalOpen" title="Add a new person" :centered="true" width="40%" :footer="false" destroy-on-close>
    <Form @close="addPerson" />
  </a-modal>
</template>

<style scoped lang="css">
.people-container {
  padding: 0 1rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  position: relative;
}
</style>
