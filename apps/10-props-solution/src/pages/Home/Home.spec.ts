import { render, screen, waitFor } from '@testing-library/vue';
import { vi } from 'vitest';
import { ref } from 'vue';
import type { Person } from '../../model/person';
import Home from './Home.vue';

const person: Person = {
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

let peopleRef: ReturnType<typeof ref<Person[]>>;
let getPeople: ReturnType<typeof vi.fn>;

vi.mock('../../composable/people.composable', () => ({
  usePeople: () => ({
    people: peopleRef,
    getPeople,
  }),
}));

describe('Home.vue', () => {
  beforeEach(() => {
    peopleRef = ref<Person[]>([]);
    getPeople = vi.fn(async () => {
      peopleRef.value = [person];
    });
  });

  const renderHome = () =>
    render(Home, {
      global: {
        stubs: {
          Card: {
            props: ['person'],
            template: '<div data-testid="person-card">{{ person?.firstname }} {{ person?.lastname }}</div>',
          },
        },
      },
    });

  it('loads people on mount and renders the card for the first person', async () => {
    renderHome();

    expect(getPeople).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      expect(screen.getByTestId('person-card')).toHaveTextContent(`${person.firstname} ${person.lastname}`);
    });
  });
});
