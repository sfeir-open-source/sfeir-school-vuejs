<script lang="ts" setup>
import { reactive, watch } from 'vue';
import { DEFAULT_PERSON, type Person, type PersonForm } from '../../model/person';

const props = withDefaults(defineProps<{ person?: Person }>(), {
  person: () => DEFAULT_PERSON,
});
const emits = defineEmits<{ (e: 'close', person?: PersonForm): void }>();

const personForm = reactive<PersonForm>({ ...DEFAULT_PERSON });

watch(
  () => props.person,
  (newPerson: Person) => Object.assign(personForm, newPerson),
);

function closeModal(person?: PersonForm) {
  emits('close', person);
}
</script>
<template>
  <section class="form">
    <div class="form-container-image">
      <a-avatar :src="personForm.photo" :size="100" />
    </div>
    <a-form :model="personForm" :label-col="{ span: 5 }" label-align="left">
      <a-form-item label="Firstname">
        <a-input v-model:value="personForm.firstname" placeholder="Enter your firstname" name="firstname" />
      </a-form-item>
      <a-form-item label="Lastname">
        <a-input v-model:value="personForm.lastname" placeholder="Enter your lastname" name="lastname" />
      </a-form-item>
      <a-form-item label="Email">
        <a-input v-model:value="personForm.email" placeholder="Enter your email" name="email" />
      </a-form-item>
      <a-form-item label="Phone">
        <a-input v-model:value="personForm.phone" placeholder="Enter your phone" name="phone" />
      </a-form-item>
    </a-form>
  </section>
  <section class="form-actions">
    <a-button danger @click="closeModal()">Cancel</a-button>
    <a-button type="primary" @click="closeModal(personForm)">Save</a-button>
  </section>
</template>
<style scoped lang="css">
.form {
  display: flex;
  width: 100%;
  gap: 1.5rem;
  padding-top: 1rem;
  box-sizing: border-box;
}

:deep(.ant-form) {
  width: calc(100% - 100px);
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding-top: 1rem;
}
</style>
