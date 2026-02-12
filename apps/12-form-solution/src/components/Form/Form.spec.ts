import { fireEvent, render, screen } from '@testing-library/vue';
import type { PersonForm } from '../../model/person';
import Form from './Form.vue';

const DEFAULT_PHOTO = 'https://randomuser.me/api/portraits/lego/6.jpg';

const renderForm = () =>
  render(Form, {
    global: {
      stubs: {
        'a-avatar': {
          props: ['src', 'size'],
          template: '<img :src="src" :data-size="String(size)" alt="person-form-avatar" />',
        },
        'a-form': {
          template: '<form data-testid="person-form"><slot /></form>',
        },
        'a-form-item': {
          props: ['label'],
          template: '<label><span>{{ label }}</span><slot /></label>',
        },
        'a-input': {
          props: ['value', 'placeholder', 'name'],
          emits: ['update:value'],
          template: '<input :name="name" :value="value" :placeholder="placeholder" @input="$emit(\'update:value\', $event.target.value)" />',
        },
        'a-button': {
          emits: ['click'],
          template: '<button type="button" @click="$emit(\'click\')"><slot /></button>',
        },
      },
    },
  });

describe('Form.vue', () => {
  it('renders the default avatar and empty form fields', () => {
    renderForm();

    expect(screen.getByTestId('person-form')).toBeInTheDocument();

    const avatar = screen.getByAltText('person-form-avatar');
    expect(avatar).toHaveAttribute('src', DEFAULT_PHOTO);
    expect(avatar).toHaveAttribute('data-size', '100');

    expect(screen.getByPlaceholderText('Enter your firstname')).toHaveValue('');
    expect(screen.getByPlaceholderText('Enter your lastname')).toHaveValue('');
    expect(screen.getByPlaceholderText('Enter your email')).toHaveValue('');
    expect(screen.getByPlaceholderText('Enter your phone')).toHaveValue('');
  });

  it('updates the form model when typing in inputs', async () => {
    renderForm();

    const firstnameInput = screen.getByPlaceholderText('Enter your firstname');
    const lastnameInput = screen.getByPlaceholderText('Enter your lastname');
    const emailInput = screen.getByPlaceholderText('Enter your email');
    const phoneInput = screen.getByPlaceholderText('Enter your phone');

    await fireEvent.update(firstnameInput, 'Ada');
    await fireEvent.update(lastnameInput, 'Lovelace');
    await fireEvent.update(emailInput, 'ada@example.test');
    await fireEvent.update(phoneInput, '0102030405');

    expect(firstnameInput).toHaveValue('Ada');
    expect(lastnameInput).toHaveValue('Lovelace');
    expect(emailInput).toHaveValue('ada@example.test');
    expect(phoneInput).toHaveValue('0102030405');
  });

  it('emits close without payload when cancel is clicked', async () => {
    const { emitted } = renderForm();

    await fireEvent.click(screen.getByRole('button', { name: 'Cancel' }));

    expect(emitted().close).toEqual([[undefined]]);
  });

  it('emits close with the current form payload when save is clicked', async () => {
    const { emitted } = renderForm();

    await fireEvent.update(screen.getByPlaceholderText('Enter your firstname'), 'Ada');
    await fireEvent.update(screen.getByPlaceholderText('Enter your lastname'), 'Lovelace');
    await fireEvent.update(screen.getByPlaceholderText('Enter your email'), 'ada@example.test');
    await fireEvent.update(screen.getByPlaceholderText('Enter your phone'), '0102030405');
    await fireEvent.click(screen.getByRole('button', { name: 'Save' }));

    expect(emitted().close).toHaveLength(1);

    expect((emitted().close?.[0] as Array<PersonForm>)?.[0]).toEqual({
      id: '',
      photo: DEFAULT_PHOTO,
      firstname: 'Ada',
      lastname: 'Lovelace',
      email: 'ada@example.test',
      phone: '0102030405',
    });
  });
});
