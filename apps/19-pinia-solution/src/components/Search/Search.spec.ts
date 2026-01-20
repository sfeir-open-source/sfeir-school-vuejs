import { fireEvent, render, screen } from '@testing-library/vue';
import { vi } from 'vitest';
import Search from './Search.vue';

const renderSearch = (props: Partial<{ modelValue: string; 'onUpdate:modelValue': (value: string) => void }> = {}) =>
  render(Search, {
    props: {
      modelValue: '',
      ...props,
    },
    global: {
      stubs: {
        'a-input': {
          props: ['value', 'placeholder', 'size'],
          emits: ['update:value'],
          template: '<input :value="value" :placeholder="placeholder" :data-size="size" @input="$emit(\'update:value\', $event.target.value)" />',
        },
      },
    },
  });

describe('Search.vue', () => {
  it('renders the search input with expected placeholder and size', () => {
    renderSearch({ modelValue: 'Luke' });

    const input = screen.getByPlaceholderText('Search');
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('Luke');
    expect(input).toHaveAttribute('data-size', 'large');
  });

  it('emits update:modelValue when the input value changes', async () => {
    const onUpdateModelValue = vi.fn();
    renderSearch({ modelValue: '', 'onUpdate:modelValue': onUpdateModelValue });

    await fireEvent.update(screen.getByPlaceholderText('Search'), 'Leia');

    expect(onUpdateModelValue).toHaveBeenCalledTimes(1);
    expect(onUpdateModelValue).toHaveBeenCalledWith('Leia');
  });
});
