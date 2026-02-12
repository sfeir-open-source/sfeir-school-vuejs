import { nextTick, ref } from 'vue';
import type { Person } from '../model/person';
import { usePeopleForm } from './people.form.composable';

const PERSON: Person = {
  id: 'person-1',
  photo: 'https://example.test/photo-1.png',
  firstname: 'Leanne',
  lastname: 'Woodard',
  entity: 'BIOSPAN',
  entryDate: '27/10/2015',
  birthDate: '02/01/1974',
  gender: '',
  email: 'leanne.woodard@biospan.test',
  skills: ['vue', 'testing'],
  geo: {
    lat: 48.8541,
    lng: 2.2486,
  },
  phone: '0784112248',
  address: {
    street: 'Narrows Avenue',
    postalCode: 70534,
    city: 'Boling',
  },
  links: {
    twitter: 'https://twitter.com/leanne',
    slack: 'https://slack.com/leanne',
    github: 'https://github.com/leanne',
    linkedin: 'https://www.linkedin.com/in/leanne',
  },
  isManager: false,
  manager: 'Erika',
  managerId: 'person-manager',
};

describe('usePeopleForm', () => {
  it('provides default form values', () => {
    const personRef = ref<Person>({} as Person);
    const { personForm } = usePeopleForm(() => personRef.value);

    expect(personForm.value).toEqual({
      id: '',
      photo: 'https://randomuser.me/api/portraits/lego/6.jpg',
      email: '',
      firstname: '',
      lastname: '',
      phone: '',
    });
  });

  it('syncs form fields when person changes', async () => {
    const personRef = ref<Person>({} as Person);
    const { personForm } = usePeopleForm(() => personRef.value);

    personRef.value = PERSON;
    await nextTick();

    expect(personForm.value).toMatchObject({
      id: PERSON.id,
      photo: PERSON.photo,
      email: PERSON.email,
      firstname: PERSON.firstname,
      lastname: PERSON.lastname,
      phone: PERSON.phone,
    });
  });

  it('updates synced values when a new person is provided', async () => {
    const personRef = ref<Person>({} as Person);
    const { personForm } = usePeopleForm(() => personRef.value);

    personRef.value = PERSON;
    await nextTick();
    personRef.value = { ...PERSON, id: 'person-2', firstname: 'Ada', lastname: 'Lovelace', email: 'ada@example.test' };
    await nextTick();

    expect(personForm.value.id).toBe('person-2');
    expect(personForm.value.firstname).toBe('Ada');
    expect(personForm.value.lastname).toBe('Lovelace');
    expect(personForm.value.email).toBe('ada@example.test');
  });
});
