import { render, screen, waitFor } from '@testing-library/vue';
import { vi } from 'vitest';
import { ref } from 'vue';
import type { Person } from '../../model/person';
import People from './People.vue';

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

let peopleRef: ReturnType<typeof ref<Person[]>>;
let getPeople: ReturnType<typeof vi.fn>;

vi.mock('../../composable/people.composable', () => ({
  usePeople: () => ({
    people: peopleRef,
    getPeople,
  }),
}));

describe('People.vue', () => {
  beforeEach(() => {
    peopleRef = ref<Person[]>([]);
    getPeople = vi.fn(async () => {
      peopleRef.value = PEOPLE;
    });
  });

  const renderPeople = () =>
    render(People, {
      global: {
        stubs: {
          'a-card': {
            template: '<div data-testid="card"><slot name="actions"></slot><slot></slot></div>',
          },
          'a-card-meta': {
            props: ['title', 'description'],
            template: '<div><slot name="avatar"></slot><h1>{{ title }}</h1><p>{{ description }}</p></div>',
          },
          'a-avatar': {
            props: ['src', 'size'],
            template: '<img :src="src" :data-size="size" alt="person-avatar" />',
          },
          'a-button': {
            template: '<button type="button"><slot></slot></button>',
          },
          BankOutlined: {
            template: '<i data-icon="bank" />',
          },
          MailOutlined: {
            template: '<i data-icon="mail" />',
          },
          PhoneOutlined: {
            template: '<i data-icon="phone" />',
          },
          EditOutlined: {
            template: '<i data-icon="edit" />',
          },
          DeleteOutlined: {
            template: '<i data-icon="delete" />',
          },
        },
      },
    });

  it('loads people on mount and renders a card per person', async () => {
    renderPeople();

    expect(getPeople).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      expect(screen.getByText(`${PEOPLE[0].firstname} ${PEOPLE[0].lastname}`)).toBeInTheDocument();
      expect(screen.getByText(`${PEOPLE[1].firstname} ${PEOPLE[1].lastname}`)).toBeInTheDocument();
    });

    expect(screen.getAllByTestId('card')).toHaveLength(PEOPLE.length);
  });

  it('renders contact details for each person', async () => {
    renderPeople();

    await waitFor(() => {
      expect(screen.getByText(`${PEOPLE[0].address.street}, ${PEOPLE[0].address.postalCode} - ${PEOPLE[0].address.city}`)).toBeInTheDocument();
      expect(screen.getByText(PEOPLE[0].email)).toBeInTheDocument();
      expect(screen.getByText(PEOPLE[0].phone)).toBeInTheDocument();
    });
  });
});
