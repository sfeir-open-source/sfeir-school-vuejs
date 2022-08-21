<!-- .slide: class="sfeir-basic-slide with-code inconsolata" -->
# Définition d'un évènement

- Nom de l'event précédé par __v:on__ ou __@__(notation simplifiée)
- Event fait généralement référence à une fonction définie dans la propriété "methods" de l'instance de votre composant
- Récupération des datas de l'event dans le paramètre <strong>$event</strong> <br/><br/>

```html
<template>
  <button type="button" @click="showAlert">Click Me</button>
</template>
<script lang="ts" setup>
function showAlert(event: MouseEvent): void {
  alert(event);
}
</script>
```
<!-- .element: class="medium-code"-->

