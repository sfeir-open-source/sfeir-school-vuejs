import { defineStore } from 'pinia';
import { computed, reactive, toRef } from 'vue';
import type { Person, PersonForm } from '../model/person';
import { injectToken, PEOPLE_SERVICE_TOKEN } from '../token-injection';

export const usePeopleStore = defineStore('PEOPLE', () => {
  const PEOPLE_SERVICE = injectToken(PEOPLE_SERVICE_TOKEN);

  const state = reactive<{ people: Person[]; search: string }>({ people: [], search: '' });
  const filteredPeople = computed(() =>
    state.people.filter(
      person =>
        person.lastname.toLowerCase().includes(state.search.toLowerCase()) || person.firstname.toLowerCase().includes(state.search.toLowerCase()),
    ),
  );

  const getPeople = async () => {
    const response = await PEOPLE_SERVICE.getPeople();
    state.people = response.data;
  };

  const getRandomPerson = async () => {
    const response = await PEOPLE_SERVICE.getRandomPerson();
    return response.data;
  };

  const deletePerson = async (id: string) => {
    const response = await PEOPLE_SERVICE.deletePerson(id);
    state.people = response.data;
  };

  const createPerson = async (person: PersonForm) => {
    await PEOPLE_SERVICE.postPerson(person).then(getPeople);
  };

  const getPersonDetails = async (id: string) => {
    const response = await PEOPLE_SERVICE.getPersonById(id);
    return response.data;
  };

  const updatePerson = async (person: PersonForm) => {
    await PEOPLE_SERVICE.putPerson(person).then(getPeople);
  };
  return {
    filteredPeople: toRef(filteredPeople),
    search: toRef(state, 'search'),
    getPeople,
    getRandomPerson,
    deletePerson,
    createPerson,
    getPersonDetails,
    updatePerson,
  };
});
