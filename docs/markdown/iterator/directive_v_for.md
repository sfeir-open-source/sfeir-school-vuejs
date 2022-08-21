<!-- .slide" -->
# La directive v-for
<br>

- Peut itérer sur un tableau, un objet, un nombre et une chaîne <br/> <br/>
- <b>IN</b> sur un tableau / <b>OF</b> sur un object <br/><br/>
- Génère un template par élément

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->
# Itérer sur un tableau
<br/><br/>

```html
<template>
  <nz-card v-for="person in persons" :key="person.id"></nz-card>
</template>
```
<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->
# Itérer sur un objet

<br/><br/>

```html
<template>
  <span v-for="(propertyValue, propertyName, index) of person" :key="index">
    {{ propertyName }}: {{ propertyValue }}
  </span>
</template>
```
<!-- .element: class="big-code"-->

