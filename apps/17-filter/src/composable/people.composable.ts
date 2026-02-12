import { ref, toRef } from 'vue';
import type { Person, PersonForm } from '../model/person';
import { PeopleService } from '../services/people';

const people = ref<Person[]>([]);
const PEOPLE_SERVICE = new PeopleService();

export function usePeople() {
  const getPeople = async () => {
    const response = await PEOPLE_SERVICE.getPeople();
    people.value = response.data;
  };
  const getRandomPerson = async () => {
    const response = await PEOPLE_SERVICE.getRandomPerson();
    return response.data;
  };
  const deletePerson = async (id: string) => {
    const response = await PEOPLE_SERVICE.deletePerson(id);
    people.value = response.data;
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
    getPeople,
    getRandomPerson,
    deletePerson,
    createPerson,
    getPersonDetails,
    updatePerson,
    people: toRef(people),
  };
}
