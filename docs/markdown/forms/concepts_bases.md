<!-- .slide: class="two-column-layout" -->
# Le rôle d'un formulaire
##--##
<br><br><br>

- Collecter des données utilisateur<br><br>
- Valider les données saisies par les utilisateurs

##--##
<br><br><br>

![h-600 center](assets/images/school/forms/google_forms.png)
<!-- .element: align-image -->

##==##

<!-- .slide: class="transition-bg-grey-1 underline" -->
# Collecter des données

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata" -->
# Un directive magique: v-model
<br>

- Permet de réaliser un __two-way databinding__
<br><br>

```html
<template>
  <input type="text" name="person" v-model="name" />
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const name = ref<string>('');
</script>
```
<!-- .element: class="big-code"-->

Notes:
- un changement de détection two-way databinding permet de réaliser une liaison vue-controller controller-vue:
- Si le template est modifié, la modification est répercutée sur le controlleur
- Si le controlleur est modifié, la modification est répercutée sur le template

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata" -->
# L'utilisation de v-model


- Placement de cette directive sur input, textarea, checkbox, radio, select et composants
- Peut être combiné avec v-for pour lister les options (select box)
- Utilisation de v-bind pour associer des valeurs dynamiques (radio / checkbox)
<br><br>

```html
<template>
<input type="checkbox" name="person" v-model="choice" v-bind:true-value="'Google Cloud'" v-bind:false-value="'Azure'"  />
<input type="radio" name="person" v-model="choice" v-bind:value="true"  />
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const choice = ref<string>('');
const answer = ref<string>('');
</script>
```
<!-- .element: class="medium-code"-->
##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata" -->
# Les modifiers de v-model

- lazy => changement de stratégie de synchronisation
- number => caster obligatoirement en number
- trim => éliminer les espaces superflus
<br><br>

```html
<template>
  <input type="text" name="person" v-model.trim="name" />
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const name = ref<string>('');
</script>
```
<!-- .element: class="big-code"-->


##==##

<!-- .slide: class="exercice" -->
# Exercice 12-forms
## Exercice
Un readme est disponible dans le dossier
<!-- .element: class="bold full-center"-->

 ##==##

 <!-- .slide: class="exercice" -->
 # Exercice 12-forms
 ## Solution
 **12-forms-solution**
 <!-- .element: class="full-center" -->

 ##==##

 <!-- .slide: class="exercice" -->
 # Exercice 13-update
 ## Exercice
Un readme est disponible dans le dossier
<!-- .element: class="bold full-center"-->

 ##==##

 <!-- .slide: class="exercice" -->
 # Exercice 13-update
 ## Solution
 **13-update-solution**
 <!-- .element: class="full-center" -->

##==##

<!-- .slide: class="exercice"-->
# Exercice 14-composable-form
## Exercice
Un readme est disponible dans le dossier
<!-- .element: class="full-center bold"-->

##==##

 <!-- .slide: class="exercice" -->
 # Exercice 14-composable-form
 ## Solution
 **14-composable-form-solution**
 <!-- .element: class="full-center" -->
