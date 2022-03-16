<template>
  <section class="container">
    <card-panel v-for="person in people" :key="person.id" :person="person"></card-panel>
  </section>
</template>

<script lang="ts">

import Peoples from '../_static/people';
import CardPanel from '../components/CardPanel.vue';
import {defineComponent} from 'vue';

export default defineComponent({
  components: {CardPanel},
  data() {
    return {
      people: [],
    };
  },
  created() {
    this.people = Peoples;
  },
});
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
