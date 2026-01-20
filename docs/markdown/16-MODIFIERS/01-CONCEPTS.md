<!-- .slide: class="sfeir-basic-slide with-code inconsolata" -->

# Modifiers: concepts and overview

- Allows customizing a directive <br/><br/>
- Can be chained <br/><br/>
- Placed directly after a `.`
  <br/><br/>

```html
<template>
  <form @submit.prevent="submitForm">
    <input v-model.trim="surname" />
  </form>
</template>
```

<!-- .element: class="big-code"-->

##==##

<!-- .slide -->

# Event modifiers

<br>

- The most common event modifiers are:
  - .stop
  - .prevent
  - .left, .right
  - .middle<br><br>

- You can find the full list here: https://vuejs.org/guide/essentials/event-handling.html#event-modifiers

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata" -->

# Keyboard modifiers

<br>

- Implemented like this: **.(keyCode | keyAlias)**
- You can define aliases with the following syntax: **Vue.config.keyCodes.f1 = 112**
  <br/><br/>

```html
<template>
  <input type="text" v-on:keyup.13="submit" />
  <input type="text" v-on:keyup.enter="submit" />
  <input type="text" @keyup.center="submit" />
</template>
```

<!-- .element: class="big-code"-->

Notes:

- There are many keyAliases: .enter, .tab, .delete, .space, .up ....
- Documentation: https://vuejs.org/v2/guide/events.html#Key-Modifiers
