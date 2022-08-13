<template>
  <form class="container-form">
    <section class="two-column-section">
      <div class="image-section">
        <img height="100" width="100" alt="photo of the person" :src="personForm.photo" />
      </div>
      <n-space vertical class="form-section">
        <n-input v-model:value="personForm.lastname" round size="large" placeholder="Lastname of the person" />
        <n-input v-model:value="personForm.firstname" round size="large" placeholder="Firstname of the person" />
        <n-input v-model:value="personForm.email" round size="large" placeholder="Email of the person" />
        <n-input v-model:value="personForm.phone" round size="large" placeholder="Phone number of the person" />
      </n-space>
    </section>
    <div class="button-container">
      <n-button strong round secondary type="error" @click="cancel">Cancel</n-button>
      <n-button strong round secondary type="primary" @click="save">Save</n-button>
    </div>
  </form>
</template>

<script setup lang="ts">
import type { PersonForm } from '@/models/person.model';
import { reactive, toRaw } from 'vue';

const personForm = reactive<PersonForm>({
  id: '',
  photo: 'https://randomuser.me/api/portraits/lego/6.jpg',
  email: '',
  firstname: '',
  lastname: '',
  phone: ''
});
const emit = defineEmits<{ (e: 'savePerson', person: PersonForm): void; (e: 'cancel'): void }>();

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

.button-container {
  display: flex;
  justify-content: space-between;
}
</style>
