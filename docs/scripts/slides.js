function schoolSlides() {
  return [
    'presentation/welcome_school.md',
    'speaker/nicolas_frizzarin.md',
    'speaker/justin_wilmet.md',
    'presentation/flow_school.md',
  ];
};

function basicsSlides() {
  return [
    'basics/transition_slide.md',
    'basics/hello_compositions.md',
    'basics/hello_composition_exercice.md'
  ];
};

function toolingSlides() {
  return [
    'tooling/transition_slide.md',
    'tooling/official_stack.md',
    'tooling/configuration.md',
    'tooling/exercice.md',
  ];
};

function instanceSlides() {
  return [
    'vue-instance/transition_slide.md',
    'vue-instance/instance.md',
  ];
};

function componentsSlides() {
  return [
    'components/transition_slide.md',
    'components/components.md',
    'components/exercice.md',
  ];
};

function dataBindingSlides() {
  return [
    'data-binding-template/transition_slide.md',
    'data-binding-template/plain_js.md',
    'data-binding-template/jquery.md',
    'data-binding-template/vue.md',
    'data-binding-template/exercice.md',
  ];
};

function domEventGestionSlides() {
  return [
    'dom-event-gestion/transition_slide.md',
    'dom-event-gestion/event_definition.md',
    'dom-event-gestion/exercice.md',
  ];
};

function serverCommunicationSlides() {
  return [
    'server-communication/transition_slide.md',
    'server-communication/axios_lib.md',
    'server-communication/exercice.md',
  ];
};

function navigationSlides() {
  return [
    'navigation/transition_slide.md',
    'navigation/tp_navigation.md',
    'navigation/configuration.md',
    'navigation/implementation.md',
    'navigation/exercice.md',
  ];
};

function iteratorSlides() {
  return [
    'iterator/transition_slide.md',
    'iterator/directive_v_for.md',
    'iterator/exercice.md',
  ];
};

function communicationComponentSlides() {
  return [
    'communication-components/transition_slide.md',
    'communication-components/event_props.md',
    'communication-components/exercice.md',
  ];
};

function formsSlides() {
  return [
    'forms/sfeir_school_day_2.md',
    'forms/concepts_bases.md',
    'forms/validation.md',
    'forms/vee_validate.md',
    'forms/vuelidate.md',
  ];
};

function filterSlides() {
  return [
    'filters/transition_slide.md',
    'filters/filters_concept.md',
    'filters/exercice.md',
  ];
};

function modifiersSlides() {
  return [
    'modifier/transition_slide.md',
    'modifier/modifier.md',
    'modifier/exercice.md',
  ];
};

function directiveSlides() {
  return [
    'directive/transition_slide.md',
    'directive/native_directive.md',
    'directive/custom_directive.md',
    'directive/exercice.md',
  ]
}

function stateManagementSlides() {
  return [
    'state-management/transition_slide.md',
    'state-management/concepts.md',
    'state-management/store.md',
    'state-management/state.md',
    'state-management/getters.md',
    'state-management/mutation.md',
    'state-management/action.md',
    'state-management/helpers.md',
    'state-management/exercice.md',
  ]
}

function lazyLoadingSlides() {
  return [
    'lazy-loading/transition_slide.md',
    'lazy-loading/concept_lazy_loading.md',
    'lazy-loading/exercice.md',
  ]
}

function formation() {
  return [
    ...schoolSlides(),
    ...basicsSlides(),
    ...toolingSlides(),
    ...instanceSlides(),
    ...componentsSlides(),
    ...dataBindingSlides(),
    ...domEventGestionSlides(),
    ...serverCommunicationSlides(),
    ...navigationSlides(),
    ...iteratorSlides(),
    ...communicationComponentSlides(),
    ...formsSlides(),
    ...filterSlides(),
    ...modifiersSlides(),
    ...directiveSlides(),
    ...stateManagementSlides(),
    ...lazyLoadingSlides(),
  ].map(slidePath => {
    return { path: slidePath };
  });
}

export function usedSlides() {
  return formation();
}
