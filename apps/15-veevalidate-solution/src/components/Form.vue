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
              @blur="lastnameHandleBlur"
              :status="lastnameMeta.touched && lastnameError ? 'error' : 'success'"
            />
            <span class="error-message" v-if="lastnameMeta.touched && lastnameError">{{ lastnameError }}</span>
          </div>
          <div class="container-field">
            <n-input
              v-model:value="firstname"
              round
              size="large"
              placeholder="Firstname of the person"
              @blur="firstnameHandleBlur"
              :status="firstnameError && firstnameMeta.touched ? 'error' : 'success'"
            />
            <span class="error-message" v-if="firstnameMeta.touched && firstnameError">{{ firstnameError }}</span>
          </div>
          <div class="container-field">
            <n-input
              v-model:value="email"
              round
              size="large"
              placeholder="Email of the person"
              @blur="emailHandleBlur"
              :status="emailMeta.touched && emailError ? 'error' : 'success'"
            />
            <span class="error-message" v-if="emailMeta.touched && emailError">{{ emailError }}</span>
          </div>
          <div class="container-field">
            <n-input
              v-model:value="phone"
              round
              size="large"
              placeholder="Phone number of the person"
              @blur="phoneHandleBlur"
              :status="phoneMeta.touched && phoneError ? 'error' : 'success'"
            />
            <span class="error-message" v-if="phoneMeta.touched && phoneError">{{ phoneError }}</span>
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
  lastnameError,
  lastnameMeta,
  lastnameHandleBlur,
  firstname,
  firstnameError,
  firstnameMeta,
  firstnameHandleBlur,
  email,
  emailError,
  emailMeta,
  emailHandleBlur,
  phone,
  phoneError,
  phoneMeta,
  phoneHandleBlur,
  photo
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
