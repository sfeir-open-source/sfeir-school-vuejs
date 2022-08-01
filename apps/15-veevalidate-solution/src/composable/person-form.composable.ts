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
      max: 'The {field} must be less than 0:{max} characters maximum',
      regex: 'The {field} must have ten numbers',
      sfeirEmail: 'The {field} is not a valid sfeir email'
    }
  })
});

export function usePersonForm(person: Person = { photo: 'https://randomuser.me/api/portraits/lego/6.jpg' } as Person) {
  const { errors: personFormErrors, handleSubmit } = useForm<PersonForm>({ initialValues: person });

  const {
    value: lastname,
    errorMessage: lastnameError,
    meta: lastnameMeta,
    handleBlur: lastnameHandleBlur
  } = useField<string>('lastname', { required: true, min: 2 }, { validateOnMount: true });

  const {
    value: firstname,
    errorMessage: firstnameError,
    meta: firstnameMeta,
    handleBlur: firstnameHandleBlur
  } = useField<string>(
    'firstname',
    { required: true, min: 2 },
    {
      validateOnMount: true
    }
  );

  const {
    value: email,
    errorMessage: emailError,
    meta: emailMeta,
    handleBlur: emailHandleBlur
  } = useField<string>('email', { required: true, sfeirEmail: true }, { validateOnMount: true });

  const {
    value: phone,
    errorMessage: phoneError,
    meta: phoneMeta,
    handleBlur: phoneHandleBlur
  } = useField<string>('phone', { required: true, regex: /^[0-9]{10}/ }, { validateOnMount: true });

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
    lastnameError,
    lastnameMeta,
    lastnameHandleBlur,
    firstname,
    firstnameError,
    firstnameMeta,
    firstnameHandleBlur,
    email,
    emailError,
    emailMeta,
    emailHandleBlur,
    phone,
    phoneError,
    phoneMeta,
    phoneHandleBlur,
    photo,
    handleSubmit,
    savePerson,
    updatePersonById
  };
}
