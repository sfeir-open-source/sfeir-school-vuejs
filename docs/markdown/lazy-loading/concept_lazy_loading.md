<!-- .slide: class="sfeir-basic-slide" -->
# A quoi sert le lazy-loading
<br><br>

- Permet de charger les composants à la demande<br><br>
- Réduction du bundle js<br><br>


##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Comment le mettre en place
<br><br>

- Async component <br><br>
- Dynamic import

##==##

<!-- .slide: class="two-column-layout" -->
# Async component
##--##
<br/><br/><br/>

- Définit en tant que fonction retournant le composant
##--##
<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->
<br/><br/><br/>

```typescript
const home = () => Promise.resolve({ });
```
<!-- .element: class="big-code"-->


##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata" -->
# Import dynamique
<br/><br/><br/>

```typescript
const home = () => import('@/views/Home.vue');
```
<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata" -->
# Router vs Router avec lazy-loading
<br/><br/>

```typescript
const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: () => import('./Home.vue'), name: 'home' },
  { path: '/people', component: () => import('./People.vue'), name: 'people' },
];
```
<!-- .element: class="big-code"-->


