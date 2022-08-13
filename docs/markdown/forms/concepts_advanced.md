<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->
# Sous le capot de v-model

```html
<input v-model="searchText" />
```
<!-- .element: class="big-code"-->

<br/><br/>

Lorsque l'on utilise la directive **v-model**, le compilateur template va comprendre le template de la manière suivante:

<br/><br/>

```html
<input :value="searchText" @input="searchText = $event.target.value" />
```
<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->
## Étendre le v-model à des composant custom

```html
<CustomInput v-model="searchText" />
```
<!-- .element: class="big-code"-->

<br/><br/>

Sur un composant le compilateur du template va comprendre le template de la manière suivante

<br/><br/>

```html
<CustomInput :modelValue="searchText" @update:modelValue="$event => searchText = $event"/>
```
<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->
# Zoom sur le composant CustomInput
<br/><br/>

```html
<template>
  <input :value="inputValue" @input="updateInputValue" />
</template>
<script lang="ts" setup>
const props = defineProps<{ modelValue: string  }>();
const emit = defineEmits<{ (e: 'update:modelValue', searchText: string ): void }>;
const inputValue = ref(props.modelValue);
function updateInputValue(event: HTMLInputElement): void {
  emit('update:modelValue', event.target.value);
}
</script>
```
<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="two-column-layout"-->
# Vision Globale d'un custom component avec v-model
##--##
<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->
<br/><br/>

```html
<CustomInput v-model="searchText" />
```
<!-- .element: class="big-code"-->
##--##
<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->
<br/><br/>

```html
<template>
  <input :value="inputValue" @input="updateInputValue" />
</template>
<script lang="ts" setup>
const props = defineProps<{ modelValue: string  }>();
const emit = defineEmits<{ (e: 'update:modelValue', searchText: string ): void }>;
const inputValue = ref(props.modelValue);
function updateInputValue(event: HTMLInputElement): void {
  emit('update:modelValue', event.target.value);
}
</script>
```
<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->
# Est-il possible de changer le nom de la prop modelValue ?

**OUI** <br/><br/>

```html
<CustomInput v-model:search="search" />
```
<!--- .element: class="big-code" -->
<br/><br/>

```html
<script setup lang="ts">
const props = defineProps<{ search: string  }>();
const emit = defineEmits<{ (e: 'update:search', searchText: string ): void }>;
</script>
```
<!-- .element: class="big-code"-->
