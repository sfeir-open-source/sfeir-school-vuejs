<template>
  <h1>Hi form component works</h1>
</template>

<script lang="ts" setup>
import type { PersonForm } from '@/models/person.model';

const emit = defineEmits<{ (e: 'savePerson', person: PersonForm): void; (e: 'cancel'): void }>();

function save(): void {
  console.log('emit savePerson with the personForm');
}

function cancel(): void {
  console.log('emit cancel');
}
</script>

<style scoped lang="css"></style>
