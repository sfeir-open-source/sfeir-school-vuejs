<template>
  <section class="search-container">
    <div class="search">
      <Search v-model="search" />
    </div>
  </section>
  <section class="container">
    <Card v-for="person in people" :key="person.id" :person="person" @delete-person="deletePerson" />
    <n-button class="add-button" circle color="#ff69b4" size="large" @click="openModal">
      <template #icon>
        <n-icon :component="PlusCircleTwotone"></n-icon>
      </template>
    </n-button>
  </section>

  <n-modal v-model:show="showModal" preset="card" to="body">
    <template #header>Creation person Form</template>
    <Form @save-person="confirmSave" @cancel="closeDialog" />
  </n-modal>
</template>

<script async setup lang="ts">
import Card from '@/components/Card.vue';
import Form from '@/components/Form.vue';
import { usePeople } from '@/composable/people.composable';
import type { PersonForm } from '@/models/person.model';
import { PlusCircleTwotone } from '@vicons/antd';
import { ref } from 'vue';
import Search from '../components/Search.vue';
import { usePersonForm } from '../composable/person-form.composable';

const { people, search, getPeople, deletePerson } = usePeople();
const { savePerson } = usePersonForm();
const showModal = ref<boolean>(false);

try {
  await getPeople();
} catch (error) {
  throw new Error('Oopps something wrong happen');
}

function openModal(): void {
  showModal.value = true;
}

async function confirmSave(person: PersonForm): Promise<void> {
  try {
    await savePerson(person);
    await getPeople();
  } catch (error) {
    console.error('Oopps something wrong happens');
  }
  showModal.value = false;
}

function closeDialog(): void {
  showModal.value = false;
}
</script>

<style lang="css" scoped>
.search-container {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.search-container .search {
  width: 70%;
}
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  padding: 0 1rem;
  box-sizing: border-box;
}

.add-button {
  position: fixed;
  bottom: 3rem;
  right: 3rem;
}
</style>
