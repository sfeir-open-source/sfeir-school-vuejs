import { render, screen } from '@testing-library/vue';
import Home from './Home.vue';
import { PEOPLE } from '../data/people';

describe('Home.vue', () => {
  const person = PEOPLE[0];

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

  it('renders the person name and entity from the first person', () => {
    renderHome();

    expect(screen.getByText(`${person.firstname} ${person.lastname}`)).toBeInTheDocument();
    expect(screen.getByText(person.entity)).toBeInTheDocument();
  });

  it('renders the address, email, and phone information', () => {
    renderHome();

    expect(screen.getByText(`${person.address.street}, ${person.address.postalCode} - ${person.address.city}`)).toBeInTheDocument();
    expect(screen.getByText(person.email)).toBeInTheDocument();
    expect(screen.getByText(person.phone)).toBeInTheDocument();
  });

  it('renders the avatar and action buttons', () => {
    renderHome();

    const avatar = screen.getByAltText('person-avatar');
    expect(avatar).toHaveAttribute('src', person.photo);
    expect(avatar).toHaveAttribute('data-size', '100');

    expect(screen.getAllByRole('button')).toHaveLength(2);
  });
});
