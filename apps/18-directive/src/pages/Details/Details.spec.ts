import { fireEvent, render, screen, waitFor } from '@testing-library/vue';
import { vi } from 'vitest';
import type { Person, PersonForm } from '../../model/person';
import Details from './Details.vue';

const routerPush = vi.hoisted(() => vi.fn());
let getPersonDetails: ReturnType<typeof vi.fn>;
let updatePerson: ReturnType<typeof vi.fn>;

const PERSON: Person = {
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

vi.mock('vue-router', () => ({
  useRouter: () => ({
    push: routerPush,
  }),
}));

vi.mock('../../composable/people.composable', () => ({
  usePeople: () => ({
    getPersonDetails,
    updatePerson,
  }),
}));

describe('Details.vue', () => {
  beforeEach(() => {
    getPersonDetails = vi.fn(async () => PERSON);
    updatePerson = vi.fn();
    routerPush.mockReset();
  });

  const renderDetails = () =>
    render(Details, {
      props: {
        id: PERSON.id,
      },
      global: {
        stubs: {
          Form: {
            props: ['person'],
            template: `<div>
              <div data-testid="details-form-person">{{ person?.firstname }}</div>
              <button type="button" data-testid="cancel-edit-person" @click="$emit('close')">cancel</button>
              <button
                type="button"
                data-testid="save-edit-person"
                @click="$emit('close', {
                  id: person?.id,
                  photo: person?.photo,
                  firstname: 'Ada',
                  lastname: person?.lastname,
                  email: person?.email,
                  phone: person?.phone
                })"
              >
                save
              </button>
            </div>`,
          },
        },
      },
    });

  it('loads person details on mount and provides the person to the form', async () => {
    renderDetails();

    expect(getPersonDetails).toHaveBeenCalledTimes(1);
    expect(getPersonDetails).toHaveBeenCalledWith(PERSON.id);

    await waitFor(() => {
      expect(screen.getByTestId('details-form-person')).toHaveTextContent(PERSON.firstname);
    });
  });

  it('goes back to people without updating when form emits close without payload', async () => {
    renderDetails();

    await fireEvent.click(screen.getByTestId('cancel-edit-person'));

    expect(updatePerson).not.toHaveBeenCalled();
    expect(routerPush).toHaveBeenCalledTimes(1);
    expect(routerPush).toHaveBeenCalledWith({ name: 'people' });
  });

  it('updates the person then navigates back to people when form emits payload', async () => {
    updatePerson = vi.fn(async (_person: PersonForm) => undefined);
    renderDetails();

    await waitFor(() => {
      expect(screen.getByTestId('details-form-person')).toHaveTextContent(PERSON.firstname);
    });
    await fireEvent.click(screen.getByTestId('save-edit-person'));

    expect(updatePerson).toHaveBeenCalledTimes(1);
    expect(updatePerson).toHaveBeenCalledWith({
      id: PERSON.id,
      photo: PERSON.photo,
      firstname: 'Ada',
      lastname: PERSON.lastname,
      email: PERSON.email,
      phone: PERSON.phone,
    });
    expect(routerPush).toHaveBeenCalledTimes(1);
    expect(routerPush).toHaveBeenCalledWith({ name: 'people' });
  });
});
