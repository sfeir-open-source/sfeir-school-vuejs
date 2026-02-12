<script lang="ts" setup>
import { usePeopleForm } from '../../composable/people.form.composable';
import { DEFAULT_PERSON, type Person, type PersonForm } from '../../model/person';

const props = withDefaults(defineProps<{ person?: Person }>(), {
  person: () => DEFAULT_PERSON,
});

const { personForm, v$ } = usePeopleForm(() => props.person);
const emits = defineEmits<{ (e: 'close', person?: PersonForm): void }>();

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
      <a-form-item
        label="Firstname"
        has-feedback
        :validate-status="
          (v$.firstname.$dirty || v$.firstname.$touched) && v$.firstname.$error ? 'error' : v$.firstname.$model ? 'success' : undefined
        "
        :help="v$.firstname.$errors[0]?.$message"
      >
        <a-input v-model:value="v$.firstname.$model" placeholder="Enter your firstname" name="firstname" @blur="v$.firstname.$touch" />
      </a-form-item>
      <a-form-item
        label="Lastname"
        has-feedback
        :validate-status="(v$.lastname.$dirty || v$.lastname.$touched) && v$.lastname.$error ? 'error' : v$.lastname.$model ? 'success' : undefined"
        :help="v$.lastname.$errors[0]?.$message"
      >
        <a-input v-model:value="v$.lastname.$model" placeholder="Enter your lastname" name="lastname" @blur="v$.lastname.$touch" />
      </a-form-item>
      <a-form-item
        label="Email"
        has-feedback
        :validate-status="(v$.email.$dirty || v$.email.$touched) && v$.email.$error ? 'error' : v$.email.$model ? 'success' : undefined"
        :help="v$.email.$errors[0]?.$message"
      >
        <a-input v-model:value="v$.email.$model" placeholder="Enter your email" name="email" @blur="v$.email.$touch" />
      </a-form-item>

      <a-form-item
        label="Phone"
        has-feedback
        :validate-status="(v$.phone.$dirty || v$.phone.$touched) && v$.phone.$error ? 'error' : v$.phone.$model ? 'success' : undefined"
        :help="v$.phone.$errors[0]?.$message"
      >
        <a-input v-model:value="v$.phone.$model" placeholder="Enter your phone" name="phone" @blur="v$.phone.$touch" />
      </a-form-item>
    </a-form>
  </section>
  <section class="form-actions">
    {{ v$.$valid }}
    <a-button danger @click="closeModal()">Cancel</a-button>
    <a-button type="primary" :disabled="v$.$invalid" @click="closeModal(personForm)">Save</a-button>
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
