<!-- .slide -->
# Les modifiers : concepts et généralités
- Permet de customiser une directive
- Peuvent être chaînés
- Se place directement après un .
<br><br>

![center](assets/images/school/modifiers/modifiers_exemple.png)

##==##

<!-- .slide -->
# Les modifiers pour les events
<br>

- Les modifiers les plus courants pour les events sont les suivants :
    - .stop
    - .prevent
    - .self
    - .once<br><br>

- Vous trouverez la liste complète des possibilités sur cette page : __https://v3.vuejs.org/guide/events.html#event-modifiers__


##==##

<!-- .slide -->
# Les modifiers sur le clavier
<br>

- S'implemente de la manière suivante : __.(keyCode | keyAlias)__
- On peut définir des alias avec la syntax suivante : __Vue.config.keyCodes.f1 = 112__
<br><br>

![center](assets/images/school/modifiers/modifiers_clavier.png)

Notes:
 - keyAlias peuvent être nombreux: .enter, .tab, .delete, .space, .up ....
 - Documentation suivant le lien suivant: https://vuejs.org/v2/guide/events.html#Key-Modifiers

##==##

<!-- .slide -->
# Les modifiers de v-model

- lazy => changement de stratégie de synchronisation
- number => caster obligatoirement en number
- trim => éliminer les espaces superflus
<br><br>

![center](assets/images/school/forms/v-model_modificators.png)
