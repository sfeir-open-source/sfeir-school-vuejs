import actions from './actions';
import getters from './getter';
import mutations from './mutations';
import state from './state';

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
