<!-- .slide" -->

# The v-for directive

<br>

- Can iterate over an array, an object, a number, and a string <br/> <br/>
- <b>IN</b> on an array / <b>OF</b> on an object <br/><br/>
- Generates a template per item

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->

# Iterate over an array

<br/><br/>

```html
<template>
  <nz-card v-for="person in persons" :key="person.id"></nz-card>
</template>
```

<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->

# Iterate over an object

<br/><br/>

```html
<template>
  <span v-for="(propertyValue, propertyName, index) of person" :key="index"> {{ propertyName }}: {{ propertyValue }} </span>
</template>
```

<!-- .element: class="big-code"-->
