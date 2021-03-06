import axios from 'axios';
const BACKEND_URL = process.env.VUE_APP_BACKEND_URL;

export default {
  async fetch() {
    return (await axios.get(BACKEND_URL + '/peoples')).data;
  },
  async fetchRandom() {
    return (await axios.get(BACKEND_URL + '/peoples/random')).data;
  },
  async delete(idPerson) {
    return (await axios.delete(`${BACKEND_URL}/peoples/${idPerson}`)).data;
  },
  async create(person) {
    return (await axios.post(BACKEND_URL + '/peoples', person)).data;
  },
};
