<template>
  <section class="container">
    <section>
      <CardPanel :person="person" />
      <md-button
        class="md-fab md-fab-bottom-right md-primary"
        @click="randomPeople()"
      >
        <md-icon>cached</md-icon>
      </md-button>
    </section>
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
      person: {},
    };
  },
  async created() {
    const [firstPerson] = await PeopleService.fetch();
    this.person = firstPerson;
  },
  methods: {
    async randomPeople() {
      this.person = await PeopleService.fetchRandom();
    },
  },
};
</script>
<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
