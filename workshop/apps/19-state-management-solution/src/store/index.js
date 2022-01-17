import Vue from 'vue';
import Vuex from 'vuex';
import PeopleService from '../services/people.service';
import * as types from './mutation-types';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

/**
 * Initial state of the application
 */
const state = {
  people: [],
  search: '',
};

/**
 * TODO:
 * Here goes all the getters of your store
 */
const getters = {
  filterPeople(state) {
    const filter = searchFilter => person =>
      person.firstname.toLowerCase().includes(searchFilter.toLowerCase()) ||
      person.lastname.toLowerCase().includes(searchFilter.toLowerCase());

    return state.people.filter(filter(state.search));
  },
};

/**
 * TODO:
 * ere goes all the action of your store
 *  keep in mind that all the action must be asynchronous
 */
const actions = {
  getPeople(context) {
    return PeopleService.fetch().then(people =>
      context.commit(types.FETCH_ALL, people)
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

/**
 * TODO:
 * Here goes all  the mutation fo your store
 */
const mutations = {
  [types.FETCH_ALL](state, people) {
    state.people = people;
  },
  [types.FILTER](state, search = '') {
    state.search = search;
  },
};

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  strict: debug,
});
