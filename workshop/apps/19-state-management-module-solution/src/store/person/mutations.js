export default {
  setPeople(state, people) {
    state.people = people;
  },
  setSearch(state, search = '') {
    state.search = search;
  },
};
