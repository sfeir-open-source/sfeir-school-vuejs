import type { DirectiveBinding } from 'vue';
import type { Person } from '../model/person';
import { vManager } from './manager';

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

describe('vManager directive', () => {
  it('applies italic style for a non-manager', () => {
    const el = document.createElement('span');
    const binding = { value: PERSON } as DirectiveBinding<Person>;

    vManager.mounted(el, binding);

    expect(el.style.fontStyle).toBe('italic');
  });

  it('does not apply italic style for a manager', () => {
    const el = document.createElement('span');
    const binding = { value: { ...PERSON, isManager: true } } as DirectiveBinding<Person>;

    vManager.mounted(el, binding);

    expect(el.style.fontStyle).toBe('');
  });
});
