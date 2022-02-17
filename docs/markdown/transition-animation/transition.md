<!-- .slide -->
# Transition component

- permet d'appliquer les animations __enter__ et __leave__ sur des éléments ou des composants
- les animations peuvent être appelées par :
    - Rendu conditionnel via __v-if__, __v-else-if__ et  __v-else__
    - Affichage conditionnel via __v-show__
    - Changement de composant de dynamique via l'élément spécial __&lt;component&gt;__

![h-400](assets/images/school/transition-animation/transition-component-html.png)
![h-600](assets/images/school/transition-animation/transition-component-css.png)

##==##

<!-- .slide -->
# Les classes de transitions

- __v-enter-from__, __v-enter-to__ : état de début et de fin de l'animation __enter__
- __v-leave-from__, __v-leave-to__ : état de début et de fin de l'animation __leave__
- __v-enter-active__, __v-leave-active__ : état appliqué durant l'animation __enter__ et __leave__

![center](assets/images/school/transition-animation/transition-classes.png)

##==##

<!-- .slide -->
# Transitions nommées

- nom de la transition dans le prop __name__
- les classes sont préfixées par la valeur de la prop __name__

![h-500](assets/images/school/transition-animation/transition-named-html.png)
![h-700](assets/images/school/transition-animation/transition-named-css.png)

##==##

<!-- .slide -->
# CSS transitions et CSS animations

- les transitions sont utilisés avec les __animations__ et __transitions CSS natives__
- les animations peuvent être coûteuses 
    - favoriser les animations qui n'affecte pas la mise en page du document (__transform__ ,__opacity__)
    - __CSS-Triggers (https://csstriggers.com/)__ aide à savoir si un propriété déclenche la mise en page
