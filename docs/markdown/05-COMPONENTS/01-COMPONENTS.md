<!-- .slide: class="tc-multiple-columns" -->

##++##

# A component tree

<br><br>

- A Vue.js application is a composition of components<br/><br/>
- Children are added to the parent if they are used in the parent template<br/><br/>
- Every component must be declared in the "components" object<br/>

##++##

##++## class="with-code inconsolata"

<br/><br/><br/><br/><br/><br/>

```typescript
import { defineComponent } from 'vue';
import TodoItem from '@/components/TodoItem.vue';

export default defineComponent({
  components: {
    TodoItem,
  },
  setup() {},
  template: '<TodoItem/>',
});
```

<!-- .element: class="medium-code"-->

##++##

##==##

# Create a component / global component

<br><br>

- Use `Vue.component(tagName, optionObject)`<br><br>
- Same options as the app instance<br><br>

##==##

<!-- .slide: class="tc-multiple-columns" -->

##++##

# Create a component / single-file component

<br/><br/>

- Everything in a single file<br/><br/>
- Ability to write CSS styles <br/><br/>
- Ability to write a classic template with autocompletion<br/><br/>
- Vite ensures compatibility and error checking<br/><br/><br/>

##++##

##++## class="with-code inconsolata"

<br/><br/><br/><br/><br/><br/>

```html
<template>
  <TodoItem />
</template>
<script lang="ts">
  import TodoItem from '@/components/TodoItem.vue';

  export default defineComponent({
    components: {
      TodoItem,
    },
    setup() {},
  });
</script>
```

<!-- .element: class="medium-code"-->

##++##

##==##

<!-- .slide: class="tc-multiple-columns" -->

##++## class="with-code inconsolata"

# `<script setup>`: simplify the syntax

<br/>

```html
<template>
  <TodoItem />
</template>
<script lang="ts">
  import TodoItem from '@/components/TodoItem.vue';

  export default defineComponent({
    components: {
      TodoItem,
    },
    setup() {},
  });
</script>
```

<!-- .element: class="medium-code"-->

##++##

##++## class="with-code inconsolata"

<br/><br/><br/><br/><br/><br/>

```html
<template>
  <TodoItem />
</template>
<script lang="ts" setup>
  import TodoItem from '@/components/TodoItem.vue';
</script>
```

<!-- .element: class="medium-code"-->

##++##

##==##

# `<script setup>`

- Syntactic sugar at compile time for SFCs using the Composition API <br/><br/>
- More concise syntax, less boilerplate <br/><br/>
- Better runtime performance <br /><br/>
- Better TypeScript autocompletion in IDEs <br/> <br/>
- Exports all variables and functions by default <br/><br/>

##==##

<!-- .slide: class="with-code inconsolata"-->

# Example

```html
<template>
  {{ title }}
  <TodoItem />
</template>
<script lang="ts" setup>
  import TodoItem from '@/components/TodoItem.vue';

  const title = ref<string>('Details of Todo');
</script>
```

<!-- .element: class="big-code"-->
