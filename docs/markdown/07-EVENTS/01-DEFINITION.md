<!-- .slide: class="sfeir-basic-slide with-code inconsolata" -->

# Event definition

- Event name prefixed with **v:on** or **@** (shorthand notation)
- The event usually references a function defined in the "methods" property of your component instance
- Access event data via the <strong>$event</strong> parameter <br/><br/>

```html
<template>
  <button type="button" @click="showAlert">Click Me</button>
</template>
<script lang="ts" setup>
  function showAlert(event: MouseEvent): void {
    alert(event);
  }
</script>
```

<!-- .element: class="medium-code"-->
