import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './mutations-types';
import PeopleService from '../services/PeopleService';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

// initial state
const state = {
  people: [],
  search: ''
}

// getters
const getters = {
    // ...
};

// actions
const actions = {
    // ...
};

// mutations
const mutations = {
  [types.FETCH_ALL](state, people) {
    // ...
  },
  [types.FILTER](state, search = '') {
    // ...
  }
};

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  strict: debug
});