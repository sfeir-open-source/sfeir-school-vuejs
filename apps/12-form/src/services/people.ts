import axios from 'axios';
import type { Person } from '../model/person';

export class PeopleService {
  private readonly BASE_URL = import.meta.env.VITE_BASE_API;

  async getPeople() {
    return await axios.get<Person[]>(`${this.BASE_URL}/peoples`);
  }

  async getRandomPerson() {
    return await axios.get<Person>(`${this.BASE_URL}/peoples/random`);
  }

  async deletePerson(id: string) {
    return await axios.delete(`${this.BASE_URL}/peoples/${id}`);
  }
}
