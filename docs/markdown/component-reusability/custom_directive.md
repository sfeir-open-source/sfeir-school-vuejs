<!-- .slide" -->
# Directive Custom, Pourquoi?

- __Souvant le composant se suffit à lui même__
- Enrichir le comportement d'un élément natif
- Enregistrement de manière local ou global
- Peut passer une simple fonction
<br><br>

![](assets/images/school/directive/directive_register.png)
![](assets/images/school/directive/directive_used.png)

##==##

<!-- .slide -->
# Le cycle de vie d'une directive

- __created__ : appelé avant que les attributs ou les écouteurs d'événements du composant ne soient appliqués
- __beforeMount__ : appelé avant que le composant parent soit monté
- __mounted__ : appelé avant que le composant parent de l'élément lié ne soit monté
- __beforeUpdate__ : appelée avant que le composant ait été mis à jour
- __updated__ : appelée quand le composant et ses enfants ont été modifiés
- __beforeUnmount__ : appelé avant que le composant parent ne soit démonté
- __unmounted__ : appelé quand la directive est détachée et que le composant parent est démonté
<br>


![center](assets/images/school/directive/directive_create.png)

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
