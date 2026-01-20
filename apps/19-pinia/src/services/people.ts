import axios from 'axios';
import type { Person, PersonForm } from '../model/person';

export class PeopleService {
  private readonly BASE_URL = import.meta.env.VITE_BASE_API;

  async getPeople() {
    return await axios.get<Person[]>(`${this.BASE_URL}/peoples`);
  }

  async getRandomPerson() {
    return await axios.get<Person>(`${this.BASE_URL}/peoples/random`);
  }

  async getPersonById(id: string) {
    return await axios.get<Person>(`${this.BASE_URL}/peoples/${id}`);
  }

  async deletePerson(id: string) {
    return await axios.delete(`${this.BASE_URL}/peoples/${id}`);
  }

  async postPerson(person: PersonForm) {
    return await axios.post(`${this.BASE_URL}/peoples`, person);
  }

  async putPerson(person: PersonForm) {
    return await axios.put(`${this.BASE_URL}/peoples/${person.id}`, person);
  }
}
