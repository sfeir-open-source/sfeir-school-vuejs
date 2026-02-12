<!-- .slide -->

# Usage concept

A filter lets you <b>transform</b> data for display

<!-- .element: class="full-center" -->

##==##

<!-- .slide" -->

# Example

<br><br>

![](assets/images/school/filters/exemple_filter_date.png 'full-height')

<!-- .element: class="full-center" -->

##==##

<!-- .slide: class="sfeir-basic-slide" -->

# Example

<br><br>

![](assets/images/school/filters/exemple_filter_uppercase.png 'full-height')

<!-- .element: class="full-center" -->

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata" -->

# Syntax

- computed <br/><br/>
- a function if you want to pass a parameter <br/><br/>

```vue
<template>{{ longName }}</template>
<script lang="ts" setup>
import { computed } from 'vue';
const firstname = ref('SFEIR');
const lastname = ref('LUXEMBOURG');
const longName = computed(() => `${firstname.value} ${lastname.value}`);
</script>
```

<!-- .element: class="big-code"-->
