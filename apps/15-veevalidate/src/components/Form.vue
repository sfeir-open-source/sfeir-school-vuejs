<template>
  <section class="container-form">
    <section class="two-column-section">
      <div class="image-section">
        <img height="100" width="100" alt="photo of the person" :src="personForm.photo" />
      </div>
      <form class="form-section">
        <n-space vertical>
          <div class="container-field">
            <n-input v-model:value="personForm.lastname" round size="large" placeholder="Lastname of the person" />
          </div>
          <div class="container-field">
            <n-input v-model:value="personForm.firstname" round size="large" placeholder="Firstname of the person" />
          </div>
          <div class="container-field">
            <n-input v-model:value="personForm.email" round size="large" placeholder="Email of the person" />
          </div>
          <div class="container-field">
            <n-input v-model:value="personForm.phone" round size="large" placeholder="Phone number of the person" />
          </div>
        </n-space>
      </form>
    </section>
    <div class="button-container">
      <n-button strong round secondary type="error" @click="cancel">Cancel</n-button>
      <n-button strong round secondary type="primary" @click="save">Save</n-button>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Person, PersonForm } from '@/models/person.model';
import { toRaw } from 'vue';
import { usePersonForm } from '../composable/person-form.composable';

const props = defineProps<{ person?: Person }>();
const emit = defineEmits<{ (e: 'savePerson', person: PersonForm): void; (e: 'cancel'): void }>();
const { personForm } = usePersonForm(toRaw(props.person));

function save(): void {
  emit('savePerson', toRaw(personForm));
}

function cancel(): void {
  emit('cancel');
}
</script>

<style lang="css" scoped>
.container-form {
  width: 100%;
}
.two-column-section {
  display: flex;
  margin-bottom: 2rem;
}

.image-section {
  margin-right: 1rem;
}

.image-section img {
  border-radius: 50%;
}

.form-section {
  flex: 2;
}

.error-message {
  color: #e57373;
  padding-left: 1rem;
}

.button-container {
  display: flex;
  justify-content: space-between;
}
</style>
