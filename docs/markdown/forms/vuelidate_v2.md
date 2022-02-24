<!-- .slide: class="with-code inconsolata" -->
# Vuelidate 2: Mise en context
 
Avec l'arrivée de Vue 3 et la composition api toutes les librairies ont dû s'adapter

__Ainsi est arrivée Vuelidate en version 2__

<br>

__Installation__

```bash
npm install --save @vuelidate/core @vuelidate/validators
```
<!-- .element: class="big-code" -->

<br>

Pour assurer une __compatibilité__ avec vue 2 un package supplémentaire est nécessaire

```bash
npm install --save @vue/composition-api
```
<!-- .element: class="big-code"  -->

##==##

<!-- .slide: class="with-code inconsolata" -->
# Inclure Vuelidate 2 dans son projet

__Pour vue 3__ ..... rien à faire !! et ça c'est cool

__Pour Vue 2__ c'est relativement simple:
<br> <br>

```javascript
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI); 
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->
# Utilisation de Vuelidate 2

Deux import à réaliser dans la partie script de votre composant
<br><br>

```javascript
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
```
<!--.element: class="big-code" -->
<br><br>

- __useValidate__: est une fonction helper de vuelidate réécrit avec la composition api<br><br>
- le package __@vuelidate/validators__ contient l'ensemble des validators build-in de la librairie

##==##

<!-- .slide: class="with-code inconsolata" -->
# Utilisation de Vuelidate 2 avec l'option API

<br><br>

```javascript
export default {
  setup() {
    const v$ = useVuelidate();
  },
  data() {
    return {
     name: ''
    }
  },
  validations() {
    name: { required }
  }
}
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->
# Utilisation de Vuelidate 2 avec la composition api

<br><br>

```javascript
export default {
  setup() {
    const state = reactive({ name: ''});
    const rules = { name: { required }};
    const v$ = useVuelidate(rules, state);
    return {
      state,
      v$
    }
  }
}
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->
# How to display error with vuelidate
<br><br>

```html
<div :class="{ error: v$.name.$errors.length }">
  <input v-model="state.name">
  <div class="input-errors" v-for="error of v$.name.$errors" :key="error.$uid" @input="state.name.$touch">
    <div class="error-msg">{{ error.$message }}</div>
  </div>
</div>
```
<!-- .element: class="big-code" -->

<br><br>
- $state.name.$touch binded to __@input__ is important to make the field dirty

Notes: to avoid using this input add the option auto dirty when declaring the rules on field or use $model property when binding to the v-model property


##==##

<!-- .slide: class="exercice" -->
# Exercice: 22-vuelidate-composition
## Exercice
<br><br>
Reprenez l'exercice 14-vuelidate et implémentez vuelidate 2 de la manière dont vous souhaitez
<!-- .element: class="center" -->

##==##

<!-- .slide: class="exercice" -->
# Exercice: 22-vuelidate-composition
## Solution
**22-vuelidate-composition-solution**
<!-- .element: class="full-center"-->
