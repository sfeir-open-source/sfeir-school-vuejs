<!-- .slide: class="sfeir-basic-slide"-->

# What is Vue.js?

<br/><br/>

- A web framework to build applications quickly <br/><br/>
- Two ways to write components:
  - Options API
  - Composition API
  - You can mix both

##==##

<!-- .slide: class="sfeir-basic-slide"-->

# Why use the Options API?

- Backward compatible with Vue 2 <br/><br/>
- For small to medium applications <br/><br/>
- For stateless components (no state)

##==##

<!-- .slide: class="sfeir-basic-slide"-->

# Why use the Composition API?

- Fully compatible with Vue 2.7 <br/><br/>
- For large applications <br/><br/>
- For stateful components (with state) <br/><br/>
- To address shortcomings in code reuse

<br/><br/>

This training focuses exclusively on the Composition API

<!-- .element: class="center bold important"-->

##==##

<!-- .slide  -->

# Structure of a simple Hello World

<br>
3 parts: <br><br>

- The Vue.js source file <br><br>
- A template <br><br>
- A bootstrap script

Notes:

- The Vue.js source file can come from different sources: Bower, CDN (Google Cloud Storage), npm (most common)
- There are two types of builds: standalone (includes the template compiler) and runtime (only includes the render functions)

##==##

<!-- .slide: class="tc-multiple-columns" -->

##++## class="with-code inconsolata"

# Setup Minimal

```html
<!DOCTYPE html>
<html lang="en">
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

<!-- .element: class="big-code"-->

##++##

##++## class="with-code inconsolata"

<br/><br/>

```typescript
import { createApp } from 'vue';

createApp({
  setup() {
    const name = 'SFEIR';
    return { name };
  },
}).mount('#app');
```

<!-- .element: class="big-code"-->

<br />

```html
<span>Hello {{ name }}</span>
```

<!-- .element: class="big-code"-->

##++##

##==##

<!-- .slide: class="sfeir-sfeir-basic-slide"-->

## What exactly happens?

<br/><br/>

- **createApp**: creates a new Vue application instance <br/><br/>
- **setup**: hook used to initialize a component with the Composition API <br/><br/>
- **mount**: mounts the Vue app into a container
