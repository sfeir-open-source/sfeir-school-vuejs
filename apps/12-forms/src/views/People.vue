<template>
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
    <Form />
  </n-modal>
</template>

<script async setup lang="ts">
import Card from '@/components/Card.vue';
import Form from '@/components/Form.vue';
import { usePeople } from '@/composable/people.composable';
import { PlusCircleTwotone } from '@vicons/antd';
import { ref } from 'vue';

const { people, getPeople, deletePerson } = usePeople();
const showModal = ref<boolean>(false);

function openModal(): void {
  showModal.value = true;
}

function closeDialog(): void {
  showModal.value = false;
}

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

.add-button {
  position: fixed;
  bottom: 3rem;
  right: 3rem;
}
</style>
