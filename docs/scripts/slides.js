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
  ]
}

function toolingSlides() {
  return [
    'tooling/transition_slide.md',
    'tooling/official_stack.md',
    'tooling/configuration.md',
    'tooling/exercice.md',
  ]
}

function instanceSlide() {
  return [
    'vue-instance/transition_slide.md',
    'vue-instance/instance.md',
  ]
}



function formation() {
  return [
    ...schoolSlides(),
    ...basicsSlides(),
    ...toolingSlides(),
    ...instanceSlide()
  ].map(slidePath => {
    return { path: slidePath };
  });
}

export function usedSlides() {
  return formation();
}
