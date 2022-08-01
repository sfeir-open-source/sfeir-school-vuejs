<template>
  <section class="container">
    <Form v-if="person" :person="person" @save-person="updatePerson" @cancel="goBack" />
  </section>
</template>

<script lang="ts" async setup>
import Form from '@/components/Form.vue';
import { usePeopleStore } from '@/composable/people.store';
import type { Person, PersonForm } from '@/models/person.model';
import { ref, type Ref } from 'vue';
import { useRouter } from 'vue-router';
import { usePersonForm } from '../composable/person-form.composable';

const props = defineProps<{ id: string }>();
const person: Ref<Person | null> = ref(null);
const peopleStore = usePeopleStore();
const { updatePersonById } = usePersonForm();
const { go } = useRouter();

try {
  person.value = await peopleStore.getPersonById(props.id);
} catch (error) {
  throw new Error('Oopss something wrong happen');
}

async function updatePerson(person: PersonForm): Promise<void> {
  try {
    await updatePersonById(person);
    go(-1);
  } catch (error) {
    throw new Error('Oopss something wrong happen');
  }
}

function goBack(): void {
  go(-1);
}
</script>

<style lang="css" scoped>
.container {
  padding: 0 2rem;
}
</style>
