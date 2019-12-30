import PeopleService from '../../../services/PeopleService';
export default {
  fetchPeople({ commit }) {
    PeopleService.fetch()
      .then(people => commit('setPeople', people))
      .catch(console.error);
  },
  deletePerson({ commit }, person) {
    PeopleService.delete(person.id)
      .then(people => commit('setPeople', people))
      .catch(console.error);
  },
  addPerson({ commit }, { person, callback }) {
    PeopleService.create(person)
      .then(person => commit('addPerson', { person, callback }))
      .catch(console.error);
  }
}