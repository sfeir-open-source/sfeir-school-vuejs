import { vi } from 'vitest';
import { usePeople } from './people.composable';
import { PEOPLE } from '../data/people';

describe('usePeople', () => {
  it('populates the people ref with the static dataset', () => {
    const { people, getPeople } = usePeople();

    expect(people.value).toEqual([]);

    getPeople();

    expect(people.value).toEqual(PEOPLE);
  });

  it('returns a deterministic random person from the list', () => {
    const { getPeople, getRandomPerson } = usePeople();

    getPeople();

    const randomSpy = vi.spyOn(Math, 'random').mockReturnValue(0);
    const selectedPerson = getRandomPerson();

    expect(selectedPerson).toEqual(PEOPLE[0]);

    randomSpy.mockRestore();
  });
});
