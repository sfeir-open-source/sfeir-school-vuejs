import axios from 'axios';
const BACKEND_URL = process.env.VUE_APP_BACKEND_URL;

export default {
  async fetch() {
    return (await axios.get(BACKEND_URL + '/peoples')).data;
  },
  async fetchRandom() {
    return (await axios.get(BACKEND_URL + '/peoples/random')).data;
  },
};
