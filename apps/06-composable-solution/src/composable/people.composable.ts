import type { Person } from '@/models/person.model';
import { PEOPLE } from '@/_static/people';
import { ref, type Ref } from 'vue';

const people: Ref<Array<Person>> = ref([]);

export function usePeople() {
  const getPeople: () => void = () => {
    people.value = PEOPLE;
  };

  const getRandomPeople: () => Person = () => {
    return people.value[Math.floor(Math.random() * people.value.length)];
  };

  return {
    people,
    getPeople,
    getRandomPeople
  };
}
