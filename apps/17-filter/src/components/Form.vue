<template>
  <section class="container-form">
    <section class="two-column-section">
      <div class="image-section">
        <img height="100" width="100" alt="photo of the person" :src="v$.photo.$model" />
      </div>
      <form class="form-section">
        <n-space vertical>
          <div class="container-field">
            <n-input
              v-model:value="v$.lastname.$model"
              round
              size="large"
              placeholder="Lastname of the person"
              @blur="v$.lastname.$touch"
              :status="v$.lastname.$error ? 'error' : 'success'"
            />
            <span class="error-message" v-for="{ $message, $uid } in v$.lastname.$errors" :key="$uid">{{ $message }}</span>
          </div>
          <div class="container-field">
            <n-input
              v-model:value="v$.firstname.$model"
              round
              size="large"
              placeholder="Firstname of the person"
              @blur="v$.firstname.$touch"
              :status="v$.firstname.$error ? 'error' : 'success'"
            />
            <span class="error-message" v-for="{ $message, $uid } in v$.firstname.$errors" :key="$uid">{{ $message }}</span>
          </div>
          <div class="container-field">
            <n-input
              v-model:value="v$.email.$model"
              round
              size="large"
              placeholder="Email of the person"
              @blur="v$.email.$touch"
              :status="v$.email.$error ? 'error' : 'success'"
            />
            <span class="error-message" v-for="{ $message, $uid } in v$.email.$errors" :key="$uid">{{ $message }}</span>
          </div>
          <div class="container-field">
            <n-input
              v-model:value="v$.phone.$model"
              round
              size="large"
              placeholder="Phone number of the person"
              @blur="v$.phone.$touch"
              :status="v$.phone.$error ? 'error' : 'success'"
            />
            <span class="error-message" v-for="{ $message, $uid } in v$.phone.$errors" :key="$uid">{{ $message }}</span>
          </div>
        </n-space>
      </form>
    </section>
    <div class="button-container">
      <n-button strong round secondary type="error" @click="cancel">Cancel</n-button>
      <n-button strong round secondary type="primary" @click="save" :disabled="v$.$invalid">Save</n-button>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Person, PersonForm } from '@/models/person.model';
import { toRaw } from 'vue';
import { usePersonForm } from '../composable/person-form.composable';

const props = defineProps<{ person?: Person }>();
const emit = defineEmits<{ (e: 'savePerson', person: PersonForm): void; (e: 'cancel'): void }>();
const { v$, personForm } = usePersonForm(toRaw(props.person));

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

.error-message {
  color: #e57373;
  padding-left: 1rem;
}
</style>
