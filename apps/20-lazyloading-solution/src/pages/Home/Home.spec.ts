import { fireEvent, render, screen, waitFor } from '@testing-library/vue';
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
const randomPerson: Person = {
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
};

let peopleRef: ReturnType<typeof ref<Person[]>>;
let getPeople: ReturnType<typeof vi.fn>;
let getRandomPerson: ReturnType<typeof vi.fn>;

vi.mock('../../composable/people.store', () => ({
  usePeopleStore: () => ({
    filteredPeople: peopleRef,
    getPeople,
    getRandomPerson,
  }),
}));

describe('Home.vue', () => {
  beforeEach(() => {
    peopleRef = ref<Person[]>([]);
    getPeople = vi.fn(async () => {
      peopleRef.value = [person];
    });
    getRandomPerson = vi.fn(async () => randomPerson);
  });

  const renderHome = () =>
    render(Home, {
      global: {
        stubs: {
          Card: {
            props: ['person'],
            emits: ['onDeletePerson'],
            template: `<div>
              <div data-testid="person-card">{{ person?.firstname }} {{ person?.lastname }}</div>
              <button type="button" data-testid="delete-person" @click="$emit('onDeletePerson')">delete</button>
            </div>`,
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

  it('requests a random person when the delete event is emitted', async () => {
    renderHome();

    await waitFor(() => {
      expect(screen.getByTestId('person-card')).toHaveTextContent(`${person.firstname} ${person.lastname}`);
    });

    await fireEvent.click(screen.getByTestId('delete-person'));

    expect(getRandomPerson).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      expect(screen.getByTestId('person-card')).toHaveTextContent(`${randomPerson.firstname} ${randomPerson.lastname}`);
    });
  });
});
