<!-- .slide: class="sfeir-basic-slide with-code inconsolata" -->
# Model driven form avec vuelidate
- Ajoutez la dépendance vuelidate à votre projet <br/><br/><br/>

```bash
npm install --save @vuelidate/core
```
<!-- .element: class="big-code"-->


##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata" -->
# Implémentation dans le template

- Indiquez l'event qui déclenche les changements d'états ($touch: passe en dirty, $reset: passe en pristine)
- v-model pour le databinding
<br/><br/>

```html
<template>
  <form>
    <input type="text" v-model="v$.surname.$model" @blur="v$.surname.$touch" /> 
  </form>
</template>
```
<!-- .element: class="big-code"-->

##==##

<!-- .slide" -->
# Implémentation dans le composant / le composable


- Description du model de formulaire
- Chaque champ est une clé avec ses contraintes
- **useVuelidate** composable liant règles de validation au formulaire
<br/><br/><br/>

```typescript
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';

const person = reactive({ name: ''});
const rules = { name: required };
const v$ = useVuelidate(rules, person);
```
<!-- .element: class="big-code"-->
<br/><br/>

Attention: useVuelidate renvoie une computed
<!-- .element: class="important bold"-->

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata" -->
# Gestion des erreurs


- Accès à la propriété v$ dans le template pour avoir accès à chaque champ
    - Objet $error sur le champ pour savoir s'il y a ou non erreur
    - Objet de contraintes sur un champ (required, minLength)
<br/><br/>

```html
<template>
  <form>
    <input :class="{ error: v$.surname.$error }"
           type="text" v-model="v$.surname.$model"
           @blur="v$.surname.$touch" />
    <span v-for="{ $message, $uid } in v$.surname.$errors" :key="$uid">{{ $message }}</span>
  </form>
</template>
```
<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata" -->
# Les règles de validation
<br>

Avec Vuelidate, les règles de validations se trouve dans un autre package **@vuelidate/validators** <br/><br/>

```javascript
import { required } from '@vuelidate/validators';
```
<!-- .element: class="big-code" -->

<br/><br/>

Pour plus d'information sur les règles de validation proposées par vuelidate: https://vuelidate-next.netlify.app/validators.html
<!-- .element: class="important bold"-->

##==##

<!-- .slide: class="exercice" -->
# Exercice : 16-vuelidate
## Exercice
<br>

Un readme est disponible dans le dossier
<!-- .element: class="full-center bold"-->

##==##

<!-- .slide: class="exercice" -->
# Exercice: 16-vuelidate
## Solution
<b>16-vuelidate-solution</b>
<!-- .element: class="full-center" -->

