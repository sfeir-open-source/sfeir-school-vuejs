<!-- .slide: class="tc-multiple-columns" -->

##++##

# The instance

<br/><br/>

A Vue app instance is created by calling a function with a configuration object: <br/><br/>

- a Vue component <br/><br/>
- a Vue configuration object (Options API or Composition API) <br/><br/>
  ##++##

##++## class="with-code inconsolata"

<br/><br/>

```typescript
createApp(APP);
```

<!-- .element: class="big-code"-->

<br/><br/>

```typescript
createApp({ setup( return { name: 'SFEIR'})})
```

<!-- .element: class="big-code"-->

<br/><br/>

```typescript
createApp({
  data() {
    return { name: 'SFEIR' };
  },
});
```

<!-- .element: class="big-code"-->

##++##

##==##

<!-- .slide: class="tc-multiple-columns" -->

##++##

# Lifecycle hooks

<br><br><br>

- Different lifecycle hooks
  - setup
  - onMounted
  - onUnmounted<br><br>
- Functions that take a callback and are used directly inside `setup`
  ##++##

##++## class="with-code inconsolata"

<br><br><br>

```typescript
createApp({
  setup() {
    onMounted(() => {
      console.log('Here on mounted hook lifecycle');
    });
  },
});
```

<!-- .element: class="big-code" -->

##++##

##==##

<!-- .slide: class="tc-multiple-columns" -->

##++##

# Reactive state

<br><br><br>

- The variables Vue tracks to render the view <br/><br/>
- `ref` / `reactive` (can also be used outside of a Vue instance)<br/><br/>
- Variables are JavaScript proxies
  ##++##

##++## class="with-code inconsolata"

<br/><br/><br/>

```typescript
createApp({
  setup() {
    const name = ref('SFEIR');
    const user = reactive({
      name: 'SFEIR',
      country: 'LUXEMBOURG',
    });
  },
});
```

<!-- .element: class="big-code"-->

##++##

##==##

<!-- .slide: class="tc-multiple-columns" -->

##++##

# Computed properties

<br/>

- The `computed` function takes a callback <br/><br/>
- Hides transformation logic (filtering) <br/><br/>
- Usable in the template <br/><br/>
- Re-evaluated when a reactive dependency changes <br/><br/>
- Getter/Setter logic
  ##++##

##++## class="with-code inconsolata"

<br/><br/><br/><br/>

```typescript
createApp({
  setup() {
    const name = ref('SFEIR');
    const country = ref('LUXEMBOURG');
    const company = computed(() => `${name.value} ${country.value}`);
    return { company };
  },
});
```

<!-- .element: class="medium-code"-->

##++##

##==##

<!-- .slide: class="tc-multiple-columns" -->

##++##

# Methods

<br><br><br><br>

- **functions** defined in `setup` (must be returned) <br/><br/>
- Usable in the template
  ##++##

##++## class="with-code inconsolata"

<br/><br/><br/><br/>

```typescript
createApp({
  setup() {
    function showAlert(): void {
      alert('You will leave the page');
    }
    return {
      showAlert,
    };
  },
});
```

<!-- .element: class="medium-code" -->

##++##

##==##

<!-- .slide: class="tc-multiple-columns" -->

##++##

# Watchers

<br/><br/><br/>

- Implemented directly in `setup` <br/><br/>
- Async operations <br/><br/>
- Prefer computed properties when possible
  ##++##

##++## class="with-code inconsolata"

<br/><br/><br/><br/><br/>

```typescript
createApp({
  setup() {
    const id = ref(1234);
    watch(id, () => {
      fetch('http://random-user/com/user')
        .then(response => response.json())
        .then(console.log);
    });
  },
});
```

<!-- .element: class="medium-code"-->

##++##

##==##

<!-- .slide -->

# Computed vs watcher vs methods

<br><br>

- A computed property is recalculated only when its dependencies change<br/><br/>
- A method is called whenever the template re-renders<br/><br/>
- A watcher is preferred for more complex (async) actions => calling an API
