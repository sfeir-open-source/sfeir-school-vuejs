<!-- .slide -->
# Concept d'utilisation
Un filtre permet de <b>transformer</b> une donnée pour un affichage
<!-- .element: class="full-center" -->

##==##

<!-- .slide" -->
# Exemple
<br><br>

![full-center full-height](assets/images/school/filters/exemple_filter_date.png)

##==##
<!-- .slide: class="sfeir-basic-slide" -->
# Exemple
<br><br>

![full-center full-height](assets/images/school/filters/exemple_filter_uppercase.png)

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata" -->
# Syntax

- computed <br/><br/>
- fonction si on souhaite passer un paramètre <br/><br/>

```html
<template>{{ longName }}</template>
<script lang="ts" setup>
import { computed } from 'vue';
const firstname = ref('SFEIR');
const lastname = ref('LUXEMBOURG');
const longName = computed(() => `${firstname.value} ${lastname.value}`);
</script>
```
<!-- .element: class="big-code"-->
