<!-- .slide: class="sfeir-basic-slide with-code inconsolata" -->

# Implementing the `router` file

<br/>

```typescript
import { createRouter, createWebHashHistory} from 'vue-router';
import Home from '@/pages/home.vue';
import People from '@/pages/people.vue';
const APP_ROUTES = [
  { path: '/', redirect: '/home' }
  { path: '/home', component: Home, name: 'home' },
]
return createRouter({ history: createWebHashHistory(), routes: APP_ROUTES });
```

<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata" -->

# Register routing in a Vue instance

<br/>

```typescript
import APP_ROUTING from '@/pages/router.ts';
import App from './App.vue';
import { createApp } from 'vue';

createApp(APP).use(APP_ROUTING).mount('#app');
```

<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata" -->

# Required tag

<br>
Navigation is done using the `router-view` tag
<br/><br/><br/>

```html
<router-view></router-view>
```

<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata" -->

# Access routing with the Composition API

Two composables: <br/><br/>

- **useRoute()**: lets you get information about the current route (params, query params, etc.) <br/><br/>
- **useRouter()**: lets you get the router to navigate programmatically <br/><br/>

```html
<script lang="ts" setup>
  import { useRoute, useRouter } from 'vue-router';
  const route = useRoute();
  const router = useRouter();
</script>
```

<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->

# Get a route parameter

The `useRoute` composable lets you get your route params <br/><br/>

```html
<script lang="ts" setup>
  import { useRoute } from 'vue-router';
  const route = useRoute();
  const isUser = route.params.id;
</script>
```

<!-- .element: class="big-code"-->

<br/><br/>

Note: `params` is reactive; use `toRefs` if you want to destructure.

<!-- .element: class="important"-->

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->

# Navigate programmatically

The `useRouter` composable lets you navigate <br/><br/>

```html
<script lang="ts" setup>
  import { useRouter } from 'vue-router';
  const router = useRouter();
  router.push({ name: 'people-details', params: { id: 12 } });
</script>
```

<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="sfeir-basic-slide"-->

# `useRouter` API

`useRouter` exposes several ways to navigate;<br/><br/>

- push(): adds an entry to the navigation history <br/><br/>
- go(): moves backward/forward in the navigation history <br/><br/>
- replace(): replaces the current history entry

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->

# Navigate via the template

Vue Router provides a global component named `RouterLink` that enables navigation in the template <br/><br/>

```html
<template>
  <RouterLink :to={ name: 'people-details', params: { id: people.id }}>
    <a href="#">Details de la personne</a>
  </RouterLink>
</template>
```

<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="sfeir-basic-slide with-code"-->

# Use routing with the Suspense API

Chances are your Vue components are async.

So it makes sense to pair routing with the Suspense API. <br/><br/>

```html
<template>
  <router-view v-slot="{ Component }">
    <Suspense>
      <main v-if="Component">
        <Component :is="Component" />
      </main>
    </Suspense>
  </router-view>
</template>
```

<!-- .element: class="medium-code"-->
