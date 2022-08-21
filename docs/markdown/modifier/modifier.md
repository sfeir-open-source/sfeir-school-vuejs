<!-- .slide: class="sfeir-basic-slide with-code inconsolata" -->
# Les modifiers : concepts et généralités
- Permet de customiser une directive <br/><br/>
- Peuvent être chaînés <br/><br/>
- Se place directement après un .
<br/><br/>

```html
<template>
  <form @submit.prevent="submitForm">
    <input v-model.trim="surname" />
  </form>
</template>
```
<!-- .element: class="big-code"-->

##==##

<!-- .slide -->
# Les modifiers pour les events
<br>

- Les modifiers les plus courants pour les events sont les suivants :
    - .stop
    - .prevent
    - .left, .right
    - .middle<br><br>

- Vous trouverez la liste complète des possibilités sur cette page: https://vuejs.org/guide/essentials/event-handling.html#event-modifiers


##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata" -->
# Les modifiers sur le clavier
<br>

- S'implemente de la manière suivante : __.(keyCode | keyAlias)__
- On peut définir des alias avec la syntax suivante : __Vue.config.keyCodes.f1 = 112__
<br/><br/>

```html
<template>
  <input type="text" v-on:keyup.13="submit" />
  <input type="text" v-on:keyup.enter="submit" />
  <input type="text" @keyup.center="submit" />
</template>
```
<!-- .element: class="big-code"-->


Notes:
 - keyAlias peuvent être nombreux: .enter, .tab, .delete, .space, .up ....
 - Documentation suivant le lien suivant: https://vuejs.org/v2/guide/events.html#Key-Modifiers
