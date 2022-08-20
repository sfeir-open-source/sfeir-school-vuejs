<!-- .slide: class="with-code inconsolata" -->
# Comment utiliser son store dans une application Vue 3

Généralement dans une application Vue 3 on utilise la __composition api__ et plus particulièrement le script setup


Pour appeler notre store, il nous suffit d'appeler la fonction exportée et ainsi pouvoir acceder à toutes les propriétés, getters et actions exportés <br><br>



```html
<script lang="ts" setup>
 const userStore = useUserStore();
console.log(userStore.lastname); // display the value lastname of the user store
userStore.getUsers(); // call the getUser method of the use
</script>
```
<!-- .element: class="big-code" -->

##==##

<!--.slide: class="with-code inconsolata" -->
# Comment modifier l'état de son state

Pinia offre deux méthodes pour modifier l'état de son state <br/><br/>

- __$patch__ permet de modifier son state
- __$reset__ permet de réinitialiser son state

<br>

```html
<script lang="ts" setup>
const userStore = useUserStore();
userStore.$patch({ name: 'Sfeir'})
userStore.$patch((state) => {
state.name = 'Sfeir Luxembourg',
});
userStore.$reset();
</script>
```
<!-- .element: class="big-code" -->
