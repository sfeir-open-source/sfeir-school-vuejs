import { createStore } from 'vuex';
import people from './person';

const debug = process.env.NODE_ENV !== 'production';

export default createStore({
  modules: {
    people
  },
  strict: debug
});
