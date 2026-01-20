<!-- .slide -->

# Pinia, the new store

## But what does Pinia add?

<br><br>

- No more mutations<br><br>
- Written in TypeScript by default<br><br>
- Stores added dynamically by default<br><br>
- No more namespaces, no more "nested" modules<br><br>
- No more magic strings :)<br><br>

##==##

<!-- .slide: class="with-code inconsolata"-->

# How to install Pinia in your Vue application

Pinia is on npm, so you can run:

```bash
npm install --save pinia
```

<!-- .element: class="big-code" -->

<br>

Import Pinia in your project <br/>

```typescript
import { createPinia } from 'pinia';
app.use(createPinia());
```

<!-- .element: class="big-code"-->

<br>

##==##

<!-- .slide: class="with-code inconsolata" -->

# Defining a store with Pinia is simple

```typescript
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    name: 'Sfeir',
    lastname: 'Sfeir',
  }),
});
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->

# And now, how do you create actions and getters?

It's just as easy to create actions and getters with Pinia:
<br><br>

```typescript
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    name: 'Sfeir',
    lastname: 'Sfeir',
  }),
  getters: {
    fullName: (state) => `${state.name} ${state.lastname}`,
  },
  actions: {
    setName:(name) {
      this.name = name;
    }
  }
})
```

<!-- .element: class="small-code"-->

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->

## Define a store with a setup function

**Pinia** allows us to create a setup function to define a store <br/><br/>

```typescript
export const useUser = defineStore('user', () => {
  const user = reactive({ name: 'John', age: 29 });
  const updateUserName = (name: string) => (user.name = name);
  return {
    user,
    updateUserName,
  };
});
```

<!-- .element: class="big-code"-->
