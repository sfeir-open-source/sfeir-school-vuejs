import { ref, toRef } from 'vue';
import { PEOPLE } from '../data/people';
import type { Person } from '../model/person';

const people = ref<Person[]>([]);
export function usePeople() {
  const getPeople = () => (people.value = PEOPLE);
  const getRandomPerson = () => people.value[Math.floor(Math.random() * people.value.length)];

  return {
    getPeople,
    getRandomPerson,
    people: toRef(people),
  };
}
