<script setup lang="ts">
import { BankOutlined, DeleteOutlined, EditOutlined, MailOutlined, PhoneOutlined, TeamOutlined } from '@ant-design/icons-vue';
import { computed, h } from 'vue';
import { useRouter } from 'vue-router';
import type { Person } from '../../model/person';

const router = useRouter();

const { person } = defineProps<{ person: Person }>();
const emits = defineEmits<{ (e: 'onDeletePerson', person: Person): void }>();
const manager = computed(() => person.manager || 'N/A');

function deletePerson(): void {
  emits('onDeletePerson', person);
}

function goToDetails(id: string) {
  router.push({ name: 'details', params: { id } });
}
</script>
<template>
  <a-card style="width: 32%" hoverable>
    <template #actions>
      <a-button type="text" :icon="h(EditOutlined)" @click="goToDetails(person.id)" />
      <a-button type="text" :icon="h(DeleteOutlined)" @click="deletePerson" />
    </template>
    <a-card-meta :title="person.firstname + ' ' + person.lastname" :description="person.entity">
      <template #avatar>
        <a-avatar :src="person.photo" :size="100" />
      </template>
    </a-card-meta>
    <div class="content-card">
      <div v-if="person.address" class="content-card__info-line">
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
      <div class="content-card__info-line">
        <TeamOutlined style="font-size: 1.5rem; margin-right: 1rem" />
        <span>{{ manager }}</span>
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
