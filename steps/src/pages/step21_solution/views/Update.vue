<template>
  <section class="container">
    <sfeir-form v-bind:person="person" v-on:save="updatePerson" v-on:cancel="goBack"></sfeir-form>
  </section>
</template>
<script>
import peopleService from "../services/PeopleService.js";
import Form from "../components/Form.vue";

export default {
  name: "edit",
  data() {
    return {
      person: {}
    };
  },
  components: {
    "sfeir-form": Form
  },
  beforeRouteEnter(route, redirect, next) {
    peopleService
      .fetchOne(route.params.id)
      .then(person =>
        next(vm => {
          vm.person = person;
        })
      )
      .catch(console.error);
  },
  methods: {
    updatePerson: function(p) {
      peopleService.update(p).then(() => {
        this.goBack();
      });
    },
    goBack: function() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped></style>