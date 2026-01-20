<!-- .slide: class="sfeir-basic-slide"-->

# The `setup` function

- Setup function of a Vue component <br/></br>
- Called before any lifecycle hook <br></br>
- Takes two parameters:
  - props (component props)
  - context (Vue component context)

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->

# Declare reactive variables with `ref`

- **ref** --> creates a simple reactive value <br/><br/>
- Access the ref value via the **value** property <br/></br>
- You can declare a ref outside of `setup` <br/><br/><br/>

```typescript
const name = ref('SFEIR');
const agence: Ref<string> = ref('Luxembourg');
const trainingDate = ref<Date>(new Date());
```

<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->

# Declare reactive objects with `reactive`

- **reactive** --> creates a reactive object (all properties become reactive)<br/><br/>
- Access each property value using dot notation <br/><br/>
- You can declare a reactive object outside of `setup` <br/><br/>
- **Warning**: destructuring a reactive object makes it lose reactivity <br/><br/><br/>

```typescript
const company = reactive({ name: 'SFEIR', location: 'LUXEMBOURG' });
const user = reactive<{ name: string; username: string }>({
  name: 'John',
  age: 29,
});
```

<!-- .element: class="medium-code"-->

##==##

<!-- .slide: class="sfeir-sfeir-basic-slide with-code"-->

# Reactive utilities for everyday use

- **toRefs**: lets you destructure a reactive object<br/><br/>
- **toRaw**: converts a reactive object to a plain object<br/><br/>
- **unRef**: unwraps a ref (removes the reactive wrapper) <br/><br/><br/>

```typescript
const age: number = unRef(ref(29));
const { name, location } = toRefs(reactive({ name: 'SFEIR', location: 'LUXEMBOURG' }));
console.log(name.value); // SFEIR
const company = toRaw(reactive({ name: 'SFEIR', location: 'LUXEMBOURG' }));
console.log(company); // { name: 'SFEIR', location: 'LUXEMBOURG'}
```

<!-- .element: class="medium-code"-->

##==##

<!-- .slide: class="sfeir-basic-slide with-code"-->

# Deep dive into `ref` and `reactive`

- `ref` and `reactive` return proxies. <br/><br/><br/>

```typescript
function ref(value) {
  return {
    get value() {
      track(refObject, 'value');
      return value;
    },
    set value(newValue) {
      value = newValue;
      trigger(refObject, 'value');
    },
  };
}
```

<!-- .element: class="medium-code"-->
