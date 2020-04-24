<!-- .slide" -->
# Directive Custom, Pourquoi?
<br><br>

- <b>Souvant le composant se suffit à lui même</b>
- Enrichir le comportement d'un élément natif
- Enregistrement de manière local ou global
- Peut passer une simple fonction
<br><br>

![](assets/images/school/directive/directive_register.png)
![](assets/images/school/directive/directive_used.png)

##==##

<!-- .slide -->
# Le cycle de vie d'une directive
<br>

- <b>bind</b> : appelée une foie quand la directive s'attache à l'élément
- <b>inserted</b> : appelée quand la directive est insérée dans le parent
- <b>update</b> : appelée quand le composant a été mis à jour
- <b>componentUpdated</b> : appelée quand le composant et ses enfants ont été modifiés
- <b>unbind</b> : appelée quand la directive est détachée de l'élément
<br><br>

![center](assets/images/school/directive/directive_create.png)

Notes:
 - Chaque cycle de vie est une fonction prenant plusieurs paramètres

##==##

<!-- .slide" -->
# Paramètres des fonctions de cycle de vie
<br><br><br>

- <b>el</b> : élément sur lequel la directive est attachée<br><br>
- <b>binding</b> : objet avec les propriétés suivantes : name, value, expression, arg, modifiers<br><br>
- <b>vnode</b> : noeud virtuel produit par le compilateur Vue<br><br>
- <b>oldNode</b> : noeud virtuel précédent (dispo uniquement dans update, et componentUpdated)<br><br>
Notes:
 - name : correspond au nom de la directive
 - value : valeur passée à la directive => v-directive = 'nicolas' ici value = nicolas
 - expression : expression lié en tant que chaîne de caractères: => v-directive="i > 1" ici expression = i > 1
 - arg : argument passé à la directive => v-directive:foo ici arg = foo
 - modifiers : un objet contenant les modificateurs => v-directive.prevent.stop => modifiers = { prevent: true, stop: true }
