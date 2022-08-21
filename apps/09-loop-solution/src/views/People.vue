<template>
  <section class="container">
    <n-card :hoverable="true" v-for="person in people" :key="person.id">
      <template #header>
        <img :src="person.photo" height="100" width="100" alt="photo of the person" />
        <span>{{ person.firstname }} {{ person.lastname }}</span>
      </template>
      <div class="contact-summary">
        <div class="contact-summary__info">
          <n-icon size="25" :component="BankTwotone" color="#e0e0e0"></n-icon>
          <span class="contact-summary__info__label"> {{ person.entity }}</span>
        </div>
        <div class="contact-summary__info">
          <n-icon size="25" :component="CompassTwotone" color="#e0e0e0"></n-icon>
          <span class="contact-summary__info__label"> {{ person.address?.street }} {{ person.address?.city }}</span>
        </div>
        <div class="contact-summary__info">
          <n-icon size="25" :component="TeamOutlined" color="#e0e0e0"></n-icon>
          <span class="contact-summary__info__label"> {{ person.manager }}</span>
        </div>
      </div>
      <div class="contact-summary">
        <div class="contact-summary__info">
          <n-icon size="25" :component="MailTwotone" color="#e0e0e0"></n-icon>
          <span class="contact-summary__info__label"> {{ person.email }}</span>
        </div>
        <div class="contact-summary__info">
          <n-icon size="25" :component="MobileTwotone" color="#e0e0e0"></n-icon>
          <span class="contact-summary__info__label"> {{ person.phone }}</span>
        </div>
      </div>
      <template #action>
        <n-button quaternary type="primary" shape>
          <n-icon size="25" :component="EditTwotone"></n-icon>
        </n-button>
        <n-button quaternary type="error">
          <n-icon size="25" :component="DeleteTwotone"></n-icon>
        </n-button>
      </template>
    </n-card>
  </section>
</template>
<script async setup lang="ts">
import { usePeople } from '@/composable/people.composable';
import { BankTwotone, CompassTwotone, DeleteTwotone, EditTwotone, MailTwotone, MobileTwotone, TeamOutlined } from '@vicons/antd';

const { people, getPeople } = usePeople();

try {
  await getPeople();
} catch (error) {
  throw new Error('Oopps something wrong happen');
}
</script>

<style lang="css" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  padding: 0 1rem;
  box-sizing: border-box;
}

.container .n-card {
  width: 30%;
}

@media screen and (min-width: 24rem) and (max-width: 50rem) {
  .container .n-card {
    width: 100%;
  }
}

@media screen and (min-width: 51rem) and (max-width: 63rem) {
  .container .n-card {
    width: 60%;
  }
}

@media screen and (min-width: 64rem) and (max-width: 86rem) {
  .container .n-card {
    width: 40%;
  }
}

.container .n-card .n-card-header__main {
  display: flex;
  align-items: center;
}

.container .n-card .n-card__action {
  display: flex;
  justify-content: flex-end;
}

.container .n-card .n-card-header__main img {
  border-radius: 50%;
  margin-right: 2rem;
}

.contact-summary {
  display: flex;
}

.contact-summary__info {
  display: flex;
  align-items: center;
  margin: 0 1rem 0.5rem 0rem;
}

.contact-summary__info__label {
  font-size: 0.7rem;
  padding-left: 0.5rem;
  color: #e0e0e0;
}
</style>
