<template>
  <Form class="container-form" v-slot="{ meta: { valid: formValid } }">
    <section class="two-column-section">
      <div class="image-section">
        <img height="100" width="100" alt="photo of the person" :src="personForm.photo" />
      </div>
      <n-space vertical class="form-section">
        <Field
          name="lastname"
          v-model="personForm.lastname"
          v-slot="{ value, handleChange, handleBlur, meta: { valid, touched } }"
          :rules="{ required: true, min: 2 }"
          :validateOnMount="true"
        >
          <n-input
            type="text"
            :value="(value as string)"
            :status="touched && !valid ? 'error' : 'success'"
            round
            size="large"
            placeholder="Lastname of the person"
            @update:value="handleChange"
            @blur="handleBlur"
          />
          <ErrorMessage v-if="touched" name="lastname" class="error-message" />
        </Field>
        <Field
          name="firstname"
          v-model="personForm.firstname"
          v-slot="{ value, handleChange, handleBlur, meta: { valid, touched } }"
          :rules="{ required: true, min: 2 }"
          :validateOnMount="true"
        >
          <n-input
            type="text"
            :value="(value as string)"
            :status="touched && !valid ? 'error' : 'success'"
            round
            size="large"
            placeholder="firstname of the person"
            @update:value="handleChange"
            @blur="handleBlur"
          />
          <ErrorMessage v-if="touched" name="firstname" class="error-message" />
        </Field>
        <Field
          name="email"
          v-model="personForm.email"
          v-slot="{ value, handleChange, handleBlur, meta: { valid, touched } }"
          :rules="{ required: true, sfeirEmail: true }"
          :validateOnMount="true"
        >
          <n-input
            type="text"
            :value="(value as string)"
            :status="touched && !valid ? 'error' : 'success'"
            round
            size="large"
            placeholder="email of the person"
            @update:value="handleChange"
            @blur="handleBlur"
          />
          <ErrorMessage v-if="touched" name="email" class="error-message" />
        </Field>
        <Field
          name="phone"
          v-model="personForm.phone"
          v-slot="{ value, handleChange, handleBlur, meta: { valid, touched } }"
          :rules="{ required: true, regex: /^[0-9]{10}$/ }"
          :validateOnMount="true"
        >
          <n-input
            type="text"
            :value="(value as string)"
            :status="touched && !valid ? 'error' : 'success'"
            round
            size="large"
            placeholder="phone of the person"
            @update:value="handleChange"
            @blur="handleBlur"
          />
          <ErrorMessage v-if="touched" name="phone" class="error-message" />
        </Field>
      </n-space>
    </section>
    <div class="button-container">
      <n-button strong round secondary type="error" @click="cancel">Cancel</n-button>
      <n-button strong round secondary type="primary" @click="save" :disabled="!formValid">Save</n-button>
    </div>
  </Form>
</template>

<script setup lang="ts">
import type { Person, PersonForm } from '@/models/person.model';
import { ErrorMessage, Field, Form } from 'vee-validate';
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
