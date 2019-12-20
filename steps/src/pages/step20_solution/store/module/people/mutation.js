export default {
  setPeople(state, people) {
    state.people = people;
  },
  addPerson(state, { person, callback}) {
    state.people.push(person);
    callback();
  },
  setSearchValue(state, value) {
    state.search = value.toLowerCase();
  }
};