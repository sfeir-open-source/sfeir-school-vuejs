function formsSlides() {
  return [
    '14-FORMS/00-TRANSITION.md',
    '14-FORMS/01-CONCEPTS-BASES.md',
    '14-FORMS/02-CONCEPTS-ADVANCED.md',
    '14-FORMS/03-VALIDATION.md',
    '14-FORMS/04-VEEVALIDATE.md',
    '14-FORMS/05-VUELIDATE.md',
  ];
}

function filterSlides() {
  return ['15-FILTERS/00-TRANSITION.md', '15-FILTERS/01-CONCEPTS.md', '15-FILTERS/100-EXERCISE.md'];
}

function modifiersSlides() {
  return ['16-MODIFIERS/00-TRANSITION.md', '16-MODIFIERS/01-CONCEPTS.md'];
}

function directiveSlides() {
  return ['17-DIRECTIVES/00-TRANSITION.md', '17-DIRECTIVES/01-NATIVE.md', '17-DIRECTIVES/02-CUSTOM.md', '17-DIRECTIVES/100-EXERCISE.md'];
}

function stateManagementSlides() {
  return [
    '18-STATE-MANAGEMENT/00-TRANSITION.md',
    '18-STATE-MANAGEMENT/01-CONCEPTS.md',
    '18-STATE-MANAGEMENT/02-PINIA-INTRODUCTION.md',
    '18-STATE-MANAGEMENT/03-PINIA-USE.md',
    '18-STATE-MANAGEMENT/100-EXERCISE.md',
  ];
}

function lazyLoadingSlides() {
  return ['19-LAZY-LOADING/00-TRANSITION.md', '19-LAZY-LOADING/01-CONCEPTS.md', '19-LAZY-LOADING/100-EXERCISE.md'];
}

function injectionSlides() {
  return ['20-INJECTION/00-TRANSITION.md', '20-INJECTION/01-CONCEPTS.md', '20-INJECTION/100-EXERCISE.md'];
}

export function dayTwoSlides() {
  return [
    ...formsSlides(),
    ...filterSlides(),
    ...modifiersSlides(),
    ...directiveSlides(),
    ...stateManagementSlides(),
    ...lazyLoadingSlides(),
    ...injectionSlides(),
  ];
}
