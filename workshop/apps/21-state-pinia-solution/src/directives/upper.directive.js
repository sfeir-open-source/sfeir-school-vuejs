const onInput = element => {
  element.target.value = element.target.value.toUpperCase();
};

export default {
  bind(element) {
    element.addEventListener('input', onInput);
  },
  unbind(element) {
    element.removeEventListener('input', onInput);
  },
};
