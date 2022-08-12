<!-- .slide: class="sfeir-basic-slide with-code inconsolata" -->
# Implémentation du ficher router.js

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
# Enregistrer son routing dans une instance Vue
```typescript
import APP_ROUTING from '@/pages/router.ts';
import App from './App.vue';
import { createApp } from 'vue';

createApp(APP).use(APP_ROUTING).mount('#app');
```
<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata" -->
# Balise obligatoire
<br>
La navigation se fait à l'aide de la balise router-view
<br/><br/><br/>

```html
<router-view></router-view>
```
<!-- .element: class="big-code"-->


##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata" -->
# Récupérer le routing avec la composition API

Deux compositions: <br/><br/>
- **useRoute()**: permet de récupérer les informations sur la route (params, queryParams etc) <br/><br/>
- **useRouter()**: permet de récupérer le router pour naviguer de manière programmatique <br/><br/>

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
# Récupérer un paramètre de votre route

Le composable useRoute, vous permet de récupérer les paramètre de votre route <br/><br/>

```html
<script lang="ts" setup>
import { useRoute } from 'vue-router';
const route = useRoute();
const isUser = route.params.id;
</script>
```
<!-- .element: class="big-code"-->

<br/><br/>

Attention params est une propriété réactive, pensez à toRefs si vous voulez destructurer.
<!-- .element: class="important"-->

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->
# Naviguer de manière programmatique

Le composable useRouter, vous permet de naviguer <br/><br/>

```html
<script lang="ts" setup>
import { useRouter } from 'vue-router';
const router = useRouter();
router.push({ name: 'people-details', params: { id: 12 }});
</script>
```
<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="sfeir-basic-slide"-->
# API de useRouter

useRouter expose plusieurs façon de naviguer;<br/><br/>
- push(): ajoute une entrée dans l'historique de navigation <br/><br/>
- go(): permet de se déplacer backward/forward dans l'historique de navigation <br/><br/>
- replace(): remplace l'entrée courant dans l'historique

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->
# Naviguer par le template

Vue router offre un component global nommé RouterLink qui permet la navigation via le template <br/><br/>

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
# Utiliser le routing avec la Suspense API

Il y a de forte chance que vos composants de vue soit asynchrone.

Il est donc judicieux de coupler le routing avec la Suspense API. <br/><br/>

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
<!-- .element: class="big-code"-->
