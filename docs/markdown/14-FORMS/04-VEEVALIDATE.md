<!-- .slide: class="sfeir-basic-slide with-code inconsolata" -->

# Template-driven forms with Vee-Validate

- Add the dependency => <b> npm install vee-validate --save</b>
- Add vee-validate to the project (as needed)
  <br><br>

```vue
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

Configuration is **not required** to start validation or for the plugin to work correctly<br/><br/>

```typescript
configure({
  validateOnBlur: true,
  generateMessage: localize('en', {
    messages: {
      required: 'The {field} is required',
      min: 'The {field} must be 0:{min} characters minimum',
      max: 'The {field} must be less than 0:{max} characters maximum',
    },
  }),
});
```

<!-- .element: class="medium-code"-->

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata" -->

# High-level validation

- You can validate with Yup, or per field using the built-in validation rules <br/><br/>
- rules: validation rules <br/><br/>
- v-slot: passes props to the slotted template <br/><br/>
  <br/>

```html
<template>
  <form>
    <Field v-model="surname" name="surname" rules="required|min:2" v-slot="{field, value, meta}">
      <input v-bind="field" type="text" />
    </Field>
  </form>
</template>
```

<!-- .element: class="medium-code"-->

Notes:

- rules can be a template string like in the example, or an object => :rules="{required: true, min:{ length: 3 }}"

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->

# Install VeeValidate built-in rules

- Separate package (@vee-validate/rules) <br/><br/><br/>

```bash
npm install --save @vee-validate/rules
```

<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="tc-multiple-columns"-->

##++## class="with-code inconsolata"

# Define your validation rules

<br/><br/>

```typescript
// file: veevalidate configuration
import { required, min } from '@veevalidate/rules';
import { defineRule } from 'vee-validate';
defineRule('required', required);
defineRule('min', min);
```

<!-- .element: class="big-code"-->

##++##

##++## class="with-code inconsolata"

<br/><br/><br/><br/><br/>

```typescript
// file: main.ts
import './veevalidate.config';
import APP from './App.vue';
import { createApp } from 'vue';
createApp(APP).mount('#app');
```

<!-- .element: class="big-code"-->

##++##

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->

# Define a custom validation rule

- A rule is a simple **function**
  <br/><br/><br/>

```typescript
defineRule('mustBeSfeirName', value => value === 'SFEIR' || 'Name must be SFEIR');
```

<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->

# Error handling

- A single component
  <br/><br/>

```html
<template>
  <form>
    <Field name="surname" v-slot="{ field }" :rules="{ required: true }">
      <input v-bind="field" type="text" />
      <ErrorMessage name="surname" />
    </Field>
  </form>
</template>
```

<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="sfeir-basic-slide" -->

# Common validation rules

- VeeValidate provides a set of built-in validators <br/><br/>
- Built-in validators are available via **@veevalidate/rules** <br/><br/>
- Non-exhaustive list:
  - required
  - min
  - max
  - length

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->

# Integration with Naive UI

Integration with Naive UI is not done yet <br/><br/>

<!-- .element: class="important bold"-->

```html
<template>
  <form>
    <Field name="surname" v-model="surname" v-slot="{ value, meta, handleChange, handleBlur }">
      <n-input :value="(value as string)" @update:value="handleChange" @blur="handleBlur" type="text" />
      <ErrorMessage name="surname" />
    </Field>
  </form>
</template>
```

<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="exercice" -->

# Exercise: 15-veevalidate

## Exercise

<br>

A README is available in the folder

<!-- .element: class="full-center bold"-->

##==##

<!-- .slide: class="exercice" -->

# Exercise: 15-vee-validate

## Solution

<b>15-veevalidate-solution</b>

<!-- .element: class="full-center" -->
