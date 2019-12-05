<template>
  <div>
    <div class="header row">
      <h1 class="col s12 flow-text">You have {{people.length}} contacts</h1>
      <search-bar @search="setSearchValue"></search-bar>
    </div>
    <section class="container">
      <sfeir-card v-for="person in people" :person="person" :key="person.id" @delete="deletePerson"></sfeir-card>
    </section>
    <md-dialog ref="dialog">
      <md-dialog-title>Contact informations</md-dialog-title>
      <md-dialog-content>
        <sfeir-form @save="addPerson({person: $event, callback: hideDialog})" @cancel="hideDialog"></sfeir-form>
      </md-dialog-content>
    </md-dialog>

    <md-button class="md-fab md-fab-bottom-right md-primary" @click="showDialog">
      <md-icon>add</md-icon>
    </md-button>
  </div>
</template>

<script>
import CardPanel from "../components/CardPanel.vue";
import Form from "../components/Form.vue";
import SearchBar from "../components/SearchBar.vue";
import { mapActions, mapMutations, mapGetters } from "vuex";
export default {
  components: {
    "sfeir-card": CardPanel,
    "sfeir-form": Form,
    "search-bar": SearchBar
  },
  beforeRouteEnter(route, redirect, next) {
    next(vm => vm.$store.dispatch("people/fetchPeople"));
  },
  computed: {
    ...mapGetters("people", {
      people: "filterPeople"
    })
  },
  methods: {
    ...mapActions("people", ["deletePerson"]),
    ...mapMutations("people", ["setSearchValue", "addPerson"]),
    showDialog() {
      this.$refs["dialog"].open();
      this.showModal = true;
    },
    hideDialog() {
      this.$refs["dialog"].close();
      this.showModal = false;
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.header {
  text-align: center;
}

.header h1 {
  font-weight: bold;
}
</style>