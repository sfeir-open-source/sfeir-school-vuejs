import useVuelidate from '@vuelidate/core';
import { helpers, minLength, required } from '@vuelidate/validators';
import { reactive, toRef, watch } from 'vue';
import { DEFAULT_PERSON, type Person, type PersonForm } from '../model/person';

export function sfeirEmailValidator(value: string) {
  const sfeirEmailRegex = /^\w+.\w@sfeir.com$/;
  return sfeirEmailRegex.test(value);
}

export function usePeopleForm(person: () => Person) {
  const personForm = reactive<PersonForm>({ ...DEFAULT_PERSON });
  const rules = {
    firstname: { required, min: minLength(2) },
    lastname: { required, min: minLength(2) },
    email: { required, sfeirEmailValidator: helpers.withMessage('The email must be a valid SFEIR email', sfeirEmailValidator) },
    phone: { required, min: minLength(10) },
  };
  const v$ = useVuelidate(rules, personForm);
  watch(person, newPerson => {
    Object.assign(personForm, newPerson);
    if (personForm.id) {
      v$.value.$touch();
    }
  });

  return {
    personForm: toRef(personForm),
    v$: toRef(v$),
  };
}
