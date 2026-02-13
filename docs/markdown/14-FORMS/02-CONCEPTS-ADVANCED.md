<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->

# Under the hood of v-model

```html
<input v-model="searchText" />
```

<!-- .element: class="big-code"-->

<br/><br/>

When you use the **v-model** directive, the template compiler understands it like this:

<br/><br/>

```html
<input :value="searchText" @input="searchText = $event.target.value" />
```

<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->

## Extend v-model to custom components

```html
<CustomInput v-model="searchText" />
```

<!-- .element: class="big-code"-->

<br/><br/>

On a component, the template compiler understands it like this

<br/><br/>

```html
<CustomInput :modelValue="searchText" @update:modelValue="$event => searchText = $event" />
```

<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->

# Focus on the CustomInput component

<br/><br/>

```vue
<template>
  <input :value="inputValue" @input="updateInputValue" />
</template>

<script lang="ts" setup>
const props = defineProps<{ modelValue: string }>();
const emit = defineEmits<{ (e: 'update:modelValue', searchText: string): void }>;
const inputValue = ref(props.modelValue);
function updateInputValue(event: HTMLInputElement): void {
  emit('update:modelValue', event.target.value);
}
</script>
```

<!-- .element: class="medium-code"-->

##==##

<!-- .slide: class="tc-multiple-columns"-->

##++## class="with-code inconsolata"

# Overall view of a custom component with v-model

<br/><br/>

```vue
<CustomInput v-model="searchText" />
```

<!-- .element: class="medium-code"-->

##++##

##++## class="with-code inconsolata"

<br/><br/><br/><br/>

```vue
<template>
  <input :value="inputValue" @input="updateInputValue" />
</template>
<script lang="ts" setup>
const props = defineProps<{ modelValue: string }>();
const emit = defineEmits<{ (e: 'update:modelValue', searchText: string): void }>;
const inputValue = ref(props.modelValue);
function updateInputValue(event: HTMLInputElement): void {
  emit('update:modelValue', event.target.value);
}
</script>
```

<!-- .element: class="medium-code"-->

##++##

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->

# Is it possible to change the name of the `modelValue` prop?

**YES** <br/><br/>

```html
<CustomInput v-model:search="search" />
```

<!--- .element: class="big-code" -->

<br/><br/>

```html
<script setup lang="ts">
  const props = defineProps<{ search: string }>();
  const emit = defineEmits<{ (e: 'update:search', searchText: string): void }>;
</script>
```

<!-- .element: class="big-code"-->
