<!-- .slide: class="sfeir-basic-slide" -->
# Directive Custom, Pourquoi?

- __Souvant le composant se suffit à lui même__
- Enrichir le comportement d'un élément natif
- Enregistrement de manière local ou global
- Peut passer une simple fonction


##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Le cycle de vie d'une directive

- __created__: appelé une fois avant que les attributs soit liés à la directive
- __beforeMount__: appelé avant que l'élément soit inséré dans le document
- __mounted__: appelé quand l'élément parent et tous ses enfants soit insérés dans le document
- __beforeUpdate__: appelé avant que le composant parent soit modifié
- __updated__: appelé après que le composant parent et ses enfants soit modifiées
- __beforeUnmount__: appelé avant que le composant parent soit détruit
- __unmounted__: appelé après que le composant parent soit détruit
<br><br>

Notes:
 - Chaque cycle de vie est une fonction prenant plusieurs paramètres

##==##

<!-- .slide" -->
# Paramètres des fonctions de cycle de vie
<br><br>

- __el__ : élément sur lequel la directive est attachée<br><br>
- __binding__ : objet avec les propriétés suivantes : name, value, expression, arg, modifiers<br><br>
- __vnode__ : noeud virtuel produit par le compilateur Vue<br><br>
- __oldNode__ : noeud virtuel précédent (dispo uniquement dans update, et componentUpdated)<br><br>
Notes:
 - name : correspond au nom de la directive
 - value : valeur passée à la directive => v-directive = 'nicolas' ici value = nicolas
 - expression : expression lié en tant que chaîne de caractères: => v-directive="i > 1" ici expression = i > 1
 - arg : argument passé à la directive => v-directive:foo ici arg = foo
 - modifiers : un objet contenant les modificateurs => v-directive.prevent.stop => modifiers = { prevent: true, stop: true }

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->
## Écrire une directive
<br/><br/><br/>

```typescript
export const vFocus = {
  mounted(el: HMLInputElement): void {
    el.focus();
  }
}
```
<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="sfeir-basic-slide"-->
# Comment utiliser ses directives
<br/><br/>

- de manière global <br/><br/>
- de manière spécifique

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->
# Enregistrer sa directive de manière globale
<br/><br/>

```typescript
import { vFocus } from '@/directives/focus';
import { createApp } from 'vue';
import App from './app.vue';

createApp(App).directive('v-focus', vFocus).mount('#app');
```
<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->
## Enregistrer sa directive de manière spécifique
<br/><br/>

```html
<script lang="ts" setup>
import { vFocus } from '@/directives/focus';
</script>
```
<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="sfeir-basic-slide with-code"-->
## Utiliser sa directive
<br/><br/>

```html
<input type="text" v-focus />
```
<!-- .element: class="big-code"-->
