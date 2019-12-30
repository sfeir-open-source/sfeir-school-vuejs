<!-- .slide: class="sfeir-basic-slide" -->
# Directive Custom, Pourquoi?
<ul>
    <li><strong>Souvent le composant se suffit à lui même</strong></li>
    <li>Enrichir le comportement d'un élément natif</li>
    <li>Enregistrement de manière locale ou globale</li>
    <li>Peut passer une simple fonction</li>
</ul>
<div class="flex-row">
    <img alt="" src="assets/images/school/directive/directive_register.png">
    <img alt="" src="assets/images/school/directive/directive_used.png">
</div>

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Le cycle de vie d'une directive
<ul>
    <li><strong>bind</strong> : appelée une seule fois quand la directive est attachée à l’élément</li>
    <li><strong>inserted</strong> : appelée quand l’élément lié a été inséré dans son nœud parent</li>
    <li><strong>update</strong> : appelée quand le composant a été mis à jour </li>
    <li><strong>componentUpdated</strong> : appelée quand le composant et ses enfants ont été modifiés</li>
    <li><strong>unbind</strong> : appelée une seule fois quand la directive est détachée à l’élément</li>
</ul>
<br><br>
<img class="center" src="assets/images/school/directive/directive_create.png">
Notes:
 - Chaque cycle de vie est une fonction prenant plusieurs paramètres

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Paramètres des fonctions de cycle de vie
<br><br>
<ul>
    <li><strong>el</strong> : élément sur lequel la directive est attachée</li>
    <li><strong>binding</strong> : objet avec les propriétés suivantes : name, value, expression, arg, modifiers</li>
    <li><strong>vnode</strong> : noeud virtuel produit par le compilateur Vue</li>
    <li><strong>oldNode</strong> : noeud virtuel précédent (dispo uniquement dans update, et componentUpdated)</li>
</ul>
Notes:
 - name : correspond au nom de la directive
 - value : valeur passée à la directive => v-directive = 'nicolas' ici value = nicolas
 - expression : expression lié en tant que chaîne de caractères: => v-directive="i > 1" ici expression = i > 1
 - arg : argument passé à la directive => v-directive:foo ici arg = foo
 - modifiers : un objet contenant les modificateurs => v-directive.prevent.stop => modifiers = { prevent: true, stop: true }
