<template>
  <div>
    <div class="header row">
      <h1 class="col s12 flow-text">
        You have {{ filteredPeople.length }} contacts
      </h1>
      <SearchBar @search="filterPeople($event)" />
    </div>
    <section class="container">
      <CardPanel
        v-for="person in filteredPeople"
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
import SearchBar from '../components/SearchBar.vue';
export default {
  components: {
    CardPanel,
    Form,
    SearchBar,
  },
  data() {
    return {
      people: [],
      filteredPeople: [],
      showDialog: false,
    };
  },
  async created() {
    this.people = await PeopleService.fetch();
    this.filteredPeople = this.people;
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
    filterPeople(searchFilter) {
      const filter = filter => person =>
        person.firstname.toLowerCase().includes(filter.toLowerCase()) ||
        person.lastname.toLowerCase().includes(filter.toLowerCase());

      this.filteredPeople = this.people.filter(filter(searchFilter));
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
.header {
  text-align: center;
}
.header h1 {
  font-weight: bold;
}
</style>
