<!-- .slide: class="sfeir-basic-slide"-->

# What is the composition pattern?

The composition pattern is a pattern for composing functions <br/><br/>

It allows you to: <br/><br/>

- centralize logic around an entity (user, people, etc.) <br/><br/>
- reduce code duplication <br/><br/>
- assemble functions to build a feature

##==##

# How to create a composable function

<br/><br/>

- a file that exports a function returning an API <br/><br/>
- the logic for this entity lives inside this function <br/><br/>
- prefix the function name with `use`: e.g. `usePeople`

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->

# An example composable function

<br/><br/>

```typescript
const people = ref < People[] >= ([]);

export function usePeople() {
  return {
    people
  }
}
```

<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="tc-multiple-columns"-->

##++## class="with-code inconsolata"

# Composition end-to-end

```typescript
const user = reactive({
  name: 'John',
  age: 29,
});

export function useUser() {
  return {
    user,
  };
}
```

<!-- .element: class="big-code"-->

##++##

##++## class="with-code inconsolata"

<br/><br/><br/><br/>

```html
<template>
  <h1>{{ user.name }} {{ user.age }}</h1>
</template>
<script lang="ts" setup>
  import { useUser } from '@/composable/user.composable';

  const { user } = useUser();
</script>
```

<!-- .element: class="big-code"-->

##++##
