import { render, screen } from '@testing-library/vue';
import type { Person } from '../../model/person';
import Card from './Card.vue';

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

const renderCard = () =>
  render(Card, {
    props: {
      person,
    },
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

describe('Card.vue', () => {
  it('renders the person identity information', () => {
    renderCard();

    expect(screen.getByText(`${person.firstname} ${person.lastname}`)).toBeInTheDocument();
    expect(screen.getByText(person.entity)).toBeInTheDocument();
  });

  it('renders the avatar and contact details', () => {
    renderCard();

    const avatar = screen.getByAltText('person-avatar');
    expect(avatar).toHaveAttribute('src', person.photo);
    expect(avatar).toHaveAttribute('data-size', '100');

    expect(screen.getByText(`${person.address.street}, ${person.address.postalCode} - ${person.address.city}`)).toBeInTheDocument();
    expect(screen.getByText(person.email)).toBeInTheDocument();
    expect(screen.getByText(person.phone)).toBeInTheDocument();
  });
});
