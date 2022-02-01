<!-- .slide: class="two-column-layout" -->
# Directive Custom, Pourquoi?
##--##
<br><br>

- __Souvant le composant se suffit à lui même__
- Enrichir le comportement d'un élément natif
- Enregistrement de manière local ou globals
- Peut passer une simple fonction
<br>

##--##
<br>

![h-900](assets/images/school/component-reusability/custom-directive.png)
<!-- .element: class="align-image" -->

##==##

<!-- .slide: class="two-column-layout" -->
# Le cycle de vie d'une directive
##--##
<br><br>

- __created__ 
- __beforeMount__ 
- __mounted__ 
- __beforeUpdate__ 
- __updated__ 
- __beforeUnmount__ 
- __unmounted__ 
<br>

##--##
<br>

![](assets/images/school/component-reusability/custom-directive-create.png)

Notes:
 - Chaque cycle de vie est une fonction prenant plusieurs paramètres

##==##

<!-- .slide" -->
# Paramètres des fonctions de cycle de vie
<br><br>

- __el__ : élément sur lequel la directive est attachée<br><br>
- __binding__ : objet avec les propriétés suivantes : name, value, expression, arg, modifiers<br><br>
- __vnode__ : noeud virtuel produit par le compilateur Vue<br><br>
- __prevNode__ : noeud virtuel précédent (dispo uniquement dans beforeUpdate, et updated)<br><br>
Notes:
 - name : correspond au nom de la directive
 - value : valeur passée à la directive => v-directive = 'nicolas' ici value = nicolas
 - expression : expression lié en tant que chaîne de caractères: => v-directive="i > 1" ici expression = i > 1
 - arg : argument passé à la directive => v-directive:foo ici arg = foo
 - modifiers : un objet contenant les modificateurs => v-directive.prevent.stop => modifiers = { prevent: true, stop: true }
