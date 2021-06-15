export default {
  filterPeople(state) {
    const filter = searchFilter => person =>
      person.firstname.toLowerCase().includes(searchFilter.toLowerCase()) ||
      person.lastname.toLowerCase().includes(searchFilter.toLowerCase());

    return state.people.filter(filter(state.search));
  },
};
