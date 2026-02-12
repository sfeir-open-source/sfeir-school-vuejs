<!-- .slide: class="sfeir-basic-slide with-code inconsolata" -->

# Model-driven forms with Vuelidate

- Add the Vuelidate dependency to your project <br/><br/><br/>

```bash
npm install --save @vuelidate/core
```

<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata" -->

# Template implementation

- Specify the event that triggers state changes ($touch: becomes dirty, $reset: becomes pristine)
- Use v-model for data binding
  <br/><br/>

```html
<template>
  <form>
    <input type="text" v-model="v$.surname.$model" @blur="v$.surname.$touch" />
  </form>
</template>
```

<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="with-code inconsolata" -->

# Implementation in the component / composable

- Describe the form model
- Each field is a key with its constraints
- **useVuelidate** composable that binds validation rules to the form
  <br/><br/><br/>

```typescript
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';

const person = reactive({ name: '' });
const rules = { name: required };
const v$ = useVuelidate(rules, person);
```

<!-- .element: class="small-code"-->

<br/><br/>

Note: useVuelidate returns a computed ref

<!-- .element: class="important bold"-->

##==##

<!-- .slide: class="with-code inconsolata" -->

# Error handling

- Access the v$ property in the template to access each field
- Use the field’s $error object to know whether there is an error
- Use the field’s constraint objects (required, minLength, etc.)

<br/><br/>

```vue
<template>
  <form>
    <input :class="{ error: v$.surname.$error }" type="text" v-model="v$.surname.$model" @blur="v$.surname.$touch" />
    <span v-for="{ $message, $uid } in v$.surname.$errors" :key="$uid">{{ $message }}</span>
  </form>
</template>
```

<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="with-code inconsolata" -->

# Validation rules

<br>

With Vuelidate, validation rules live in another package: **@vuelidate/validators** <br/><br/>

```javascript
import { required } from '@vuelidate/validators';
```

<!-- .element: class="big-code" -->

<br/><br/>

For more information about the validation rules provided by Vuelidate: https://vuelidate-next.netlify.app/validators.html

<!-- .element: class="important bold"-->

##==##

<!-- .slide: class="exercice" -->

# Exercise: 16-vuelidate

## Exercise

<br>

A README is available in the folder

<!-- .element: class="full-center bold"-->

##==##

<!-- .slide: class="exercice" -->

# Exercise: 16-vuelidate

## Solution

<b>16-vuelidate-solution</b>

<!-- .element: class="full-center" -->
