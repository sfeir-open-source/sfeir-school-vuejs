<template>
  <section class="container">
    <CardPanel v-for="person in people" :key="person.id" :person="person" />
  </section>
</template>
<script type="text/javascript">
import PeopleService from '../services/people.service';
import CardPanel from '../components/CardPanel.vue';
export default {
  components: {
    CardPanel,
  },
  data() {
    return {
      people: [],
    };
  },
  async created() {
    this.people = await PeopleService.fetch();
  },
};
</script>
<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
