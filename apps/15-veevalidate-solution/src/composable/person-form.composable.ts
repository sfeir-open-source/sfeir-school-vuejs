import { localize } from '@vee-validate/i18n';
import { max, min, regex, required } from '@vee-validate/rules';
import axios from 'axios';
import { configure, defineRule, useField, useForm } from 'vee-validate';
import { computed } from 'vue';
import type { Person, PersonForm } from '../models/person.model';

defineRule('required', required);
defineRule('min', min);
defineRule('max', max);
defineRule('regex', regex);

configure({
  validateOnBlur: true,
  generateMessage: localize('en', {
    messages: {
      required: 'The {field} is required',
      min: 'The {field} must be 0:{min} characters minimum',
      max: 'The {field} must be less than 0:{max} characters maximum',
      regex: 'The {field} must have ten numbers'
    }
  })
});

export function usePersonForm(person: Person = { photo: 'https://randomuser.me/api/portraits/lego/6.jpg' } as Person) {
  const { errors: personFormErrors, handleSubmit } = useForm<PersonForm>({ initialValues: person });
  const { value: lastname, errorMessage: firstErrorLastname } = useField<string>(
    'lastname',
    { required: true, min: 2 },
    { validateOnMount: true }
  );
  const { value: firstname, errorMessage: firstErrorFirstname } = useField<string>(
    'firstname',
    { required: true, min: 2 },
    {
      validateOnMount: true
    }
  );
  const { value: email, errorMessage: firstErrorEmail } = useField<string>('email', { required: true }, { validateOnMount: true });
  const { value: phone, errorMessage: firstErrorPhone } = useField<string>(
    'phone',
    { required: true, regex: /^[0-9]{10}/ },
    { validateOnMount: true }
  );
  const { value: photo } = useField<string>('photo');
  const personFormValidity = computed(() => Object.keys(personFormErrors.value).length > 0);

  const savePerson: (person: PersonForm) => Promise<void> = async (person: PersonForm) => {
    await axios.post<Person>(`${import.meta.env.VITE_BASE_API}/peoples`, person);
  };

  const updatePersonById: (person: PersonForm) => Promise<void> = async (person: PersonForm) => {
    await axios.put<Person>(`${import.meta.env.VITE_BASE_API}/peoples/${person.id}`, person);
  };

  return {
    personFormValidity,
    lastname,
    firstErrorLastname,
    firstname,
    firstErrorFirstname,
    email,
    firstErrorEmail,
    phone,
    firstErrorPhone,
    photo,
    handleSubmit,
    savePerson,
    updatePersonById
  };
}
