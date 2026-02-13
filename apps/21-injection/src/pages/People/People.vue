<script setup lang="ts">
import { PlusOutlined } from '@ant-design/icons-vue';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';
import Card from '../../components/Card/Card.vue';
import Form from '../../components/Form/Form.vue';
import Search from '../../components/Search/Search.vue';
import { usePeopleStore } from '../../composable/people.store';
import { Person, type PersonForm } from '../../model/person';

const isModalOpen = ref(false);
const store = usePeopleStore();
const { filteredPeople, search } = storeToRefs(store);

onMounted(async () => {
  await store.getPeople();
});

function removePerson({ id }: Person) {
  store.deletePerson(id);
}

function openModal() {
  isModalOpen.value = true;
}

async function addPerson(person?: PersonForm) {
  if (!person) {
    return (isModalOpen.value = false);
  }
  await store.createPerson(person);
  return (isModalOpen.value = false);
}
</script>

<template>
  <section class="people-container">
    <Search v-model="search" />
    <Card v-for="person in filteredPeople" :key="person.id" :person="person" @on-delete-person="removePerson" />
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
