<template>
  <section class="container">
    <Form v-if="person" :person="person" @save-person="updatePerson" @cancel="goBack" />
  </section>
</template>

<script lang="ts" async setup>
import Form from '@/components/Form.vue';
import { usePeople } from '@/composable/people.composable';
import type { Person, PersonForm } from '@/models/person.model';
import { ref, type Ref } from 'vue';
import { useRouter } from 'vue-router';

const { getPersonById, updatePersonById } = usePeople();
const { go } = useRouter();
const person: Ref<Person | null> = ref(null);
const props = defineProps<{ id: string }>();

try {
  person.value = await getPersonById(props.id);
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
