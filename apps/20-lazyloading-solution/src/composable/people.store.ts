import type { Person } from '@/models/person.model';
import axios from 'axios';
import { defineStore } from 'pinia';
import { computed, reactive, type ComputedRef } from 'vue';

const peopleState = reactive<{ people: Array<Person>; search: string }>({ people: [], search: '' });

export const usePeopleStore = defineStore('people', () => {
  const people: ComputedRef<Array<Person>> = computed(() => {
    return peopleState.people.filter(person => {
      return person.lastname.toLowerCase().includes(peopleState.search) || person.firstname.toLowerCase().includes(peopleState.search);
    });
  });

  const getPeople: () => Promise<void> = async () => {
    peopleState.people = (await axios.get<Array<Person>>(`${import.meta.env.VITE_BASE_API}/peoples`)).data;
  };

  const getRandomPeople: () => Promise<Person> = async () => {
    const { data } = await axios.get<Person>(`${import.meta.env.VITE_BASE_API}/peoples/random`);
    return data;
  };

  const deletePerson: (id: string) => Promise<void> = async (idPerson: string) => {
    peopleState.people = (await axios.delete<Array<Person>>(`${import.meta.env.VITE_BASE_API}/peoples/${idPerson}`)).data;
  };

  const getPersonById: (id: string) => Promise<Person> = async (idPerson: string) => {
    const { data } = await axios.get<Person>(`${import.meta.env.VITE_BASE_API}/peoples/${idPerson} `);
    return data;
  };

  return {
    people,
    peopleState,
    getPeople,
    getRandomPeople,
    deletePerson,
    getPersonById
  };
});
