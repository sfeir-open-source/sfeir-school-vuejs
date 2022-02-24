<template>
  <div>
    <section class="container">
      <CardPanel
        v-for="person in people"
        :key="person.id"
        :person="person"
        @person-delete="deletePerson($event)"
      />
    </section>
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>Contact informations</md-dialog-title>
      <md-dialog-content>
        <Form @cancel="showDialog = false" @save="addPerson($event)" />
      </md-dialog-content>
    </md-dialog>
    <md-button
      class="md-fab md-fab-bottom-right md-primary"
      @click="showDialog = true"
    >
      <md-icon>add</md-icon>
    </md-button>
  </div>
</template>
<script type="text/javascript">
import PeopleService from '../services/people.service';
import CardPanel from '../components/CardPanel.vue';
import Form from '../components/Form.vue';
export default {
  components: {
    CardPanel,
    Form,
  },
  data() {
    return {
      people: [],
      showDialog: false,
    };
  },
  async created() {
    this.people = await PeopleService.fetch();
  },
  methods: {
    async deletePerson(id) {
      this.people = await PeopleService.delete(id);
    },
    async addPerson(person) {
      this.showDialog = false;
      this.people = await PeopleService.create(person).then(
        PeopleService.fetch
      );
    },
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
