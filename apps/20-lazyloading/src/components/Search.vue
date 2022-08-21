<template>
  <n-input placeholder="Search People" round size="large" @input="setSearch" v-model:value="search" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const props = defineProps<{ modelValue: string }>();
const emit = defineEmits<{ (e: 'update:modelValue', search: string): void }>();
const search = ref<string>(props.modelValue);

function setSearch(): void {
  emit('update:modelValue', search.value);
}
</script>

<style lang="scss" scoped></style>
