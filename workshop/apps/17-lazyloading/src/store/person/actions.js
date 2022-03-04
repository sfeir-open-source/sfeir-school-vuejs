import PeopleService from '../../services/people.service';

export default {
  getPeople(context) {
    return PeopleService.fetch().then(people =>
      context.commit('setPeople', people)
    );
  },
  deletePeople(context, idPerson) {
    PeopleService.delete(idPerson).then(() => context.dispatch('getPeople'));
  },
  addPeople(context, person) {
    return PeopleService.create(person).then(() =>
      context.dispatch('getPeople')
    );
  },
};
