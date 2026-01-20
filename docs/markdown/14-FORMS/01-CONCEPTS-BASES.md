<!-- .slide: class="tc-multiple-columns" -->

##++##

# The role of a form

##++##

<br><br><br>

- Collect user data<br><br>
- Validate user input

##++##

##++##

<br><br><br>

![](assets/images/school/forms/google_forms.png 'h-600 center')

<!-- .element: align-image -->

##++##

##==##

<!-- .slide: class="transition bg-white" -->

# Collect data

##==##

<!-- .slide: class="with-code inconsolata" -->

# A magic directive: v-model

<br>

- Enables **two-way data binding**
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

- Two-way data binding creates a view ↔ controller link:
- If the template changes, the change is reflected in the controller
- If the controller changes, the change is reflected in the template

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata" -->

# Using v-model

- Place this directive on input, textarea, checkbox, radio, select and components
- Can be combined with v-for to list options (select box)
- Use v-bind to bind dynamic values (radio / checkbox)
  <br><br>

```html
<template>
  <input type="checkbox" name="person" v-model="choice" v-bind:true-value="'Google Cloud'" v-bind:false-value="'Azure'" />
  <input type="radio" name="person" v-model="choice" v-bind:value="true" />
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

# `v-model` modifiers

- lazy => changes the sync strategy
- number => forces casting to number
- trim => removes extra whitespace
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

# Exercise 12-forms

## Exercise

A README is available in the folder

<!-- .element: class="bold full-center"-->

##==##

 <!-- .slide: class="exercice" -->

# Exercise 12-forms

## Solution

**12-forms-solution**

 <!-- .element: class="full-center" -->

##==##

 <!-- .slide: class="exercice" -->

# Exercise 13-update

## Exercise

A README is available in the folder

<!-- .element: class="bold full-center"-->

##==##

 <!-- .slide: class="exercice" -->

# Exercise 13-update

## Solution

**13-update-solution**

 <!-- .element: class="full-center" -->

##==##

<!-- .slide: class="exercice"-->

# Exercise 14-composable-form

## Exercise

A README is available in the folder

<!-- .element: class="full-center bold"-->

##==##

 <!-- .slide: class="exercice" -->

# Exercise 14-composable-form

## Solution

**14-composable-form-solution**

 <!-- .element: class="full-center" -->
