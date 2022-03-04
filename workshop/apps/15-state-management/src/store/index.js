import { createStore } from 'vuex';
import * as types from './mutation-types';

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
const getters = {};

/**
 * TODO:
 * ere goes all the action of your store
 *  keep in mind that all the action must be asynchronous
 */
const actions = {};

/**
 * TODO:
 * Here goes all  the mutation fo your store
 */
const mutations = {
  [types.FETCH_ALL](state, people) {},
  [types.FILTER](state, search = '') {},
};

export default createStore({
  state,
  actions,
  getters,
  mutations,
  strict: debug,
});
