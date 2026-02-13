<!-- .slide: class="sfeir-basic-slide" -->

# What is prop drilling

<br><br>

- Passing a prop from a parent to a deep child through many layers<br><br>
- Intermediate components only relay data, they do not use it<br><br>
- The deeper the tree, the more repetitive and hard to maintain it becomes

##==##

<!-- .slide -->

# Prop drilling problems

<br>

- Passing the same data through many intermediate components<br><br>
- Components that do not use the data still need to forward it<br><br>

![](assets/images/school/injection/props-drilling.png 'h-400 center')

##==##

<!-- .slide: class="sfeir-basic-slide" -->

# Why `provide` / `inject`

<br><br>

- Avoids prop drilling in deep component trees<br><br>
- Shares dependencies from an ancestor to all descendants<br><br>
- Keeps components decoupled from concrete implementations

##==##

<!-- .slide -->

# Prop drilling solved with injection

<br>

![](assets/images/school/injection/props-drilling-solution.png 'h-700 center')

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata" -->

# Basic provide

<br><br>

```typescript
import { provide, ref } from 'vue';

const count = ref(0);
provide('counter', count);
```

<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata" -->

# Basic inject

<br><br>

```typescript
import { inject } from 'vue';

const count = inject('counter');
```

<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata" -->

# App-level provide

<br><br>

```typescript
import { createApp } from 'vue';

const app = createApp(App);
app.provide('counter', counterStore);
```

<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata" -->

# Injection with default value

<br><br>

```typescript
const value = inject('message', 'default value');
```

<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata" -->

# Reactivity guideline

<br><br>

```typescript
// provider component
import { provide, ref, readonly } from 'vue';

const location = ref('North Pole');
const updateLocation = () => (location.value = 'South Pole');

provide('location', {
  location: readonly(location),
  updateLocation,
});
```

<!-- .element: class="medium-code"-->

##==##

<!-- .slide: class="sfeir-basic-slide" -->

# Why use `Symbol` keys

<br><br>

- Prevents key collisions in large applications<br><br>
- Makes dependencies explicit and unique by design<br><br>
- Safer for reusable components and shared libraries

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata" -->

# Use symbol keys

<br><br>

```typescript
import type { InjectionKey } from 'vue';

export const PEOPLE_SERVICE_TOKEN: InjectionKey<PeopleService> = Symbol('PeopleService');
```

<!-- .element: class="big-code"-->
