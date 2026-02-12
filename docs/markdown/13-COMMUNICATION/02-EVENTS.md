<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->

# Events

- **defineEmits** macro <br/><br/>
- global function of a Vue instance <br /><br/>
- only usable inside a component instance <br/><br/>

```html
<script lang="ts" setup>
  const emit = defineEmits<{ (e: 'deletePeople', id: string): void }>();
  function removePeople(id: string): void {
    emit('deletePeople', id);
  }
</script>
```

<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="tc-multiple-columns"-->

##++## class="with-code inconsolata"

# Listen to an event

<br/><br/>

```html
<template>
  <Card @delete-people="removeTodoItem" />
</template>
```

<!-- .element: class="big-code"-->

##++##

##++## class="with-code inconsolata"

<br/><br/><br/><br/>

```html
<script lang="ts" setup>
  const emit = defineEmits<{ (e: 'deletePeople', id: string): void }>();
  function removePeople(id: string): void {
    emit('deletePeople', id);
  }
</script>
```

<!-- .element: class="big-code"-->

##++##
