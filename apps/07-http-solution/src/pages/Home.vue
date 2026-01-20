<script setup lang="ts">
import { BankOutlined, DeleteOutlined, EditOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons-vue';
import { h, onMounted, ref } from 'vue';
import { usePeople } from '../composable/people.composable';
import type { Person } from '../model/person';

const { people, getRandomPerson, getPeople } = usePeople();
const person = ref<Person>({} as Person);

onMounted(async () => {
  await getPeople();
  person.value = people.value[0];
});

async function randomPerson() {
  person.value = await getRandomPerson();
}
</script>
<template>
  <div class="container-card">
    <a-card style="width: 33%" hoverable>
      <template #actions>
        <a-button type="text" :icon="h(EditOutlined)" />
        <a-button type="text" :icon="h(DeleteOutlined)" @click="randomPerson" />
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
  </div>
</template>

<style scoped lang="css">
.container-card {
  display: flex;
  justify-content: center;
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
