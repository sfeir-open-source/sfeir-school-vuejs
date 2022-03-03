const onKeyup = element => {
  element.target.value = element.target.value.toUpperCase();
};

export default {
  mounted(element) {
    element.addEventListener('keyup', onKeyup);
  },
  unmounted(element) {
    element.removeEventListener('keyup', onKeyup);
  },
};
