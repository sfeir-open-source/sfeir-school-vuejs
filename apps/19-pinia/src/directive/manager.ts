import type { DirectiveBinding } from 'vue';
import type { Person } from '../model/person';

export const vManager = {
  mounted(el: HTMLElement, bindings: DirectiveBinding<Person>) {
    const { isManager } = bindings.value;
    if (!isManager) {
      el.style.fontStyle = 'italic';
    }
  },
};
