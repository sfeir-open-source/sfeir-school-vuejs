<!-- .slide: class="with-code inconsolata" -->

# How to use your store in a Vue 3 application

In a Vue 3 application, we generally use the **Composition API**, and more specifically `<script setup>`.

To use our store, we just call the exported function, and then we can access all exported properties, getters, and actions. <br><br>

```vue
<script lang="ts" setup>
const userStore = useUserStore();
console.log(userStore.lastname); // display the value lastname of the user store
userStore.getUsers(); // call the getUser method of the use
</script>
```

<!-- .element: class="big-code" -->

##==##

<!--.slide: class="with-code inconsolata" -->

# How to update state

Pinia provides two methods to update state <br/><br/>

- **$patch** lets you update state
- **$reset** resets state

<br>

```vue
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
