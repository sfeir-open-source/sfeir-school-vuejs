<!-- .slide: class="sfeir-basic-slide"-->
# Qu'est ce que le pattern de composition

La composition pattern , est un pattern d'assemblage de fonctions <br/><br/>

Il permet de: <br/><br/>
- centraliser la logique sur une entité (user, people, etc) <br/><br/>
- réduire la duplication de code <br/><br/>
- assemblez les fonctions pour construire une fonctionnalité


##==##

# Comment réaliser une fonction de composition
<br/><br/>

- fichier qui exporte une fonction  qui retourne une API <br/><br/>
- la logique sur cette entité se trouve dans cette fonction <br/><br/>
- préfixer le nom de sa fonction par use: ex usePeople

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->
# Un exemple de fonction de composition
<br/><br/>

```typescript
const people  = ref<People[]>=([]);
export function usePeople() {
  return {
    people
  }
}
```
<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="two-column-layout"-->
# La composition dans son ensemble
##--##
<!-- .slide: class="sfeir-basic-slide with-code"-->
<br/><br/>

```typescript
const user = reactive({
  name: 'John',
  age: 29
});
export function useUser() {
  return {
    user
  }
};
```
<!-- .element: class="medium-code"-->
##--##
<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->
<br/><br/>

```html
<template>
  <h1>{{ user.name }} {{ user.age }}</h1>
</template>
<script lang="ts" setup>
import { useUser } from '@/composable/user.composable';
const { user } = useUser();
</script>
```
<!-- .element: class="medium-code"-->



