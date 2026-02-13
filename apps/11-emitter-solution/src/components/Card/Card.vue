<script setup lang="ts">
import { BankOutlined, DeleteOutlined, EditOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons-vue';
import { h } from 'vue';
import type { Person } from '../../model/person';

const { person } = defineProps<{ person: Person }>();
const emits = defineEmits<{ (e: 'onDeletePerson', person: Person): void }>();

function deletePerson(): void {
  emits('onDeletePerson', person);
}
</script>
<template>
  <a-card style="width: 32%" hoverable>
    <template #actions>
      <a-button type="text" :icon="h(EditOutlined)" />
      <a-button type="text" :icon="h(DeleteOutlined)" @click="deletePerson" />
    </template>
    <a-card-meta :title="person.firstname + ' ' + person.lastname" :description="person.entity">
      <template #avatar>
        <a-avatar :src="person.photo" :size="100" />
      </template>
    </a-card-meta>
    <div class="content-card">
      <div class="content-card__info-line">
        <BankOutlined style="font-size: 1.5rem; margin-right: 1rem" />
        <span>{{ person.address?.street }}, {{ person.address?.postalCode }} - {{ person.address?.city }}</span>
      </div>
      <div class="content-card__info-line">
        <MailOutlined style="font-size: 1.5rem; margin-right: 1rem" />
        <span>{{ person.email }}</span>
      </div>
      <div class="content-card__info-line">
        <PhoneOutlined style="font-size: 1.5rem; margin-right: 1rem" />
        <span>{{ person.phone }}</span>
      </div>
    </div>
  </a-card>
</template>
<style scoped lang="css">
.content-card {
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  gap: 0.5rem;
}

.content-card__info-line {
  display: flex;
  align-items: center;
}
</style>
