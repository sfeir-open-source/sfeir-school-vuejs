<!-- .slide: class="two-column-layout" -->
# Un arbre de composants
##--##
<br><br>

- Une application Vue Js est une composition de composants<br><br>
- Les enfants sont ajoutés au parent s'ils sont dans le template parent<br><br>
- Tout composant doit être déclaré dans l'objet "components"<br>

##--##
<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->
<br /><br/>

```typescript
import { defineComponent } from 'vue';
import TodoItem from '@/components/TodoItem.vue';
export default defineComponent({
  components: {
    TodoItem
  },
  setup() {},
  template: '<TodoItem/>'
});
```
<!-- .element: class="big-code"-->


##==##

<!-- .slide -->
# Créer un composant / composant global
<br><br>

- Utilisation de Vue.component(tagname, optionObject)<br><br>
- Options identiques à celles de l'instance<br><br>

##==##

<!-- .slide: class="two-column-layout" -->
# Créer un composant / composant monofichier

##--##
<br/><br/>

- Tout dans un même fichier<br/><br/>
- Possibilité d'écrire du style css <br/><br/>
- Possibilité d'écrire un template classique avec auto-completion<br/><br/>
- Vite assure la compatibilité et le check des erreurs<br/><br/><br/>

##--##

![h-900](assets/images/school/components/component-setup.png)

##==##

<!-- .slide: class="two-column-layout"-->
# Script setup: simplifions la syntax

##--##
<br/>

![h-900](assets/images/school/components/component-setup.png)

##--##
<br/>

![h-900](assets/images/school/components/script-setup.png)

##==##

<!-- .slide: class="sfeir-basic-slide"-->
# Script Setup

- Sucre syntaxique au moment de la compilation d'un SFC utilisant la composition API <br/><br/>
- Syntax plus succincte, moins de boilerplating <br/><br/>
- Meilleur performance au runtime <br /><br/>
- Meilleur completion typescript par les IDES <br/> <br/>
- Exporte par default toutes les variables et fonctions <br/><br/>

##==##

<!-- .slide: class="sfeir-basic-slide"-->
# Exemple

![center](assets/images/school/components/setup-data.png)
