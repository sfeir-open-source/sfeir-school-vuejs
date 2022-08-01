import type { Person } from '@/models/person.model';
import axios from 'axios';
import { ref, type Ref } from 'vue';

const people: Ref<Array<Person>> = ref([]);

export function usePeople() {
  const getPeople: () => Promise<void> = async () => {
    people.value = (await axios.get<Array<Person>>(`${import.meta.env.VITE_BASE_API}/peoples`)).data;
  };

  const getRandomPeople: () => Promise<Person> = async () => {
    const { data } = await axios.get<Person>(`${import.meta.env.VITE_BASE_API}/peoples/random`);
    return data;
  };

  const deletePerson: (id: string) => Promise<void> = async (idPerson: string) => {
    const { data } = await axios.delete<Array<Person>>(`${import.meta.env.VITE_BASE_API}/peoples/${idPerson}`);
    people.value = data;
  };

  const getPersonById: (id: string) => Promise<Person> = async (idPerson: string) => {
    const { data } = await axios.get<Person>(`${import.meta.env.VITE_BASE_API}/peoples/${idPerson} `);
    return data;
  };

  return {
    people,
    getPeople,
    getRandomPeople,
    deletePerson,
    getPersonById
  };
}
