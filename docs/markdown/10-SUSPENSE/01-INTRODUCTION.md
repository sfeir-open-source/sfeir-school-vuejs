<!-- .slide: class="sfeir-basic-slide"-->

# What is the Suspense API?

The Suspense API lets you handle async components

<!-- .element: class="full-center important"-->

##==##

<!-- .slide: class="sfeir-basic-slide"-->

# What characterizes the Suspense API?

The Suspense API is a component: <br/><br/>

- that displays async component(s) when all async work is done <br/><br/>
- that displays a fallback template while everything is still loading <br/><br/>
- that handles errors if an async component fails to load <br/><br/>

##==##

<!-- .slide: class="sfeir-basic-slide"-->

# How to make a component async?

Two options are available <br/><br/>

- using the defineAsyncComponent method <br/><br/>
- using async `<script setup>` and top-level await <br/><br/>

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata" -->

# An async component with defineAsyncComponent

<br/><br/><br/>

```typescript
import { defineAsyncComponent } from 'vue';

export default defineAsyncComponent(() => import('@/components/People.vue'));
```

<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="with-code inconsolata" -->

# An async component with `<script setup>`

```html
<script lang="ts" async setup>
  import { ref } from 'vue';
  import { Person } from '@/models/person';

  const user = ref<Person>({} as Person);
  user.value = (await axios.get<Person>('http://localhost:9000/api/people/1')).data;
</script>
```

<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="with-code inconsolata"-->

# Using the Suspense API

```html
<main>
  <Suspense>
    <Home />
    <template #fallback> Loading in progress ... </template>
  </Suspense>
</main>
```

<!-- .element: class="big-code"-->
