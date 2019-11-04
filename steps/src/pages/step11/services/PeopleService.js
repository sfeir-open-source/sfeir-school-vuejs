import axios from 'axios';

const BACKEND_URL = process.env.VUE_APP_BACKEND_URL;

export default {
  fetch() {
    return axios.get(BACKEND_URL)
      .then(response => response.data)
      .catch(error => { throw error; });
  },
  fetchRandom() {
    return axios.get(`${BACKEND_URL}/random`)
      .then(response => response.data)
      .catch(error => { throw error; });
  },
  delete(id) {
    return axios.delete(`${BACKEND_URL}/${id}`)
      .then(response => response.data)
      .catch(error => { throw error; });
  },
};