<template>
  <div>
    <div class="header row">
      <h1 class="col s12 flow-text">
        You have {{ filteredPeople.length }} contacts
      </h1>
      <SearchBar @search="setSearch" />
    </div>
    <section class="container">
      <CardPanel
        v-for="person in filteredPeople"
        :key="person.id"
        :person="person"
        @person-delete="deletePeople($event)"
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
import CardPanel from '../components/CardPanel.vue';
import Form from '../components/Form.vue';
import SearchBar from '../components/SearchBar.vue';
import usePeopleStore from '../store/people.store';
import { mapActions, mapState } from 'pinia';
export default {
  components: {
    CardPanel,
    Form,
    SearchBar,
  },
  data() {
    return {
      peopleStore: usePeopleStore(),
      people: [],
      showDialog: false,
    };
  },
  async created() {
    this.peopleStore.getPeople();
  },
  computed: {
    ...mapState(usePeopleStore, ['filteredPeople']),
  },
  methods: {
    ...mapActions(usePeopleStore, ['setSearch', 'deletePeople']),
    async addPerson(person) {
      try {
        await this.peopleStore.addPerson(person);
        this.showDialog = false;
      } catch {}
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
