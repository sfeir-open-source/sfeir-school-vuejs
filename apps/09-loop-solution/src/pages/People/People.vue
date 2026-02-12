<script setup lang="ts">
import { BankOutlined, DeleteOutlined, EditOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons-vue';
import { h, onMounted } from 'vue';
import { usePeople } from '../../composable/people.composable';
const { people, getPeople } = usePeople();

onMounted(async () => {
  await getPeople();
});
</script>

<template>
  <section class="people-container">
    <a-card v-for="person in people" :key="person.id" style="width: 32%" hoverable>
      <template #actions>
        <a-button type="text" :icon="h(EditOutlined)" />
        <a-button type="text" :icon="h(DeleteOutlined)" />
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
  </section>
</template>

<style scoped lang="css">
.people-container {
  padding: 0 1rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

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
