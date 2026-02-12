<!-- .slide: class="sfeir-basic-slide" -->

# Custom directives: why?

<br/><br/>

- **Often the component is enough on its own**
- Enhance the behavior of a native element
- Register locally or globally
- Can be a simple function

##==##

<!-- .slide: class="sfeir-basic-slide" -->

# Directive lifecycle

- **created**: called once before the directive’s attributes are bound
- **beforeMount**: called before the element is inserted into the document
- **mounted**: called when the parent element and all its children are inserted into the document
- **beforeUpdate**: called before the parent component is updated
- **updated**: called after the parent component and its children are updated
- **beforeUnmount**: called before the parent component is unmounted
- **unmounted**: called after the parent component is unmounted

<br><br>

Notes:

- Each lifecycle hook is a function that takes multiple parameters

##==##

<!-- .slide" -->

# Lifecycle hook parameters

<br><br>

- **el**: element the directive is attached to<br><br>
- **binding**: object with the following properties: name, value, expression, arg, modifiers<br><br>
- **vnode**: virtual node produced by the Vue compiler<br><br>
- **oldNode**: previous virtual node (available only in update and componentUpdated)<br><br>

Notes:

- name: the directive name
- value: value passed to the directive => `v-directive='nicolas'` here `value = nicolas`
- expression: expression bound as a string => `v-directive="i > 1"` here `expression = i > 1`
- arg: argument passed to the directive => `v-directive:foo` here `arg = foo`
- modifiers: object containing modifiers => `v-directive.prevent.stop` => `modifiers = { prevent: true, stop: true }`

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->

## Write a directive

<br/><br/><br/>

```typescript
export const vFocus = {
  mounted(el: HMLInputElement): void {
    el.focus();
  },
};
```

<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="sfeir-basic-slide"-->

# How to use directives

<br/><br/>

- globally <br/><br/>
- locally

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->

# Register your directive globally

<br/><br/>

```typescript
import { vFocus } from '@/directives/focus';
import { createApp } from 'vue';
import App from './app.vue';

createApp(App).directive('v-focus', vFocus).mount('#app');
```

<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->

## Register your directive locally

<br/><br/>

```html
<script lang="ts" setup>
  import { vFocus } from '@/directives/focus';
</script>
```

<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="sfeir-basic-slide with-code"-->

## Use your directive

<br/><br/>

```html
<input type="text" v-focus />
```

<!-- .element: class="big-code"-->
