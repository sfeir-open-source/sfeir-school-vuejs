<!-- .slide -->
# Pinia JS, le nouveau store
## Mais qu'apporte de plus Pinia JS ?

<br><br>

- Plus de mutations<br><br>
- Écrit en typescript par défaut<br><br>
- Store ajouté dynamiquement par défaut<br><br>
- Plus de namespace, plus de "nested"<br><br>
- Plus de magic string :)<br><br>

##==##

<!-- .slide: class="with-code inconsolata"-->
# Comment installer Pinia dans son application Vue

Pinia est sur npm, vous pouvez donc faire:

```bash
npm install --save pinia
```
<!-- .element: class="big-code" -->

<br>

Importer pinia dans votre projet <br/>



```typescript
import { createPinia } from 'pinia'
app.use(createPinia())
```
<!-- .element: class="big-code"-->

<br>


##==##

<!-- .slide: class="with-code inconsolata" -->
# Définir un store avec Pinia est simple

```typescript
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    name: 'Sfeir',
    lastname: 'Sfeir',
  })
})
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->
# Et maintenant, comment créer des actions et getters ?
Il est tout aussi simple de créer des actions et des getters avec Pinia:
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

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->
## Définir un store avec une fonction de setup

**Pinia** nous permet de créer une fonction de setup pour définir un Store <br/><br/>

```typescript
export const useUser = defineStore('user', () => {
  const user = reactive({ name: 'John', age: 29 });
  const updateUserName = (name: string) => (user.name = name );
  return {
    user,
    updateUserName
  }
});
```
<!-- .element: class="big-code"-->


