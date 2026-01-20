import { fireEvent, render, screen, waitFor } from '@testing-library/vue';
import { vi } from 'vitest';
import { ref } from 'vue';
import type { Person } from '../../model/person';
import People from './People.vue';

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
const nextPerson: Person = {
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
let deletePerson: ReturnType<typeof vi.fn>;

vi.mock('../../composable/people.composable', () => ({
  usePeople: () => ({
    people: peopleRef,
    getPeople,
    deletePerson,
  }),
}));

describe('People.vue', () => {
  beforeEach(() => {
    peopleRef = ref<Person[]>([]);
    getPeople = vi.fn(async () => {
      peopleRef.value = [person, nextPerson];
    });
    deletePerson = vi.fn();
  });

  const renderPeople = () =>
    render(People, {
      global: {
        stubs: {
          Card: {
            props: ['person'],
            emits: ['onDeletePerson'],
            template: `<div>
              <div data-testid="person-card">{{ person?.firstname }} {{ person?.lastname }}</div>
              <button type="button" data-testid="delete-person" @click="$emit('onDeletePerson', person)">delete</button>
            </div>`,
          },
        },
      },
    });

  it('loads people on mount and renders a card per person', async () => {
    renderPeople();

    expect(getPeople).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      expect(screen.getByText(`${person.firstname} ${person.lastname}`)).toBeInTheDocument();
      expect(screen.getByText(`${nextPerson.firstname} ${nextPerson.lastname}`)).toBeInTheDocument();
    });

    expect(screen.getAllByTestId('person-card')).toHaveLength(2);
  });

  it('calls deletePerson when a card emits the delete event', async () => {
    renderPeople();

    await waitFor(() => {
      expect(screen.getAllByTestId('person-card')).toHaveLength(2);
    });

    const deleteButtons = screen.getAllByTestId('delete-person');
    await fireEvent.click(deleteButtons[1]);

    expect(deletePerson).toHaveBeenCalledTimes(1);
    expect(deletePerson).toHaveBeenCalledWith(nextPerson.id);
  });
});
