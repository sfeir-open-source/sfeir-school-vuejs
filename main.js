actions: {
  fetchPeople({ commit, getters, state, dispatch}, payload) {
    UserService.fetch()
      .then(data => commit('setPeoples', data))
      .catch(error => commit('setError', error))
      .finally(() => commit('setLoader', false));
  }
}

methods: {
  fetchPeople(paylaod) {
    this.$store.dispatch('fetchPeople');
  }
}