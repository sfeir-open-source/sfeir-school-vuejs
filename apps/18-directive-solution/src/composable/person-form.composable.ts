import useVuelidate from '@vuelidate/core';
import { helpers, minLength, required } from '@vuelidate/validators';
import axios from 'axios';
import { reactive } from 'vue';
import type { Person, PersonForm } from '../models/person.model';

export function usePersonForm(person: Person = { photo: 'https://randomuser.me/api/portraits/lego/6.jpg' } as Person) {
  const personForm = reactive<PersonForm>({
    id: person.id,
    photo: person.photo,
    email: person.email,
    firstname: person.firstname,
    lastname: person.lastname,
    phone: person.phone
  });

  const rulesValidationPersonForm = {
    email: { required, sfeirEmail: helpers.withMessage('Email must be a sfeir email', helpers.regex(/^\w+.\w@sfeir.com$/)) },
    firstname: { required, minLength: minLength(2) },
    lastname: { required, minLength: minLength(2) },
    phone: { required, phone: helpers.withMessage('Phone must be 10 digits', helpers.regex(/^[0-9]{10}/)) },
    photo: {}
  };

  const savePerson: (person: PersonForm) => Promise<void> = async (person: PersonForm) => {
    await axios.post<Person>(`${import.meta.env.VITE_BASE_API}/peoples`, person);
  };

  const updatePersonById: (person: PersonForm) => Promise<void> = async (person: PersonForm) => {
    await axios.put<Person>(`${import.meta.env.VITE_BASE_API}/peoples/${person.id}`, person);
  };

  return {
    personForm,
    v$: useVuelidate(rulesValidationPersonForm, personForm),
    savePerson,
    updatePersonById
  };
}
