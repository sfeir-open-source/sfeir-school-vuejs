<!-- .slide: class="sfeir-basic-slide"-->
# Qu'est ce que la Suspense API

La suspense API permet de gérer des composants asynchrones
<!-- .element: class="full-center important"-->

##==##

<!-- .slide: class="sfeir-basic-slide"-->
# Comment se caractérise la Suspense API ?

La suspense API est un composant: <br/><br/>
- qui affiche le/les composants asynchrones quand tous les traitements sont réalisés <br/><br/>
- qui affiche un template de fallback tant que tout n'est pas chargé <br/><br/>
- gère les erreurs si le chargement d'un composant asynchrone échoue <br/><br/>

##==##

<!-- .slide: class="sfeir-basic-slide"-->
# Comment rendre un composant asynchrone ?

Deux possibilités s'offre à nous <br/><br/>

- avec la méthode defineAsyncComponent <br/><br/>
- avec le async script setup et le top level await <br/><br/>

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata" -->
# Un composant asynchrone avec defineAsyncComponent

<br/><br/><br/>

```typescript
import { defineAsyncComponent } from 'vue';

export default defineAsyncComponent(() => import('@/components/People.vue'));
```
<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata" -->
# Un composant asynchrone avec le script setup

<br/><br/><br/>

```html
<script lang="ts" async setup>
import {  ref } from 'vue';
import {  Person } from  '@/models/person';
const user = ref<Person>({} as Person);
user.value = (await axios.get<Person>('http://localhost:9000/api/people/1')).data;
</script>
```
<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->
# Utiliser la Suspense API
<br/><br/><br/>

```html
<main>
  <Suspense>
    <Home />
    <template #fallback>
      Loading in progress ...
    </template>
  </Suspense>
</main>
```
<!-- .element: class="big-code"-->
