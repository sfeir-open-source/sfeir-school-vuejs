<!-- .slide: class="sfeir-basic-slide"-->
# Qu'est ce que Vue JS ?
<br/><br/>

- Libraire Web permettant de réaliser des applications rapidement <br/><br/>
- Deux modes de fonctionnement:
    - option API
    - composition API
    - Possibilité de mixer les deux

##==##

<!-- .slide: class="sfeir-basic-slide"-->
# Pourquoi utiliser l'option API ?

- Rétrocompatible avec Vue 2 <br/><br/>
- Pour de petite à moyenne application <br/><br/>
- Pour des composant stateless (sans état)

##==##

<!-- .slide: class="sfeir-basic-slide"-->
# Pourquoi utiliser la composition API ?

- Full compatible avec la version 2.7 de Vue <br/><br/>
- Pour des grandes applications <br/><br/>
- Pour des composant statefull (avec état) <br/><br/>
- Pour combler des lacunes de réutilisation de code

<br/><br/>

Cette formation porte exclusivement sur la composition API 
<!-- .element: class="center bold important"-->



##==##
<!-- .slide  -->
# Composition d'un simple Hello World
<br>
3 composantes : <br><br>

- Le fichier source de Vue Js <br><br>
- Un template <br><br>
- Un script de démarrage

Notes:
 - le fichier source de Vue js peut provenir de différentes sources Bower, CDN (google cloud storage source), npm (le plus commun)
 - Il existe deux types de sources (standalone = inclut le template compiler) et runtime (utilise uniquement les fonctions de render)

##==##

<!-- .slide: class="two-column-layout" -->
# Setup Minimal
##--##
<!-- .slide: class="with-code inconsolata"-->
```html
<!DOCTYPE html>
<html lang="en">
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```
<!-- .element: class="big-code"-->

##--##
<!-- .slide: class="with-code inconsolata"-->
```typescript
import { createApp } from 'vue';

createApp({
  setup() {
    const name = 'SFEIR';
    return { name };
  }
}).mount('#app');
```
<!-- .element: class="big-code"-->

<br />

```html
<span>Hello {{ name }}</span>
```
<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="sfeir-sfeir-basic-slide"-->
## Que se passe t'il exactement ?

<br/><br/>

- **createApp**: permet de créer une nouvelle instance de Vue <br/><br/>
- **setup**: hooks permettant d'initialiser un composant avec la composition API <br/><br/>
- **mount**: permet de monter l'instance de Vue dans un container



