import { fireEvent, render, screen, waitFor } from '@testing-library/vue';
import { ref } from 'vue';
import { vi } from 'vitest';
import Home from './Home.vue';
import type { Person } from '../model/person';

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

const person = PEOPLE[0];
const nextPerson = PEOPLE[1];

let peopleRef: ReturnType<typeof ref<Person[]>>;
let getPeople: ReturnType<typeof vi.fn>;
let getRandomPerson: ReturnType<typeof vi.fn>;

vi.mock('../composable/people.composable', () => ({
  usePeople: () => ({
    people: peopleRef,
    getPeople,
    getRandomPerson,
  }),
}));

describe('Home.vue', () => {
  beforeEach(() => {
    peopleRef = ref<Person[]>([]);
    getPeople = vi.fn(async () => {
      peopleRef.value = [person, nextPerson];
    });
    getRandomPerson = vi.fn(async () => nextPerson);
  });

  const renderHome = () =>
    render(Home, {
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

  it('loads people on mount and renders the first person', async () => {
    renderHome();

    expect(getPeople).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      expect(screen.getByText(`${person.firstname} ${person.lastname}`)).toBeInTheDocument();
      expect(screen.getByText(person.entity)).toBeInTheDocument();
    });
  });

  it('renders the address, email, and phone information', async () => {
    renderHome();

    await waitFor(() => {
      expect(screen.getByText(`${person.address.street}, ${person.address.postalCode} - ${person.address.city}`)).toBeInTheDocument();
      expect(screen.getByText(person.email)).toBeInTheDocument();
      expect(screen.getByText(person.phone)).toBeInTheDocument();
    });
  });

  it('renders the avatar and action buttons', async () => {
    renderHome();

    const avatar = screen.getByAltText('person-avatar');
    await waitFor(() => {
      expect(avatar).toHaveAttribute('src', person.photo);
      expect(avatar).toHaveAttribute('data-size', '100');
    });
  });

  it('picks a new person when clicking the delete action', async () => {
    renderHome();

    await waitFor(() => {
      expect(screen.getByText(`${person.firstname} ${person.lastname}`)).toBeInTheDocument();
    });

    const buttons = screen.getAllByRole('button');
    await fireEvent.click(buttons[1]);

    await waitFor(() => {
      expect(getRandomPerson).toHaveBeenCalledTimes(1);
      expect(screen.getByText(`${nextPerson.firstname} ${nextPerson.lastname}`)).toBeInTheDocument();
      expect(screen.getByText(nextPerson.entity)).toBeInTheDocument();
    });
  });
});
