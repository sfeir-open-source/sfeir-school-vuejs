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
import { mapGetters } from 'vuex';

export default {
  components: {
    CardPanel,
    Form,
    SearchBar,
  },
  data() {
    return {
      showDialog: false,
    };
  },
  async created() {
    this.$store.dispatch('getPeople');
  },
  computed: {
    ...mapGetters({
      filteredPeople: 'filterPeople',
    }),
  },
  methods: {
    deletePerson(id) {
      this.$store.dispatch('deletePeople', id);
    },
    async addPerson(person) {
      try {
        await this.$store.dispatch('addPeople', person);
        this.showDialog = false;
      } catch (error) {
        console.error(error);
      }
    },
    filterPeople(searchFilter) {
      this.$store.commit('people/FILTER', searchFilter);
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
