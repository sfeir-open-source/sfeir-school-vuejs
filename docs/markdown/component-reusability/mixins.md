<!-- .slide: class="two-column-layout" -->
# Mixins
##--##
<br><br>

- permet de créer des fonctionalités réutilisables
- peut contenir toutes les options valides pour un composant<br><br>

- Conseillé d'utiliser la Composition API pour partager des méthodes communes

##--##
<br>

![h-700](assets/images/school/component-reusability/mixin-presentation.png)
<!-- .element: class="align-image" -->

##==##

<!-- .slide: class="two-column-layout" -->
# Mixins - fusion des options
##--##
<br><br>

__data__ du composant __prioritaire__ sur le mixin

##--##
<br>

![h-900](assets/images/school/component-reusability/mixin-option-merge-data.png)
<!-- .element: class="align-image" -->

##==##

<!-- .slide: class="two-column-layout" -->
# Mixins - fusion des options
##--##
<br><br>

__hook__ du mixin appelés __avant__ ceux du composant 

##--##
<br>

![h-900](assets/images/school/component-reusability/mixin-option-merge-hook.png)
<!-- .element: class="align-image" -->

##==##

<!-- .slide: class="two-column-layout" -->
# Mixins - fusion des options
##--##
<br><br>

__methods__, __components__ et __directives__ du composant __prioritaires sur__ le mixin

##--##
<br>

![h-900](assets/images/school/component-reusability/mixin-option-merge-other.png)
<!-- .element: class="align-image" -->
