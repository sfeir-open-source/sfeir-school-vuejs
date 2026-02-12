import { ref, toRef } from 'vue';
import type { Person } from '../model/person';
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

  return {
    getPeople,
    getRandomPerson,
    people: toRef(people),
  };
}
