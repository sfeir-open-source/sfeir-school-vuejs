import type { Person } from '@/models/person.model';
import type { DirectiveBinding } from 'vue';

export const vManager = {
  mounted(el: HTMLElement, binding: DirectiveBinding<Person>) {
    binding.value.isManager && (el.style.color = '#70c0e8');
  }
};
