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
  getPersonById: vi.fn(),
  deletePerson: vi.fn(),
  postPerson: vi.fn(),
  putPerson: vi.fn(),
}));

vi.mock('../services/people', () => ({
  PeopleService: class {
    getPeople = peopleServiceMocks.getPeople;
    getRandomPerson = peopleServiceMocks.getRandomPerson;
    getPersonById = peopleServiceMocks.getPersonById;
    deletePerson = peopleServiceMocks.deletePerson;
    postPerson = peopleServiceMocks.postPerson;
    putPerson = peopleServiceMocks.putPerson;
  },
}));

describe('usePeople', () => {
  beforeEach(() => {
    peopleServiceMocks.getPeople.mockReset();
    peopleServiceMocks.getRandomPerson.mockReset();
    peopleServiceMocks.getPersonById.mockReset();
    peopleServiceMocks.deletePerson.mockReset();
    peopleServiceMocks.postPerson.mockReset();
    peopleServiceMocks.putPerson.mockReset();
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

  it('updates the people ref after deleting a person', async () => {
    const remainingPeople = [PEOPLE[0]];
    peopleServiceMocks.getPeople.mockResolvedValue({ data: PEOPLE });
    peopleServiceMocks.deletePerson.mockResolvedValue({ data: remainingPeople });
    const { people, getPeople, deletePerson } = usePeople();

    await getPeople();
    await deletePerson(PEOPLE[1].id);

    expect(peopleServiceMocks.deletePerson).toHaveBeenCalledTimes(1);
    expect(peopleServiceMocks.deletePerson).toHaveBeenCalledWith(PEOPLE[1].id);
    expect(people.value).toEqual(remainingPeople);
  });

  it('creates a person then refreshes the people list', async () => {
    const personForm = {
      id: '',
      photo: 'https://randomuser.me/api/portraits/lego/6.jpg',
      firstname: 'Ada',
      lastname: 'Lovelace',
      email: 'ada@example.test',
      phone: '0102030405',
    };
    peopleServiceMocks.postPerson.mockResolvedValue({ data: { id: 'created' } });
    peopleServiceMocks.getPeople.mockResolvedValue({ data: PEOPLE });
    const { people, createPerson } = usePeople();

    await createPerson(personForm);

    expect(peopleServiceMocks.postPerson).toHaveBeenCalledTimes(1);
    expect(peopleServiceMocks.postPerson).toHaveBeenCalledWith(personForm);
    expect(peopleServiceMocks.getPeople).toHaveBeenCalledTimes(1);
    expect(people.value).toEqual(PEOPLE);
  });

  it('returns person details by id', async () => {
    const selectedPerson = PEOPLE[0];
    peopleServiceMocks.getPersonById.mockResolvedValue({ data: selectedPerson });
    const { getPersonDetails } = usePeople();

    const result = await getPersonDetails(selectedPerson.id);

    expect(peopleServiceMocks.getPersonById).toHaveBeenCalledTimes(1);
    expect(peopleServiceMocks.getPersonById).toHaveBeenCalledWith(selectedPerson.id);
    expect(result).toEqual(selectedPerson);
  });

  it('updates a person then refreshes the people list', async () => {
    const personForm = {
      id: PEOPLE[0].id,
      photo: PEOPLE[0].photo,
      firstname: 'Updated',
      lastname: PEOPLE[0].lastname,
      email: PEOPLE[0].email,
      phone: PEOPLE[0].phone,
    };
    peopleServiceMocks.putPerson.mockResolvedValue({ data: personForm });
    peopleServiceMocks.getPeople.mockResolvedValue({ data: PEOPLE });
    const { people, updatePerson } = usePeople();

    await updatePerson(personForm);

    expect(peopleServiceMocks.putPerson).toHaveBeenCalledTimes(1);
    expect(peopleServiceMocks.putPerson).toHaveBeenCalledWith(personForm);
    expect(peopleServiceMocks.getPeople).toHaveBeenCalledTimes(1);
    expect(people.value).toEqual(PEOPLE);
  });
});
