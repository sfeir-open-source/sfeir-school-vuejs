import Vue from 'vue';
import Vuex from 'vuex';
import people from './module/people';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    people,
  } 
})