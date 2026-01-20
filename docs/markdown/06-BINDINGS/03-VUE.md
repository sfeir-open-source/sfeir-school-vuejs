<!-- .slide: class="sfeir-basic-slide with-code inconsolata" -->

# Data Binding with Vue

<br>

```html
<div>
  Bonjour <span>{{ myName }}</span>
  <input type="text" name="name" v-model="myName" />
</div>
```

<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="with-code inconsolata " -->

# Syntax overview

**Interpolation syntax**<br>

```html
<span>{{ name }}</span>
```

<!-- .element: class="medium-code" -->

<br><br>

**Property binding syntax**<br>

```html
<button v-bind:disabled="!name">Sign-In</button>
```

<!-- .element: class="medium-code" -->

<br><br>

**Event syntax**<br>

```html
<button v-on:click="signIn()" type="submit"></button>
```

<!-- .element: class="medium-code" -->

##==##

<!-- .slide -->

# Interpolation and expressions

<br>

- Interpolation:
  - Uses double curly braces <br><br>
- Expression:
  - Only within the current component
  - JavaScript => but only a single expression

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->

# Properties binding

<br>

```html
<img v-bind:src="dynamicUrl" alt="person-photo" with="100" height="100" />
<TodoItem v-bind:todo="todo" />
<TodoItem :todo="todo" />
<TodoItem v-bind="{ todo: todo }" />
```

<!-- .element: class="big-code"-->

Notes:

- Binding is done on a property
- The target of property binding is an element attribute or a component prop

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata" -->

# Event Binding

<br>

```html
<button v-on:click="showAlert" type="button">Click me</button>
<TodoItem v-on:delete="removeTodoItem($event)" />
<TodoItem @delete="removeTodoItem" />
```

<!-- .element: class="big-code"-->

Notes:

- Prefer using kebab-case for custom event names
