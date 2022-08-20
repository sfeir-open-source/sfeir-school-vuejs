<!-- .slide -->
# Events and Props
<br>

![center](assets/images/school/communication-components/communication_schema.png)

##==##

<!--.slide: class="sfeir-basic-slide with-code inconsolata" -->
# Les props (basique)
<br>

- méthode **defineProps** <br/><br/>
- fonction global d'une instance de vue <br /><br/>
- utilisable uniquement dans le composants <br/><br/>

```html
<script lang="ts" setup>
const props = defineProps<{ name: string, age?: number}>();
</script>
```
<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->
## Valeur par défaut avec defineProps
<br/><br/>

```html
<script lang="ts" setup>
const props = witDefaults(defineProps<{ name: string }>(), { name: 'SFEIR '})
</script>
```
<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->
## Validation Custom  sur les props 
<br/><br>

```html
<script lang="ts" setup>
const props = defineProps({ 
  name: {
    type: String,
    required: true,
    validator(value) {
      return value === 'SFEIR'
    }
  }
});
</script>
```
<!-- .element: class="medium-code"-->

##==##

<!-- .slide: class="two-column-layout"-->
# Passer une props à un composant
##--##
<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->
<br/><br/>

```html
<template>
 <Card :person="person" />
</template>
```
<!-- .element: class="big-code"-->
##--##
<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->
<br/><br/>
```html
<script lang="ts" setup>
import type { Person } from '@/models/person.model'
const props = defineProps<{ person: Person }>();
</script>
```
<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->
# Comment utiliser sa props
<br/>

```html
<template>
  <h1 @click="sayHi">{{ name }} </h1>
</template>
<script lang="ts" setup>
const props = definesProps<{ name: string }>();
function sayHi(): void {
  alert(props.name)
}
</script>
```
<!-- .element: class="medium-code"-->

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->
# Events

- méthode **defineEmits** <br/><br/>
- fonction global d'une instance de vue <br /><br/>
- uniquement utilisable dans l'instance d'un composant <br/><br/>

```html
<script lang="ts" setup>
const emit = defineEmits<{ (e: 'deletePeople', id: string): void}>();
function removePeople(id: string): void {
  emit('deletePeople', id);
}
</script>
```
<!-- .element: class="big-code"-->


##==##

<!-- .slide: class="two-column-layout"-->
# Catcher un event
##--##
<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->
```html
<template>
  <Card @delete-people="removeTodoItem" />
</template>
```
<!-- .element: class="big-code"-->
##--##
<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->
```html
<script lang="ts" setup>
const emit = defineEmits<{
(e: 'deletePeople', id: string): void
}>();
function removePeople(id: string): void {
  emit('deletePeople', id);
}
</script>
```
<!-- .element: class="big-code"-->


