import { vi } from 'vitest';
import { PEOPLE } from '../data/people';
import { usePeople } from './people.composable';

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
