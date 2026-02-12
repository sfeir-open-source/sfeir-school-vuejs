function schoolSlides() {
  return ['00-PRESENTATION/00-WELCOME.md', '00-SPEAKER/NICOLAS-FRIZZARIN.md', '00-PRESENTATION/01-FLOW.md'];
}

function basicsSlides() {
  return ['01-BASICS/00-TRANSITION.md', '01-BASICS/01-COMPOSITION.md', '01-BASICS/100-EXERCISE.md'];
}

function toolingSlides() {
  return ['02-TOOLING/00-TRANSITION.md', '02-TOOLING/01-STACK.md', '02-TOOLING/02-CONFIGURATION.md', '02-TOOLING/100-EXERCISE.md'];
}

function instanceSlides() {
  return ['03-INSTANCE/00-TRANSITION.md', '03-INSTANCE/01-INSTANCE.md'];
}

function reactivitySlides() {
  return ['04-REACTIVITY/00-TRANSITION.md', '04-REACTIVITY/01-BASICS.md'];
}

function componentsSlides() {
  return ['05-COMPONENTS/00-TRANSITION.md', '05-COMPONENTS/01-COMPONENTS.md', '05-COMPONENTS/100-EXERCISE.md'];
}

function dataBindingSlides() {
  return [
    '06-BINDINGS/00-TRANSITION.md',
    '06-BINDINGS/01-PLAIN-JS.md',
    '06-BINDINGS/02-JQUERY.md',
    '06-BINDINGS/03-VUE.md',
    '06-BINDINGS/100-EXERCISE.md',
  ];
}

function domEventGestionSlides() {
  return ['07-EVENTS/00-TRANSITION.md', '07-EVENTS/01-DEFINITION.md', '07-EVENTS/100-EXERCISE.md'];
}

function compositionPatternSlides() {
  return ['08-COMPOSITION/00-TRANSITION.md', '08-COMPOSITION/01-DEFINITION.md', '08-COMPOSITION/100-EXERCISE.md'];
}

function serverCommunicationSlides() {
  return ['09-SERVER-COMMUNICATION/00-TRANSITION.md', '09-SERVER-COMMUNICATION/01-AXIOS.md'];
}

function suspenseApiSlides() {
  return ['10-SUSPENSE/00-TRANSITION.md', '10-SUSPENSE/01-INTRODUCTION.md', '10-SUSPENSE/100-EXERCISE.md'];
}

function navigationSlides() {
  return [
    '11-NAVIGATION/00-TRANSITION.md',
    '11-NAVIGATION/01-TP-NAVIGATION.md',
    '11-NAVIGATION/02-CONFIGURATION.md',
    '11-NAVIGATION/03-IMPLEMENTATION.md',
    '11-NAVIGATION/100-EXERCISE.md',
  ];
}

function iteratorSlides() {
  return ['12-ITERATOR/00-TRANSITION.md', '12-ITERATOR/01-V-FOR.md', '12-ITERATOR/100-EXERCISE.md'];
}

function communicationComponentSlides() {
  return ['13-COMMUNICATION/00-TRANSITION.md', '13-COMMUNICATION/01-PROPS.md', '13-COMMUNICATION/02-EVENTS.md', '13-COMMUNICATION/100-EXERCISE.md'];
}

export function dayOneSlides() {
  return [
    ...schoolSlides(),
    ...basicsSlides(),
    ...toolingSlides(),
    ...instanceSlides(),
    ...reactivitySlides(),
    ...componentsSlides(),
    ...dataBindingSlides(),
    ...domEventGestionSlides(),
    ...compositionPatternSlides(),
    ...serverCommunicationSlides(),
    ...suspenseApiSlides(),
    ...navigationSlides(),
    ...iteratorSlides(),
    ...communicationComponentSlides(),
  ];
}
