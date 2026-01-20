import { reactive, toRef, watch } from 'vue';
import { DEFAULT_PERSON, type Person, type PersonForm } from '../model/person';

export function usePeopleForm(person: () => Person) {
  const personForm = reactive<PersonForm>({ ...DEFAULT_PERSON });

  watch(person, (newPerson: Person) => Object.assign(personForm, newPerson));

  return {
    personForm: toRef(personForm),
  };
}
