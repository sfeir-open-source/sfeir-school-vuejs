<!-- .slide: class="sfeir-basic-slide with-code inconsolata" -->
# Template driven form avec Vee-Validate

- Ajoutez la dépendance => <b> npm install vee-validate --save</b>
- Ajoutez vee-validate au projet (à la demande)
<br><br>

```html
<template>
  <Form>
    <Field name="surname" />
  </Form>
</template>
<script lang="ts" setup>
import { Form, Field } from 'vee-validate';
</script>
```
<!-- .element: class="big-code"-->


##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata" -->
# Configuration

La configuration __n'est pas nécessaire__ pour lancer la validation ou le bon fonctionnement du plugin<br/><br/>

```typescript
configure({
  validateOnBlur: true,
  generateMessage: localize('en', {
    messages: {
      required: 'The {field} is required',
      min: 'The {field} must be 0:{min} characters minimum',
      max: 'The {field} must be less than 0:{max} characters maximum'
    }
  })
});
```
<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata" -->
# La validation "high level"

- Possibilité de valider avec Yup ou par champs avec les règles de validations prédéfinies <br/><br/>
- rules : règles de validation <br/><br/>
- v-slot : passe des propriétés au template transclude <br/><br/>
<br/>

```html
<template>
  <Form>
    <Field v-model="surname" name="surname" rules="required|min:2" v-slot="{field, value, meta}">
      <input v-bind="field" type="text" />
    </Field>
  </Form>
</template>
```
<!-- .element: class="medium-code"-->

Notes:
 - les règles peuvent être un template string comme de l'exemple ou un objet => :rules="{required: true, min:{ length: 3 }}"

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->
# Installer les règles prédéfinies de veevalidate

- Package séparé (@vee-validate/rules) <br/><br/><br/>

```bash
npm install --save @vee-validate/rules
```
<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="two-column-layout"-->
# Définir ses règles de validation
##--##
<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->
<br/><br/>

```typescript
// file: veevalidate configuration
import { required, min } from '@veevalidate/rules';
import { defineRule } from 'vee-validate'
defineRule('required', required);
defineRule('min', min);
```
<!-- .element: class="big-code"-->
##--##
<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->
<br/><br/>

```typescript
// file: main.ts
import './veevalidate.config';
import APP from './App.vue';
import { createApp } from 'vue';
createApp(APP).mount('#app');
```
<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->
# Définir une règle de validation custom

- Une règle est une simple **fonction**
<br/><br/><br/>

```typescript
defineRule('mustBeSfeirName', value => value === 'SFEIR' || 'Name must be SFEIR' )
```
<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->
# La gestion des erreurs

- Un composant unique
<br/><br/>

```html
<template>
  <Form>
    <Field name="surname" v-slot="{ field }" :rules="{ required: true }">
      <input v-bind="field" type="text" />
      <ErrorMessage name="surname" />
    </Field>
  </Form>
</template>
```
<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Les règles de validations classiques

- VeeValidate procure un ensemble de build-in validators <br/><br/>
- Build-in Validators disponible avec le package **@veevalidate/rules** <br/><br/>
- Liste non-exhaustive:
    - required
    - min
    - max
    - length

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->
# Intégration avec Naive Ui

L'Intégration avec Naive Ui n'est pas encore réalisée <br/><br/>
<!-- .element: class="important bold"-->

```html
<template>
  <Form>
    <Field name="surname" v-model="surname" v-slot="{ value, meta, handleChange, handleBlur }">
      <n-input :value="(value as string)" @update:value="handleChange" @blur="handleBlur" type="text" />
      <ErrorMessage name="surname" />
    </Field>
  </Form>
</template>
```
<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="exercice" -->
# Exercice : 15-veevalidate
## Exercice
<br>

Un readme est disponible dans le dossier
<!-- .element: class="full-center bold"-->


##==##

<!-- .slide: class="exercice" -->
# Exercice: 15-vee-validate
## Solution
<b>15-veevalidate-solution</b>
<!-- .element: class="full-center" -->



