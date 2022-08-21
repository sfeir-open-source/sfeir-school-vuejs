import type { Person } from '@/models/person.model';
import { PEOPLE } from '@/_static/people';
import { ref, type Ref } from 'vue';

const people: Ref<Array<Person>> = ref(PEOPLE);

export function usePeople() {
  return {
    people
  };
}
