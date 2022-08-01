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
- **mount**: permet d'insérer de monter l'instance de Vue dans un container



