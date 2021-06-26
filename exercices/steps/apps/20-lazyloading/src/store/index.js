import Vue from 'vue';
import Vuex from 'vuex';
import people from './person';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';
export default new Vuex.Store({
  modules: {
    people,
  },
  strict: debug,
});
