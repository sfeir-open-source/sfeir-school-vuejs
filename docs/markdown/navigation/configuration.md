<!-- .slide: class="sfeir-basic-slide" -->
# Configuration de base du routing
<br><br><br>
<ul>
    <li><strong>Path</strong> : l'url de la route, peut contenir des segments dynamiques : /people/:id</strong></li>
    <li><strong>Name</strong> : le nom de la route</li>
    <li><strong>Component</strong> : le composant associé à la route</li>
    <li><strong>Redirect</strong> : path ou name de la page vers laquelle rediriger</li>
    <li><strong>alias</strong> : redirection sans changement d'url</li>
</ul>

##==##

<!-- .slide: class="sfeir-basic-slide -->
# Configuration avancée du routing
<br><br><br>
<ul>
    <li><strong>components</strong> : objet avec le nom de l’emplacement dans lequel le composant doit s’afficher</li>
    <li><strong>meta</strong> : données associées à la route</li>
    <li><strong>children</strong> : un tableau de définitions des sous-routes</li>
</ul>
Notes:
 - https://router.vuejs.org/guide/essentials/named-views.html#nested-named-views

 ##==##

 <!-- .slide: class="sfeir-basic-slide -->
# Guards
<br><br>
<ul>
    <li>Intervenir avant ou après un changement de route</li>
    <li>Global sur le router (beforeEach / afterEach)</li>
    <li>Au niveau d'une route  (beforeEnter)</li>
    <li>Au niveau d'un composant (beforeRouteEnter, beforeRouteUpdate, beforeRouteLeave)</li>
    <li>Prend 3 arguments :<br>
        - to (route cible)<br>
        - from (route précédente)<br>
        - next (function de continuation)<br>
    </li>
</ul>
Notes:
 - https://router.vuejs.org/guide/advanced/navigation-guards.html#in-component-guards
 - next peut prendre plusieurs paramètres:
    - false
    - path (string)
    - redirectionObject
    - error
    - fonction de callback

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Stratégies de Navigation
<br><br>
<span>2 stratégies de navigation :</span>
<ul>
    <li>Hash :<br>
        - stratégie par défaut (localhost/#/people)
    </li><br>
    <li>Path et push state :<br>
        - localhost/people<br>
        - mode : history dans la config du router<br>
        - implique une règle côté serveur<br>
    </li>
</ul>
