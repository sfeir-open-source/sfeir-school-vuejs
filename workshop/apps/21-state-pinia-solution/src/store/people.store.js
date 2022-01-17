import { defineStore } from 'pinia';
import peopleService from '../services/people.service';

export default defineStore('people', {
  state: () => ({
    search: '',
    people: [],
  }),
  getters: {
    filteredPeople(state) {
      const filter = searchFilter => person =>
        person.firstname.toLowerCase().includes(searchFilter.toLowerCase()) ||
        person.lastname.toLowerCase().includes(searchFilter.toLowerCase());
      return state.people.filter(filter(state.search));
    },
  },
  actions: {
    getPeople() {
      peopleService.fetch().then(people => (this.people = people));
    },
    setSearch(search) {
      this.search = search;
    },
    deletePeople(idPerson) {
      peopleService.delete(idPerson).then(people => (this.people = people));
    },
    addPerson(person) {
      return peopleService
        .create(person)
        .then(peopleService.fetch)
        .then(people => (this.people = people));
    },
  },
});
