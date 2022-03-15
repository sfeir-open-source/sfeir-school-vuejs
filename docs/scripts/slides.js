function schoolSlides() {
  return [
    'presentation/welcome_school.md',
    'speaker/bertrand_mondolot.md',
    'presentation/formation_flow.md',
    /*'presentation/sfeir_school_day_2.md',*/
  ];
}

function vueIntroductionSlides() {
  return [
    'vue-introduction/transition_slide.md',
    'vue-introduction/vue_creation.md',
    'vue-introduction/vue_principles.md',
    'vue-introduction/other_frameworks.md',
  ];
}

function basicsSlides() {
  return [
    'basics/transition_slide.md',
    'basics/hello_compositions.md',
    'basics/hello_composition_exercice.md'
  ];
}

function toolingSlides() {
  return [
    'tooling/transition_slide.md',
    'tooling/official_stack.md',
    'tooling/configuration.md',
    'tooling/ide.md',
    'tooling/browser_plugin.md',
    'tooling/material.md',
    'tooling/exercice.md',
  ];
}

function instanceSlides() {
  return [
    'vue-instance/transition_slide.md',
    'vue-instance/instance.md',
    /*'vue-instance/exercice.md',*/
  ];
}

function componentsSlides() {
  return [
    'components/transition_slide.md',
    'components/components.md',
    'components/exercice.md',
  ];
}

function dataBindingSlides() {
  return [
    'data-binding-template/transition_slide.md',
    'data-binding-template/plain_js.md',
    'data-binding-template/jquery.md',
    'data-binding-template/vue.md',
    'data-binding-template/exercice.md',
  ];
}

function templatingSlides() {
  return [
    'templating/transition_slide.md',
    'templating/template.md',
    'templating/exercice.md',
  ];
}

function slotsSlides() {
  return [
    'slots/transition_slide.md',
    'slots/slots.md',
    /*'slots/exercice.md'*/
  ]
}

function classStyleSlides() {
  return [
    'class-styles/transition_slide.md',
    'class-styles/class_styles.md'
  ]
}

function communicationComponentSlides() {
  return [
    'communication-components/transition_slide.md',
    'communication-components/event_props.md',
    'communication-components/provide_inject.md',
    'communication-components/exercice.md',
  ];
};

function serverCommunicationSlides() {
  return [
    'server-communication/transition_slide.md',
    'server-communication/axios_lib.md',
    'server-communication/exercice.md',
  ];
};

function transitionAnimateSlides() {
  return [
    'transition-animation/transition_slide.md',
    'transition-animation/transition.md',
    'transition-animation/exercice.md'
  ];
};

function navigationSlides() {
  return [
    'navigation/transition_slide.md',
    'navigation/get_started.md',
    'navigation/configuration.md',
    'navigation/implementation.md',
    'navigation/tp_navigation.md',
    'navigation/exercice.md',
  ];
}

function fragmentsSlides() {
  return [
    'fragments/transition_slide.md',
    'fragments/single_node.md',
    'fragments/multiple_nodes.md'
  ]
}

function teleportSlides() {
  return [
    'teleport/transition_slide.md',
    'teleport/principle.md',
    'teleport/exercice.md',
  ]
}

function formsSlides() {
  return [
    'forms/concepts_bases.md',
    'forms/exercice.md',
    'modifier/transition_slide.md',
    'modifier/modifier.md',
    'modifier/exercice.md'
  ];
}

function componentReusabilitySlides() {
  return [
    'component-reusability/transition_slide.md',
    'component-reusability/native_directive.md',
    'component-reusability/custom_directive.md',
    'component-reusability/mixins.md',
    'component-reusability/exercice.md',
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
    'state-management/modules.md',
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

function compositionApiSlides() {
  return [
    'composition-api/transition_slide.md',
    'composition-api/problem.md',
    'composition-api/basics.md',
    'composition-api/reactivity_api.md',
    'composition-api/separate_files.md',
    'composition-api/exercice.md',
  ]
}

function formation() {
  return [
    ...schoolSlides(),
    ...vueIntroductionSlides(),
    ...basicsSlides(),
    ...toolingSlides(),
    ...instanceSlides(),
    ...componentsSlides(),
    ...dataBindingSlides(),
    ...navigationSlides(),
    ...templatingSlides(),
    ...slotsSlides(),
    ...classStyleSlides(),
    ...communicationComponentSlides(),
    ...serverCommunicationSlides(),
    ...formsSlides(),
    ...transitionAnimateSlides(),
    ...componentReusabilitySlides(),
    ...fragmentsSlides(),
    ...teleportSlides(),
    ...stateManagementSlides(),
    ...lazyLoadingSlides(),
    ...compositionApiSlides(),
  ].map(slidePath => {
    return { path: slidePath };
  });
}

export function usedSlides() {
  return formation();
}
