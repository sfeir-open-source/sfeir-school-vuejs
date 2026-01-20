import { createPinia, setActivePinia } from 'pinia';
import type { Person, PersonForm } from '../model/person';
import { usePeopleStore } from './people.store';

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
      street: 'Metrotech Court',
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

const PERSON_FORM: PersonForm = {
  id: 'person-1',
  photo: PEOPLE[0].photo,
  firstname: 'Leanne',
  lastname: 'Woodard',
  email: PEOPLE[0].email,
  phone: PEOPLE[0].phone,
};

const peopleServiceMocks = vi.hoisted(() => ({
  getPeople: vi.fn(),
  getRandomPerson: vi.fn(),
  getPersonById: vi.fn(),
  deletePerson: vi.fn(),
  postPerson: vi.fn(),
  putPerson: vi.fn(),
}));

vi.mock('../services/people', () => ({
  PeopleService: vi.fn(function MockPeopleService() {
    return {
      getPeople: peopleServiceMocks.getPeople,
      getRandomPerson: peopleServiceMocks.getRandomPerson,
      getPersonById: peopleServiceMocks.getPersonById,
      deletePerson: peopleServiceMocks.deletePerson,
      postPerson: peopleServiceMocks.postPerson,
      putPerson: peopleServiceMocks.putPerson,
    };
  }),
}));

describe('usePeopleStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    peopleServiceMocks.getPeople.mockReset();
    peopleServiceMocks.getRandomPerson.mockReset();
    peopleServiceMocks.getPersonById.mockReset();
    peopleServiceMocks.deletePerson.mockReset();
    peopleServiceMocks.postPerson.mockReset();
    peopleServiceMocks.putPerson.mockReset();
  });

  it('loads people and filters by search on firstname or lastname', async () => {
    const store = usePeopleStore();
    peopleServiceMocks.getPeople.mockResolvedValue({ data: PEOPLE });

    await store.getPeople();
    expect(store.filteredPeople).toEqual(PEOPLE);

    store.search = 'wood';
    expect(store.filteredPeople).toEqual([PEOPLE[0]]);

    store.search = 'CAST';
    expect(store.filteredPeople).toEqual([PEOPLE[1]]);
  });

  it('returns random person', async () => {
    const store = usePeopleStore();
    peopleServiceMocks.getRandomPerson.mockResolvedValue({ data: PEOPLE[1] });

    const randomPerson = await store.getRandomPerson();

    expect(peopleServiceMocks.getRandomPerson).toHaveBeenCalledTimes(1);
    expect(randomPerson).toEqual(PEOPLE[1]);
  });

  it('updates list after deleting a person', async () => {
    const store = usePeopleStore();
    peopleServiceMocks.getPeople.mockResolvedValue({ data: PEOPLE });
    peopleServiceMocks.deletePerson.mockResolvedValue({ data: [PEOPLE[0]] });

    await store.getPeople();
    await store.deletePerson(PEOPLE[1].id);

    expect(peopleServiceMocks.deletePerson).toHaveBeenCalledWith(PEOPLE[1].id);
    expect(store.filteredPeople).toEqual([PEOPLE[0]]);
  });

  it('creates a person then refreshes people', async () => {
    const store = usePeopleStore();
    peopleServiceMocks.postPerson.mockResolvedValue({ data: { id: 'created' } });
    peopleServiceMocks.getPeople.mockResolvedValue({ data: PEOPLE });

    await store.createPerson(PERSON_FORM);

    expect(peopleServiceMocks.postPerson).toHaveBeenCalledTimes(1);
    expect(peopleServiceMocks.postPerson).toHaveBeenCalledWith(PERSON_FORM);
    expect(peopleServiceMocks.getPeople).toHaveBeenCalledTimes(1);
    expect(store.filteredPeople).toEqual(PEOPLE);
  });

  it('returns details for one person', async () => {
    const store = usePeopleStore();
    peopleServiceMocks.getPersonById.mockResolvedValue({ data: PEOPLE[0] });

    const person = await store.getPersonDetails(PEOPLE[0].id);

    expect(peopleServiceMocks.getPersonById).toHaveBeenCalledWith(PEOPLE[0].id);
    expect(person).toEqual(PEOPLE[0]);
  });

  it('updates a person then refreshes people', async () => {
    const store = usePeopleStore();
    peopleServiceMocks.putPerson.mockResolvedValue({ data: PERSON_FORM });
    peopleServiceMocks.getPeople.mockResolvedValue({ data: PEOPLE });

    await store.updatePerson(PERSON_FORM);

    expect(peopleServiceMocks.putPerson).toHaveBeenCalledTimes(1);
    expect(peopleServiceMocks.putPerson).toHaveBeenCalledWith(PERSON_FORM);
    expect(peopleServiceMocks.getPeople).toHaveBeenCalledTimes(1);
    expect(store.filteredPeople).toEqual(PEOPLE);
  });
});
