<script lang="ts" setup>
import { Field, Form as VeeForm } from 'vee-validate';
import { usePeopleForm } from '../../composable/people.form.composable';
import { DEFAULT_PERSON, type Person, type PersonForm } from '../../model/person';

const props = withDefaults(defineProps<{ person?: Person }>(), {
  person: () => DEFAULT_PERSON,
});
const emits = defineEmits<{ (e: 'close', person?: PersonForm): void }>();

const { personForm } = usePeopleForm(() => props.person);

function closeModal(person?: PersonForm) {
  emits('close', person);
}
</script>
<template>
  <VeeForm v-slot="{ meta: { valid } }">
    <section class="form">
      <div class="form-container-image">
        <a-avatar :src="personForm.photo" :size="100" />
      </div>

      <a-form :label-col="{ span: 5 }" label-align="left">
        <Field
          v-slot="{ field, errorMessage, meta: { dirty, touched } }"
          v-model="personForm.firstname"
          name="firstname"
          rules="required|min:2"
          validate-on-mount
        >
          <a-form-item
            label="Firstname"
            has-feedback
            :validate-status="(dirty || touched) && errorMessage ? 'error' : personForm.firstname ? 'success' : undefined"
            :help="(dirty || touched) && errorMessage"
          >
            <a-input v-bind="field" placeholder="Enter your firstname" type="text" name="firstname" />
          </a-form-item>
        </Field>
        <Field
          v-slot="{ field, errorMessage, meta: { dirty, touched } }"
          v-model="personForm.lastname"
          name="lastname"
          rules="required|min:2"
          validate-on-mount
        >
          <a-form-item
            label="Lastname"
            has-feedback
            :validate-status="(dirty || touched) && errorMessage ? 'error' : personForm.lastname ? 'success' : undefined"
            :help="(dirty || touched) && errorMessage"
          >
            <a-input v-bind="field" placeholder="Enter your lastname" type="text" name="lastname" />
          </a-form-item>
        </Field>
        <Field
          v-slot="{ field, errorMessage, meta: { dirty, touched } }"
          v-model="personForm.email"
          name="email"
          rules="required|sfeirEmail"
          validate-on-mount
        >
          <a-form-item
            label="Email"
            has-feedback
            :validate-status="(dirty || touched) && errorMessage ? 'error' : personForm.email ? 'success' : undefined"
            :help="(dirty || touched) && errorMessage"
          >
            <a-input v-bind="field" placeholder="Enter your email" type="text" name="email" />
          </a-form-item>
        </Field>
        <Field
          v-slot="{ field, errorMessage, meta: { dirty, touched } }"
          v-model="personForm.phone"
          name="phone"
          rules="required|min:10"
          validate-on-mount
        >
          <a-form-item
            label="Phone"
            has-feedback
            :validate-status="(dirty || touched) && errorMessage ? 'error' : personForm.phone ? 'success' : undefined"
            :help="(dirty || touched) && errorMessage"
          >
            <a-input v-bind="field" placeholder="Enter your phone" type="text" name="phone" />
          </a-form-item>
        </Field>
      </a-form>
    </section>
    <section class="form-actions">
      <a-button danger @click="closeModal()">Cancel</a-button>
      <a-button type="primary" :disabled="!valid" @click="closeModal(personForm)">Save</a-button>
    </section>
  </VeeForm>
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

.error-message {
  color: red;
  font-size: 0.8rem;
}
</style>
