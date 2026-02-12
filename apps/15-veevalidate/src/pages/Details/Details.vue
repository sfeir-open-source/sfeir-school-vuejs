<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import Form from '../../components/Form/Form.vue';
import { usePeople } from '../../composable/people.composable';
import type { Person, PersonForm } from '../../model/person';

const { id } = defineProps<{
  id: string;
}>();
const person = ref<Person>({} as Person);

const { getPersonDetails, updatePerson } = usePeople();
const { push } = useRouter();

watchEffect(async () => {
  person.value = await getPersonDetails(id);
});

async function editPerson(person?: PersonForm) {
  if (!person) {
    return push({ name: 'people' });
  }
  await updatePerson(person);
  return push({ name: 'people' });
}
</script>
<template>
  <section class="details">
    <div class="details-form">
      <Form :person="person" @close="editPerson" />
    </div>
  </section>
</template>
<style scoped lang="css">
.details {
  padding: 0 1rem;
  width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.details-form {
  width: 50%;
}
</style>
