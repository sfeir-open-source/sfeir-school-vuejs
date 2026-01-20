<!-- .slide: class="sfeir-basic-slide" -->

# What is lazy-loading for

<br><br>

- Allows loading components on demand<br><br>
- Reduces the JS bundle size<br><br>

##==##

<!-- .slide: class="sfeir-basic-slide" -->

# How to implement it

<br><br>

- Async component <br><br>
- Dynamic import

##==##

<!-- .slide: class="tc-multiple-columns" -->

##++##

# Async component

<br/><br/><br/>

- Defined as a function returning the component

##++##

##++## class="with-code inconsolata"

<br/><br/><br/><br/><br/><br/>

```typescript
const home = () => Promise.resolve({});
```

<!-- .element: class="big-code"-->

##++##

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata" -->

# Dynamic import

<br/><br/><br/>

```typescript
const home = () => import('@/views/Home.vue');
```

<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata" -->

# Router vs Router with lazy-loading

<br/><br/>

```typescript
const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: () => import('./Home.vue'), name: 'home' },
  { path: '/people', component: () => import('./People.vue'), name: 'people' },
];
```

<!-- .element: class="big-code"-->
