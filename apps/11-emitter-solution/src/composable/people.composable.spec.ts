import { vi } from 'vitest';
import type { Person } from '../model/person';
import { usePeople } from './people.composable';

const PEOPLE: Person[] = [
  {
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
  },
  {
    id: 'person-2',
    photo: 'https://example.test/photo-2.png',
    firstname: 'Castaneda',
    lastname: 'Salinas',
    entity: 'METROZ',
    entryDate: '04/10/2015',
    birthDate: '22/01/1963',
    gender: '',
    email: 'castaneda.salinas@metroz.test',
    skills: ['composition', 'props'],
    geo: {
      lat: 48.8598,
      lng: 2.2836,
    },
    phone: '0145652522',
    address: {
      street: 'Metrotech Courtr',
      postalCode: 53292,
      city: 'Franklin',
    },
    links: {
      twitter: 'https://twitter.com/castaneda',
      slack: 'https://slack.com/castaneda',
      github: 'https://github.com/castaneda',
      linkedin: 'https://www.linkedin.com/in/castaneda',
    },
    isManager: false,
    manager: 'Erika',
    managerId: 'person-manager',
  },
];

const peopleServiceMocks = vi.hoisted(() => ({
  getPeople: vi.fn(),
  getRandomPerson: vi.fn(),
}));

vi.mock('../services/people', () => ({
  PeopleService: class {
    getPeople = peopleServiceMocks.getPeople;
    getRandomPerson = peopleServiceMocks.getRandomPerson;
  },
}));

describe('usePeople', () => {
  beforeEach(() => {
    peopleServiceMocks.getPeople.mockReset();
    peopleServiceMocks.getRandomPerson.mockReset();
    const { people } = usePeople();
    people.value = [];
  });

  it('populates the people ref with the service response', async () => {
    peopleServiceMocks.getPeople.mockResolvedValue({ data: PEOPLE });
    const { people, getPeople } = usePeople();

    expect(people.value).toEqual([]);

    await getPeople();

    expect(peopleServiceMocks.getPeople).toHaveBeenCalledTimes(1);
    expect(people.value).toEqual(PEOPLE);
  });

  it('returns the random person from the service response', async () => {
    const randomPerson = PEOPLE[1];
    peopleServiceMocks.getRandomPerson.mockResolvedValue({ data: randomPerson });
    const { getPeople, getRandomPerson } = usePeople();

    peopleServiceMocks.getPeople.mockResolvedValue({ data: PEOPLE });
    await getPeople();
    const selectedPerson = await getRandomPerson();

    expect(peopleServiceMocks.getRandomPerson).toHaveBeenCalledTimes(1);
    expect(selectedPerson).toEqual(randomPerson);
  });
});
