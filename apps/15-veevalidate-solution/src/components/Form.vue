<template>
  <section class="container-form">
    <section class="two-column-section">
      <div class="image-section">
        <img height="100" width="100" alt="photo of the person" :src="photo" />
      </div>
      <div class="form-section">
        <n-space vertical>
          <div class="container-field">
            <n-input
              v-model:value="lastname"
              round
              size="large"
              placeholder="Lastname of the person"
              :status="firstErrorLastname ? 'error' : 'success'"
            />
            <span class="error-message" v-if="firstErrorLastname">{{ firstErrorLastname }}</span>
          </div>
          <div class="container-field">
            <n-input
              v-model:value="firstname"
              round
              size="large"
              placeholder="Firstname of the person"
              :status="firstErrorFirstname ? 'error' : 'success'"
            />
            <span class="error-message" v-if="firstErrorFirstname">{{ firstErrorFirstname }}</span>
          </div>
          <div class="container-field">
            <n-input
              v-model:value="email"
              round
              size="large"
              placeholder="Email of the person"
              :status="firstErrorEmail ? 'error' : 'success'"
            />
            <span class="error-message" v-if="firstErrorEmail">{{ firstErrorEmail }}</span>
          </div>
          <div class="container-field">
            <n-input
              v-model:value="phone"
              round
              size="large"
              placeholder="Phone number of the person"
              :status="firstErrorPhone ? 'error' : 'success'"
            />
            <span class="error-message" v-if="firstErrorPhone">{{ firstErrorPhone }}</span>
          </div>
        </n-space>
      </div>
    </section>
    <div class="button-container">
      <n-button strong round secondary type="error" @click="cancel">Cancel</n-button>
      <n-button strong round secondary type="primary" @click="save" :disabled="personFormValidity">Save</n-button>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Person, PersonForm } from '@/models/person.model';
import { toRaw } from 'vue';
import { usePersonForm } from '../composable/person-form.composable';

const props = defineProps<{ person?: Person }>();
const emit = defineEmits<{ (e: 'savePerson', person: PersonForm): void; (e: 'cancel'): void }>();
const {
  handleSubmit,
  personFormValidity,
  lastname,
  firstErrorLastname,
  firstname,
  firstErrorFirstname,
  email,
  firstErrorEmail,
  photo,
  phone,
  firstErrorPhone
} = usePersonForm(toRaw(props.person));

const save = handleSubmit(personForm => {
  emit('savePerson', personForm);
});

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
