<!-- .slide -->

# Props and Events

<br>

![](assets/images/school/communication-components/communication_schema.png 'center')

##==##

<!--.slide: class="sfeir-basic-slide with-code inconsolata" -->

# Props (basics)

<br>

- **defineProps** macro <br/><br/>
- global function of a Vue instance <br /><br/>
- only usable inside components <br/><br/>

```html
<script lang="ts" setup>
  const props = defineProps<{ name: string; age?: number }>();
</script>
```

<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->

## Default value with defineProps

<br/><br/>

```html
<script lang="ts" setup>
  const props = witDefaults(defineProps<{ name: string }>(), { name: 'SFEIR ' });
</script>
```

<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->

## Custom validation on props

<br/><br>

```html
<script lang="ts" setup>
  const props = defineProps({
    name: {
      type: String,
      required: true,
      validator(value) {
        return value === 'SFEIR';
      },
    },
  });
</script>
```

<!-- .element: class="medium-code"-->

##==##

<!-- .slide: class="tc-multiple-columns"-->

##++## class="with-code inconsolata"

# Pass a prop to a component

<br/><br/>

```html
<template>
  <Card :person="person" />
</template>
```

<!-- .element: class="big-code"-->

##++##

##++## class="with-code inconsolata"

<br/><br/><br/><br/>

```html
<script lang="ts" setup>
  import type { Person } from '@/models/person.model';

  const props = defineProps<{ person: Person }>();
</script>
```

<!-- .element: class="big-code"-->

##++##

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->

# How to use a prop

<br/>

```html
<template>
  <h1 @click="sayHi">{{ name }}</h1>
</template>
<script lang="ts" setup>
  const props = definesProps<{ name: string }>();

  function sayHi(): void {
    alert(props.name);
  }
</script>
```

<!-- .element: class="medium-code"-->
