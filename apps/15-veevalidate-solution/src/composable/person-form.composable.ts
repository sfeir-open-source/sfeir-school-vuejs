import { localize } from '@vee-validate/i18n';
import { max, min, regex, required } from '@vee-validate/rules';
import axios from 'axios';
import { configure, defineRule } from 'vee-validate';
import { reactive } from 'vue';
import type { Person, PersonForm } from '../models/person.model';

defineRule('required', required);
defineRule('min', min);
defineRule('max', max);
defineRule('regex', regex);
defineRule('sfeirEmail', (value: string) => {
  const sfeirEmailRegex = /^\w+.\w@sfeir.com$/;
  return sfeirEmailRegex.test(value);
});

configure({
  validateOnBlur: true,
  generateMessage: localize('en', {
    messages: {
      required: 'The {field} is required',
      min: 'The {field} must be 0:{min} characters minimum',
      max: 'The {field} must be less than 0:{max} characters maximum'
    }
  })
});

export function usePersonForm(person: Person = { photo: 'https://randomuser.me/api/portraits/lego/6.jpg' } as Person) {
  const personForm = reactive<PersonForm>({
    id: person.id,
    photo: person.photo,
    email: person.email,
    firstname: person.firstname,
    lastname: person.lastname,
    phone: person.phone
  });

  const savePerson: (person: PersonForm) => Promise<void> = async (person: PersonForm) => {
    await axios.post<Person>(`${import.meta.env.VITE_BASE_API}/peoples`, person);
  };

  const updatePersonById: (person: PersonForm) => Promise<void> = async (person: PersonForm) => {
    await axios.put<Person>(`${import.meta.env.VITE_BASE_API}/peoples/${person.id}`, person);
  };

  return {
    personForm,
    savePerson,
    updatePersonById
  };
}
